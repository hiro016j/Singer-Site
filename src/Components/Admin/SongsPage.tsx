import { useState, useEffect } from "react";
import { FiPlus, FiEye, FiEdit, FiTrash } from "react-icons/fi";

interface Song {
  id: number;
  title: string;
  img: string;
  audio: string;
}

const SongsPage = () => {
  const [data, setData] = useState<Song[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/models/songs.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 bg-blue-400 text-gray-900 px-4 py-2 rounded shadow hover:bg-blue-500 transition mb-6"
      >
        <FiPlus /> Qo'shiq qo'shish
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((song) => (
          <div
            key={song.id}
            className="bg-gray-900 rounded p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={song.img}
              alt={song.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <audio src={song.audio} controls className="w-full mb-2" />
            <h3 className="font-semibold mb-2">{song.title}</h3>
            <div className="flex gap-4">
              <button>
                <FiEye className="text-blue-400 hover:text-blue-500" />
              </button>
              <button>
                <FiEdit className="text-green-400 hover:text-green-500" />
              </button>
              <button>
                <FiTrash className="text-red-400 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Yangi Qo'shiq qo'shish</h2>
            <p className="mb-4 text-gray-300">Form keyin qo‘shiladi!</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-400 text-gray-900 px-4 py-2 rounded"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SongsPage;
