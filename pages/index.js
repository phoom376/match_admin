import Head from "next/head";
import Default from "../components/layouts/Default";
import Axios from "axios";

export default function Home() {
  const url = "http://www.matchchemical.tk:4007/v1/getBoards";
  const getBoards = async () => {
    await Axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Default>
      <div>
        <button
          className="btn btn-outline-info"
          onClick={() => {
            getBoards();
          }}
        >
          TEST GET DATA
        </button>
      </div>
    </Default>
  );
}
