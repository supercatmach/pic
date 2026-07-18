const CDN = "https://cdn.jsdelivr.net/gh/supercatmach/pic@main/";

const imageList = {

    backg: [
"arrowL.jpg",
"arrowR.jpg",
"bkmy.png",
"class.jpg",
"class2.jpg",
"dn4-2.jpg",
"dn4-3.jpg",
"dn4-4.jpg",
"dn4.jpg",
"dust.png",
"edownbk.jpg",
"edownbkoutsid.png",
"endshure.jpg",
"endshure2.jpg",
"endshures.jpg",
"endshures2.jpg",
"infbk.png",
"infbk2.png",
"londing0.png",
"londing100.png",
"mq2.jpg",
"mq3.jpg",
"tablesmoll.png",
"taisubg.png",
"Thunder1.png",
"tincode1.jpg",
"tincode2.jpg",
"tincode3.jpg",
"tincode4.jpg"
    ],

    head: [
"cv0c.png",
"cv1l.png",
"cv2c.png",
"cv3r.png",
"cv4r.png",
"cv5l.png",
"cv6l.png",
"cv7l.png",
"cv8l.png",
"cvmax2c.png",
"cvmaxatk2c.png"
    ],

    mach: [
"0.jpg",
"0.png",
"1.jpg",
"1.png",
"10.jpg",
"10.png",
"11.jpg",
"11.png",
"12.jpg",
"12.png",
"13.jpg",
"13.png",
"137.jpg",
"137.png",
"138.jpg",
"138.png",
"139.jpg",
"139.png",
"14.jpg",
"14.png",
"140.jpg",
"140.png",
"141.jpg",
"141.png",
"142.jpg",
"142.png",
"143.jpg",
"143.png",
"144.jpg",
"144.png",
"15.jpg",
"15.png",
"16.jpg",
"16.png",
"17.jpg",
"17.png",
"18.jpg",
"18.png",
"19.jpg",
"19.png",
"2.jpg",
"2.png",
"20.jpg",
"20.png",
"21.jpg",
"21.png",
"22.jpg",
"22.png",
"23.jpg",
"23.png",
"24.jpg",
"24.png",
"25.jpg",
"25.png",
"26.jpg",
"26.png",
"27.jpg",
"27.png",
"28.jpg",
"28.png",
"29.jpg",
"29.png",
"3.jpg",
"3.png",
"30.jpg",
"30.png",
"31.jpg",
"31.png",
"32.jpg",
"32.png",
"33.jpg",
"33.png",
"34.jpg",
"34.png",
"35.jpg",
"35.png",
"36.jpg",
"36.png",
"37.jpg",
"37.png",
"38.jpg",
"38.png",
"39.jpg",
"39.png",
"4.jpg",
"4.png",
"40.jpg",
"40.png",
"41.jpg",
"41.png",
"42.jpg",
"42.png",
"5.jpg",
"5.png",
"6.jpg",
"6.png",
"7.jpg",
"7.png",
"8.jpg",
"8.png",
"9.jpg",
"9.png",
"d.jpg",
"d.png",
"l.jpg",
"l.png",
"r.jpg",
"r.png",
"u.jpg",
"u.png",
"undefined.jpg",
"X.jpg"
    ],

    mati: [
"0.png",
"1.png",
"10.png",
"11.png",
"12.png",
"13.png",
"137.png",
"138.png",
"139.png",
"14.png",
"140.png",
"141.png",
"142.png",
"143.png",
"144.png",
"15.png",
"16.png",
"17.png",
"18.png",
"19.png",
"2.png",
"20.png",
"21.png",
"22.png",
"23.png",
"24.png",
"25.png",
"26.png",
"27.png",
"28.png",
"29.png",
"3.png",
"30.png",
"31.png",
"32.png",
"33.png",
"34.png",
"4.png",
"5.png",
"6.png",
"7.png",
"8.png",
"9.png",
"lf.png",
"rl.png",
"s0.png"
    ],

    meup: [
"0.png",
"0b.png",
"1.png",
"10.png",
"11.png",
"12.png",
"13.png",
"137.png",
"138.png",
"139.png",
"14.png",
"140.png",
"141.png",
"142.png",
"143.png",
"144.png",
"15.png",
"16.png",
"17.png",
"18.png",
"19.png",
"2.png",
"20.png",
"21.png",
"22.png",
"23.png",
"24.png",
"25.png",
"26.png",
"27.png",
"28.png",
"29.png",
"3.png",
"30.png",
"31.png",
"32.png",
"33.png",
"34.png",
"35.png",
"35b.png",
"4.png",
"5.png",
"6.png",
"7.png",
"8.png",
"9.png",
"n.png"
    ],

    stanbypled: [
"class.jpg",
"cv0.png",
"cv0c.png",
"cv1.png",
"cv1c.png",
"cv1l.png",
"cv2.png",
"cv2c.png",
"cv3.png",
"cv3c.png",
"cv3r.png",
"cv4.png",
"cv4c.png",
"cv4r.png",
"cv5.png",
"cv5c.png",
"cv5l.png",
"cv6.png",
"cv6c.png",
"cv6l.png",
"cv7.png",
"cv7c.png",
"cv7l.png",
"cv8.png",
"cv8c.png",
"cv8l.png",
"cvmax3c.png",
"cvmaxatk2c.png",
"cvmaxsafe2c.png"
    ],

    watse: [
"cv0c.png",
"cv0l.png",
"cv0r.png",
"cv1c.png",
"cv1l.png",
"cv1r.png",
"cv2c.png",
"cv2l.png",
"cv2r.png",
"cv3c.png",
"cv3l.png",
"cv3r.png",
"cv4c.png",
"cv4l.png",
"cv4r.png",
"cv5c.png",
"cv5l.png",
"cv5r.png",
"cv6c.png",
"cv6l.png",
"cv6r.png",
"cv7c.png",
"cv7l.png",
"cv7r.png",
"cv8c.png",
"cv8l.png",
"cv8r.png",
"cvmax3c.png",
"cvmax3l.png",
"cvmax3r.png",
"cvmaxatk2c.png",
"cvmaxatk2l.png",
"cvmaxatk2r.png",
"cvmaxsafe2c.png",
"cvmaxsafe2l.png",
"cvmaxsafe2r.png",
"gv0c.png",
"gv0l.png",
"gv0r.png",
"gv1c.png",
"gv1l.png",
"gv1r.png",
"gv2c.png",
"gv2l.png",
"gv2r.png",
"gv3c.png",
"gv3l.png",
"gv3r.png",
"gv4c.png",
"gv4l.png",
"gv4r.png",
"gv5c.png",
"gv5l.png",
"gv5r.png",
"gv6c.png",
"gv6l.png",
"gv6r.png",
"gv7c.png",
"gv7l.png",
"gv7r.png",
"gv8c.png",
"gv8l.png",
"gv8r.png",
"hv0c.png",
"hv0l.png",
"hv0r.png",
"hv1c.png",
"hv1l.png",
"hv1r.png",
"hv2c.png",
"hv2l.png",
"hv2r.png",
"hv3c.png",
"hv3l.png",
"hv3r.png",
"hv5c.png",
"hv5l.png",
"hv5r.png",
"hv6c.png",
"hv6l.png",
"hv6r.png",
"hv7c.png",
"hv7l.png",
"hv7r.png",
"hv8c.png",
"hv8l.png",
"hv8r.png",
"kil0c.png",
"kil0l.png",
"kil0r.png",
"kil1c.png",
"kil1l.png",
"kil1r.png",
"kil2c.png",
"kil2l.png",
"kil2r.png",
"kil3c.png",
"kil3l.png",
"kil3r.png",
"kil5c.png",
"kil5l.png",
"kil5r.png",
"kil6c.png",
"kil6l.png",
"kil6r.png",
"kil7c.png",
"kil7l.png",
"kil7r.png",
"kil8c.png",
"kil8l.png",
"kil8r.png",
"mtkv0c.png",
"mtkv0l.png",
"mtkv0r.png",
"mtkv1c.png",
"mtkv1l.png",
"mtkv1r.png",
"mtkv2.png",
"mtkv2c.png",
"mtkv2l.png",
"mtkv3c.png",
"mtkv3l.png",
"mtkv3r.png",
"mtkv4.png",
"mtkv4c.png",
"mtkv4r.png",
"mtkv5c.png",
"mtkv5l.png",
"mtkv5r.png",
"mtkv6c.png",
"mtkv6l.png",
"mtkv6r.png",
"mtkv7c.png",
"mtkv7l.png",
"mtkv7r.png",
"mtkv8c.png",
"mtkv8l.png",
"mtkv8r.png",
"mtkvmax3c.png",
"mtkvmax3l.png",
"mtkvmax3r.png",
"mtkvmaxatk2c.png",
"mtkvmaxatk2l.png",
"mtkvmaxatk2r.png",
"mtkvmaxsafe2c.png",
"mtkvmaxsafe2l.png",
"mtkvmaxsafe2r.png",
"nv0c.png",
"nv0l.png",
"nv0r.png",
"nv1c.png",
"nv1l.png",
"nv1r.png",
"nv2c.png",
"nv2l.png",
"nv2r.png",
"nv3c.png",
"nv3l.png",
"nv3r.png",
"nv5c.png",
"nv5l.png",
"nv5r.png",
"nv6c.png",
"nv6l.png",
"nv6r.png",
"nv7c.png",
"nv7l.png",
"nv7r.png",
"nv8c.png",
"nv8l.png",
"nv8r.png",
"psv0c.png",
"psv0l.png",
"psv0r.png",
"psv1c.png",
"psv1l.png",
"psv1r.png",
"psv2c.png",
"psv2l.png",
"psv2r.png",
"psv3c.png",
"psv3l.png",
"psv3r.png",
"psv5c.png",
"psv5l.png",
"psv5r.png",
"psv6c.png",
"psv6l.png",
"psv6r.png",
"psv7c.png",
"psv7l.png",
"psv7r.png",
"psv8c.png",
"psv8l.png",
"psv8r.png",
"ruv0c.png",
"ruv0l.png",
"ruv0r.png",
"ruv1c.png",
"ruv1l.png",
"ruv1r.png",
"ruv2c.png",
"ruv2l.png",
"ruv2r.png",
"ruv3c.png",
"ruv3l.png",
"ruv3r.png",
"ruv5c.png",
"ruv5l.png",
"ruv5r.png",
"ruv6c.png",
"ruv6l.png",
"ruv6r.png",
"ruv7c.png",
"ruv7l.png",
"ruv7r.png",
"ruv8c.png",
"ruv8l.png",
"ruv8r.png"
    ]

    // 之後增加資料夾直接加這裡
    // ui:[
    //     "start.png",
    //     "end.png"
    // ],

    // mahjong:[
    //     "1m.png",
    //     "2m.png"
    // ]

};


