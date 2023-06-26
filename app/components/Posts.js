import Image from "next/image";

const Posts = () => {
  return (
    <div className="flex flex-col gap-6 w-[790px] h-full pt-6">
      <div className="flex flex-col w-full h-[736px] rounded-md bg-white shadow-lg items-start justify-start">
        <Image src="/first.png" alt="first" width="790" height={486} />
        <h2 className="text-[32px] text-[#111] font-bold p-8">
          Bolalar uchun eng zo’r birinchi Operatsion <br /> Tizim Kano haqida
        </h2>
        <p className="text-[#515254] text-[15px] w-[726px] pl-8">
          Bolalar uchun eng zo’r birinchi Operatsion Tizim Kano haqidaDemak
          bugun jiyanlaringizni, farzandlaringizni xursand qiluvchi Operatsion
          Tizim haqida gaplashamiz. Tayyor bo’lsangiz Flint ni do’kondan olib
          kelib qo’yib o’qing. Bi
        </p>
        <div className="flex pt-[28px] p-8 gap-[12px]">
          <h4 className="text-[#3B49E1] text-[16px] font-semibold">
            #Operatsion Tizimlar
          </h4>
          <h4 className="text-[#3B49E1] text-[16px] font-semibold">#Kano</h4>
        </div>
      </div>
      <div className="flex flex-col w-full h-[736px] rounded-md bg-white shadow-lg items-start justify-start">
        <Image src="/first.png" alt="first" width="790" height={486} />
        <h2 className="text-[32px] text-[#111] font-bold p-8">
          Bolalar uchun eng zo’r birinchi Operatsion <br /> Tizim Kano haqida
        </h2>
        <p className="text-[#515254] text-[15px] w-[726px] pl-8">
          Bolalar uchun eng zo’r birinchi Operatsion Tizim Kano haqidaDemak
          bugun jiyanlaringizni, farzandlaringizni xursand qiluvchi Operatsion
          Tizim haqida gaplashamiz. Tayyor bo’lsangiz Flint ni do’kondan olib
          kelib qo’yib o’qing. Bi
        </p>
        <div className="flex pt-[28px] p-8 gap-[12px]">
          <h4 className="text-[#3B49E1] text-[16px] font-semibold">
            #Operatsion Tizimlar
          </h4>
          <h4 className="text-[#3B49E1] text-[16px] font-semibold">#Kano</h4>
        </div>
      </div>
    </div>
  );
};

export default Posts;
