const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    // Send to Supabase via your webhook
    const response = await fetch('https://hook.us2.make.com/s94fw2vhkdoalj7d5cgfywma8bppyzae', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