// 把分類轉成完整路徑
let loadList = [];

for (let folder in imageList) {

    imageList[folder].forEach(file => {

        loadList.push(
            CDN + folder + "/" + file
        );

    });

}


let loaded = 0;


// 開始預載
loadList.forEach(url => {

    const img = new Image();


    img.src = url;


    img.onload = () => {


        loaded++;


        // 計算百分比
        let percent = Math.floor(
            (loaded / loadList.length) * 100
        );


        // 每10%更新一次動畫
        if(percent % 10 === 0){

            $(".stanbylondingshap100")
            .stop()
            .animate(
                {
                    width: percent + "%"
                },
                500
            );

        }



        // 全部完成
        if(loaded === loadList.length){


            $(".spinner-wrapper").hide();

            $(".spinner-message").hide();


            $(".stanbylondingshap100")
            .stop()
            .animate(
                {
                    width:"100%"
                },
                1000
            );


            $(".playlonding").hide();



            setTimeout(() => {


                $(".stanbylondingshap100")
                .css("width","0px")
                .hide();


                $(".stanbylonding").hide();


                $(".pledstanby").show();


                $(
                ".adown,.camera,.mycad,.nextcad,.fontcad,.lastcad,.space,.etpghwordbk,.smoking,.table,.scaler"
                ).show();


            },1000);


        }


    };


});