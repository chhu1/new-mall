const config = {
    ppe: {
        apiDomain: 'http://ppe.api.server.com'
    },
    prod: {
        apiDomain: 'https://api.server.com'
    }
}

let env = config['ppe']
const apiDomain = env.apiDomain

export { apiDomain }
