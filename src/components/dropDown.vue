<template>
    <div class="dropdown">
        <ul class="dropdown-links">
            <a href="/hayche-projects">
                <li class="dropdown-link">hayche dev</li>
            </a>
            <a href="/hayche-academy">
                <li class="dropdown-link">hayche academy</li>
            </a>
            
            <a href="/hayche-digital">
                <li class="dropdown-link">hayche digital</li>
            </a>
            <a href="/hayche-lifestyle">
                <li class="dropdown-link">hayche lifestyle</li>
            </a>
            <a href="https://hayche-website.pages.dev/" target="blank">
                <li class="dropdown-link">hayche network</li>
            </a>
        </ul>
    </div>
</template>

<script>
export default {}

</script>
<style>
.dropdown {
    display: none;
}

.dropdown-links {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 50px;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 30px;
    /* height: 30vh; */
   /* position: absolute; */
}

.dropdown {
    color: var(--light);
}

.dropdown-link {
    text-transform: capitalize;
}

.dropdown-links a {
    color: var(--light);
    padding-bottom: 10px;
}

.dropdown-links a:hover {
    border-bottom: 2px solid var(--light);
}</style>
