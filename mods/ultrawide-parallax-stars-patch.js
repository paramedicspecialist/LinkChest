// Fix for Parallax Stars on Ultrawide Displays from https://github.com/johnggli/linktree/pull/11
// Thanks to Pkrakmo https://github.com/Pkrakmo

      const stars1 = []
      const stars2 = []
      const stars3 = []

      const numberOfStars1 = '2700'
      const numberOfStars2 = '1625'
      const numberOfStars3 = '275'


      for (let i = 0; i < numberOfStars1; i++) {
        const pos1 = (Math.floor(Math.random() * 5200))
        const pos2 = (Math.floor(Math.random() * 5200))
        stars1.push(`${pos1}px ${pos2}px #fff`)
      }

      for (let i = 0; i < numberOfStars2; i++) {
        const pos1 = (Math.floor(Math.random() * 5200))
        const pos2 = (Math.floor(Math.random() * 5200))
        stars2.push(`${pos1}px ${pos2}px #fff`)
      }

      for (let i = 0; i < numberOfStars3; i++) {
        const pos1 = (Math.floor(Math.random() * 5200))
        const pos2 = (Math.floor(Math.random() * 5200))
        stars3.push(`${pos1}px ${pos2}px #fff`)
      }

      const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

      addCSS(`#stars1{ box-shadow:${stars1}}`)
      addCSS(`#stars1:after{ box-shadow:${stars1}}`)

      addCSS(`#stars2{ box-shadow:${stars2}}`)
      addCSS(`#stars2:after{ box-shadow:${stars2}}`)

      addCSS(`#stars3{ box-shadow:${stars3}}`)
      addCSS(`#stars3:after{ box-shadow:${stars3}}`)
