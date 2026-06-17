document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // BANCO DE DADOS SIMULADO (ESTADO DA APLICAÇÃO)
    // ============================================================

    let tickets = [
        { id: '#TI-8842', subject: 'Falha no Servidor de Arquivos',      meta: '14:20 - Bloco C',        category: 'Informática/TI',       priority: 'Crítica', status: 'Pendente'     },
        { id: '#EL-2031', subject: 'Oscilação de Energia - CPD',         meta: '11:05 - Data Center',    category: 'Elétrica',             priority: 'Alta',    status: 'Em Progresso' },
        { id: '#PC-1055', subject: 'Vazamento em Banheiro Coletivo',     meta: '09:12 - Térreo',         category: 'Predial/Civil',        priority: 'Média',   status: 'Validando'    },
        { id: '#SE-0312', subject: 'Câmera offline - Entrada Principal', meta: '08:45 - Portaria',       category: 'Segurança Eletrônica', priority: 'Crítica', status: 'Pendente'     },
        { id: '#TL-0098', subject: 'Sem sinal de internet - Sala 12',    meta: '13:30 - Bloco A',        category: 'Telecomunicações',     priority: 'Alta',    status: 'Em Progresso' },
        { id: '#TI-8901', subject: 'Impressora da contabilidade sem toner', meta: '10:00 - 2º Andar',   category: 'Informática/TI',       priority: 'Média',   status: 'Pendente'     },
        { id: '#EL-2045', subject: 'Disjuntor desarmando no Bloco D',    meta: '07:55 - Bloco D',        category: 'Elétrica',             priority: 'Crítica', status: 'Em Progresso' },
        { id: '#PC-1102', subject: 'Ar condicionado sem funcionar',      meta: '15:10 - Sala 204',       category: 'Predial/Civil',        priority: 'Média',   status: 'Validando'    },
        { id: '#TI-9010', subject: 'Computador não liga',                meta: '12:00 - Bloco B',        category: 'Informática/TI',       priority: 'Média',   status: 'Pendente'     },
        { id: '#SE-0415', subject: 'Controle de acesso com falha',       meta: '16:20 - Recepção',       category: 'Segurança Eletrônica', priority: 'Alta',    status: 'Pendente'     },
        { id: '#TL-0150', subject: 'Telefone VoIP sem áudio',            meta: '09:40 - Sala Reunião',   category: 'Telecomunicações',     priority: 'Média',   status: 'Em Progresso' },
        { id: '#EL-2060', subject: 'Tomada com faísca - Cozinha',        meta: '11:30 - Cozinha',        category: 'Elétrica',             priority: 'Crítica', status: 'Pendente'     },
        { id: '#PC-1200', subject: 'Infiltração no teto da sala TI',     meta: '08:00 - Sala TI',        category: 'Predial/Civil',        priority: 'Alta',    status: 'Em Progresso' },
        { id: '#TI-9110', subject: 'Monitor com tela piscando',          meta: '14:45 - Bloco A',        category: 'Informática/TI',       priority: 'Média',   status: 'Validando'    },
        { id: '#SE-0500', subject: 'Alarme disparando sem motivo',       meta: '17:05 - Bloco C',        category: 'Segurança Eletrônica', priority: 'Alta',    status: 'Pendente'     },
        { id: '#TL-0210', subject: 'Roteador Wi-Fi sem sinal',           meta: '10:50 - Bloco B',        category: 'Telecomunicações',     priority: 'Média',   status: 'Em Progresso' },
        { id: '#EL-2075', subject: 'Lâmpada de emergência queimada',     meta: '13:15 - Escada 2',       category: 'Elétrica',             priority: 'Média',   status: 'Validando'    },
        { id: '#TI-9205', subject: 'Notebook com superaquecimento',      meta: '11:00 - RH',             category: 'Informática/TI',       priority: 'Alta',    status: 'Pendente'     },
    ];

    let team = [
        { id: 1, name: 'Carlos Mendes',   role: 'Técnico de TI',         specialty: 'Informática/TI',       active: 3, phone: '(11) 98765-0001', email: 'c.mendes@tech.com',   initials: 'CM', color: '#54418a' },
        { id: 2, name: 'Ana Ferreira',    role: 'Eletricista Sênior',    specialty: 'Elétrica',             active: 5, phone: '(11) 98765-0002', email: 'a.ferreira@tech.com', initials: 'AF', color: '#51599b' },
        { id: 3, name: 'Roberto Souza',   role: 'Técnico Predial',       specialty: 'Predial/Civil',        active: 2, phone: '(11) 98765-0003', email: 'r.souza@tech.com',    initials: 'RS', color: '#16a34a' },
        { id: 4, name: 'Juliana Oliveira',role: 'Analista de Segurança', specialty: 'Segurança Eletrônica', active: 4, phone: '(11) 98765-0004', email: 'j.oliveira@tech.com', initials: 'JO', color: '#ba1a1a' },
        { id: 5, name: 'Marcos Lima',     role: 'Técnico de Telecom',    specialty: 'Telecomunicações',     active: 1, phone: '(11) 98765-0005', email: 'm.lima@tech.com',     initials: 'ML', color: '#514a5d' },
    ];

    // ============================================================
    // ESTADO DE PAGINAÇÃO E FILTROS
    // ============================================================
    let currentFilter = 'Todos';
    let currentPage = 1;
    const rowsPerPage = 5;
    let currentSection = 'dashboard';

    // ============================================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // ============================================================
    const sidebar           = document.getElementById('sidebar');
    const menuToggle        = document.getElementById('menuToggle');
    const sidebarOverlay    = document.getElementById('sidebarOverlay');
    const searchInput       = document.querySelector('.search-input');
    const searchIcon        = document.querySelector('.search-icon');
    const filterButtons     = document.querySelectorAll('.filter-btn');
    const ticketTableBody   = document.getElementById('ticketTableBody');
    const footerInfo        = document.getElementById('footerInfo');
    const btnNewTicket      = document.getElementById('btnNewTicket');
    const btnNewTicketFab   = document.getElementById('btnNewTicketFab');
    const modalNewTicket    = document.getElementById('modalNewTicket');
    const modalClose        = document.getElementById('modalClose');
    const btnCancelTicket   = document.getElementById('btnCancelTicket');
    const formNewTicket     = document.getElementById('formNewTicket');
    const chartBars         = document.querySelectorAll('.chart-bar-col');
    const btnPrevPage       = document.getElementById('btnPrevPage');
    const btnNextPage       = document.getElementById('btnNextPage');
    const paginationNumbers = document.getElementById('paginationNumbers');
    // Tabela da seção Chamados
    const ticketTableBody2   = document.getElementById('ticketTableBody2');
    const footerInfo2        = document.getElementById('footerInfo2');
    const btnPrevPage2       = document.getElementById('btnPrevPage2');
    const btnNextPage2       = document.getElementById('btnNextPage2');
    const paginationNumbers2 = document.getElementById('paginationNumbers2');
    const ticketsTotal       = document.getElementById('ticketsTotal');
    const teamGrid          = document.getElementById('teamGrid');
    const btnNewMember      = document.getElementById('btnNewMember');
    const modalNewMember    = document.getElementById('modalNewMember');
    const memberModalClose  = document.getElementById('memberModalClose');
    const btnCancelMember   = document.getElementById('btnCancelMember');
    const formNewMember     = document.getElementById('formNewMember');
    const countAbertos      = document.getElementById('countAbertos');
    const countAtendimento  = document.getElementById('countAtendimento');

    // ============================================================
    // NAVEGAÇÃO SPA (TROCA DE SEÇÕES)
    // ============================================================
    const navLinks = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('.app-section');
    const pageTitle    = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');

    const sectionMeta = {
        dashboard: { title: 'Painel Geral',    subtitle: 'Status das operações em tempo real.' },
        tickets:   { title: 'Chamados',         subtitle: 'Gerencie todos os chamados técnicos.' },
        teams:     { title: 'Equipes',          subtitle: 'Gerencie os técnicos e especialistas.' },
        reports:   { title: 'Relatórios',       subtitle: 'Análise de desempenho e indicadores.' },
        settings:  { title: 'Configurações',    subtitle: 'Preferências e configurações do sistema.' },
    };

    function navigateTo(sectionId) {
        currentSection = sectionId;

        // Atualizar links ativos na sidebar
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === sectionId) link.classList.add('active');
        });

        // Mostrar/esconder seções
        sections.forEach(sec => {
            sec.classList.toggle('hidden', sec.id !== `sec-${sectionId}`);
        });

        // Atualizar título do topbar
        if (pageTitle && sectionMeta[sectionId]) {
            pageTitle.textContent    = sectionMeta[sectionId].title;
            pageSubtitle.textContent = sectionMeta[sectionId].subtitle;
        }

        // Mostrar/esconder botão "Novo Chamado"
        const btnWrapper = document.getElementById('btnNewTicketWrapper');
        const btnNewMemberWrapper = document.getElementById('btnNewMemberWrapper');
        if (btnWrapper) btnWrapper.classList.toggle('hidden', sectionId !== 'dashboard' && sectionId !== 'tickets');
        if (btnNewMemberWrapper) btnNewMemberWrapper.classList.toggle('hidden', sectionId !== 'teams');

        // Renderizar seção de equipes quando entrar nela
        if (sectionId === 'teams') renderTeam();

        // Fechar sidebar mobile
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('open');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.section);
        });
    });

    // ============================================================
    // SIDEBAR MOBILE (HAMBURGUER)
    // ============================================================
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('open');
    }
    if (menuToggle)     menuToggle.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

    // ============================================================
    // BUSCA NO INPUT
    // ============================================================
    if (searchInput && searchIcon) {
        searchInput.addEventListener('focus', () => searchIcon.style.color = 'var(--color-primary)');
        searchInput.addEventListener('blur',  () => searchIcon.style.color = 'var(--color-on-surface-variant)');
        searchInput.addEventListener('input', () => { currentPage = 1; renderTickets(); });
    }

    // ============================================================
    // GRÁFICO - BARRA CLICÁVEL
    // ============================================================
    chartBars.forEach(bar => {
        bar.addEventListener('click', () => {
            chartBars.forEach(b => b.classList.remove('active'));
            bar.classList.add('active');
        });
    });

    // ============================================================
    // FILTROS DE CATEGORIA
    // ============================================================
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const text = btn.innerText.replace('filter_list', '').trim();
            if (text.includes('Todos'))                      currentFilter = 'Todos';
            else if (text.includes('Informática') || text.includes('TI')) currentFilter = 'Informática/TI';
            else if (text.includes('Elétrica'))              currentFilter = 'Elétrica';
            else if (text.includes('Predial') || text.includes('Civil')) currentFilter = 'Predial/Civil';
            else if (text.includes('Segurança'))             currentFilter = 'Segurança Eletrônica';
            else if (text.includes('Telecom'))               currentFilter = 'Telecomunicações';
            currentPage = 1;
            renderTickets();
        });
    });

    // ============================================================
    // RENDERIZAÇÃO DA TABELA DE CHAMADOS
    // ============================================================
    function getFilteredTickets() {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        return tickets.filter(t => {
            const matchCat    = currentFilter === 'Todos' || t.category === currentFilter;
            const matchSearch = !term || t.id.toLowerCase().includes(term) ||
                                t.subject.toLowerCase().includes(term) ||
                                t.category.toLowerCase().includes(term) ||
                                t.priority.toLowerCase().includes(term) ||
                                t.status.toLowerCase().includes(term);
            return matchCat && matchSearch;
        });
    }

    function getCategoryBadgeClass(cat) {
        const c = cat.toLowerCase();
        if (c.includes('ti') || c.includes('informática')) return 'badge-category-ti';
        if (c.includes('elétrica'))    return 'badge-category-elétrica';
        if (c.includes('predial'))     return 'badge-category-predial';
        if (c.includes('segurança'))   return 'badge-category-segurança';
        if (c.includes('telecom'))     return 'badge-category-telecom';
        return 'badge-category-ti';
    }

    function getStatusPillClass(status) {
        const s = status.toLowerCase();
        if (s === 'pendente')       return 'status-pill-pendente';
        if (s === 'em progresso')   return 'status-pill-progresso';
        if (s === 'validando')      return 'status-pill-validando';
        if (s === 'concluído')      return 'status-pill-concluido';
        return 'status-pill-progresso';
    }

    function getPriorityClass(priority) {
        const p = priority.toLowerCase();
        if (p === 'crítica') return 'priority-critical';
        if (p === 'alta')    return 'priority-high';
        return 'priority-medium';
    }

    function renderTickets() {
        const filtered   = getFilteredTickets();
        const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
        if (currentPage > totalPages) currentPage = totalPages;

        const start     = (currentPage - 1) * rowsPerPage;
        const pageItems = filtered.slice(start, start + rowsPerPage);

        // Renderiza em ambas as tabelas
        [ticketTableBody, ticketTableBody2].forEach(tbody => {
            if (!tbody) return;
            tbody.innerHTML = '';
            if (pageItems.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="empty-row">Nenhum chamado encontrado.</td></tr>`;
                return;
            }
            pageItems.forEach(ticket => {
                const priorityClass = getPriorityClass(ticket.priority);
                const categoryBadge = getCategoryBadgeClass(ticket.category);
                const statusPill    = getStatusPillClass(ticket.status);
                const isPendente    = ticket.status.toLowerCase() === 'pendente';
                const actionBtn     = isPendente
                    ? `<button class="btn-assign" data-id="${ticket.id}" title="Atribuir Técnico">ATRIBUIR</button>`
                    : `<span class="assigned-label">ATRIBUÍDO</span>`;

                const tr = document.createElement('tr');
                tr.className = 'ticket-row';
                tr.dataset.id = ticket.id;
                tr.innerHTML = `
                    <td class="ticket-id">${ticket.id}</td>
                    <td>
                        <p class="ticket-subject">${ticket.subject}</p>
                        <p class="ticket-meta">Abertura: ${ticket.meta}</p>
                    </td>
                    <td><span class="badge ${categoryBadge}">${ticket.category}</span></td>
                    <td>
                        <div class="priority-cell ${priorityClass}">
                            <span class="priority-dot"></span>
                            <span class="priority-text">${ticket.priority}</span>
                        </div>
                    </td>
                    <td><span class="status-pill ${statusPill}">${ticket.status}</span></td>
                    <td style="text-align:right;">
                        <div class="actions-cell-wrapper">
                            <button class="action-btn-icon" title="Visualizar"><span class="material-symbols-outlined">visibility</span></button>
                            ${actionBtn}
                        </div>
                    </td>`;

                tr.addEventListener('click', (e) => {
                    if (e.target.closest('button')) return;
                    document.querySelectorAll('.ticket-row.selected').forEach(r => r.classList.remove('selected'));
                    tr.classList.add('selected');
                });

                const assignBtn = tr.querySelector('.btn-assign');
                if (assignBtn) {
                    assignBtn.addEventListener('click', () => {
                        const t = tickets.find(x => x.id === assignBtn.dataset.id);
                        if (t) { t.status = 'Em Progresso'; updateCounters(); renderTickets(); }
                    });
                }
                tbody.appendChild(tr);
            });
        });

        // Atualizar footer e paginação — dashboard
        const infoText = `Exibindo ${start + 1}–${Math.min(start + rowsPerPage, filtered.length)} de ${filtered.length} chamados`;
        if (footerInfo)   footerInfo.textContent  = infoText;
        if (footerInfo2)  footerInfo2.textContent = infoText;
        if (ticketsTotal) ticketsTotal.textContent = `${tickets.length} chamados cadastrados`;
        renderPagination(totalPages);
    }

    // ============================================================
    // PAGINAÇÃO
    // ============================================================
    function renderPagination(totalPages) {
        // Setas dashboard
        if (btnPrevPage)  btnPrevPage.disabled  = currentPage === 1;
        if (btnNextPage)  btnNextPage.disabled  = currentPage === totalPages;
        // Setas chamados
        if (btnPrevPage2) btnPrevPage2.disabled = currentPage === 1;
        if (btnNextPage2) btnNextPage2.disabled = currentPage === totalPages;

        // Botões numéricos — renderiza em ambos os containers
        [paginationNumbers, paginationNumbers2].forEach(container => {
            if (!container) return;
            container.innerHTML = '';
            for (let p = 1; p <= totalPages; p++) {
                const btn = document.createElement('button');
                btn.className = 'pagination-btn' + (p === currentPage ? ' active' : '');
                btn.textContent = p;
                btn.addEventListener('click', () => { currentPage = p; renderTickets(); });
                container.appendChild(btn);
            }
        });
    }

    if (btnPrevPage)  btnPrevPage.addEventListener('click',  () => { if (currentPage > 1) { currentPage--; renderTickets(); } });
    if (btnNextPage)  btnNextPage.addEventListener('click',  () => { const total = Math.ceil(getFilteredTickets().length / rowsPerPage); if (currentPage < total) { currentPage++; renderTickets(); } });
    if (btnPrevPage2) btnPrevPage2.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderTickets(); } });
    if (btnNextPage2) btnNextPage2.addEventListener('click', () => { const total = Math.ceil(getFilteredTickets().length / rowsPerPage); if (currentPage < total) { currentPage++; renderTickets(); } });

    // ============================================================
    // CONTADORES DO DASHBOARD
    // ============================================================
    function updateCounters() {
        const pendentes    = tickets.filter(t => t.status === 'Pendente').length;
        const emProgresso  = tickets.filter(t => t.status === 'Em Progresso').length;
        if (countAbertos)     countAbertos.textContent    = pendentes;
        if (countAtendimento) countAtendimento.textContent = emProgresso;
    }

    // ============================================================
    // MODAL DE NOVO CHAMADO
    // ============================================================
    function openModal()  { if (modalNewTicket) modalNewTicket.classList.add('open'); }
    function closeModal() {
        if (modalNewTicket) modalNewTicket.classList.remove('open');
        if (formNewTicket)  formNewTicket.reset();
    }

    if (btnNewTicket)    btnNewTicket.addEventListener('click', openModal);
    if (btnNewTicketFab) btnNewTicketFab.addEventListener('click', openModal);
    if (modalClose)      modalClose.addEventListener('click', closeModal);
    if (btnCancelTicket) btnCancelTicket.addEventListener('click', closeModal);
    if (modalNewTicket)  modalNewTicket.addEventListener('click', e => { if (e.target === modalNewTicket) closeModal(); });

    if (formNewTicket) {
        formNewTicket.addEventListener('submit', e => {
            e.preventDefault();
            const subject  = document.getElementById('ticketSubject').value.trim();
            const location = document.getElementById('ticketLocation').value.trim();
            const category = document.getElementById('ticketCategory').value;
            const priority = document.getElementById('ticketPriority').value;
            if (!subject || !location) { alert('Preencha todos os campos obrigatórios.'); return; }

            const prefixMap = {
                'Informática/TI': 'TI', 'Elétrica': 'EL', 'Predial/Civil': 'PC',
                'Segurança Eletrônica': 'SE', 'Telecomunicações': 'TL'
            };
            const prefix = prefixMap[category] || 'TI';
            const num    = Math.floor(1000 + Math.random() * 9000);
            const now    = new Date();
            const time   = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

            tickets.unshift({
                id: `#${prefix}-${num}`, subject, category, priority,
                status: 'Pendente', meta: `${time} - ${location}`
            });
            currentPage = 1;
            updateCounters();
            renderTickets();
            closeModal();
        });
    }

    // ============================================================
    // SEÇÃO DE EQUIPES
    // ============================================================
    function getTeamInitialsEl(member) {
        return `<div class="team-avatar" style="background-color:${member.color};">${member.initials}</div>`;
    }

    function renderTeam() {
        if (!teamGrid) return;
        teamGrid.innerHTML = '';
        team.forEach(member => {
            const card = document.createElement('article');
            card.className = 'team-card card';
            card.innerHTML = `
                ${getTeamInitialsEl(member)}
                <div class="team-card-info">
                    <h4 class="team-name">${member.name}</h4>
                    <p class="team-role">${member.role}</p>
                    <span class="team-specialty-badge">${member.specialty}</span>
                </div>
                <div class="team-stats">
                    <div class="team-stat">
                        <span class="team-stat-value">${member.active}</span>
                        <span class="team-stat-label">Chamados Ativos</span>
                    </div>
                </div>
                <div class="team-contacts">
                    <a href="tel:${member.phone}" class="team-contact-link">
                        <span class="material-symbols-outlined">phone</span> ${member.phone}
                    </a>
                    <a href="mailto:${member.email}" class="team-contact-link">
                        <span class="material-symbols-outlined">mail</span> ${member.email}
                    </a>
                </div>`;
            teamGrid.appendChild(card);
        });

        // Atualizar contador de membros
        const memberCount = document.getElementById('teamMemberCount');
        if (memberCount) memberCount.textContent = `${team.length} membros`;
    }

    // Modal de Novo Membro
    function openMemberModal()  { if (modalNewMember) modalNewMember.classList.add('open'); }
    function closeMemberModal() {
        if (modalNewMember) modalNewMember.classList.remove('open');
        if (formNewMember)  formNewMember.reset();
    }

    if (btnNewMember)      btnNewMember.addEventListener('click', openMemberModal);
    if (memberModalClose)  memberModalClose.addEventListener('click', closeMemberModal);
    if (btnCancelMember)   btnCancelMember.addEventListener('click', closeMemberModal);
    if (modalNewMember)    modalNewMember.addEventListener('click', e => { if (e.target === modalNewMember) closeMemberModal(); });

    if (formNewMember) {
        formNewMember.addEventListener('submit', e => {
            e.preventDefault();
            const name      = document.getElementById('memberName').value.trim();
            const role      = document.getElementById('memberRole').value.trim();
            const specialty = document.getElementById('memberSpecialty').value;
            const phone     = document.getElementById('memberPhone').value.trim();
            const email     = document.getElementById('memberEmail').value.trim();
            if (!name || !role) { alert('Preencha nome e cargo.'); return; }

            const colors    = ['#54418a','#51599b','#16a34a','#ba1a1a','#514a5d','#0284c7'];
            const initials  = name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
            const color     = colors[team.length % colors.length];

            team.push({ id: team.length + 1, name, role, specialty, phone, email, initials, color, active: 0 });
            renderTeam();
            closeMemberModal();
        });
    }

    // ============================================================
    // CONFIGURAÇÕES — FORMULÁRIO E TOGGLES
    // ============================================================
    const formSettings = document.getElementById('formSettings');
    if (formSettings) {
        formSettings.addEventListener('submit', e => {
            e.preventDefault();

            // Atualizar nome exibido no topbar
            const nameInput = document.getElementById('settingName');
            const roleInput = document.getElementById('settingRole');
            const displayName = document.getElementById('displayUserName');
            const displayRole = document.getElementById('displayUserRole');
            if (nameInput && displayName) displayName.textContent = nameInput.value.trim() || displayName.textContent;
            if (roleInput && displayRole) displayRole.textContent = roleInput.value.trim() || displayRole.textContent;

            // Toast de confirmação
            const toast = document.getElementById('settingsToast');
            if (toast) {
                toast.classList.add('visible');
                setTimeout(() => toast.classList.remove('visible'), 3000);
            }
        });
    }

    // ============================================================
    // DARK MODE — Toggle real com localStorage
    // ============================================================
    const darkModeToggle  = document.getElementById('darkMode');
    const darkModeLabel   = darkModeToggle?.closest('.setting-toggle-row')?.querySelector('.toggle-label');

    function applyDarkMode(enabled) {
        if (enabled) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (darkModeLabel) darkModeLabel.textContent = enabled ? 'Ativado' : 'Desativado';
        if (darkModeToggle) darkModeToggle.checked = enabled;
        localStorage.setItem('techsupport-dark', enabled ? '1' : '0');
    }

    // Restaurar preferência salva ao carregar
    const savedDark = localStorage.getItem('techsupport-dark');
    applyDarkMode(savedDark === '1');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            applyDarkMode(this.checked);
        });
    }

    // Demais toggles — apenas atualizam o rótulo
    document.querySelectorAll('.toggle-switch input:not(#darkMode)').forEach(toggle => {
        toggle.addEventListener('change', function () {
            const label = this.closest('.setting-toggle-row')?.querySelector('.toggle-label');
            if (label) label.textContent = this.checked ? 'Ativado' : 'Desativado';
        });
    });

    // ============================================================
    // INICIALIZAÇÃO
    // ============================================================
    updateCounters();
    renderTickets();
    navigateTo('dashboard');
});
