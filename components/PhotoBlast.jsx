"use client";
import React from "react";
import Image from "next/image";

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

      <h1 className="mt-16 text-center font-bold text-xl md:text-4xl py-8">PHOTO-BLAST FROM PAST EVENTS</h1>

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
