var converter = require("hsl-to-rgb-for-reals")

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function RandomGradient(props: { seed: string }) {
  // hash the seed to get a colour
  let hash = hashCode(props.seed.toLowerCase() ?? "");
  let leftCol = `hsl(${hash % 360},90%,70%)`;
  let rightCol = `hsl(${(hash + 200) % 360},90%,70%)`;
  return (<div className={`w-full h-full rounded-md`} style={{ backgroundImage: `linear-gradient(to top right, ${leftCol}, ${rightCol})` }}>

  </div>);
}

export default RandomGradient;