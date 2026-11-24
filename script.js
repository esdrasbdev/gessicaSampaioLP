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
    var ultimoTempo = 0;
    var arrastando = false;
    var origemArrasto = 0;
    var inicioScroll = 0;

    var animar = function (tempo) {
      if (!ultimoTempo) {
        ultimoTempo = tempo;
      }

      var delta = Math.min(tempo - ultimoTempo, 32);
      ultimoTempo = tempo;

      if (!pausa && !document.hidden) {
        carrossel.scrollLeft += delta * 0.045;

        if (carrossel.scrollLeft >= carrossel.scrollWidth / 2) {
          carrossel.scrollLeft = 0;
        }
      }

      window.requestAnimationFrame(animar);
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
    });

    carrossel.addEventListener('pointercancel', function () {
      arrastando = false;
      pausa = false;
    });

    carrossel.scrollLeft = 0;
    window.requestAnimationFrame(animar);
  }
