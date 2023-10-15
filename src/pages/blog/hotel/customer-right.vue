<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Is the customer really always right?</h2>
            <div class="blog-img">
                <img :src=customerRight>
            </div>
            <div class="blog-text">


                <p>
                    Complaints happen every day and in the customer service industry, we cannot avoid
                    complaints. When a customer complains, it is usually for a good reason or genuine
                    concern. Either they are displeased with the service rendered or have made a purchase
                    that did not meet their expectation—a product, service, or maybe a combination of the
                    two.
                    <br>
                    <br>
                    It is important that we recognize complaints as opportunities; unhappy customers who
                    never speak up or share their complaints will either never come back, use your service
                    or product again and will generally discourage anyone in their circle from patronizing
                    your service too. Therefore, when a customer voices a complaint, listen carefully and try
                    to resolve it in the shortest time frame possible to ensure a loyal and happy customer.
                    Sometimes, the complaint may have no basis and may be a result of personal bias, still
                    it is advised you adopt these eleven methods listed below in handling such complaints;
                    <br>
                    Eleven ways of handling guest Complaints:
                    <br><br>
                    1. Listen with concern and empathy.
                    <br><br>
                    2. Isolate the guest if possible, so that other guests won't overhear.
                    <br><br>
                    3. Stay calm. Don't argue with the guest.
                    <br><br>
                    4. Be aware of the guest's self-esteem. Show a personal interest in the problem
                    <br><br>
                    5. Try to use the guest name frequently.
                    <br><br>
                    6. Give the guest your undivided attention. Concentrate on the problem, no on
                    placing blame. Do NOT Insult the guest.
                    <br><br>
                    7. Take notes. Writing down the key facts saves time if someone else must get
                    involved. Also, Guest tends to slow down when they see the front desk agent
                    trying to write down the issue.
                    <br><br>
                    8. Tell the guest what can be the best done. Offer choices. Don't promise the
                    impossible, and don't exceed your authority.
                    <br><br>
                    9. Set an approximate time for completion of corrective actions. Be specific, but do
                    not underestimate the amount of time it will take to resolve the problem.
                    <br><br>
                    10.Monitor the progress of the corrective action.
                    <br><br>
                    11.Follow up. Even if the complaint was resolved by someone else, Contact the
                    guest to ensure that the problem was resolved satisfactory.




                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        customerRight: require('@/assets/customer-right.jpg'),
    })
}
</script>
<style scoped>
.blog-heading {
    text-align: center;
    font-family: Oswald;
    font-weight: 400;
    font-size: 30px;
    color: var(--dull-black);
    padding-bottom: 20px;
}

.blog-img {
    height: 400px;
}

.blog-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container {
    padding-top: 150px;
}

.blog-text {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blog-text p {
    text-align: justify;
    width: 60vw;
    font-weight: 500;
}

@media only screen and (max-width: 800px) {
    .blog-text p {
        width: 80vw;
    }
}
</style>