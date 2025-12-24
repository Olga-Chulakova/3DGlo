const RULES = {
    number: /[^\d]/g,
    text: /[^а-яА-Я\s-]/gi,
    email: /[^\w@\-.!~*']/gi,
    tel: /[^\d\-()]/g,
};

const collapseSpaces = /\s+/g;
const collapseDashes = /-+/g;
const trimEdges = /^[\s-]+|[\s-]+$/g;

export {RULES, collapseSpaces, collapseDashes, trimEdges};