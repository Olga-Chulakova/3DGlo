const RULES = {
    number: /[^\d]/g,
    name: /[^а-яА-Я\s-]/gi,
    email: /[^\w@\-.!~*']/gi,
    tel: /[^+\d()\-]/g,
    message: /[^а-яА-Я\d\s,.!?();:'-]/gi,
};

const collapseSpaces = /\s+/g;
const collapseDashes = /-+/g;
const trimEdges = /^[\s-]+|[\s-]+$/g;

export {RULES, collapseSpaces, collapseDashes, trimEdges};