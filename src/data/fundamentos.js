export const fundamentos = [
  {
    id: "intro",
    titulo: "1. Introdução aos Materiais Betuminosos",
    secoes: [
      {
        titulo: "1.1 Definição e Importância",
        texto: `Os materiais betuminosos são produtos orgânicos, de cor escura, constituídos essencialmente por hidrocarbonetos de elevada massa molecular. São amplamente utilizados como aglomerantes em pavimentação, impermeabilização e outras aplicações. No contexto rodoviário, o principal representante é o Cimento Asfáltico de Petróleo (CAP), um ligante que confere coesão, flexibilidade e durabilidade às misturas asfálticas.

Ao contrário dos agregados, que fornecem resistência mecânica por atrito e intertravamento, o CAP atua como elemento de união, distribuindo tensões e garantindo a integridade estrutural do pavimento sob diferentes condições de carga e temperatura.`
      },
      {
        titulo: "1.2 Papel no Pavimento",
        texto: `Um pavimento asfáltico é um sistema multicamadas, sendo a camada de rolamento (revestimento) composta por uma mistura de agregados e ligante betuminoso. As funções do CAP nesse sistema são:

• **Coesão**: mantém os agregados unidos, formando um material monolítico.
• **Aderência**: fixa a mistura à camada subjacente (base ou regularização).
• **Impermeabilização**: reduz a entrada de água, protegendo as camadas inferiores.
• **Flexibilidade**: permite pequenas deformações sem ruptura, adaptando-se às tensões do tráfego e às variações térmicas.
• **Resistência à fadiga**: absorve parte da energia das cargas repetidas, retardando o aparecimento de trincas.

O desempenho do pavimento está diretamente ligado às propriedades do CAP, que devem ser adequadas ao clima, ao volume de tráfego e à natureza dos agregados.`
      },
      {
        titulo: "1.3 Por que Estudar o CAP em Detalhe?",
        texto: `A complexidade do comportamento do CAP justifica um estudo aprofundado, pois grande parte das patologias em pavimentos asfálticos tem origem no ligante:

• **Trincas por fadiga ou térmicas**: relacionadas à rigidez excessiva do CAP em baixas temperaturas ou ao envelhecimento.
• **Deformações permanentes (trilhas de roda)**: decorrentes de um CAP muito mole para a temperatura de serviço ou tráfego intenso.
• **Desagregação e descolamento**: falha de aderência entre CAP e agregados, muitas vezes agravada pela presença de água.
• **Exsudação**: excesso de ligante na superfície, devido a dosagem inadequada ou CAP muito fluido.

Conhecer a composição, a reologia, os ensaios de caracterização e os fatores que afetam o desempenho do CAP permite ao engenheiro selecionar o ligante correto, dosar a mistura com precisão e prever o comportamento do pavimento ao longo da vida útil.`
      }
    ]
  },

  {
    id: "estrutura",
    titulo: "2. Estrutura e Composição do CAP",
    secoes: [
      {
        titulo: "2.1 Origem e Processo de Refino",
        texto: `O CAP é obtido como resíduo da destilação fracionada do petróleo. Após a separação dos derivados leves (gasolina, querosene, diesel) nas colunas de destilação atmosférica, o resíduo é encaminhado à destilação a vácuo, onde são removidas frações mais pesadas (óleos lubrificantes). O fundo dessa coluna, denominado “asfalto de vácuo” ou “resíduo de vácuo”, pode ser utilizado diretamente ou sofrer processos complementares:

• **Oxidação (sopro)**: passagem de ar quente para aumentar o ponto de amolecimento e a consistência, produzindo asfaltos oxidados (menos utilizados em pavimentação atualmente).
• **Desasfaltagem**: remoção parcial dos asfaltenos com solventes, produzindo asfaltos com propriedades específicas.

A composição do petróleo de origem influencia fortemente as características finais do CAP. Petróleos naftênicos, com alto teor de aromáticos, produzem asfaltos mais adequados para pavimentação devido à boa ductilidade.`
      },
      {
        titulo: "2.2 Composição Química: Frações SARA",
        texto: `O CAP é uma mistura complexa de hidrocarbonetos e heterocompostos, que pode ser separada em quatro frações principais pelo método SARA (Saturados, Aromáticos, Resinas, Asfaltenos):

• **Saturados**: parafinas e naftenos, de baixa polaridade. Responsáveis pela fluidez e plasticidade.
• **Aromáticos**: hidrocarbonetos com anéis benzênicos, atuam como solventes dos asfaltenos.
• **Resinas**: moléculas polares que estabilizam os asfaltenos em suspensão coloidal.
• **Asfaltenos**: fração de maior massa molar e polaridade, precipitam em solventes como n-heptano. Conferem rigidez, viscosidade e resistência térmica.

O balanço entre essas frações define o comportamento do CAP. Um alto teor de asfaltenos resulta em ligantes mais duros e suscetíveis à trinca; excesso de saturados pode levar à exsudação; baixo teor de resinas favorece a floculação dos asfaltenos, acelerando o envelhecimento.`
      },
      {
        titulo: "2.3 Modelo Coloidal",
        texto: `A estrutura do CAP é frequentemente descrita como um sistema coloidal, onde os asfaltenos formam micelas dispersas em um meio contínuo de maltenos (saturados + aromáticos + resinas). As resinas atuam como agentes peptizantes, envolvendo os asfaltenos e impedindo sua aglomeração.

• **Sistema coloidal estável**: quando há resinas suficientes para manter os asfaltenos dispersos, o ligante apresenta boa ductilidade e comportamento reológico adequado.
• **Sistema coloidal instável**: com o envelhecimento ou composição desbalanceada, os asfaltenos floculam e precipitam, aumentando a rigidez e reduzindo a adesividade.

Esse modelo explica fenômenos como a susceptibilidade térmica e a modificação por polímeros (que atuam na estrutura coloidal para melhorar a elasticidade).`
      },
      {
        titulo: "2.4 Influência da Estrutura nas Propriedades",
        texto: `A composição química e a organização coloidal afetam diretamente:

• **Viscosidade**: maior concentração de asfaltenos aumenta a viscosidade; maior teor de aromáticos reduz.
• **Suscetibilidade térmica**: ligantes com estrutura coloidal mais estável tendem a variar menos suas propriedades com a temperatura.
• **Envelhecimento**: a oxidação promove a formação de novos asfaltenos e a diminuição das resinas, desestabilizando o coloide.
• **Compatibilidade com agregados**: frações polares (resinas e asfaltenos) são responsáveis pela aderência; a presença de água pode romper essa ligação.`
      }
    ]
  },

  {
    id: "reologia",
    titulo: "3. Comportamento Reológico do CAP",
    secoes: [
      {
        titulo: "3.1 Viscoelasticidade",
        texto: `O CAP é um material viscoelástico, ou seja, exibe comportamento intermediário entre um sólido elástico (que recupera a deformação) e um líquido viscoso (que escoa irreversivelmente). A resposta do ligante depende do tempo de aplicação da carga, da temperatura e da magnitude da tensão.

A viscoelasticidade é descrita por modelos reológicos como o de Maxwell (mola + amortecedor em série) e o de Kelvin-Voigt (mola + amortecedor em paralelo). Para o CAP, o modelo de Burgers (combinação dos dois) é frequentemente usado para representar a deformação instantânea, a recuperação retardada e a deformação permanente.`
      },
      {
        titulo: "3.2 Componente Elástica e Viscosa",
        texto: `• **Elasticidade**: capacidade de recuperar parte da deformação após o descarregamento. É essencial para resistir à fadiga e às deformações cíclicas do tráfego. Nos CAPs convencionais, a componente elástica é pequena; ligantes modificados com polímeros elastoméricos (SBS) aumentam significativamente essa propriedade.

• **Viscosidade**: resistência ao escoamento. Controla a trabalhabilidade durante a usinagem e a resistência a deformações permanentes em altas temperaturas. A viscosidade é altamente dependente da temperatura e da taxa de cisalhamento (comportamento não-newtoniano).`
      },
      {
        titulo: "3.3 Dependência de Tempo e Temperatura",
        texto: `O princípio da equivalência tempo-temperatura é fundamental para a reologia dos asfaltos: uma carga aplicada rapidamente (alta frequência) equivale, em termos de resposta mecânica, a uma temperatura mais baixa; uma carga lenta equivale a uma temperatura mais alta.

Isso explica por que:

• Em altas velocidades (tráfego rápido), o CAP se comporta de forma mais elástica.
• Em baixas velocidades (estacionamento, tráfego lento), predominam as deformações viscosas.
• Em climas quentes, o CAP fica mais macio e suscetível a trilhas de roda.
• Em climas frios, torna-se rígido e quebradiço, favorecendo trincas.

Essa dependência é quantificada por curvas mestras (master curves) geradas a partir de ensaios com varredura de temperatura e frequência, como o ensaio DSR (Reômetro de Cisalhamento Dinâmico).`
      }
    ]
  },

  {
    id: "temperatura",
    titulo: "4. Influência da Temperatura no Comportamento",
    secoes: [
      {
        titulo: "4.1 Efeito da Temperatura na Rigidez",
        texto: `A temperatura é o fator ambiental que mais afeta as propriedades mecânicas do CAP. Um aumento de 10°C pode reduzir a viscosidade em até 50% ou mais. Essa sensibilidade térmica é medida por índices como o Índice de Penetração (IP) e o Índice de Suscetibilidade Térmica (IST).

A variação da rigidez com a temperatura é representada pela curva de rigidez (módulo complexo |G*| vs. temperatura). Quanto mais inclinada a curva, maior a suscetibilidade térmica, o que é indesejável para o desempenho do pavimento em regiões com grandes variações climáticas.`
      },
      {
        titulo: "4.2 Problemas Associados",
        texto: `• **Altas temperaturas de serviço** (verão ou regiões quentes): o CAP pode se tornar muito fluido, resultando em deformações permanentes (trilhas de roda) e exsudação. A especificação de CAP para essas condições exige alto ponto de amolecimento e baixa penetração.

• **Baixas temperaturas** (inverno ou regiões frias): o CAP se torna rígido e frágil, levando ao aparecimento de trincas térmicas (longitudinais ou transversais). A baixa temperatura é crítica também para o comportamento de fadiga, pois o material perde a capacidade de relaxar tensões.

• **Variações bruscas** (ciclos de congelamento e descongelamento): podem acelerar a degradação por fadiga térmica e destacamento da mistura.`
      },
      {
        titulo: "4.3 Suscetibilidade Térmica e Índice de Penetração",
        texto: `A suscetibilidade térmica do CAP é avaliada por meio do Índice de Penetração (IP), calculado a partir dos valores de penetração a duas temperaturas (normalmente 25°C e 45°C) e do ponto de amolecimento.

Fórmula empírica: IP = (1952 - 500 log(P_25) - 20 P_amolec) / (50 log(P_25) - P_amolec - 120)

Faixas típicas:
• CAPs convencionais: IP entre -1,0 e +1,0
• CAPs modificados: IP > +1,0 (menor suscetibilidade)
• IP muito negativo: alta suscetibilidade, comportamento inadequado

Um CAP ideal deve ter IP elevado, mantendo rigidez adequada tanto em altas quanto em baixas temperaturas.`
      }
    ]
  },

  {
    id: "propriedades",
    titulo: "5. Propriedades Fundamentais dos CAPs",
    secoes: [
      {
        titulo: "5.1 Viscosidade",
        texto: `A viscosidade é a medida da resistência ao escoamento. Para o CAP, ela é determinada em diferentes temperaturas (ex.: 60°C, 135°C, 150°C) usando viscosímetros capilares ou rotacionais. A viscosidade a 60°C está relacionada à capacidade de resistir a deformações permanentes; a viscosidade a 135°C indica a trabalhabilidade durante a mistura e espalhamento.

O CAP é classificado por faixas de viscosidade segundo normas como ASTM D2171 (viscosidade absoluta) e D4402 (viscosidade Brookfield). A especificação brasileira (DNIT 095/2006) define classes como 50/70, 30/45 etc., baseadas na penetração, mas também fixa limites de viscosidade.`
      },
      {
        titulo: "5.2 Penetração",
        texto: `A penetração é um ensaio empírico que mede a consistência do CAP. Consiste na profundidade (décimos de milímetro) que uma agulha padronizada penetra na amostra sob carga de 100 g durante 5 segundos, a 25°C.

Quanto maior o valor, mais mole o ligante. As classes de CAP são tradicionalmente definidas pela faixa de penetração: 30/45, 50/70, 85/100, etc. Embora a penetração seja um índice simples, ela não fornece informação sobre o comportamento reológico em outras temperaturas ou taxas de carregamento, sendo gradualmente substituída por especificações baseadas no desempenho (PG).`
      },
      {
        titulo: "5.3 Ductilidade",
        texto: `A ductilidade mede a capacidade de deformação plástica do CAP antes da ruptura. O ensaio (ASTM D113) estica um corpo de prova em forma de “8” a 25°C (ou 15°C) a uma velocidade constante, registrando o alongamento em centímetros até a ruptura.

Valores típicos para CAPs convencionais são superiores a 100 cm. Baixa ductilidade indica fragilidade e pode estar associada a excesso de asfaltenos ou envelhecimento.`
      },
      {
        titulo: "5.4 Ponto de Amolecimento",
        texto: `O ponto de amolecimento (ASTM D36) é a temperatura na qual uma esfera de aço de 3,5 g, colocada sobre um disco de CAP, atinge o fundo de um suporte padronizado, sob aquecimento controlado. Corresponde a uma condição de rigidez muito baixa, próxima ao escoamento.

Quanto maior o ponto de amolecimento, maior a resistência do CAP às altas temperaturas. Valores típicos variam de 45°C a 55°C para CAPs convencionais; CAPs modificados podem atingir mais de 70°C.`
      },
      {
        titulo: "5.5 Outras Propriedades",
        texto: `• **Ponto de Fulgor**: temperatura mínima na qual os vapores do CAP se inflamam na presença de chama; essencial para segurança durante o aquecimento.
• **Solubilidade**: teor de material solúvel em tricloroetileno; deve ser ≥ 99% para garantir a pureza do ligante.
• **Perda por aquecimento**: medida de volatilidade e envelhecimento em curto prazo.
• **Massa específica**: utilizada para conversão volumétrica.`
      }
    ]
  },

  {
    id: "ligantes",
    titulo: "6. Tipos de Ligantes Betuminosos",
    secoes: [
      {
        titulo: "6.1 CAP Convencional",
        texto: `O CAP puro, derivado diretamente do refino, é classificado por penetração ou viscosidade. É o mais utilizado em pavimentação, especialmente em condições climáticas moderadas e tráfego leve a médio. Suas principais limitações são a alta suscetibilidade térmica e a baixa elasticidade.`
      },
      {
        titulo: "6.2 CAP Modificado por Polímeros",
        texto: `A adição de polímeros (elastoméricos ou plastoméricos) ao CAP visa melhorar seu desempenho em ampla faixa de temperatura.

• **Polímeros elastoméricos** (SBS – estireno-butadieno-estireno): conferem elasticidade, aumentando a resistência à fadiga e à deformação permanente. São ideais para altas solicitações de tráfego e variações climáticas acentuadas.
• **Polímeros plastoméricos** (EVA, PE): aumentam a rigidez e o ponto de amolecimento, melhorando a resistência à deformação plástica, mas com menor elasticidade.

Os CAPs modificados são especificados por ensaios complementares (recuperação elástica, ductilidade a baixas temperaturas, DSR) e apresentam melhor desempenho em rodovias de alto tráfego, faixas de ônibus, aeroportos e regiões extremas.`
      },
      {
        titulo: "6.3 Emulsões Asfálticas",
        texto: `As emulsões são dispersões de partículas de CAP em água, estabilizadas por agentes emulsificantes. Podem ser:

• **Catiônicas**: carga positiva, aderem bem a agregados com carga negativa (maioria dos agregados graníticos e silicosos); mais utilizadas em pavimentação.
• **Aniônicas**: carga negativa, empregadas em agregados calcários.
• **Não iônicas**: menos comuns.

As emulsões permitem aplicação a frio, eliminando a necessidade de aquecimento do ligante, sendo usadas em tratamentos superficiais, microrevestimentos, reciclagem a frio e camadas de ligação. São classificadas por sua ruptura (rápida, média ou lenta) e viscosidade.`
      },
      {
        titulo: "6.4 Asfaltos Diluídos (Cutbacks)",
        texto: `São misturas de CAP com solventes voláteis (querosene, gasolina, etc.) para reduzir a viscosidade a frio. Após aplicação, o solvente evapora, deixando o CAP residual. Devido a preocupações ambientais e de segurança, seu uso tem sido reduzido em favor de emulsões.`
      },
      {
        titulo: "6.5 Outros Ligantes Especiais",
        texto: `• **Asfalto borracha**: obtido pela digestão de pó de pneu moído no CAP; melhora elasticidade, resistência à fadiga e reduz ruído.
• **Asfaltos com aditivos químicos**: melhoradores de aderência, agentes antidescolamento, surfactantes.
• **Ligantes alternativos**: asfaltos naturais (como o Trinidad Lake Asphalt) e ligantes de fontes renováveis (bioasfaltos) são estudados para sustentabilidade.`
      }
    ]
  },

  {
    id: "envelhecimento",
    titulo: "7. Envelhecimento do CAP",
    secoes: [
      {
        titulo: "7.1 Mecanismos de Envelhecimento",
        texto: `O envelhecimento do CAP ocorre por dois processos principais:

• **Oxidação**: reação química com o oxigênio atmosférico, promovendo a formação de compostos carbonílicos e sulfóxidos, aumento dos asfaltenos e perda de resinas. É acelerada pela temperatura, radiação UV e presença de agregados com alta área superficial.
• **Perda de voláteis**: evaporação de frações leves durante o aquecimento em usina (envelhecimento de curto prazo) ou ao longo da vida útil (envelhecimento de longo prazo).
• **Endurecimento físico**: rearranjo molecular (síntese) que aumenta a rigidez sem alteração química significativa.`
      },
      {
        titulo: "7.2 Fases do Envelhecimento",
        texto: `• **Envelhecimento de curto prazo (ET)**: ocorre durante a produção, transporte, espalhamento e compactação da mistura. Simulado em laboratório pelo ensaio RTFOT (Rolling Thin Film Oven Test) ou TFOT (Thin Film Oven Test).
• **Envelhecimento de longo prazo (EL)**: ocorre em serviço, devido à exposição contínua ao oxigênio, calor, umidade e radiação. Simulado pelo PAV (Pressure Aging Vessel), que expõe o CAP envelhecido pelo RTFOT a alta pressão e temperatura.`
      },
      {
        titulo: "7.3 Consequências do Envelhecimento",
        texto: `O envelhecimento aumenta a rigidez, reduz a ductilidade e a adesividade, tornando o CAP mais suscetível a trincas por fadiga e térmicas. A perda de aderência também pode levar à desagregação da mistura.

As especificações modernas (Superpave) estabelecem limites para a variação de propriedades após o envelhecimento, garantindo que o ligante mantenha desempenho adequado durante a vida útil do pavimento.`
      },
      {
        titulo: "7.4 Mitigação do Envelhecimento",
        texto: `• **Modificação com polímeros**: alguns polímeros retardam a oxidação e mantêm elasticidade após envelhecimento.
• **Aditivos antioxidantes**: incorporados ao CAP ou à mistura.
• **Controle de temperatura de usinagem**: evitar superaquecimento.
• **Seleção de CAPs com menor susceptibilidade térmica e maior resistência ao envelhecimento** (ex.: CAP 50/70 vs. 30/45).`
      }
    ]
  },

  {
    id: "aderencia",
    titulo: "8. Aderência CAP-Agregado",
    secoes: [
      {
        titulo: "8.1 Definição e Importância",
        texto: `A aderência é a capacidade do CAP de se fixar aos agregados e resistir à ação da água. É um dos fatores críticos para a durabilidade da mistura, pois a perda de aderência (descolamento) leva à desagregação, formação de panelas e perda da integridade estrutural.`
      },
      {
        titulo: "8.2 Mecanismos de Aderência",
        texto: `A adesão ocorre por combinação de:
• **Aderência química**: ligações polares entre os componentes ativos do CAP (resinas, asfaltenos) e a superfície dos agregados (cargas elétricas, grupos funcionais).
• **Aderência física**: penetração do CAP nas irregularidades superficiais do agregado (ancoragem).
• **Molhabilidade**: capacidade do CAP de espalhar-se sobre a superfície do agregado, que depende da tensão superficial e da viscosidade.

Agregados ácidos (graníticos, quartzíticos) geralmente apresentam menor aderência que agregados básicos (calcários).`
      },
      {
        titulo: "8.3 Fatores que Afetam a Aderência",
        texto: `• **Natureza do agregado**: mineralogia, textura, porosidade, carga superficial.
• **Propriedades do CAP**: composição química, polaridade, viscosidade.
• **Presença de água**: a água pode penetrar na interface, rompendo as ligações químicas e causando descolamento (stripping).
• **Envelhecimento**: a oxidação altera a polaridade e reduz a aderência.
• **Tráfego e variações térmicas**: induzem tensões cíclicas que podem propagar a descolagem.`
      },
      {
        titulo: "8.4 Ensaios de Aderência",
        texto: `• **Ensaio de adesividade** (DNIT 179/2018): avalia visualmente a porcentagem de área de agregado recoberta por CAP após imersão em água.
• **Módulo de resiliência após condicionamento**: compara o módulo da mistura seca e após imersão.
• **Ensaios de resistência à tração por compressão diametral** (Lottman, AASHTO T283): medem a perda de resistência devido à ação da água.

Quando a aderência é insuficiente, utilizam-se agentes de adesividade (aminas, dodecilamina) incorporados ao CAP.`
      }
    ]
  },

  {
    id: "defeitos",
    titulo: "9. Defeitos em Pavimentos Relacionados ao CAP",
    secoes: [
      {
        titulo: "9.1 Trincas",
        texto: `As trincas podem ser classificadas quanto à origem:

• **Trincas por fadiga (couro de jacaré)**: resultam da ação repetida de cargas que ultrapassam a capacidade de resistência da mistura. O CAP envelhecido ou muito rígido reduz a capacidade de relaxamento de tensões, acelerando o aparecimento.
• **Trincas térmicas**: ocorrem em regiões frias, devido à contração do pavimento. CAPs com baixa resistência a baixas temperaturas (PG baixo) são mais suscetíveis.
• **Trincas reflexivas**: propagação de trincas da camada inferior (base ou subleito) para o revestimento; podem ser retardadas por CAPs com maior elasticidade.
• **Trincas longitudinais**: associadas à má compactação, juntas de construção ou problemas estruturais.`
      },
      {
        titulo: "9.2 Deformações Permanentes (Trilhas de Roda)",
        texto: `O afundamento plástico (rutting) é uma deformação permanente causada pelo fluxo viscoso do CAP em altas temperaturas ou por consolidação da estrutura do agregado. Ocorre principalmente em faixas de tráfego lento (paradas de ônibus, semáforos) e climas quentes.

CAPs com alto ponto de amolecimento, baixa penetração ou modificação por polímeros são mais resistentes a esse tipo de defeito.`
      },
      {
        titulo: "9.3 Desagregação e Descolamento",
        texto: `A desagregação é a perda de agregados da superfície, resultante da quebra da aderência CAP-agregado. Pode ser causada por:

• Água e umidade (stripping)
• Envelhecimento e perda de ductilidade
• Falta de adesividade intrínseca do ligante ou agregado
• Trafego intenso e ação de pneus com correntes

O problema é mais grave em misturas com CAP convencional e agregados ácidos.`
      },
      {
        titulo: "9.4 Exsudação",
        texto: `É a migração do CAP para a superfície, formando uma película brilhante e escorregadia. Ocorre quando a dosagem de CAP está excessiva ou o ligante é muito mole para a temperatura ambiente. Pode levar à perda de textura e segurança.`
      }
    ]
  },

  {
    id: "ensaios",
    titulo: "10. Ensaios de Caracterização do CAP",
    secoes: [
      {
        titulo: "10.1 Ensaios Empíricos e Tradicionais",
        texto: `• **Penetração (ASTM D5)**: determina a consistência a 25°C.
• **Ponto de amolecimento (ASTM D36)**: temperatura de transição para estado líquido.
• **Ductilidade (ASTM D113)**: capacidade de alongamento.
• **Viscosidade Saybolt-Furol (ASTM D88)** ou **viscosidade Brookfield (ASTM D4402)**: resistência ao escoamento.
• **Ponto de fulgor (ASTM D92)**: segurança.
• **Solubilidade (ASTM D2042)**: pureza.
• **Perda por aquecimento (ASTM D1754)**: avaliação de envelhecimento de curto prazo.`
      },
      {
        titulo: "10.2 Ensaios de Desempenho (Superpave/Performance Grade)",
        texto: `O sistema Superpave (Strategic Highway Research Program) introduziu ensaios que medem propriedades fundamentais do CAP em diferentes temperaturas:

• **DSR (Reômetro de Cisalhamento Dinâmico)**: mede o módulo complexo (|G*|) e o ângulo de fase (δ) em altas e médias temperaturas. Permite determinar as temperaturas de desempenho PG (ex.: PG 64-22).
• **BBR (Reômetro de Viga Flexionante)**: mede a rigidez em flexão e a taxa de relaxação de tensões em baixas temperaturas.
• **RTFOT e PAV**: simulam envelhecimento de curto e longo prazo.

O resultado é uma classificação PG (ex.: PG 76-28) que indica as temperaturas máxima e mínima de serviço para as quais o CAP é adequado.`
      },
      {
        titulo: "10.3 Ensaios Especiais",
        texto: `• **Recuperação elástica**: mede a capacidade de recuperação após deformação, importante para CAPs modificados.
• **Teor de polímero**: por espectroscopia ou separação química.
• **Adesividade**: ensaios de descolamento (Tensile Strength Ratio – TSR).
• **Ensaio de fluência**: mede deformação permanente (MSCR – Multiple Stress Creep Recovery) para tráfego pesado.`
      }
    ]
  },

  {
    id: "dosagem",
    titulo: "11. Dosagem Marshall de Misturas Asfálticas",
    secoes: [
      {
        titulo: "11.1 Objetivo da Dosagem",
        texto: `A dosagem de misturas asfálticas a quente visa determinar o teor ótimo de CAP que equilibre resistência mecânica, durabilidade, trabalhabilidade e economia. O método Marshall (DNIT 031/2006, ASTM D1559) é um dos mais utilizados no Brasil, embora métodos volumétricos (Superpave) estejam ganhando espaço.`
      },
      {
        titulo: "11.2 Parâmetros Avaliados",
        texto: `Para cada teor de CAP (geralmente três ou quatro teores ao redor do teor estimado), são moldados corpos de prova e determinados:

• **Estabilidade**: carga máxima suportada pelo corpo de prova (kN ou kgf).
• **Fluência**: deformação (mm) correspondente à estabilidade.
• **Vazios**: porcentagem de vazios na mistura (Vv), nos agregados (VBA) e preenchidos por CAP (VBP).
• **Densidade aparente e teórica**.

A curva de estabilidade, fluência, vazios e massa específica em função do teor de CAP permite a escolha do teor ótimo, que atende aos limites especificados (ex.: Vv entre 3% e 5%, estabilidade mínima, fluência dentro da faixa).`
      },
      {
        titulo: "11.3 Teor Ótimo de CAP",
        texto: `O teor ótimo é definido como a média entre:
• Teor correspondente ao máximo de estabilidade.
• Teor correspondente à massa específica máxima.
• Teor correspondente ao limite médio de vazios (Vv = 4% para camada de rolamento).

Quando há requisitos de fluência ou outros, o teor é ajustado para atender a todos os critérios. É comum realizar a validação com ensaios de desempenho complementares (danos por umidade, resistência à deformação permanente, módulo resiliente).`
      },
      {
        titulo: "11.4 Importância para o Desempenho do Pavimento",
        texto: `Um teor de CAP inadequado (baixo) resulta em baixa coesão, desagregação e trincamento precoce. Teor excessivo causa exsudação, deformação plástica e redução da estabilidade. A dosagem cuidadosa, considerando as características do CAP e do agregado, é fundamental para garantir a vida útil do pavimento.

Além disso, a dosagem deve considerar o tipo de camada (rolamento, binder, base), o tráfego (N – número de solicitações) e as condições climáticas.`
      }
    ]
  }
  ,
{
  id: "tipos_pavimentos",
  titulo: "12. Tipos de Pavimentos",
  secoes: [
    {
      titulo: "12.1 Classificação Geral",
      texto: `Os pavimentos podem ser classificados em função do comportamento estrutural e do tipo de revestimento. As principais categorias são: pavimentos flexíveis, rígidos, semi-rígidos e invertidos. A escolha do tipo adequado depende do tráfego, das características do subleito, dos materiais disponíveis e do custo.`
    },
    {
      titulo: "12.2 Pavimentos Flexíveis",
      texto: `São aqueles em que o revestimento asfáltico (concreto betuminoso) é relativamente fino e as camadas inferiores (base, sub-base) são constituídas por materiais granulares ou estabilizados granularmente. A deformação por flexão da estrutura ocorre sob a ação das cargas, e a distribuição de tensões depende da rigidez de cada camada.

Características:
• Revestimento betuminoso (CAP ou emulsão)
• Base e sub-base granulares ou de solo melhorado
• Baixa rigidez à flexão
• Vida útil de projeto normalmente entre 10 e 15 anos para restauração

Aplica-se em grande parte das rodovias brasileiras, especialmente em tráfego leve a médio e onde há disponibilidade de materiais granulares.`
    },
    {
      titulo: "12.3 Pavimentos Rígidos",
      texto: `Os pavimentos rígidos utilizam placas de concreto de cimento Portland como camada de revestimento e estrutural. As placas trabalham predominantemente à flexão, distribuindo as cargas para uma área maior, o que reduz as tensões no subleito.

Características:
• Elevada rigidez e resistência à tração na flexão
• Vida útil longa (20 a 40 anos)
• Maior custo inicial, mas menor manutenção
• Requer juntas de dilatação e transferência de cargas

São indicados para rodovias de alto tráfego, terminais de contêineres, aeroportos e trechos com subleito de baixa capacidade de suporte.`
    },
    {
      titulo: "12.4 Pavimentos Semi-Rígidos",
      texto: `Nesses pavimentos, a base é tratada com cimento ou outro aglomerante hidráulico, conferindo rigidez intermediária entre uma base granular e uma placa de concreto. O revestimento asfáltico (CBUQ) atua como camada de desgaste e impermeabilização.

Características:
• Base com alto módulo de resiliência (ex.: solo-cimento, brita graduada tratada com cimento)
• Bom desempenho estrutural
• Custo intermediário
• Susceptibilidade a trincas por reflexão se a base fraturar

Utilizado em trechos com tráfego pesado e quando se deseja uma base mais rígida que a granular, mas sem o custo do pavimento rígido.`
    },
    {
      titulo: "12.5 Pavimentos Invertidos",
      texto: `No pavimento invertido, a camada imediatamente abaixo do revestimento é granular (de maior rigidez) e sobre ela é colocada uma camada de transição (filtro) antes de uma camada inferior tratada com cimento. A inversão ocorre porque a camada mais rígida (tratada) fica abaixo da granular.

Características:
• Elevada capacidade estrutural
• Redução da espessura total
• Minimização de trincas reflexivas
• Mais complexo de projetar e executar

É uma solução interessante para subleitos muito moles ou cargas excepcionais.`
    }
  ]
},
{
  id: "metodos_executivos",
  titulo: "13. Métodos Executivos – Construção de Pavimentos Asfálticos",
  secoes: [
    {
      titulo: "13.1 Produção da Mistura Asfáltica a Quente (USINAGEM)",
      texto: `A mistura asfáltica a quente é produzida em usinas de asfalto, que podem ser do tipo estacionárias ou móveis. O processo envolve:

• **Secagem e aquecimento dos agregados**: em tambor secador, com controle de umidade e temperatura (140-180°C).
• **Dosagem**: por balanças ou sistemas automáticos, conforme curva granulométrica e teor de CAP definidos em projeto.
• **Mistura**: em misturador (descontínuo ou contínuo), onde o CAP aquecido (140-160°C) é incorporado aos agregados.
• **Armazenamento**: o material é estocado em silos aquecidos para transporte.

A usinagem deve garantir homogeneidade, temperatura adequada e evitar degradação dos agregados ou envelhecimento precoce do CAP.`
    },
    {
      titulo: "13.2 Transporte",
      texto: `O transporte da mistura da usina até o local da aplicação é feito por caminhões basculantes com lona térmica (para redução da perda de temperatura). O tempo entre a usinagem e a compactação deve ser controlado para que a mistura chegue com temperatura mínima de compactação (normalmente 110-130°C, dependendo do CAP e da espessura).`
    },
    {
      titulo: "13.3 Espalhamento (Vibroacabadora)",
      texto: `A vibroacabadora (paver) recebe a mistura, distribui sobre a pista e realiza a pré-compactação por meio de uma mesa vibratória. O controle da velocidade e da altura do material garante a espessura e a regularidade da camada. Equipamentos modernos possuem sistema de nível laser e controle eletrônico de espessura.`
    },
    {
      titulo: "13.4 Compactação",
      texto: `A compactação é a etapa mais crítica para obter a densidade e a estrutura de vazios adequadas. Utilizam-se rolos:

• **Rolo de pneus**: aplica pressão de amassamento, confinamento e fechamento da superfície.
• **Rolo liso vibratório**: fornece energia de vibração para densificação das camadas mais profundas.
• **Rolo tandem**: acabamento final e eliminação de marcas.

O número de passadas, a temperatura de compactação e a sequência de equipamentos são definidos em plano de compactação. O grau de compactação deve atender ao especificado (geralmente ≥ 97% da densidade de referência Marshall).`
    },
    {
      titulo: "13.5 Tratamentos Superficiais e Revestimentos Delgados",
      texto: `Além do CBUQ, existem outros métodos executivos:

• **Tratamento superficial simples (TSS)**: aplicação de ligante (emulsão ou CAP diluído) seguido de agregado, com compactação. Usado em pavimentos de baixo volume de tráfego.
• **Tratamento superficial duplo (TSD)**: duas camadas consecutivas de ligante e agregado, conferindo maior durabilidade.
• **Microrevestimento asfáltico**: mistura a frio (emulsão modificada, agregado miúdo, filler, água e aditivos) aplicada com espalhadeira específica; utilizado para restauração de superfície.
• **Capa selante**: fina camada de ligante com areia para impermeabilização e rejuvenescimento.`
    },
    {
      titulo: "13.6 Reciclagem de Pavimentos",
      texto: `A reciclagem de pavimentos asfálticos é uma prática sustentável que reaproveita o material fresado (RAP). Pode ser:

• **A quente**: realizada em usina, onde o RAP é incorporado à nova mistura com adição de CAP novo e agregados.
• **A frio**: executada no local, com equipamentos que fresam, misturam emulsão ou espuma de CAP e compactam a nova camada.

A reciclagem reduz custos, preserva recursos naturais e evita a disposição inadequada de resíduos.`
    }
  ]
},
{
  id: "controle_tecnologico",
  titulo: "14. Controle Tecnológico da Qualidade",
  secoes: [
    {
      titulo: "14.1 Importância e Plano de Controle",
      texto: `O Controle Tecnológico (CT) é um conjunto de atividades que visa verificar a conformidade dos materiais, da execução e do produto final com as especificações do projeto e normas técnicas. Deve ser previsto em um Plano de Controle Tecnológico (PCT), definindo:

• Pontos de amostragem e frequência
• Ensaios a serem realizados
• Critérios de aceitação e rejeição
• Responsabilidades e rastreabilidade`
    },
    {
      titulo: "14.2 Controle de Materiais",
      texto: `• **Agregados**: granulometria, abrasão Los Angeles, equivalente de areia, forma (índice de forma), adesividade, materiais pulverulentos.
• **Ligantes**: penetração, ponto de amolecimento, viscosidade, ponto de fulgor, ductilidade, ensaios PG quando especificado.
• **Aditivos e polímeros**: conformidade com as especificações técnicas.`
    },
    {
      titulo: "14.3 Controle de Produção (Usina)",
      texto: `Durante a usinagem, devem ser monitorados:

• **Temperaturas** do CAP e dos agregados.
• **Dosagem** (balanças calibradas).
• **Granulometria** e teor de CAP por extração (ensaio de extração quantitativa).
• **Massa específica teórica** máxima (Rice) e **compactação Marshall** para verificar as propriedades da mistura.

A frequência de amostragem segue normas (ex.: DNIT 031/2006) ou estabelecida no PCT.`
    },
    {
      titulo: "14.4 Controle de Execução em Campo",
      texto: `Durante a execução da camada asfáltica:

• **Temperatura** da mistura no caminhão, na vibroacabadora e antes da compactação.
• **Espessura** da camada (medições com trado, ou por controle de nível).
• **Regularidade longitudinal** (ensaios com régua de 3 m, perfilômetro laser).
• **Regularidade transversal** (abacaxi, inclinação).
• **Grau de compactação**: amostragem para determinação da densidade (método nuclear ou corpos de prova extraídos com trado).
• **Aderência entre camadas** (quando aplicável).
• **Aspecto superficial** (ausência de exsudação, desagregação, trincas).`
    },
    {
      titulo: "14.5 Aceitação e Não Conformidades",
      texto: `Os resultados dos ensaios são comparados com os limites de especificação. Quando um lote não atende aos critérios, podem ser adotadas:

• **Correção em tempo real**: ajuste de dosagem, temperatura ou processo.
• **Rejeição parcial** (retirada da camada executada).
• **Aceitação condicional** (mediante justificativa técnica e compensação, como desconto no pagamento).

O controle tecnológico é essencial para garantir a vida útil do pavimento e para a análise de garantia contratual.`
    }
  ]
},
{
  id: "metodologias_projeto",
  titulo: "15. Metodologias de Projeto de Pavimentos",
  secoes: [
    {
      titulo: "15.1 Introdução ao Dimensionamento",
      texto: `O projeto de pavimentos visa definir as espessuras das camadas (revestimento asfáltico, base, sub-base, reforço do subleito) para suportar as solicitações do tráfego ao longo da vida útil, respeitando o estado limite de fadiga e deformação permanente. As metodologias evoluíram de métodos empíricos para métodos mecanísticos-empíricos.`
    },
    {
      titulo: "15.2 Método do DNER/DNIT (Empírico)",
      texto: `Até recentemente, o Brasil utilizava o método empírico do DNER (projeto de pavimentos flexíveis – norma DNER 086/1989). Baseia-se no número N (solicitações do eixo padrão de 8,2 tf) e no CBR do subleito. As espessuras são determinadas por ábacos e fórmulas empíricas que consideram a equivalência estrutural entre camadas.

Embora simples, esse método não considera as propriedades mecânicas dos materiais (módulos) nem a fadiga. Ainda é utilizado em projetos de baixo a médio porte.`
    },
    {
      titulo: "15.3 Método AASHTO 1993 (Empírico)",
      texto: `O método da AASHTO (American Association of State Highway and Transportation Officials) é empírico, baseado em equações de desempenho e no conceito de Número Estrutural (SN). Considera o tráfego (W18), a serventia (PSI), o CBR ou módulo resiliente do subleito e coeficientes de camada. É amplamente utilizado na América Latina e permite dimensionar tanto pavimentos flexíveis quanto rígidos.

Embora ainda seja empírico, incorpora variáveis de desempenho e é mais flexível que o método DNIT.`
    },
    {
      titulo: "15.4 Métodos Mecanísticos-Empíricos",
      texto: `Esses métodos utilizam a teoria das camadas elásticas para calcular tensões, deformações e deslocamentos na estrutura do pavimento. Os principais critérios são:

• **Fadiga do revestimento asfáltico**: limitar a deformação específica de tração na fibra inferior do revestimento (ε_t) para evitar trincas.
• **Deformação permanente no subleito**: limitar a deformação específica de compressão vertical (ε_z) para evitar afundamento plástico excessivo.

Os modelos de dano são calibrados com experimentos de pista. Exemplos:
• **MeDiNa (Mecanístico-Determinístico de Dimensionamento Nacional)**: método brasileiro desenvolvido pelo DNIT, que emprega módulos resilientes e parâmetros de fadiga e deformação permanente. É a metodologia oficial para projetos de alto volume de tráfego.
• **AASHTOWare Pavement ME (MEPDG)**: metodologia norte-americana que substitui a AASHTO 1993, com modelos mecanísticos-empíricos e simulação de clima, tráfego e materiais.`
    },
    {
      titulo: "15.5 Coleta de Dados e Parâmetros de Projeto",
      texto: `Independentemente do método, são necessários:

• **Tráfego**: número de eixos equivalentes (N ou ESALs), distribuição por eixos, pressão de enchimento, velocidade.
• **Subleito**: CBR ou módulo resiliente (obtido por ensaios triaxiais ou correlações).
• **Camadas estruturais**: módulos resilientes dos materiais (granulares, solo-cimento, misturas asfálticas) determinados em laboratório ou por correlações.
• **Clima**: para métodos mecanísticos, dados de temperatura e precipitação influenciam as propriedades dos materiais.

O projeto bem elaborado é a base para um pavimento durável e de baixo custo de manutenção.`
    },
    {
      titulo: "15.6 Considerações Finais",
      texto: `A escolha da metodologia deve ser adequada à importância da rodovia, ao volume de tráfego e à disponibilidade de dados. Para grandes empreendimentos, recomenda-se o uso de métodos mecanísticos-empíricos, que proporcionam maior confiabilidade e otimização das espessuras. O projeto também deve contemplar detalhes como drenagem, interseções, juntas e dispositivos de segurança.`
    }
  ]
}

  
];
