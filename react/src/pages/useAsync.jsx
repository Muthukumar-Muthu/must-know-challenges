import useAsync from "../hooks/useAsync";

async function sendAsyncRequest() {
  console.log("runnning ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5 ? resolve("Success") : reject("Error");
    }, 1000);
  });
}

export default function UseAsync() {
  const asyncReturn = useAsync(sendAsyncRequest);
  console.log(asyncReturn);
  return (
    <div>
      <div>{JSON.stringify(asyncReturn)}</div>
      <div>{sendAsyncRequest}</div>
    </div>
  );
}
