const createCityUrlPath = (city) => {
    return `../src/assets/images/${city}.png`;
}

export const urlMap = new Map([
    ['chidambaram', createCityUrlPath('chidambaram')],
    ['kumbakonam', createCityUrlPath('kumbakonam')],
    ['masinagudi', createCityUrlPath('masinagudi')],
    ['pollachi', createCityUrlPath('pollachi')],
    ['thanjavur', createCityUrlPath('thanjavur')],
    ['tirunelveli', createCityUrlPath('tirunelveli')]
]);
