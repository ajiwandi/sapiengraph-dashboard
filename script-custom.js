                // Pricing data
                const pricing = {
                    monthly: {
                      lite: '$49',
                      pro: '$299',
                      proPlus: '$899',
                      business: '$1899'
                    },
                    annual: {
                      lite: '$40',
                      pro: '$249',
                      proPlus: '$749',
                      business: '$1582'
                    }
                  };
                
                  // Get elements
                  const toggle = document.getElementById('planToggle');
                  const litePrice = document.getElementById('litePrice');
                  const proPrice = document.getElementById('proPrice');
                  const proPlusPrice = document.getElementById('proPlusPrice');
                  const bizPrice = document.getElementById('bizPrice');
                
                  const annually = document.querySelectorAll('.paid-annually');
                  const credits = document.querySelectorAll('.free-credits');
                
                  // Animate number function
                  function animateNumber(element, start, end, duration) {
                    let startTimestamp = null;
                    const step = (timestamp) => {
                      if (!startTimestamp) startTimestamp = timestamp;
                      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                      element.innerHTML = Math.floor(progress * (end - start) + start);
                      if (progress < 1) {
                        window.requestAnimationFrame(step);
                      }
                    };
                    window.requestAnimationFrame(step);
                  }
                
                  // Toggle handler
                  function handleToggle() {
                    if (toggle.checked) {
                      // Update to annual pricing
                      updatePricing(pricing.annual);
                
                      // Show annually and credits using Bootstrap classes
                      annually.forEach(el => el.classList.remove('d-none'));
                      credits.forEach(el => el.classList.remove('d-none'));
                
                      // Animate to new numbers
                      animateNumber(litePrice, 49, 40, 500);
                      animateNumber(proPrice, 299, 249, 500);
                      animateNumber(proPlusPrice, 899, 749, 500);
                      animateNumber(bizPrice, 1899, 1582, 500);
                    } else {
                      // Update to monthly pricing
                      updatePricing(pricing.monthly);
                
                      // Hide annually and credits using Bootstrap classes
                      annually.forEach(el => el.classList.add('d-none'));
                      credits.forEach(el => el.classList.add('d-none'));
                
                      // Animate to new numbers
                      animateNumber(litePrice, 40, 49, 500);
                      animateNumber(proPrice, 249, 299, 500);
                      animateNumber(proPlusPrice, 749, 899, 500);
                      animateNumber(bizPrice, 1582, 1899, 500);
                    }
                  }
                
                  // Initially hide annually and credits using Bootstrap classes
                  annually.forEach(el => el.classList.add('d-none'));
                  credits.forEach(el => el.classList.add('d-none'));
                
                  // Attach the event listener
                  toggle.addEventListener('click', handleToggle);
                
                  // Trigger the toggle handler initially
                  handleToggle();
                
                  // Update pricing function
                  function updatePricing(plan) {
                    litePrice.textContent = plan.lite;
                    proPrice.textContent = plan.pro;
                    proPlusPrice.textContent = plan.proPlus;
                    bizPrice.textContent = plan.business;
                  }