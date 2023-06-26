const Sidebar = () => {
  return (
    <div className="w-[250px] h-[320px] bg-white rounded-md shadow-[rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;]">
      <div className="flex flex-col px-5 py-6 gap-5">
        <h2 className="text-[20px] font-[700] text-[#111] ">
          Welcome to <br /> <span className="text-[#3B49E1]">Linuxbek</span>{" "}
          <br /> Community!
        </h2>
        <p className="text-[#111] font-light text-[12px]">
          We are place where <span className="font-bold">Linuxer’s</span> <br />{" "}
          share, stay-up-to-date and grow <br /> thir careers
        </p>
        <div className="btn-group flex flex-col gap-3">
          <button className="w-full h-9 border-solid border-[#3B49E1] border rounded-xl">
            <a href="" className="text-[#3B49E1] text-3 font-semibold">
              Sign up
            </a>
          </button>
          <button className="w-full h-9 rounded-xl bg-[#3B49E1]">
            <a href="" className="text-white text-3 font-semibold">
              Sign up
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar