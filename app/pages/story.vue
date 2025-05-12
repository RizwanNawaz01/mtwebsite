<template>

    <div class="bg-[url(/hero_banner/the-story.png)] bg-no-repeat bg-cover mt-[-99px] ">
        <div class="pl-0 md:pl-[30px]">
            <div class="pt-[99px]">
                <h1
                    class="px-4 text-3xl mt-[100px] mb-[100px] md:mt-[200px]  md:mb-[200px] font-bold text-white lg:px-8m md:text-5xl">
                    the <span class="text-yellow">Story</span>
                </h1>
            </div>
            <div class="relative mt-8 points">
                <div class="relative point" v-for="(point, index) in points" :key="index">
                    <div class="point-heading">
                        <h4 class="text-3xl font-bold text-white">{{ point.title }}</h4>
                    </div>
                    <div class="point-body">
                        <p class="text-white show_less w-full md:w-[35%] text-[20px] mb-2"
                            :class="{ 'hidden': point.expanded }">{{
                            point.shortText }}</p>
                        <p class="text-[20px] mb-2 text-white show_more" :class="{ 'hidden': !point.expanded }">
                            {{ point.fullText }}
                        </p>
                        <span class="flex items-center cursor-pointer point-read-more text-yellow"
                            @click="toggleExpanded(index)"> {{
                            point.expanded ? 'Read Less' : 'Read More' }}
                            <Icon class="ml-1" name="material-symbols:arrow-right-alt-rounded" />
                        </span>
                    </div>
                </div>
            </div>
            <div class="story-page-end">
                <h5 class="flex items-center mx-auto text-2xl md:text-4xl font-bold text-center text-white md:w-[50%]">
                    “You have to see failure as the beginning and the middle, but never entertain it as an end.”
                </h5>
            </div>
        </div>

    </div>
</template>
<script setup>
    import { reactive } from 'vue';

    const points = reactive([
        {
            title: "Early life and education",
            shortText: "Muhammad Tariq’s journey is a testament to the power of determination and vision...",
            fullText: "Muhammad Tariq’s journey is a testament to the power of determination and vision. Born in the small town of Kamalia, Pakistan, Tariq’s early years were fueled by an insatiable curiosity and a deep desire to make a meaningful impact. This drive led him to the UK, where he pursued a law degree and was called to the Bar at the prestigious Lincoln's Inn in London.",
            expanded: false
        },
        {
            title: "Legal practice",
            shortText: "Returning to Pakistan, Tariq practiced law in the bustling cities of Lahore and Karachi...",
            fullText: "Returning to Pakistan, Tariq practiced law in the bustling cities of Lahore and Karachi. But it was in 2007, when he moved to Dubai, that his journey truly took a transformative turn. Joining one of the most prominent law firms in the Middle East, Tariq found success in his legal career, but something inside him craved more.",
            expanded: false
        },
        {
            title: "Becoming a serial entrepreneur",
            shortText: "He realized that his true calling wasn’t just in practicing law—it was in creating...",
            fullText: "He realized that his true calling wasn’t just in practicing law—it was in creating something enduring, something that would empower others to achieve greatness. \n\nThis realization marked the beginning of an extraordinary shift. Transitioning from law to entrepreneurship isn’t easy, but Tariq was determined to make it happen. He took a leap of faith and founded his own law firm, Legal Inz, followed by InZone. But these ventures were more than just businesses—they were platforms designed to create success stories. Leveraging his legal expertise and the diverse experiences he had gathered along the way, Tariq built InZone Group with a singular vision: to help others succeed.\n\nUnder his leadership, InZone has seen rapid growth, with ambitious plans for further expansion and a future IPO. Yet, for Tariq, it’s not just about the numbers—it’s about the lives he touches and the impact he makes.",
            expanded: false
        },
        {
            title: "Diary of a Founder Podcast",
            shortText: "Through his podcast, Diary of a Founder, Tariq shares raw, unfiltered conversations...",
            fullText: "Through his podcast, Diary of a Founder, Tariq shares raw, unfiltered conversations with some of the most dynamic entrepreneurs and business leaders. These conversations are more than just interviews—they’re lessons in real-world education, offering practical advice on business, leadership, and everything in between.",
            expanded: false
        },
        {
            title: "Diary entries",
            shortText: "In addition to the podcast, Tariq’s informal diary entries provide a glimpse into his personal...",
            fullText: "In addition to the podcast, Tariq’s informal diary entries provide a glimpse into his personal journey—the highs, the lows, and all the moments that have shaped him into the leader he is today.",
            expanded: false
        },
        {
            title: "Upcoming book",
            shortText: "Tariq is currently working on writing a book that will chronicle his journey and distill the...",
            fullText: "Tariq is currently working on writing a book that will chronicle his journey and distill the lessons he’s learned from Dubai’s incredible transformation. This book is intended to pass on those invaluable lessons to the entrepreneurs he continues to inspire, offering them guidance on how to achieve their own success stories.",
            expanded: false
        },
        {
            title: "Diary of a Founder Foundation",
            shortText: "Tariq has established the Diary of a Founder Foundation with a heartfelt purpose...",
            fullText: "Tariq has established the Diary of a Founder Foundation with a heartfelt purpose: to support struggling entrepreneurs. Through this foundation, he provides education, training, and access to essential services like legal, corporate, taxation, accounting, and mentorship—ensuring that those who need it most have the resources to turn their dreams into reality.",
            expanded: false
        }
    ]);

    function toggleExpanded(index) {
        points[index].expanded = !points[index].expanded
    }
</script>

<style scoped>
    .point::before {
        content: "";
        position: absolute;
        top: 15px;
        left: 5px;
        width: 20px;
        height: 20px;
        background-image: url(https://muhammadtariq.org/cdn/images/icons/dot.png);
        border-radius: 50%;
        z-index: 1;
    }

    .point::after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        bottom: -48px;
        width: 2px;
        background-color: #ccc;
    }

    .point {
        margin-bottom: 30px;
        padding-left: 40px;
    }

    .point:last-child::after {
        background: transparent;
    }

    .story-page-end h5 {
        margin-top: 100px;
        text-transform: capitalize;
        padding-bottom: 100px;
    }
</style>