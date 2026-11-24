  document.getElementById('form-triagem').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var erro = document.getElementById('erro');
    if (!v('assunto') || !v('nome') || !v('cidade') || !document.getElementById('aceite').checked) {
      erro.style.display = 'block';
      return;
    }
    erro.style.display = 'none';
    var linhas = [
      'Olá! Vim pelo site e gostaria de uma análise.',
      '',
      'Assunto: ' + v('assunto'),
      'Nome: ' + v('nome'),
      'Cidade: ' + v('cidade'),
      'Quem precisa do benefício: ' + (v('quem') || '-') + (v('idade') ? ' (idade: ' + v('idade') + ')' : ''),
      'Condição/diagnóstico: ' + (v('condicao') || '-'),
      'Já pediu ao INSS? ' + (v('inss') || '-'),
      'CadÚnico atualizado? ' + (v('cadunico') || '-'),
      'Como conheceu o escritório: ' + (v('origem') || '-')
    ];
    if (v('mensagem')) { linhas.push('', 'Mensagem: ' + v('mensagem')); }
    window.open('https://wa.me/5585997320122?text=' + encodeURIComponent(linhas.join('\n')), '_blank');
  });

  var carrossel = document.getElementById('depos-carousel');
  if (carrossel) {
    var itensOriginais = Array.prototype.slice.call(carrossel.querySelectorAll('.depo-print'));

    if (!carrossel.dataset.clonado) {
      itensOriginais.forEach(function (item) {
        var clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        carrossel.appendChild(clone);
      });
      carrossel.dataset.clonado = 'true';
    }

    var pausa = false;
    var arrastando = false;
    var origemArrasto = 0;
    var inicioScroll = 0;
    var meio = carrossel.scrollWidth / 2;
    var intervalo;

    var avancar = function () {
      if (pausa || document.hidden) return;

      var primeiro = carrossel.querySelector('.depo-print');
      var passo = primeiro ? primeiro.getBoundingClientRect().width + 20 : 360;

      carrossel.scrollLeft -= passo;

      if (carrossel.scrollLeft <= 0) {
        carrossel.scrollLeft = meio;
      }
    };

    var iniciarIntervalo = function () {
      window.clearInterval(intervalo);
      intervalo = window.setInterval(avancar, 1800);
    };

    carrossel.addEventListener('mouseenter', function () { pausa = true; });
    carrossel.addEventListener('mouseleave', function () { pausa = false; });
    carrossel.addEventListener('focusin', function () { pausa = true; });
    carrossel.addEventListener('focusout', function () { pausa = false; });
    carrossel.addEventListener('touchstart', function () { pausa = true; }, { passive: true });
    carrossel.addEventListener('touchend', function () { pausa = false; });

    carrossel.addEventListener('pointerdown', function (evento) {
      if (evento.pointerType === 'mouse' && evento.button !== 0) return;
      arrastando = true;
      origemArrasto = evento.clientX;
      inicioScroll = carrossel.scrollLeft;
      pausa = true;
      carrossel.setPointerCapture(evento.pointerId);
    });

    carrossel.addEventListener('pointermove', function (evento) {
      if (!arrastando) return;
      carrossel.scrollLeft = inicioScroll - (evento.clientX - origemArrasto);
    });

    carrossel.addEventListener('pointerup', function () {
      arrastando = false;
      pausa = false;
      iniciarIntervalo();
    });

    carrossel.addEventListener('pointercancel', function () {
      arrastando = false;
      pausa = false;
      iniciarIntervalo();
    });

    carrossel.scrollLeft = meio;
    iniciarIntervalo();
  }
