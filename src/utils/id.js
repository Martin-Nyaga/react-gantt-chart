function chr4(){
  return Math.random().toString(16).slice(-4);
}

export default function ID() {
  return chr4() + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() + chr4() + chr4();
}
