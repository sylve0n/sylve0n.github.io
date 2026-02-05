<template>
  <h1 class="title">Contact Me</h1>
  <h2>I'm on the World Wide Web!</h2>
  <div class="socials">
    <NuxtLink to="https://github.com/sylve0n"
     class="social__link"
     target="_blank"
     rel="noopener norefferer">
     <img src="/img/github.svg" alt="GitHub"/>
    </NuxtLink>
    <NuxtLink to="https://www.linkedin.com/in/h-stew/"
     class="social__link"
     target="_blank"
     rel="noopener norefferer">
     <img src="/img/linkedin.svg" alt="LinkedIn"/>
    </NuxtLink>
    <a class="social__link" href="javascript:void(0)" onclick="window.location.href = 'mailto:' + 'contact' + '@' + 'hannahs.dev'">
      <img src="/img/email.svg" alt="Email"/>
    </a>
  </div>
  
</template>

<style lang="scss">
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
  }
  .social__link {
    transition: 0.1s background-color, 0.1s transform;
    img {
      width: 75px;
      height: 75px;
    }
    &:hover {
      transform: translate(0.3em, 0.2em);
    }
  }
</style>