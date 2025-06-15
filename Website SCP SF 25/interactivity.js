document.addEventListener("DOMContentLoaded", function () {
    // .atas1 slide down
    const atas1 = document.querySelector('.atas1');
    if (atas1) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    atas1.classList.add('visible');
                    observer.unobserve(atas1);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(atas1);
    }

    // .bawah1 (SCOPELLA 2025) scale up (ambil bawah1 pertama)
    const bawah1s = document.querySelectorAll('.bawah1');
    if (bawah1s.length > 0) {
        const bawah1 = bawah1s[0];
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bawah1.classList.add('scale');
                    observer.unobserve(bawah1);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(bawah1);
    }

    // .gataulah fade in
    const gataulah = document.querySelector('.gataulah');
    if (gataulah) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gataulah.classList.add('visible');
                    observer.unobserve(gataulah);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(gataulah);
    }

    // .bawah1 (Ecto Breakdown) ghost animation (ambil bawah1 kedua)
    if (bawah1s.length > 1) {
        const ecto = bawah1s[1];
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ecto.classList.add('ghost');
                    observer.unobserve(ecto);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(ecto);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".jiang");
    const closeButton = document.querySelector(".info-nav .close");
    const infoNav = document.getElementById("infoNav");

    if (menuButton && closeButton && infoNav) {
        menuButton.addEventListener("click", () => {
            infoNav.classList.add("active");
            menuButton.classList.add("active");
        });

        closeButton.addEventListener("click", () => {
            infoNav.classList.remove("active");
            menuButton.classList.remove("active");
        });
    }
});

function updateCountdown() {
    const targetDate = new Date("August 16, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "Waktu Habis!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
    const priceDisplay = document.querySelector('.price-display');
    const pendaftaranSection = document.querySelector('.pendaftaran');
    let animationRunning = false;

    function formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number).replace('IDR', 'Rp');
    }

    function startPriceAnimation() {
        if (animationRunning) return; 

        animationRunning = true;
        let currentValue = 0; 
        const targetValue = 20000000; 
        const duration = 3000; 
        const startTime = Date.now();

        function updateCounter() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1); 

            const easedProgress = 1 - Math.pow(1 - progress, 3);
            currentValue = Math.floor(easedProgress * targetValue);

            priceDisplay.textContent = formatRupiah(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCounter); 
            } else {
                
                addPlusSigns();
            }
        }

        function addPlusSigns() {
            let plusCount = 0; 
            const maxPlus = 2; 

            function addPlus() {
                if (plusCount < maxPlus) {
                    const span = document.createElement('span');
                    span.textContent = '+';
                    span.classList.add('plus-fade-in'); 
                    priceDisplay.appendChild(span);

                    plusCount++;
                    setTimeout(addPlus, 300); 
                }
            }

            addPlus();
        }

        updateCounter();
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                priceDisplay.classList.add('fade-in'); 
                startPriceAnimation();
                observer.unobserve(pendaftaranSection); 
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(pendaftaranSection);
});
document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll('.logo');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const title = document.getElementById('lomba-title');
    const detail = document.getElementById('lomba-detail');
    const description = document.querySelector('.lomba-description');

    const lombaDetails = {
        basket: {
            title: "BASKET-PUTRA",
            detail: `
                <strong>BIAYA:</strong><br>
                GELOMBANG I: Rp 350.000,00 dan uang W.O. sebesar Rp 50.000,00.<br><br>
                <strong>CP:</strong><br>
                Wisang<br>
                WA: 08174969671<br>
                LINE: wisangrsndriya
            `,
            link: "basket.html"
        },
        band: {
            title: "BAND",
            detail: `
                <strong>BIAYA:</strong><br>
                GELOMBANG I: Rp 125.000,00 dan uang W.O. sebesar Rp 50.000,00.<br><br>
                <strong>CP:</strong><br>
                Aiko<br>
                WA: 081319310095<br>
                LINE: gracielaiko
            `,
            link: "band.html"
        },
        "tari-tradisional": {
            title: "TARI TRADISIONAL",
            detail: `
                <strong>BIAYA:</strong><br>
                Group: Rp 300.000,00.<br>Solo: Rp 130.000,00.<br>Dan uang W.O sebesar Rp 50.000,00.<br><br>
                <strong>CP:</strong><br>
                Widya (Group)<br>
                WA: 085692054757<br>
                LINE: tahucokelat<br><br>
                Nadhifa (Solo)<br>
                WA: 085781139431<br>
                LINE: nadhifasyhlaa
            `,
            link: "tari-tradisional.html"
        },
        "modern-dance": {
            title: "MODERN DANCE",
            detail: `
                <strong>BIAYA:</strong><br>
                GELOMBANG I: Rp 250.000,00. dan uang W.O. sebesar Rp 50.000,00.<br><br>
                <strong>CP:</strong><br>
                Athaya<br>
                WA: 085719111964<br>
                LINE: tayyz14
            `,
            link: "modern-dance.html"
        },
        futsal: {
            title: "FUTSAL",
            detail: `
                <strong>BIAYA:</strong><br>
                GELOMBANG I: Rp 350.000,00. dan uang W.O. sebesar Rp 50.000,00.<br><br>
                <strong>CP:</strong><br>
                Albarra<br>
                WA: 0895326117900<br>
                LINE: 181537869
            `,
            link: "futsal.html"
        }
    };

    let currentIndex = 0;   

    function updateLombaSelector() {
        logos.forEach((logo, index) => {
            logo.classList.remove('active', 'left', 'right', 'hidden');

            if (index === currentIndex) {
                logo.classList.add('active'); 
            } else if (index === (currentIndex - 1 + logos.length) % logos.length) {
                logo.classList.add('left'); 
            } else if (index === (currentIndex + 1) % logos.length) {
                logo.classList.add('right'); 
            } else {
                logo.classList.add('hidden'); 
            }
        });

        const activeLogo = logos[currentIndex];
        const lombaKey = activeLogo.getAttribute('data-lomba');

      
        title.innerHTML = lombaDetails[lombaKey].title;
        detail.innerHTML = lombaDetails[lombaKey].detail;

       
        const infoButton = document.createElement('a');
        infoButton.href = lombaDetails[lombaKey].link;
        infoButton.className = 'info-button';
        infoButton.textContent = 'Info Lebih Lanjut';

        
        const existingButton = description.querySelector('.info-button');
        if (existingButton) existingButton.remove();
        description.appendChild(infoButton);

       
        description.classList.remove('show'); 
        setTimeout(() => {
            description.classList.add('show'); 
        }, 200); 
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + logos.length) % logos.length;
        updateLombaSelector();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % logos.length;
        updateLombaSelector();
    });

    
    updateLombaSelector();
});

