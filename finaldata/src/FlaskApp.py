from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import logging
import traceback

# Logging config
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

FlaskApp = Flask(__name__)
CORS(FlaskApp)  # Enable CORS for frontend

# PostgreSQL database config
DB_CONFIG = {
    'dbname': 'general_regulations_keywords',
    'user': 'postgres',
    'password': 'sgdp25',
    'host': 'localhost',
    'port': 5432
}

def connect_db():
    return psycopg2.connect(**DB_CONFIG)

@FlaskApp.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok"})

@FlaskApp.route('/api/categories', methods=['GET'])
def get_categories():
    try:
        connection = connect_db()
        cursor = connection.cursor()
        cursor.execute("SELECT DISTINCT category FROM regulations;")
        categories = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return jsonify(categories)
    except Exception as e:
        logger.error(f"Error fetching categories: {e}")
        return jsonify({"error": str(e)}), 500

@FlaskApp.route('/api/subcategories', methods=['GET'])
def get_subcategories():
    category = request.args.get('category')
    if not category:
        return jsonify({"error": "Category is required"}), 400

    try:
        connection = connect_db()
        cursor = connection.cursor()
        cursor.execute("SELECT DISTINCT sub_category FROM regulations WHERE category = %s;", (category,))
        subcategories = [row[0] for row in cursor.fetchall()]
        cursor.close()
        connection.close()
        return jsonify(subcategories)
    except Exception as e:
        logger.error(f"Error fetching subcategories: {e}")
        return jsonify({"error": str(e)}), 500

@FlaskApp.route('/api/regulation-filter', methods=['GET'])
def regulation_filter():
    try:
        category = request.args.get('category')
        sub_category = request.args.get('sub_category')

        connection = connect_db()
        cursor = connection.cursor()

        query = """
            SELECT id, clause_number, full_text, category, sub_category
            FROM regulations
            WHERE 1=1
        """
        params = []

        if category:
            query += " AND category = %s"
            params.append(category)

        if sub_category:
            query += " AND sub_category = %s"
            params.append(sub_category)

        cursor.execute(query, tuple(params))
        results = cursor.fetchall()

        data = []
        for row in results:
            data.append({
                "id": row[0],
                "clause_number": row[1],
                "full_text": row[2],
                "category": row[3],
                "sub_category": row[4]
            })

        cursor.close()
        connection.close()

        return jsonify(data)
    except Exception as e:
        logger.error(f"Error filtering regulations: {e}")
        logger.error(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    logger.info("Starting Flask app")
    FlaskApp.run(host='0.0.0.0', port=5000, debug=True)
