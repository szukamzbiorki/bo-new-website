<template>
    <div class="wrapper">
        <Logo></Logo>
        <Content :data="data.works"></Content>
        <InfoBox></InfoBox>
    </div>
</template>

<script setup>
const query = groq`{ "works": *[_type == "work"]{type,title,sizeplace,mediumyear,description,imagesGallery[]{asset->{url}}}| order(_updatedAt desc) }`

const sanity = useSanity()

const { data } = await useAsyncData('works', () => sanity.fetch(query))
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
  
