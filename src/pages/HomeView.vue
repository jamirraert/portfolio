<script setup>
    import { reactive } from 'vue'
    import Avatar from 'primevue/avatar';
    import ImageCompare from 'primevue/imagecompare';
    
    import IMG_A from '@/assets/images/Christian_img_a.jpg'
    import IMG_B from '@/assets/images/Christian_img_b.jpg'

    const imgs = reactive({
        image_a: IMG_A,
        image_b: IMG_B
    })
</script>

<template>
    <div class="md:h-[450px] bg-gray-800 text-gray-300 md:flex items-center justify-center border border-white space-x-2">
        <div class="w-full box-border p-4">
            <div class="card flex justify-center shadow-lg">
                <ImageCompare class="shadow-lg rounded-2xl">
                    <template #left>
                        <img :src="imgs.image_a" />
                    </template>
                    <template #right>
                        <img :src="imgs.image_b" />
                    </template>
                </ImageCompare>
            </div>
        </div>
       <div class="w-full box-border p-4">
            <h1 class="text-2xl md:text-5xl font-bold">Hi I'm Christian</h1>
            <p class="max-w-lg min-w-md text-1xl md:text-2xl mt-3">Bridging Frontend & Backend</p>
            <div class="space-x-3 mt-3">
                <a href="https://facebook.com/jamirraert" title="Goto facebook">
                    <i class="pi pi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/christian-fernan-baquiano-a81285281/" title="Goto linkedin">
                    <i class="pi pi-linkedin"></i>
                </a>
                
                <a href="#">
                    <i class="pi pi-download"></i>
                </a>
            </div>
       </div>
    </div>
</template>