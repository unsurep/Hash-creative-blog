"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// cloud images for all hash logos
const imageList = [
  "/assets/images/logo.png",
  "/assets/images/agb.png",
  "/assets/images/akwa.png",
  "/assets/images/benin.png",
  "/assets/images/buru.png",
  "/assets/images/ebony.png",
  "/assets/images/lagos.png",
  "/assets/images/owerri.png",
  "/assets/images/udu.png",
  "/assets/images/uyo.png",
  "/assets/images/warri.png",
  "/assets/images/img/11b.png",
  "/assets/images/img/adikpo.png",
  "/assets/images/img/aliade.png",
  "/assets/images/img/gboko.png",
  "/assets/images/img/gidigals.png",
  "/assets/images/img/jalin.png",
  "/assets/images/img/katsina.png",
  "/assets/images/img/koro.png",
  "/assets/images/img/maku.png",
  "/assets/images/img/mh3.png",
  "/assets/images/img/suru.png",
  "/assets/images/img/wan.png",
  "/assets/images/img/zaki.png",
  "/assets/images/img/vand.png",
  "/assets/images/img/gad.png",
  "/assets/images/img/zaki.png",
  "/assets/images/img/igb.png",
];


// pictures from past events
const hopspic = [
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739953021/IMG_7330_ken9yp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739964773/IMG_7336_emrh9r.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739964773/IMG_7435_bsk53b.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739964774/IMG_7361_cthucp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965166/IMG_7462_dfylne.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965243/IMG_7488_ur7udp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965269/IMG_7490_qqvexi.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965321/IMG_7528_ppivww.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965401/IMG_7542_t7s1di.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965688/IMG_7553_a8srrv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965722/IMG_7647_ey1pqv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965748/IMG_7653_f8abfy.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965779/IMG_7704_h9sspv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965802/IMG_7705_jl0t2n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965832/IMG_7724_yhkk6t.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965832/IMG_7724_yhkk6t.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965860/IMG_7730_iz5gvh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965909/IMG_7757_txhkr3.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965939/IMG_7777_j25oez.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965961/IMG_7783_orl3yd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739965988/IMG_7909_aoljzx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739966010/IMG_8009_goxade.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739966031/IMG_8012_ljp2et.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739966164/l1_a8wgki.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739966194/l2_lwp2ni.jpg',

  // Sir DLS bday pictures
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739968965/_MG_0063_dntx6r.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739968966/_MG_0105_q7ddfk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739968967/_MG_0143_btsbdd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739968969/_MG_0189_usskuc.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739968971/_MG_0301_jkmlka.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969150/_MG_0357_eusige.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969171/_MG_0366_pn0kmj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969191/_MG_0373_vlak8u.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969214/_MG_0395_epnxjv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969235/_MG_0424_xnm0be.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969262/_MG_0426_hoykoh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969307/_MG_0475_jzjeez.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969327/_MG_0484_dg5ymc.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969355/_MG_0486_mxkff6.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969377/_MG_0494_yaipjr.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969403/_MG_0500_kuzutp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969429/_MG_0524_efzr4j.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969457/_MG_0545_fvwrxf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969484/_MG_0568_nr7ddc.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969508/_MG_0565_ihsaym.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969534/_MG_0562_mnvasu.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969559/_MG_0574_mlt6od.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969622/_MG_0578_mqtahl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969652/_MG_0612_zm7wne.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969674/_MG_0642_radntv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969700/_MG_0749_vcqgq7.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969722/_MG_0767_von0qo.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969742/_MG_0784_qwpeto.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969763/_MG_0815_qkhltk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969784/_MG_0827_tknhsf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969819/_MG_0831_tugwnd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969840/_MG_0845_blcmle.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969862/_MG_0856_nerzeu.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969887/_MG_0952_wf3dcj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969909/IMG_0579_pzg6y4.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969931/IMG_8323_pmxylg.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739969955/IMG_8334_cnw2qj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970512/WhatsApp_Image_2025-02-19_at_14.07.27_df41ed00_xrlwcn.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970562/IMG_8367_drugm3.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970594/IMG_8526_bc4uvl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970594/IMG_8526_bc4uvl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970620/IMG_8683_odl9ga.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970664/IMG_8763_oxefa9.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970687/IMG_8867_euqqu3.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739970711/IMG_8868_mspqcn.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971494/IMG_8976_f6xddk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971533/IMG_8978_uq97k7.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971560/IMG_8981_ieyqqi.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971588/IMG_9033_pb3lic.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971611/IMG_9062_o2vqaz.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971638/IMG_9149_fktqxt.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971668/IMG_9150_csg777.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971712/IMG_9151_rimgol.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971743/IMG_9156_mcbjzz.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971776/IMG_9159_x2ijnd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971816/IMG_9170_u5vipj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971821/IMG_9194_be9awl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739971971/IMG_9230_tyymbp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972015/IMG_9334_yo16bk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972036/IMG_9337_mgxgl1.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972072/IMG_9340_kmbhqo.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972094/IMG_9355_y79okx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972115/IMG_9381_tfdmjy.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972137/IMG_9408_vgpkaw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972156/IMG_9436_pef0lb.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972177/IMG_9451_o89axx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972177/IMG_9451_o89axx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972221/IMG_9481_be7mgb.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972262/IMG_9484_nxkiog.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972296/IMG_9486_uqwysh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972339/IMG_9488_fzsxxw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972363/IMG_9490_imgnl7.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972382/IMG_9498_pyrykx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972401/IMG_9507_ia5o89.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739972441/IMG_9519_kntmhm.jpg',

  // OTILO '25
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739981725/swiper2_m6gyxs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012798/DSC_4226_1_ncrydh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012821/DSC_4259_qftqqv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012844/DSC_4351_x94hto.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012868/DSC_4373_yzaqrw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012890/DSC_4381_xpulqy.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012910/DSC_4388_r5fyzw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012937/DSC_4404_zdutoh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012995/DSC_4422_bw0sju.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013019/DSC_4431_vjoljp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013069/DSC_4449_eajc9l.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013094/DSC_4455_vusvy2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013168/DSC_4467_jilr9k.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013193/DSC_4497_jghbjp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013217/DSC_4503_tsoloc.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013243/DSC_4531_hzrvia.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013272/DSC_4620_dqysnl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013294/DSC_4622_pa0byf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013314/DSC_4623_u0fthp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013331/DSC_4624_snw9ak.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013393/DSC_4639_r8fsac.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013454/DSC_4651_lcixhp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013496/DSC_4678_koy2m8.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013534/DSC_4899_hkcfnq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013577/DSC_4964_vutggs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013604/DSC_4985_pliep4.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013647/DSC_5017_hrugdm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013683/DSC_5065_fqbcm5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013718/DSC_5088_vgunqm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013745/DSC_5115_cyxhlp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013788/DSC_5143_jtxeb2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013818/DSC_5156_lkz13t.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013860/DSC_5163_crazz5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013887/DSC_5165_wostbp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013914/DSC_5180_wtignw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013972/DSC_5190_lsn6rf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013997/DSC_5192_h4v6bh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014040/DSC_5211_pev2aj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014067/DSC_5214_qw0atn.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014090/DSC_5232_r9g1vd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014115/DSC_5252_rlsrlk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014226/DSC_5308_uugr3c.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014248/DSC_5313_slumtf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014270/DSC_5393_buomqx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014299/DSC_5395_nyy2yq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014332/DSC_5414_tcngz5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014357/DSC_5416_iyvba2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014395/DSC_5418_pimga7.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014419/DSC_5419_ngvw8x.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014451/DSC_5422_g2fgrc.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014475/DSC_5428_szwu8n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014515/DSC_5443_tlmb8q.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014538/DSC_5488_yhgyrv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014688/DSC_5503_agly8n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014620/DSC_5528_cytsf7.jpg',

  


  






 








 
  
 
]


const PhotoBlast = () => {
  return (
    <div className="px-4">

      <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-5 overflow-x-auto snap-x scrollbar-hide">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="snap-start hvr-float-shadow flex-shrink-0 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <Link href={'/about'} data-aos="zoom-in-up" data-aos-duration="2000" className="flex items-center justify-center pt-16">
        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake animate-bounce ">
            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-600 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-700 group-hover:-rotate-180 ease"></span>
            <span className="relative md:text-lg text-sm">About Us</span>
            </span>
            <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
            ></span>
        </button>
      </Link>

      <h1 className="md:mt-16 text-center flex-col  font-bold head_text mt-3 md:text-4xl pb-8 orange_gradient md:flex items-center justify-center gap-3">PHOTO-BLAST FROM PAST EVENTS
        <audio src="/assets/audio/grandpiano.mp3" type="audio/mpeg" className="cursor-pointer bg-orange-400 " controls></audio>
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5 ">
        {hopspic.map((url, index)=>(
          <div key={index}>
            <Image src={url} alt={`Image ${index + 1}`} width={500} height={500} className="rounded-lg ring ring-cyan-300 shadow-lg"/>

          </div>
          ))
        }


      </div>

    </div>
  );
};

export default PhotoBlast;
