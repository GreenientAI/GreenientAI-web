from flask import Flask, request
from markupsafe import escape
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration

# FLASK_APP=server
# FLASK_ENV=development

sentry_sdk.init(
    dsn="https://cf7f8523bf15414687e7c475b6c13ada@o1032518.ingest.sentry.io/6051759",
    integrations=[FlaskIntegration()],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
    traces_sample_rate=0.2
)

app = Flask(__name__)

@app.route('/')
def index():
  return 'hello world'

@app.errorhandler(404)
def page_not_found(e):
  return '<h1>404</h1>', 404