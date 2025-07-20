

const header = (token) => { return { headers: { Authorization: `${token}` } }; };

export default header;