document.addEventListener("DOMContentLoaded", function () {
    const gelombang = document.querySelector('.gelombang-container');
    if (!gelombang) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gelombang.classList.add('visible');
                observer.unobserve(gelombang);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(gelombang);
});

document.addEventListener("DOMContentLoaded", function () {
    const gelombang = document.querySelector('.gelombang-container');
    if (!gelombang) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Paksa browser render state awal sebelum menambah class
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        gelombang.classList.add('visible');
                    });
                });
                observer.unobserve(gelombang);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(gelombang);
});

document.addEventListener("DOMContentLoaded", function () {
    const tombolDaft = document.querySelector('.tombolDaft');
    if (!tombolDaft) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
          
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        tombolDaft.classList.add('visible');
                    });
                });
                observer.unobserve(tombolDaft);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(tombolDaft);
});


const bawah1Img = document.querySelector('.bawah1-img');
if (bawah1Img) {
    requestAnimationFrame(() => {
        bawah1Img.classList.add('pop-in');
    });
}

const bawah1Ecto = document.querySelector('.bawah1-ecto');
if (bawah1Ecto) {
    requestAnimationFrame(() => {
        bawah1Ecto.classList.add('ghostbuster-in');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Animasi price-display-outer
    const priceDisplayOuter = document.querySelector('.price-display-outer');
    if (priceDisplayOuter) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    priceDisplayOuter.classList.add('visible');
                    observer.unobserve(priceDisplayOuter);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(priceDisplayOuter);
    }

    // Anim tombolDaft-outer
    const tombolDaftOuter = document.querySelector('.tombolDaft-outer');
    if (tombolDaftOuter) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tombolDaftOuter.classList.add('visible');
                    observer.unobserve(tombolDaftOuter);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(tombolDaftOuter);
    }
});

const lombaDesc = document.querySelector('.lomba-description');
if (lombaDesc) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lombaDesc.classList.add('pop-in');
                observer.unobserve(lombaDesc);
            }
        });
    }, { threshold: 0.2 });
    observer.observe(lombaDesc);
}

document.addEventListener("DOMContentLoaded", function () {
    const countdown2 = document.querySelector('.countdown2');
    if (countdown2) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countdown2.classList.add('fade-in');
                    observer.unobserve(countdown2);
                }
            });
        }, { threshold: 0.2 });
        observer.observe(countdown2);
    }
});