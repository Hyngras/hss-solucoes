(() => {
  const rows = [
    ["HSS | Catálogo Interativo de Soluções em Automação", "HSS | Interactive Automation Solutions", "HSS | Soluciones interactivas de automatización"],
    ["Conheça as soluções HSS em automação, bots, RPA e sistemas sob medida. Explore o catálogo interativo com demonstrações de cada solução.", "Discover HSS automation, bots, RPA, and custom software solutions. Explore the interactive catalog and see each solution in action.", "Conoce las soluciones HSS de automatización, bots, RPA y software a medida. Explora el catálogo interactivo y descubre cada solución."],
    ["Hyngrid Soluções", "Hyngrid Solutions", "Hyngrid Soluciones"],
    ["Hyngrid Souza", "Hyngrid Souza", "Hyngrid Souza"],
    ["Engenheira", "Engineer", "Ingeniera"],
    ["CREA-PE 1824087365", "CREA-PE 1824087365", "CREA-PE 1824087365"],
    ["Desenvolvedora de Software", "Software Developer", "Desarrolladora de software"],
    ["Analista de TI", "IT Analyst", "Analista de TI"],
    ["R$2k+/mês", "R$2k+/month", "R$2k+/mes"],
    ["✓ Agenda bloqueada", "✓ Calendar reserved", "✓ Agenda bloqueada"],
    ["→ Automático", "→ Automatic", "→ Automático"],
    ["✓ Sem espera", "✓ No waiting", "✓ Sin espera"],
    ["→ Humano", "→ Human agent", "→ Agente humano"],
    ["✓ Enviado", "✓ Sent", "✓ Enviado"],
    ["⚠️ Baixo", "⚠️ Low", "⚠️ Bajo"],
    ["✓ Automático", "✓ Automatic", "✓ Automático"],
    ["✓ Completo", "✓ Complete", "✓ Completo"],
    ["✓ Ativo", "✓ Active", "✓ Activo"],
    ["Soluções em Software", "Software Solutions", "Soluciones de software"],
    ["HSS Soluções em Software para Negócios", "HSS Software Solutions for Business", "HSS Soluciones de software para empresas"],
    ["Explorar soluções", "Explore solutions", "Explorar soluciones"],
    ["Como funciona", "How it works", "Cómo funciona"],
    ["Planos", "Plans", "Planes"],
    ["Solução anterior", "Previous solution", "Solución anterior"],
    ["Próxima solução", "Next solution", "Siguiente solución"],
    ["Pedir diagnóstico", "Request a consultation", "Solicitar diagnóstico"],
    ["Solicitar diagnóstico", "Request a consultation", "Solicitar diagnóstico"],
    ["Idioma", "Language", "Idioma"],
    ["Português", "Portuguese", "Portugués"],
    ["English", "English", "Inglés"],
    ["Español", "Spanish", "Español"],
    ["Navegação principal", "Main navigation", "Navegación principal"],
    ["Abrir menu", "Open menu", "Abrir menú"],
    ["Falar no WhatsApp", "Contact us on WhatsApp", "Contactar por WhatsApp"],
    ["Fluxo de automação HSS", "HSS automation workflow", "Flujo de automatización HSS"],
    ["Demonstração — HSS Bot de Relatórios", "Demo — HSS Reporting Bot", "Demostración — Bot HSS de informes"],
    ["Demonstração — HSS Bot de Atendimento", "Demo — HSS Customer Support Bot", "Demostración — Bot HSS de atención"],
    ["Demonstração — HSS Bot de Leads", "Demo — HSS Lead Bot", "Demostración — Bot HSS de leads"],
    ["Demonstração — HSS Bot de Agendamento", "Demo — HSS Scheduling Bot", "Demostración — Bot HSS de agendamiento"],
    ["Demonstração — HSS Bot Fiscal NF", "Demo — HSS Invoicing Bot", "Demostración — Bot HSS de facturación"],
    ["Demonstração — HSS Bot de Cobrança", "Demo — HSS Collections Bot", "Demostración — Bot HSS de cobranza"],
    ["Demonstração — HSS Bot de RH Onboarding", "Demo — HSS HR Onboarding Bot", "Demostración — Bot HSS de incorporación de RR. HH."],
    ["Demonstração — HSS Bot de Estoque", "Demo — HSS Inventory Bot", "Demostración — Bot HSS de inventario"],
    ["Vamos entender seu negócio", "Let's understand your business", "Conozcamos tu negocio"],
    ["Conte o essencial para nossa equipe entender como ajudar.", "Share a few details so our team can understand how to help.", "Cuéntanos lo esencial para que nuestro equipo sepa cómo ayudarte."],
    ["Seu nome *", "Your name *", "Tu nombre *"],
    ["Link ou nome da Empresa *", "Company name or website *", "Nombre o sitio web de la empresa *"],
    ["Link e nome da Empresa *", "Company name or website *", "Enlace o nombre de la empresa *"],
    ["Telefone para contato *", "Contact phone *", "Teléfono de contacto *"],
    ["O que sua equipe gostaria de automatizar? *", "What would your team like to automate? *", "¿Qué le gustaría automatizar a tu equipo? *"],
    ["Usaremos esses dados apenas para responder sobre seu diagnóstico.", "We'll use these details only to follow up about your consultation.", "Usaremos estos datos únicamente para responder sobre tu diagnóstico."],
    ["Cancelar", "Cancel", "Cancelar"],
    ["Enviar pedido", "Send request", "Enviar solicitud"],
    ["Enviando...", "Sending...", "Enviando..."],
    ["Enviando seu pedido...", "Sending your request...", "Enviando tu solicitud..."],
    ["Pedido enviado. Nossa equipe entrará em contato pelo telefone informado.", "Request sent. Our team will contact you at the phone number provided.", "Solicitud enviada. Nuestro equipo se comunicará al teléfono indicado."],
    ["Confirme o e-mail de ativação enviado para hyngrid.hss@gmail.com. Verifique também a caixa de spam.", "Confirm the activation email sent to hyngrid.hss@gmail.com. Check your spam folder too.", "Confirma el correo de activación enviado a hyngrid.hss@gmail.com. Revisa también la carpeta de spam."],
    ["Não foi possível conectar ao serviço de e-mail. Verifique a conexão e teste pelo site publicado em HTTPS.", "Couldn't connect to the email service. Check your connection and try again on the site published over HTTPS.", "No fue posible conectar con el servicio de correo. Revisa tu conexión e inténtalo desde el sitio publicado con HTTPS."],
    ["Make sure you open this page through a web server, FormSubmit will not work in pages browsed as HTML files.", "Abra esta página por um servidor web (HTTP ou HTTPS). O FormSubmit não funciona quando ela é aberta como arquivo HTML.", "Abre esta página mediante un servidor web (HTTP o HTTPS). FormSubmit no funciona cuando se abre como archivo HTML."],
    ["O FormSubmit não funciona quando a página é aberta como arquivo HTML. Acesse pelo servidor local ou pelo site publicado.", "FormSubmit doesn't work when this page is opened as an HTML file. Open it through a local server or the published site.", "FormSubmit no funciona cuando la página se abre como archivo HTML. Ábrela desde un servidor local o desde el sitio publicado."],
    ["O serviço de e-mail não aceitou o envio. Tente novamente mais tarde.", "The email service couldn't accept the request. Please try again later.", "El servicio de correo no aceptó el envío. Inténtalo de nuevo más tarde."],
    ["Não foi possível enviar agora. Tente novamente em instantes.", "Couldn't send your request right now. Please try again shortly.", "No se pudo enviar ahora. Inténtalo de nuevo en unos momentos."],
    ["Automação para tirar trabalho repetitivo da sua operação", "Automation that takes repetitive work off your team's plate", "Automatización para reducir el trabajo repetitivo de tu operación"],
    ["WhatsApp", "WhatsApp", "WhatsApp"],
    ["Portal", "Portal", "Portal"],
    ["Sites", "Websites", "Sitios web"],
    ["Planilhas", "Spreadsheets", "Hojas de cálculo"],
    ["Sistemas", "Systems", "Sistemas"],
    ["Resultado", "Result", "Resultado"],
    ["Entrada dos dados", "Data input", "Entrada de datos"],
    ["Robô processa e executa tarefas", "The bot processes and runs tasks", "El bot procesa y ejecuta tareas"],
    ["Entrega e conclui", "Delivery and completion", "Entrega y finalización"],
    ["Explore como cada solução funciona e escolha por onde começar: relatórios, atendimento, leads, agendamento, estoque e muito mais.", "See how each solution works and choose where to start: reports, customer support, leads, scheduling, inventory, and more.", "Descubre cómo funciona cada solución y elige por dónde empezar: informes, atención, leads, agenda, inventario y mucho más."],
    ["Mais conversão e menos esforço com IA", "More conversions and less effort with AI", "Más conversiones y menos esfuerzo con IA"],
    ["Conheça cada solução no catálogo interativo.", "Explore every solution in the interactive catalog.", "Conoce cada solución en el catálogo interactivo."],
    ["Clique em uma solução para explorar a demonstração, ver o problema que ela resolve e chamar a HSS já com o assunto certo.", "Choose a solution to see its demo, learn what it solves, and contact HSS with the right context.", "Elige una solución para ver su demo, conocer qué problema resuelve y contactar a HSS con el contexto adecuado."],
    ["Gestão e dados", "Management & data", "Gestión y datos"],
    ["HSS Bot de Relatórios", "HSS Reporting Bot", "Bot HSS de informes"],
    ["Gera relatórios automáticos, organiza informações e entrega dados prontos para decisão sem depender de levantamento manual.", "Generates reports, organizes information, and delivers decision-ready data without manual collection.", "Genera informes, organiza información y entrega datos listos para decidir, sin recopilación manual."],
    ["Relatórios", "Reports", "Informes"],
    ["Dashboards", "Dashboards", "Paneles"],
    ["Gestão", "Management", "Gestión"],
    ["Todos", "All", "Todos"],
    ["Dados", "Data", "Datos"],
    ["Atendimento e vendas", "Customer support & sales", "Atención y ventas"],
    ["Operação", "Operations", "Operaciones"],
    ["Financeiro", "Finance", "Finanzas"],
    ["Backoffice", "Back office", "Administración"],
    ["HSS Bot de Atendimento", "HSS Customer Support Bot", "Bot HSS de atención"],
    ["Atendimento", "Customer support", "Atención"],
    ["Vendas", "Sales", "Ventas"],
    ["Leads", "Leads", "Leads"],
    ["Qualificação", "Qualification", "Calificación"],
    ["Agenda", "Scheduling", "Agenda"],
    ["Confirmações", "Confirmations", "Confirmaciones"],
    ["Notas fiscais", "Invoices", "Facturas"],
    ["Emissão", "Issuing", "Emisión"],
    ["Fiscal", "Tax", "Fiscal"],
    ["Cobrança", "Collections", "Cobranza"],
    ["Pagamentos", "Payments", "Pagos"],
    ["RH", "HR", "RR. HH."],
    ["Onboarding", "Onboarding", "Incorporación"],
    ["Documentos", "Documents", "Documentos"],
    ["Estoque", "Inventory", "Inventario"],
    ["Produtos", "Products", "Productos"],
    ["HSS Bot de Leads", "HSS Lead Bot", "Bot HSS de leads"],
    ["HSS Bot de Agendamento", "HSS Scheduling Bot", "Bot HSS de agendamiento"],
    ["HSS Bot Fiscal NF", "HSS Invoicing Bot", "Bot HSS de facturación"],
    ["HSS Bot de Cobrança", "HSS Collections Bot", "Bot HSS de cobranza"],
    ["HSS Bot de RH Onboarding", "HSS HR Onboarding Bot", "Bot HSS de incorporación de RR. HH."],
    ["HSS Bot de Estoque", "HSS Inventory Bot", "Bot HSS de inventario"],
    ["Menos promessa, mais processo", "Less hype, more process", "Menos promesas, más procesos"],
    ["A HSS entra onde sua equipe perde tempo.", "HSS steps in where your team loses time.", "HSS interviene donde tu equipo pierde tiempo."],
    ["O foco não é vender uma ferramenta genérica. É mapear o gargalo e construir o caminho mais simples para automatizar.", "The goal isn't to sell generic software. It's to find the bottleneck and build the simplest path to automation.", "El objetivo no es vender una herramienta genérica. Es encontrar el cuello de botella y crear la forma más sencilla de automatizar."],
    ["Diagnóstico rápido", "Quick assessment", "Diagnóstico rápido"],
    ["Entendemos rotina, ferramentas, volume de tarefas e onde o retrabalho acontece.", "We learn about your workflows, tools, task volume, and where rework happens.", "Entendemos tus rutinas, herramientas, volumen de tareas y dónde se repite el trabajo."],
    ["Fluxo desenhado", "Workflow mapped", "Flujo diseñado"],
    ["Transformamos a operação em etapas claras, com regras, exceções e pontos de controle.", "We turn your operations into clear steps, with rules, exceptions, and checkpoints.", "Convertimos la operación en etapas claras, con reglas, excepciones y puntos de control."],
    ["Robô implantado", "Automation deployed", "Automatización implementada"],
    ["Integramos sistemas, portais, planilhas e canais de atendimento conforme a necessidade.", "We connect systems, portals, spreadsheets, and support channels to fit your needs.", "Integramos sistemas, portales, hojas de cálculo y canales de atención según tus necesidades."],
    ["Acompanhamento", "Ongoing support", "Acompañamiento"],
    ["Ajustamos depois que a solução roda com dados reais e rotina real.", "We refine the solution once it's running with real data and real workflows.", "Ajustamos la solución cuando ya funciona con datos y rutinas reales."],
    ["Formas de começar", "Ways to get started", "Formas de empezar"],
    ["Comece pequeno ou automatize uma operação inteira.", "Start small or automate an entire operation.", "Empieza poco a poco o automatiza toda una operación."],
    ["Os planos são pontos de partida. O diagnóstico define o escopo ideal para seu negócio.", "Plans are starting points. The assessment defines the right scope for your business.", "Los planes son un punto de partida. El diagnóstico define el alcance ideal para tu negocio."],
    ["Essencial", "Essential", "Esencial"],
    ["Para automatizar uma rotina clara e repetitiva.", "For automating a clear, repetitive workflow.", "Para automatizar una rutina clara y repetitiva."],
    ["Mapeamento do processo", "Process mapping", "Mapeo del proceso"],
    ["Uma automação principal", "One core automation", "Una automatización principal"],
    ["Entrega com treinamento", "Delivery with training", "Entrega con capacitación"],
    ["Conversar", "Talk to us", "Conversar"],
    ["Para equipes que precisam reduzir retrabalho em várias etapas.", "For teams looking to reduce rework across multiple steps.", "Para equipos que necesitan reducir el trabajo repetido en varias etapas."],
    ["Automação de fluxo completo", "End-to-end workflow automation", "Automatización del flujo completo"],
    ["Integração com sistemas e planilhas", "System and spreadsheet integration", "Integración con sistemas y hojas de cálculo"],
    ["Monitoramento e ajustes iniciais", "Monitoring and initial adjustments", "Supervisión y ajustes iniciales"],
    ["Sob medida", "Custom", "A medida"],
    ["Para sistemas, dashboards, portais e integrações mais específicas.", "For custom systems, dashboards, portals, and integrations.", "Para sistemas, paneles, portales e integraciones específicas."],
    ["Projeto personalizado", "Custom project", "Proyecto personalizado"],
    ["Arquitetura da solução", "Solution architecture", "Arquitectura de la solución"],
    ["Suporte evolutivo", "Ongoing improvements", "Soporte evolutivo"],
    ["Planejar projeto", "Plan a project", "Planificar proyecto"],
    ["Quer saber qual solução combina com seu processo?", "Want to find the right solution for your workflow?", "¿Quieres saber qué solución se adapta a tu proceso?"],
    ["Envie uma mensagem contando qual tarefa mais toma tempo hoje. A HSS te orienta pelo caminho mais simples para automatizar.", "Tell us which task takes the most time today. HSS will help you find the simplest way to automate it.", "Cuéntanos qué tarea te quita más tiempo. HSS te ayudará a encontrar la forma más sencilla de automatizarla."],
    ["Falar com a HSS", "Talk to HSS", "Hablar con HSS"],
    ["Automação, bots, integrações e sistemas sob medida.", "Automation, bots, integrations, and custom software.", "Automatización, bots, integraciones y software a medida."],
    ["Especialista da HSS apresentando uma solução de automação", "HSS specialist presenting an automation solution", "Especialista de HSS presentando una solución de automatización"],
    ["Agendando agora", "Scheduling now", "Agendando ahora"],
    ["Agenda · Reservas Automáticas", "Scheduling · Automatic Bookings", "Agenda · Reservas automáticas"],
    ["Cliente quer horário.", "A customer needs a time slot.", "Un cliente busca un horario."],
    ["agenda.", "books it.", "agenda."],
    ["Pediu via WhatsApp, bot confirma e lembra — sem secretária, sem ligação.", "A customer asks on WhatsApp; the bot books and sends reminders — no calls or receptionist needed.", "El cliente consulta por WhatsApp; el bot agenda y envía recordatorios, sin llamadas ni recepcionista."],
    ["WhatsApp do cliente", "Customer's WhatsApp", "WhatsApp del cliente"],
    ["Solicitação de agendamento", "Booking request", "Solicitud de reserva"],
    ["Oi! Quero marcar uma consulta 😊", "Hi! I'd like to book an appointment 😊", "¡Hola! Quiero agendar una cita 😊"],
    ["Claro! Escolha um horário disponível:", "Sure! Choose an available time:", "¡Claro! Elige un horario disponible:"],
    ["Pode ser sexta às 10h?", "Can I come Friday at 10?", "¿Puede ser el viernes a las 10?"],
    ["Sex 23/10", "Fri 10/23", "Vie 23/10"],
    ["Seg 26/10", "Mon 10/26", "Lun 26/10"],
    ["verifica agenda", "checks the calendar", "consulta la agenda"],
    ["Verificou disponibilidade", "Checked availability", "Verificó la disponibilidad"],
    ["Bloqueou Sex 23/10 · 10:00h", "Reserved Fri 10/23 · 10:00", "Reservó el vie 23/10 · 10:00"],
    ["Enviando confirmação…", "Sending confirmation…", "Enviando confirmación…"],
    ["confirma e lembra", "confirms and reminds", "confirma y recuerda"],
    ["Agendado automaticamente", "Automatically scheduled", "Agendado automáticamente"],
    ["Cliente confirmado · Lembretes programados", "Customer confirmed · Reminders scheduled", "Cliente confirmado · Recordatorios programados"],
    ["Confirmado!", "Confirmed!", "¡Confirmado!"],
    ["Agenda bloqueada", "Calendar slot reserved", "Horario reservado"],
    ["Lembretes", "Reminders", "Recordatorios"],
    ["24h e 1h antes", "24h and 1h before", "24 h y 1 h antes"],
    ["💬 Quero esse bot", "💬 I want this bot", "💬 Quiero este bot"],
    ["Respondendo agora", "Responding now", "Respondiendo ahora"],
    ["Atendimento · WhatsApp & Chat", "Support · WhatsApp & Chat", "Atención · WhatsApp y chat"],
    ["Cliente pergunta.", "A customer asks.", "Un cliente pregunta."],
    ["responde.", "answers.", "responde."],
    ["Atende, resolve e encaminha — sem deixar cliente esperando, a qualquer hora.", "Answers, resolves, and routes requests — without keeping customers waiting, anytime.", "Atiende, resuelve y deriva solicitudes sin hacer esperar al cliente, a cualquier hora."],
    ["WhatsApp / Chat", "WhatsApp / Chat", "WhatsApp / Chat"],
    ["Mensagens chegando em tempo real", "Messages arriving in real time", "Mensajes en tiempo real"],
    ["Preciso de ajuda com meu pedido", "I need help with my order", "Necesito ayuda con mi pedido"],
    ["Quando chega meu produto?", "When will my product arrive?", "¿Cuándo llega mi producto?"],
    ["Quero cancelar minha assinatura", "I'd like to cancel my subscription", "Quiero cancelar mi suscripción"],
    ["Qual o horário de atendimento?", "What are your support hours?", "¿Cuál es el horario de atención?"],
    ["Nova", "New", "Nueva"],
    ["Urgente", "Urgent", "Urgente"],
    ["classifica e processa", "classifies and processes", "clasifica y procesa"],
    ["Identificou a intenção", "Identified the intent", "Identificó la intención"],
    ["Buscou na base de conhecimento", "Searched the knowledge base", "Buscó en la base de conocimiento"],
    ["Enviando resposta…", "Sending reply…", "Enviando respuesta…"],
    ["resolve ou encaminha", "resolves or routes", "resuelve o deriva"],
    ["Resultado automático", "Automated result", "Resultado automático"],
    ["Sem humano · 24h por dia · 7 dias", "No agent needed · 24/7", "Sin agente · 24/7"],
    ["Respondido", "Answered", "Respondido"],
    ["94% resolvidos no bot", "94% resolved by the bot", "94% resueltos por el bot"],
    ["Sem espera", "No waiting", "Sin espera"],
    ["Ticket criado", "Ticket created", "Ticket creado"],
    ["Escalado com contexto", "Escalated with context", "Escalado con contexto"],
    ["Monitorando faturas", "Monitoring invoices", "Supervisando facturas"],
    ["Financeiro · Cobrança Automática", "Finance · Automated Collections", "Finanzas · Cobranza automática"],
    ["Cobra sem", "Collect without", "Cobra sin"],
    ["constrangimento.", "awkwardness.", "incomodar."],
    ["Bot monitora inadimplência e dispara cobranças personalizadas no momento certo.", "The bot monitors overdue payments and sends personalized reminders at the right time.", "El bot detecta pagos atrasados y envía recordatorios personalizados en el momento adecuado."],
    ["Sistema Financeiro", "Finance system", "Sistema financiero"],
    ["4 faturas vencidas detectadas", "4 overdue invoices detected", "4 facturas vencidas detectadas"],
    ["3 dias", "3 days", "3 días"], ["7 dias", "7 days", "7 días"], ["14 dias", "14 days", "14 días"], ["21 dias", "21 days", "21 días"],
    ["personaliza e dispara", "personalizes and sends", "personaliza y envía"],
    ["Detectou 4 faturas vencidas", "Detected 4 overdue invoices", "Detectó 4 facturas vencidas"],
    ["Gerou mensagem personalizada", "Created a personalized message", "Generó un mensaje personalizado"],
    ["Enviando com link de pagamento…", "Sending with payment link…", "Enviando con enlace de pago…"],
    ["registra pagamentos", "records payments", "registra pagos"],
    ["Resultado financeiro", "Financial result", "Resultado financiero"],
    ["Cobranças enviadas · Pagamentos registrados", "Reminders sent · Payments recorded", "Recordatorios enviados · Pagos registrados"],
    ["Cobrança enviada", "Reminder sent", "Recordatorio enviado"],
    ["Pix + boleto automático", "Automatic Pix + payment slip", "Pix + recibo de pago automático"],
    ["Enviado", "Sent", "Enviado"],
    ["Pago registrado", "Payment recorded", "Pago registrado"],
    ["Sistema atualizado", "System updated", "Sistema actualizado"],
    ["Baixado", "Settled", "Liquidado"],
    ["Monitorando estoque", "Monitoring inventory", "Supervisando inventario"],
    ["Estoque · Controle em Tempo Real", "Inventory · Real-time Control", "Inventario · Control en tiempo real"],
    ["Venda feita,", "Sale completed,", "Venta realizada,"],
    ["estoque", "inventory", "inventario"],
    ["atualizado.", "updated.", "actualizado."],
    ["Cada pedido baixa o estoque e alerta quando é hora de repor — sem planilha manual.", "Every order updates inventory and flags when it's time to restock — no manual spreadsheets.", "Cada pedido actualiza el inventario y avisa cuándo reponer, sin hojas de cálculo manuales."],
    ["Pedido de Venda · #PV-2847", "Sales Order · #PV-2847", "Pedido de venta · #PV-2847"],
    ["4 itens · Baixa em tempo real", "4 items · Updated in real time", "4 artículos · Actualización en tiempo real"],
    ["Cabo HDMI 2m", "2m HDMI cable", "Cable HDMI de 2 m"],
    ["Mouse Wireless", "Wireless mouse", "Mouse inalámbrico"],
    ["Teclado USB", "USB keyboard", "Teclado USB"],
    ["Baixo", "Low", "Bajo"],
    ["baixa e verifica limites", "updates stock and checks thresholds", "actualiza existencias y verifica límites"],
    ["Baixou 11 itens do estoque", "Reduced 11 items from inventory", "Descontó 11 artículos del inventario"],
    ["Detectou Teclado USB abaixo do mínimo", "Detected low USB keyboard stock", "Detectó pocas existencias del teclado USB"],
    ["Gerando ordem de compra…", "Creating a purchase order…", "Generando una orden de compra…"],
    ["alerta e aciona fornecedor", "alerts and contacts the supplier", "avisa y contacta al proveedor"],
    ["Ação automática disparada", "Automatic action triggered", "Acción automática activada"],
    ["Sem ruptura · Sem planilha manual", "No stockouts · No manual spreadsheets", "Sin faltantes · Sin hojas de cálculo"],
    ["Alerta disparado", "Alert triggered", "Alerta activada"],
    ["Teclado USB: repor 20 un.", "USB keyboard: restock 20 units", "Teclado USB: reponer 20 unidades"],
    ["OC enviada", "PO sent", "Orden de compra enviada"],
    ["E-mail p/ fornecedor", "Email to supplier", "Correo al proveedor"],
    ["Qualificando leads", "Qualifying leads", "Calificando leads"],
    ["Vendas · Qualificação de Leads", "Sales · Lead Qualification", "Ventas · Calificación de leads"],
    ["Lead entra,", "A lead comes in,", "Llega un lead,"],
    ["venda", "a sale", "una venta"],
    ["aquecida.", "is warmed up.", "se activa."],
    ["Cada formulário preenchido vira oportunidade qualificada no CRM, na hora.", "Every completed form becomes a qualified CRM opportunity instantly.", "Cada formulario se convierte al instante en una oportunidad calificada en el CRM."],
    ["Landing Page / Formulário", "Landing Page / Form", "Página de aterrizaje / Formulario"],
    ["Novo lead: João Silva · TechCorp", "New lead: João Silva · TechCorp", "Nuevo lead: João Silva · TechCorp"],
    ["Nome", "Name", "Nombre"], ["Empresa", "Company", "Empresa"], ["Interesse", "Interest", "Interés"], ["Plano Pro", "Pro Plan", "Plan Pro"], ["Orçamento", "Budget", "Presupuesto"], ["Equipe", "Team", "Equipo"], ["Urgência", "Urgency", "Urgencia"], ["Alta · Q4", "High · Q4", "Alta · T4"],
    ["Score do lead", "Lead score", "Puntuación del lead"],
    ["pontua e classifica", "scores and qualifies", "puntúa y clasifica"],
    ["Pontuou: score 87 · Quente 🔥", "Scored: 87 · Hot 🔥", "Puntuación: 87 · Caliente 🔥"],
    ["Criou card no CRM", "Created a CRM card", "Creó una ficha en el CRM"],
    ["Notificando vendedor…", "Notifying sales rep…", "Notificando al vendedor…"],
    ["entrega ao time de vendas", "routes to the sales team", "envía al equipo de ventas"],
    ["Entrega automática", "Automatic delivery", "Entrega automática"],
    ["CRM atualizado · Vendedor avisado", "CRM updated · Sales rep notified", "CRM actualizado · Vendedor notificado"],
    ["CRM atualizado", "CRM updated", "CRM actualizado"],
    ["Lead score 87 · Quente", "Lead score 87 · Hot", "Puntuación 87 · Caliente"],
    ["Card criado", "Card created", "Ficha creada"],
    ["Vendedor notificado", "Sales rep notified", "Vendedor notificado"],
    ["WhatsApp + contexto", "WhatsApp + context", "WhatsApp + contexto"],
    ["Seguir up", "Follow up", "Dar seguimiento"],
    ["Emitindo NF-e", "Issuing e-invoices", "Emitiendo facturas electrónicas"],
    ["Fiscal · Emissão Automática de NF", "Tax · Automatic Invoice Issuing", "Fiscal · Emisión automática de facturas"],
    ["Venda fechada,", "Sale closed,", "Venta cerrada,"],
    ["NF", "invoice", "factura"],
    ["emitida.", "issued.", "emitida."],
    ["Sem abrir sistema fiscal, sem digitar CNPJ — nota gerada e enviada na hora.", "No tax system or manual data entry — the invoice is generated and sent right away.", "Sin abrir el sistema fiscal ni escribir el registro tributario: la factura se genera y se envía al instante."],
    ["ERP / Sistema de Vendas", "ERP / Sales System", "ERP / Sistema de ventas"],
    ["Pedido #4821 · Aprovado", "Order #4821 · Approved", "Pedido #4821 · Aprobado"],
    ["Pedido", "Order", "Pedido"], ["Cliente", "Customer", "Cliente"], ["CNPJ", "Tax ID", "ID fiscal"], ["Serviço", "Service", "Servicio"],
    ["Aprovado ✓", "Approved ✓", "Aprobado ✓"],
    ["lê o pedido e emite NF", "reads the order and issues an invoice", "lee el pedido y emite la factura"],
    ["Leu o pedido no ERP", "Read the order in the ERP", "Leyó el pedido en el ERP"],
    ["Gerou NF-e · Série 001 nº 4821", "Generated e-invoice · Series 001 no. 4821", "Generó factura electrónica · Serie 001 n.º 4821"],
    ["Validando com SEFAZ…", "Validating with tax authority…", "Validando con la autoridad fiscal…"],
    ["autoriza e envia ao cliente", "authorizes and sends to customer", "autoriza y envía al cliente"],
    ["NF autorizada e enviada", "Invoice approved and sent", "Factura autorizada y enviada"],
    ["SEFAZ OK · Sem fila · Sem erro", "Tax authority OK · No queue · No errors", "Autoridad fiscal OK · Sin espera · Sin errores"],
    ["NF-e Autorizada", "E-invoice approved", "Factura electrónica autorizada"],
    ["nNF: 004821 · SEFAZ OK", "Invoice no.: 004821 · Tax authority OK", "N.º factura: 004821 · Autoridad fiscal OK"],
    ["Emitida", "Issued", "Emitida"], ["Enviada ao cliente", "Sent to customer", "Enviada al cliente"], ["XML + DANFE por e-mail", "XML + invoice PDF by email", "XML + factura PDF por correo"],
    ["Rodando agora", "Running now", "En ejecución"],
    ["Automação RPA · Relatórios", "RPA Automation · Reports", "Automatización RPA · Informes"],
    ["Relatórios prontos.", "Reports ready.", "Informes listos."],
    ["Sem coleta manual.", "No manual data collection.", "Sin recopilación manual."],
    ["Do portal ao arquivo final, sem tarefas repetitivas.", "From portal to finished report, without repetitive tasks.", "Del portal al archivo final, sin tareas repetitivas."],
    ["Acesso automático", "Automated access", "Acceso automático"],
    ["Relatório estruturado", "Report structured", "Informe estructurado"],
    ["Relatórios prontos", "Reports ready", "Informes listos"],
    ["Entrega semanal · 06:00", "Weekly delivery · 06:00", "Entrega semanal · 06:00"],
    ["registros coletados", "records collected", "registros recopilados"],
    ["3 abas", "3 sheets", "3 hojas"],
    ["Excel", "Excel", "Excel"],
    ["PDF · Resumo", "PDF · Summary", "PDF · Resumen"],
    ["4 páginas · gráficos", "4 pages · charts", "4 páginas · gráficos"],
    ["Pronto", "Ready", "Listo"],
    ["Coleta dados.", "Collects data.", "Recopila datos."],
    ["Entrega o", "Delivers the", "Entrega el"],
    ["relatório.", "report.", "informe."],
    ["De qualquer sistema ou portal direto para Excel ou PDF — sem ninguém tocar.", "From any system or portal straight to Excel or PDF — with no manual work.", "De cualquier sistema o portal directo a Excel o PDF, sin trabajo manual."],
    ["Sistema / Portal", "System / Portal", "Sistema / Portal"],
    ["sistema.empresa.com.br · acesso automático", "company.system.com · automatic access", "sistema.empresa.com · acceso automático"],
    ["Colaborador", "Employee", "Colaborador"], ["Hrs/sem", "Hrs/week", "Hrs/sem"], ["Status", "Status", "Estado"],
    ["Pend.", "Pending", "Pend."], ["Falta", "Missing", "Falta"],
    ["coleta automática", "automatic collection", "recopilación automática"],
    ["Acessou o portal", "Accessed the portal", "Accedió al portal"],
    ["Coletou 127 registros", "Collected 127 records", "Recopiló 127 registros"],
    ["Formatando relatório…", "Formatting report…", "Dando formato al informe…"],
    ["gera e envia", "generates and sends", "genera y envía"],
    ["Toda semana · 06:00h · sem ninguém tocar", "Every week · 6:00 AM · no manual work", "Cada semana · 06:00 · sin trabajo manual"],
    ["relatorio_out26.xlsx", "report_out26.xlsx", "informe_out26.xlsx"],
    ["127 linhas · 3 abas", "127 rows · 3 sheets", "127 filas · 3 hojas"],
    ["resumo_out26.pdf", "summary_out26.pdf", "resumen_out26.pdf"],
    ["4 páginas · gráficos", "4 pages · charts", "4 páginas · gráficos"],
    ["📊 Gestão · RPA", "📊 Management · RPA", "📊 Gestión · RPA"],
    ["Onboarding ativo", "Onboarding active", "Incorporación activa"],
    ["RH · Onboarding Automático", "HR · Automated Onboarding", "RR. HH. · Incorporación automática"],
    ["Novo colaborador", "New employee", "Nuevo colaborador"],
    ["em 1 clique.", "in one click.", "en un clic."],
    ["Formulário preenchido, bot cuida do resto: documentos, acessos e boas-vindas.", "Once the form is submitted, the bot handles documents, access, and welcome tasks.", "Al completar el formulario, el bot gestiona documentos, accesos y bienvenida."],
    ["Formulário de Admissão", "Hiring Form", "Formulario de ingreso"],
    ["Mariana Rocha · Analista de TI", "Mariana Rocha · IT Analyst", "Mariana Rocha · Analista de TI"],
    ["Cargo", "Role", "Puesto"], ["Início", "Start date", "Inicio"], ["Departamento", "Department", "Departamento"],
    ["Tecnologia", "Technology", "Tecnología"],
    ["8 documentos enviados", "8 documents uploaded", "8 documentos enviados"],
    ["Completo", "Complete", "Completo"],
    ["processa documentos", "processes documents", "procesa documentos"],
    ["Processou 8 documentos", "Processed 8 documents", "Procesó 8 documentos"],
    ["Criou contas nos sistemas", "Created system accounts", "Creó cuentas en los sistemas"],
    ["Enviando kit boas-vindas…", "Sending welcome kit…", "Enviando kit de bienvenida…"],
    ["libera acessos e envia kit", "grants access and sends the kit", "habilita accesos y envía el kit"],
    ["Colaboradora pronta para começar", "New hire ready to start", "Colaboradora lista para empezar"],
    ["Tudo automático · Sem filas de RH", "All automated · No HR backlog", "Todo automatizado · Sin pendientes de RR. HH."],
    ["Kit boas-vindas", "Welcome kit", "Kit de bienvenida"],
    ["Manual + cronograma", "Handbook + schedule", "Manual + cronograma"],
    ["Acessos liberados", "Access granted", "Accesos habilitados"],
    ["E-mail · Slack · ERP", "Email · Slack · ERP", "Correo · Slack · ERP"],
    ["Ativo", "Active", "Activo"],
    ["📊 Gestão · RPA", "📊 Management · RPA", "📊 Gestión · RPA"]
  ];

  const translations = Object.fromEntries(rows.map(([source, en, es]) => [source, { en, es }]));
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const localeCodes = { pt: "pt-BR", en: "en", es: "es" };
  const validLanguage = (value) => Object.prototype.hasOwnProperty.call(localeCodes, value) ? value : "pt";
  const queryLanguage = new URLSearchParams(location.search).get("lang");
  let language = "pt";

  function getStoredLanguage() {
    try {
      return localStorage.getItem("hss-language");
    } catch {
      return null;
    }
  }

  function localizedText(source) {
    if (language === "pt") return source;
    return translations[source]?.[language] || source;
  }

  function removeDemoEmoji(value) {
    if (!document.querySelector(".stage")) return value;
    const checkMark = "\uE000";
    return value
      .replace(/✓/g, checkMark)
      .replace(/[\u{1F000}-\u{1FAFF}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "")
      .replaceAll(checkMark, "✓")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function translateTextNode(node) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    const content = source.trim();
    if (!content) return;
    const translated = removeDemoEmoji(localizedText(content));
    const value = `${leading}${translated}${trailing}`;
    if (node.nodeValue !== value) node.nodeValue = value;
  }

  function translateAttributes(element) {
    const attributes = ["aria-label", "title", "placeholder", "alt"];
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = {};
      originalAttributes.set(element, originals);
    }
    attributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
      const translated = localizedText(originals[attribute]);
      if (element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated);
    });
  }

  function translateSubtree(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (!root.parentElement?.closest("script,style")) translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document.body) return;
    if (root.matches?.("script,style")) return;
    translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement?.closest("script,style")) translateTextNode(node);
    }
    root.querySelectorAll?.("*").forEach(translateAttributes);
  }

  function translateDocumentTitle() {
    const title = document.querySelector("title");
    if (!title) return;
    const source = title.dataset.originalTitle || title.textContent;
    title.dataset.originalTitle = source;
    title.textContent = localizedText(source);
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.originalContent) description.dataset.originalContent = description.content;
      description.content = localizedText(description.dataset.originalContent);
    }
  }

  function updateDemoLanguage() {
    const preview = document.querySelector("#solutionPreview");
    if (!preview) return;
    const source = preview.getAttribute("src") || "assets/hss-bot-relatorios.html";
    const url = new URL(source, location.href);
    url.searchParams.set("lang", language);
    if (preview.src !== url.href) preview.src = url.href;
  }

  function setLanguage(value, updateAddress = false) {
    language = validLanguage(value);
    document.documentElement.lang = localeCodes[language];
    translateDocumentTitle();
    translateSubtree(document.body);
    const selector = document.querySelector("#siteLanguage");
    if (selector) selector.value = language;
    try {
      localStorage.setItem("hss-language", language);
    } catch {}
    if (updateAddress && selector) {
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url.href);
    }
    updateDemoLanguage();
    document.dispatchEvent(new CustomEvent("hss:languagechange", { detail: { language } }));
  }

  window.HSSLanguage = {
    current: () => language,
    set: (value) => setLanguage(value, true)
  };

  const selector = document.querySelector("#siteLanguage");
  const initialLanguage = validLanguage(queryLanguage || (selector ? getStoredLanguage() || selector.value : getStoredLanguage()) || "pt");
  if (selector) selector.addEventListener("change", () => setLanguage(selector.value, true));
  setLanguage(initialLanguage);

  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      if (record.type === "attributes") {
        translateAttributes(record.target);
        return;
      }
      record.addedNodes.forEach(translateSubtree);
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["aria-label", "title", "placeholder"]
  });
})();
