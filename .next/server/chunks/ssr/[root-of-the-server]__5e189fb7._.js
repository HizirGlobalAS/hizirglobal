module.exports=[193695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},43619,a=>{a.n(a.i(379962))},13718,a=>{a.n(a.i(685523))},118198,a=>{a.n(a.i(545518))},262212,a=>{a.n(a.i(866114))},390660,a=>{a.n(a.i(901658))},395976,a=>{"use strict";a.s(["MediaClient",()=>b]);let b=(0,a.i(211857).registerClientReference)(function(){throw Error("Attempted to call MediaClient() from the server but MediaClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/[lang]/media-center/components/MediaClient.tsx <module evaluation>","MediaClient")},586837,a=>{"use strict";a.s(["MediaClient",()=>b]);let b=(0,a.i(211857).registerClientReference)(function(){throw Error("Attempted to call MediaClient() from the server but MediaClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/[lang]/media-center/components/MediaClient.tsx","MediaClient")},55141,a=>{"use strict";a.i(395976);var b=a.i(586837);a.n(b)},513279,a=>{"use strict";var b=a.i(907997),c=a.i(626812),d=a.i(55141),e=a.i(159146);async function f({params:a}){let{lang:b}=await a,d=["en","tr","ru","az"].includes(b)?b:"tr",e=await (0,c.getDictionary)(d);return{title:`${e.nav?.media||"Medya Merkezi"} | ${e.common?.company_name||"Hızır Global"}`,description:e.media?.subtitle||"Hızır Global kurumsal duyuruları, basın bültenleri ve marka materyalleri."}}async function g(){return{pressReleases:await e.client.fetch(`*[_type == "pressRelease"] | order(publishDate desc) {
        _id,
        title,
        category,
        excerpt,
        publishDate,
        isPinned,
        "coverImage": coverImage.asset->url,
        files[]{
            fileTitle, 
            lang, 
            "url": fileUpload.asset->url
        }
    }`),brandAssets:await e.client.fetch(`*[_type == "brandAsset"] | order(_createdAt asc) {
        _id,
        title,
        description,
        iconType,
        "url": fileUpload.asset->url
    }`)}}async function h({params:a}){let{lang:e}=await a,f=["en","tr","ru","az"].includes(e)?e:"tr",h=await (0,c.getDictionary)(f),{pressReleases:i,brandAssets:j}=await g();return(0,b.jsx)("main",{className:"min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300",children:(0,b.jsx)("div",{className:"container mx-auto px-6",children:(0,b.jsx)(d.MediaClient,{lang:f,dict:h,sanityPressReleases:i,sanityBrandAssets:j})})})}a.s(["default",()=>h,"generateMetadata",()=>f])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e189fb7._.js.map