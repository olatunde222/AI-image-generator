
import React from "react";
import Link from "next/link";




const imageSize = [
  { value: "256 * 256", label: "256 X 256" },
  { value: "512 * 512", label: "512 X 512" },N
  { value: "1024 * 1024", label: "1024 X 1024" },
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(imageSize[0].value);
  const [prompt, setPrompt] = useState("");

  // Handle submit funtion
  const handleSubmit = async (e) => {
    e.preventdefault();
    setLoading(true);

    console.log({ prompt, size });
    setLoading(false);
  };
  return (
    <main>
      <div className="max-w-5xl mx-auto px-5 lg:px-0">
        <h1 className="inline-block bg-clip-text text-transparent py-4 text-6xl font-bold bg-gradient-to-r from-[#009FFF] to-[#ec2F4B] font-SquarePeg">
          ImaginAI
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-5 lg:px-0 min-h-[calc(100vh - 170px)]">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-primary-main leading-7"
              >
                Describe the image you wish to generate
              </label>
              <textarea
                rows={2}
                onChange={(e) => setPrompt(e.target.value)}
                id="prompt"
                placeholder="Generate a white furry cat sitting on a chair"
                className="block w-full px-2 py-1 rounded-md shadow-sm resize-none placeholder:text-primary-light border border-primary-main outline-primary-main text-md  "
              />
              <span className="mt-1 text-xs leading-6 text-primary-main">
                Please give a detailed prompt for most favourable outcome
              </span>
            </div>
            <div>
              <div className="w-full">
                <label
                  htmlFor="size"
                  className="block text-sm font-medium leading-6 text-primary-main"
                >
                  Select Image Size
                </label>
                <select
                  id="size"
                  onChange={(e) => setSize(e.target.value)}
                  className="py-3 px-2 w-full rounded-md shadow-xl border boder-primary-main outlime-primary-main text-md text-primary-main mt-2"
                >
                  {imageSize.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <div className="mt-5 text-right">
                  <button
                    disabled="loading"
                    type="submit"
                    className="rounded-md bg-primary-main px-3 py-2 hover:bg-primary-dark text-primary-contrastText font-semibold shadow-sm disabled:bg-primary-light disabled:cursor-not-allowed"
                  >
                    {loading ? "Generating...." : "Generate"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center py-4 max-w-5xl mx-auto px-5 lg:px-0">
        <div className="text-sm uppercase text-primary-main">
          All Rights reserved{" "}
        </div>
      </div>
    </main>
  );
}
