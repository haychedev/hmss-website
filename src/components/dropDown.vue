<template>

<div class="dropdown">
        <ul class="dropdown-links">
            <a href="/academy"><li class="dropdown-link">hayche academy</li></a>
            <a href="/projects"><li class="dropdown-link">hayche development</li></a>
            <a href="/digital"><li class="dropdown-link">hayche digital</li></a>
            <a href="/lifestyle"><li class="dropdown-link">hayche lifestyle</li></a>
            <a href="/network"><li class="dropdown-link">hayche network</li></a>
        </ul>
    </div>

</template>

<script>
export default{}
    
</script>
<style>
.dropdown{
    display: none;
}

.dropdown-links{
    display: flex;
    list-style-type: none;
    gap: 80px;
    justify-content: center;
    align-items: center;
    height: 10vh;
}
.dropdown{
    color: var(--light);
}

.dropdown-link{
    text-transform: capitalize;
}

.dropdown-links a{
    color: var(--light);
    padding-bottom: 10px;
}

.dropdown-links a:hover{
    border-bottom: 2px solid var(--light);
}

</style>
