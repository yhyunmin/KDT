import Larva from "./Larva";

const profile = {
  username: "Hyuk",
  sex: "male",
  phone: "010-1111-2222",
  email: "hyuk@gmail.com",
};
const { phone, ...rest } = profile;
console.log(phone);
console.log(rest);
console.log(rest.username);

function App() {
  return (
    <>
      <Larva />
    </>
  );
}

export default App;
