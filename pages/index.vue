<template>
    <div class="wrapper">
        <Logo></Logo>
        <Content :data="data.works"></Content>
        <InfoBox></InfoBox>
    </div>
</template>

<script setup>
//ALTERNATIVE WAY OF QUERY
// const numerek = this.$route.params.id;
// const query = `*[_type == "work" && whatever == "${numerek}"]{title,size,medium,description,imagesGallery[]{asset->{url}}}`
// this.works = await this.fetchData(query, numerek)
// const query = groq`*[_type == "post" && topic == $topic][0..10]`
// const query = groq`*[_type == "work"]{type,title,sizeplace,mediumyear,imagesGallery[]{asset->{url}}}| order(_updatedAt desc)`
// const { data, refresh } = useSanityQuery(query)
// this.works = await this.fetchData(query);
// console.log(this.works)
const query = groq`{ "works": *[_type == "work"]{type,title,sizeplace,mediumyear,imagesGallery[]{asset->{url}}}| order(_updatedAt desc) }`

const sanity = useSanity()

const { data } = await useAsyncData('works', () => sanity.fetch(query))
console.log(data)
</script>
  
<style>
:root {
    --space: 1em;
}

body * {
    font-family: "DiGrotesk" !important;
    font-size: 13px !important;
    font-variant-numeric: tabular-nums;
    cursor: default;
}

.wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #ededed;
}
</style>
  
