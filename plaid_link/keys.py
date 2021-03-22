import os

# Fill in your Plaid API keys - https://dashboard.plaid.com/account/keys
PLAID_CLIENT_ID = "5da9e9d3470e370016651aa3"#os.getenv('PLAID_CLIENT_ID')
PLAID_SECRET = "1026c23bcd23fccd4f9dabb1f9f172"#os.getenv('PLAID_SECRET')
PLAID_PUBLIC_KEY = "91e20631f435dd6896adf30031b81c"#os.getenv('PLAID_PUBLIC_KEY')
# Use 'sandbox' to test with Plaid's Sandbox environment (username: user_good,
# password: pass_good)
# Use `development` to test with live users and credentials and `production`
# to go live
PLAID_ENV = "sandbox"#os.getenv('PLAID_ENV', 'sandbox')
# PLAID_PRODUCTS is a comma-separated list of products to use when initializing
# Link. Note that this list must contain 'assets' in order for the app to be
# able to create and retrieve asset reports.
PLAID_PRODUCTS = os.getenv('PLAID_PRODUCTS', 'transactions')

# PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
# will be able to select institutions from.
PLAID_COUNTRY_CODES = ["IN","US"]#os.getenv('PLAID_COUNTRY_CODES', 'US')
