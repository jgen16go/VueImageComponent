const svgTemplate = (w: number, h: number) => `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`

export const createInitialBase64Image = (w: number, h: number) => `data:image/svg+xml;base64,${btoa(svgTemplate(w, h))}`
