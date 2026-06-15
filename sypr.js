async function sendRequests() {
    try {
        
        const csrfToken = USER_ATTRIBUTES.meta.csrf_token;
        console.log('Token:', csrfToken);

        const response = await fetch('https://ha2.freshservice.com/api/_/agents/40002149482/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":40000661868,"assignment_scope":"entire_helpdesk"}],"workspace_id":1}`
        });

        console.log('Status:', response.status);
        const data = await response.json();
        console.log('Response:', data);

    } catch (error) {
        console.error('Error:', error);
    }
}
sendRequests();
