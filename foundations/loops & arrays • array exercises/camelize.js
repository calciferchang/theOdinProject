// Translate border-left-width to borderLeftWidth
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
  const splitString = str.split("-");
  const camelizeString = splitString.map((word, index) =>
    index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
  );
  return camelizeString.join("");
}

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";
