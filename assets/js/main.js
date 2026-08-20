/**
 * ==========================================================================
 * PT KARYA CIPTA SETIAWAN (KCS)
 * Main Interactive Application Script
 * Selalu Siap Setiap Saat 24 Jam ON
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. EQUIPMENT CATALOG DATA (Matched to www.chas.co.id)
    // ----------------------------------------------------------------------
    const equipmentCatalog = [
        {
            id: 't136-foco',
            name: 'T-136',
            model: 'SANY HEAVY MOBILE CRANE',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: 'Heavy Cargo & Crane',
            engine: 'SANY / Isuzu Heavy Chassis',
            reach: 'Telescopic Crane Arm',
            image: 'assets/images/kcs-upload-02.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop',
            description: 'Truk derek SANY heavy duty PT Karya Cipta Setiawan dengan boom teleskopik untuk mobilisasi dan instalasi proyek berat.',
            specs: {
                'Unit Code': 'T-136 FOCO',
                'Application': 'Heavy Cargo Transport & Mobilization',
                'Crane Mechanism': 'Hydraulic Telescopic Crane',
                'License Plate': 'B 9558 XLY',
                'Certification': 'Certified Operator & SIA Compliant'
            }
        },
        {
            id: 'telehandler-kanan',
            name: 'ZOOMLION FORKLIFT 10T',
            model: 'HEAVY INDUSTRIAL FORKLIFT',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '10 Ton Lift',
            engine: 'Zoomlion Heavy Turbo Diesel',
            reach: 'Standard Duplex / Triplex Mast',
            image: 'assets/images/kcs-upload-04.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1000&auto=format&fit=crop',
            description: 'Forklift Zoomlion 10 Ton performa tinggi untuk penanganan peti kemas, mesin pabrik, dan logistik indoor/outdoor.',
            specs: {
                'Max Lifting Capacity': '10,000 kg',
                'Max Lift Height': '4.5 - 6.0 Meters',
                'Fork Length': '1.8 - 2.4 Meters',
                'Drive': 'Diesel Power',
                'Safety': 'K3LH & SIA Operator'
            }
        },
        {
            id: 'wheel-loader',
            name: 'LONKING FORKLIFT 10T',
            model: 'HEAVY DUTY FORKLIFT 100',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '10 Ton Lift Capacity',
            engine: 'Lonking Turbo Diesel',
            reach: 'Heavy Duty Cargo Boom',
            image: 'assets/images/kcs-upload-03.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1579407364450-481fe19d4b4a?q=80&w=1000&auto=format&fit=crop',
            description: 'Forklift Lonking 10 Ton tangguh untuk bongkar muat kargo berat, kontainer, dan mesin industri di pelabuhan & proyek.',
            specs: {
                'Capacity': '10,000 kg (10 Ton)',
                'Operating Weight': '13,500 kg',
                'Fork Side Shifter': 'Hydraulic Attachment',
                'Feature': 'Container & Heavy Box Lifting',
                'Safety': 'Full K3LH & Operator SIA Certified'
            }
        },
        {
            id: 'roughter-crane-50t',
            name: 'Roughter Crane',
            model: 'SANY / TADANO 50T',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '50 Ton',
            engine: 'Mitsubishi / Sany Power Plant',
            reach: '35m Boom + Jib',
            image: 'assets/images/kcs-upload-02.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
            description: 'Mobile Rough Terrain Crane 50 Ton dengan daya jelajah tinggi di medan sempit dan tidak rata untuk pengangkatan presisi.',
            specs: {
                'Max Capacity': '50 Ton @ 3.0m',
                'Main Boom': '10.7m - 33.3m (4 Sections)',
                'Fly Jib': '8.8m - 13.2m',
                'Steering Modes': '4WD 4-Wheel Steering',
                'Operator SIA': 'Certified SIA Class I'
            }
        },
        {
            id: 'hidromek-mg330',
            name: 'MOBILE CRANE 24/7',
            model: 'SANY NIGHT LIFTING CRANE',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: 'Heavy Night Lifting',
            engine: 'Sany / Isuzu Heavy Power',
            reach: 'Outriggers & Spotlight System',
            image: 'assets/images/kcs-upload-11.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop',
            description: 'Armada Mobile Crane SANY PT KCS siap 24 Jam ON melayani pengangkatan malam hari dengan standar keselamatan K3LH & penerangan proyek.',
            specs: {
                'Availability': '24 Hours ON Non-Stop Service',
                'Application': 'Night Erection & Emergency Lifting',
                'Lighting': 'Heavy Project Floodlight System',
                'Safety Signage': 'K3LH & APAR Compliant',
                'QHSE': 'Full Maintenance Record & SIA Certified'
            }
        },
        {
            id: 'sakai-sv526tf',
            name: 'MOBILE CRANE',
            model: 'SANY STC250C5 - 25 TON',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '25 Ton',
            engine: 'Sany DXi / Cummins Turbo Diesel',
            reach: '33.5 Meter Telescopic Boom',
            image: 'assets/images/kcs-upload-12.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
            description: 'Sany STC250C5 Mobile Crane 25 Ton presisi tinggi untuk pengangkatan tangki, struktur baja, dan mesin industri.',
            specs: {
                'Max Lifting Capacity': '25,000 kg (25 Ton)',
                'Boom Sections': '4 Section U-Shape Telescopic Boom',
                'Outrigger Base': '6.0m x 5.3m',
                'Hydraulic System': 'SANY Load Sensing System',
                'Standard': 'K3LH Maintenance Compliant'
            }
        },
        {
            id: 'exca-kobelco-sk210lc',
            name: 'MOBILE CRANE',
            model: 'SANY HEAVY EXTENSION CRANE',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '35 - 50 Ton',
            engine: 'Sany Heavy Chassis',
            reach: 'Jib Extension Attached',
            image: 'assets/images/kcs-upload-13.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1579407364450-481fe19d4b4a?q=80&w=1000&auto=format&fit=crop',
            description: 'Mobile Crane SANY dengan jangkauan ekstra jib extension untuk pengangkatan atap pabrik, tower, dan gedung tinggi.',
            specs: {
                'Max Capacity': '35,000 - 50,000 kg',
                'Engine': 'Sany Heavy Duty Diesel',
                'Fly Jib': 'Lattice Jib Extension Included',
                'Mobility': 'Road-Legal Heavy Truck License',
                'SIA License': 'Certified SIA Operator Attached'
            }
        },
        {
            id: 'komatsu-bulldozer-d85e',
            name: 'HELI HEAVY FORKLIFT',
            model: 'HELI 180 - 18 TON',
            category: 'medium-heavy',
            categoryName: 'Medium-Heavy Duty',
            capacity: '18 Ton',
            engine: 'Cummins QSB6.7 (190 HP)',
            reach: '5.0 Meter Lifting Height',
            image: 'assets/images/kcs-upload-14.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1000&auto=format&fit=crop',
            description: 'Forklift HELI 180 kapasitas 18 Ton kelas berat untuk industri manufaktur, penanganan cetakan mesin (mould), dan komponen baja.',
            specs: {
                'Operating Capacity': '18,000 kg (18 Ton)',
                'Engine Power': 'Cummins Turbo Diesel 190 HP',
                'Mast Type': 'Duplex Wide View Heavy Mast',
                'Indoor Safety': 'K3LH Standard & Low Emission',
                'Safety': 'Full ROPS Cabin & Operator SIA'
            }
        },
        {
            id: 'gehl-backhoe-gblx920',
            name: 'KOMATSU HEAVY FORKLIFT',
            model: 'KOMATSU FD-SERIES 7 TON',
            category: 'versatile',
            categoryName: 'Versatile Fleet',
            capacity: '7.0 Ton',
            engine: 'Komatsu S6D102E Turbo Diesel',
            reach: 'Heavy Pipe & Material Fork',
            image: 'assets/images/kcs-upload-15.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1000&auto=format&fit=crop',
            description: 'Forklift Komatsu 7 Ton tangguh untuk proyek konstruksi outdoor, penanganan pipa besi/baja, dan material proyek lapangan.',
            specs: {
                'Operating Capacity': '7,000 kg (7 Ton)',
                'Engine Power': 'Komatsu 6-Cylinder Diesel',
                'Attachment': 'Side Shifter & Heavy Duty Forks',
                'Terrain': 'Rough Ground & Outdoor Jobsite',
                'Drive Train': 'Heavy Duty Axles & Dual Front Wheels'
            }
        },
        {
            id: 'renault-k480',
            name: 'TOWING & HEAVY TRANSPORT',
            model: 'FLATBED MOBILIZATION TRUCK',
            category: 'versatile',
            categoryName: 'Versatile Fleet',
            capacity: 'Heavy Equipment Transport',
            engine: 'Mitsubishi / Hino Heavy Towing Unit',
            reach: 'Self-Loading Ramps',
            image: 'assets/images/kcs-upload-05.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1000&auto=format&fit=crop',
            description: 'Truk mobilisasi towing flatbed PT KCS dilengkapi ramp loading hidrolik untuk pengiriman forklift dan unit alat berat 24 jam ON.',
            specs: {
                'Application': 'Fast Unit Mobilization (Forklift & Small Heavy Unit)',
                'Equipment Deck': 'Hydraulic Fold-Down Ramps',
                'Operational Ready': '24/7 Emergency Transport',
                'Registration': 'KCS Direct Carrier Fleet',
                'Safety': 'Certified Escort & Tie-Down Standard'
            }
        },
        {
            id: 'crawler-crane-sany-stc550',
            name: 'MOBILE CRANE',
            model: 'SANY STC550C5 55 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '55 Ton',
            engine: 'Cummins ISLe340 (340 HP)',
            reach: '43.5 Meter Main Boom',
            image: 'assets/images/kcs-upload-07.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop',
            description: 'Mobile Crane Sany STC550C5 55 Ton derek berkemampuan tinggi untuk pengangkatan balok girder, tangki migas, serta instalasi mesin pabrik.',
            specs: {
                'Max Capacity': '55 Ton @ 3.0m',
                'Boom Length': '43.5 Meter U-Shape Boom',
                'Max Lifting Height': '59.5 Meter with Jib',
                'Outrigger Span': '6.0m x 7.2m',
                'SIA License': 'Class I SIA Certified Crane Operator'
            }
        },
        {
            id: 'roughter-crane-tadano-gr500',
            name: 'MOBILE CRANE',
            model: 'SANY HEAVY CRANE 50 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '50 Ton',
            engine: 'Sany / Mitsubishi Heavy Engine',
            reach: '33.3m Boom + 13.2m Jib',
            image: 'assets/images/kcs-upload-08.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
            description: 'Mobile Crane Sany 50 Ton serbaguna dengan dukungan teknisi & operator KCS bersertifikat SIA/SIO.',
            specs: {
                'Lifting Capacity': '50,000 kg @ 3.0m',
                'Boom Sections': '4 Sections Fully Synchronized',
                'Inspection': 'Routine K3LH Walkthrough Certified',
                'Safety Devices': 'Load Moment Indicator',
                'SIA Operator': 'Fully Certified SIA Class I'
            }
        },
        {
            id: 'zoomlion-zct60',
            name: 'HEAVY FORKLIFT ZOOMLION',
            model: 'ZOOMLION 100 - 10 TON',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '10 Ton',
            engine: 'Zoomlion Heavy Duty Diesel',
            reach: 'Wooden Crate & Container Handler',
            image: 'assets/images/kcs-upload-09.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
            description: 'Forklift Zoomlion 10 Ton performa maksimal untuk penanganan peti kayu berat dan logistik kargo dalam ruangan pabrik.',
            specs: {
                'Lifting Capacity': '10 Ton @ 600mm Load Center',
                'Fork Length': '2.4 Meter Heavy Forks',
                'Indoor Operation': 'Low Emission Diesel Engine',
                'Safety Standard': 'APAR & K3LH Standard Compliant',
                'QHSE': 'QHSE Standards & Certified Rigging Team'
            }
        },
        {
            id: 'erection-girder',
            name: 'Erection Girder',
            model: 'LAUNCHING GANTRY & BRIDGING SYSTEM',
            category: 'specialized',
            categoryName: 'Specialized Infrastructure',
            capacity: 'Up to 300 Ton Girder',
            engine: 'Hydraulic Power Pack 150 kW',
            reach: '50 Meter Span',
            image: 'assets/images/kcs-upload-07.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop',
            description: 'Layanan spesialisasi pemasangan balok girder beton (erection girder) pada proyek jembatan dan elevated highway dengan sistem gantry modern.',
            specs: {
                'Girder Weight Cap.': 'Up to 300 Tons Per Span',
                'Span Range': '30m - 50m Span Length',
                'Hydraulic Control': 'Precision Synchronized Jacking',
                'Standard': 'BMS (Bridge Management System)',
                'Engineering': 'Specialized Bridge Engineers Team'
            }
        },
        {
            id: 'sany-scs1500a',
            name: 'FORKLIFT HANGCHA 5T',
            model: 'HANGCHA 50 HEAVY DUTY',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '5.0 Ton',
            engine: 'Isuzu 6BG1 / Hangcha Diesel',
            reach: 'Dual Wheel Heavy Duty Mast',
            image: 'assets/images/kcs-upload-10.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop',
            description: 'Hangcha 50 Forklift 5 Ton ban ganda tangguh untuk pekerjaan lapangan outdoor dan pemindahan material proyek.',
            specs: {
                'Max Lifting Capacity': '5,000 kg (5 Ton)',
                'Tire Configuration': 'Dual Front Pneumatic Tires',
                'Deployment': 'Outdoor Site & Field Work Ready',
                'Safety Signage': 'K3LH Site Standard Compliant',
                'Safety System': 'Safety Overhead Guard & LED Lights'
            }
        },
        {
            id: 'fuso-towing-crane',
            name: 'MITSUBISHI FUSO TOWING',
            model: 'SELF-LOADER TRUCK CRANE (E 8801 BW)',
            category: 'versatile',
            categoryName: 'Versatile Fleet',
            capacity: 'Heavy Equipment Carrier',
            engine: 'Mitsubishi Fuso Turbo Diesel',
            reach: 'Telescopic Crane & Ramp Deck',
            image: 'assets/images/kcs-upload-16.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1000&auto=format&fit=crop',
            description: 'Truk Fuso derek & towing hidrolik self-loader PT KCS (E 8801 BW) untuk pengangkutan unit forklift dan mobilisasi darurat 24 jam.',
            specs: {
                'Unit Code': 'FUSO TOWING E 8801 BW',
                'Application': 'Forklift & Equipment Fast Mobilization',
                'Crane Boom': 'Tadano Telescopic Hydraulic Crane',
                'Deck System': 'Lowbed Self-Loader Ramp',
                'License': 'KCS Emergency Mobilization Fleet'
            }
        },
        {
            id: 'heli-180-tandem',
            name: 'HELI 180 TANDEM LIFT',
            model: 'HEAVY MACHINE RELOCATION 18T',
            category: 'specialized',
            categoryName: 'Specialized Lifting',
            capacity: '18 Ton (Tandem Ready)',
            engine: 'Cummins QSB6.7 Turbo Diesel',
            reach: 'Precision Tandem Lifting',
            image: 'assets/images/kcs-upload-17.jpg',
            fallbackImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
            description: 'Layanan tandem lifting & relokasi mesin pabrik menggunakan armada Forklift HELI 18 Ton ganda presisi tinggi dalam area industri.',
            specs: {
                'Lifting Method': 'Synchronized Tandem Lift',
                'Capacity': '18,000 kg Per Unit',
                'Application': 'Heavy Industrial Machinery Relocation',
                'Environment': 'Clean Factory Floor Operation',
                'Safety Standard': 'Full K3LH & Rigging Engineering Certified'
            }
        }
    ];

    // ----------------------------------------------------------------------
    // 2. RENDER EQUIPMENT GRID
    // ----------------------------------------------------------------------
    const equipmentGrid = document.getElementById('equipment-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderEquipment(filter = 'all') {
        if (!equipmentGrid) return;
        
        equipmentGrid.innerHTML = '';
        const filteredData = filter === 'all' 
            ? equipmentCatalog 
            : equipmentCatalog.filter(item => item.category === filter);

        if (filteredData.length === 0) {
            equipmentGrid.innerHTML = `
                <div class="no-equipment-msg text-center" style="grid-column: 1 / -1; padding: 3rem;">
                    <i class="fa-solid fa-truck-monster fa-3x" style="color: var(--clr-gray-300); margin-bottom: 1rem;"></i>
                    <h3>No Units Found</h3>
                    <p>Please select another category.</p>
                </div>
            `;
            return;
        }

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'equipment-card';
            card.setAttribute('data-category', item.category);

            card.innerHTML = `
                <div class="equipment-img-wrapper">
                    <img src="${item.image}" alt="${item.name} ${item.model}" loading="lazy" onerror="this.src='${item.fallbackImage}'">
                    <span class="equipment-tag">${item.categoryName}</span>
                </div>
                <div class="equipment-body">
                    <h3 class="equipment-title">${item.name}</h3>
                    <div class="equipment-model">${item.model}</div>
                    
                    <div class="equipment-specs-mini">
                        <div class="spec-chip"><i class="fa-solid fa-weight-hanging"></i> ${item.capacity}</div>
                        <div class="spec-chip"><i class="fa-solid fa-gauge-high"></i> ${item.engine}</div>
                    </div>

                    <p class="equipment-desc">${item.description}</p>
                    
                    <div class="equipment-actions">
                        <button class="btn btn-outline-primary btn-sm view-spec-btn" data-id="${item.id}">
                            <i class="fa-solid fa-eye"></i> View Specs
                        </button>
                        <button class="btn btn-primary btn-sm rent-this-btn" data-id="${item.id}" data-name="${item.name} - ${item.model}">
                            <i class="fa-solid fa-handshake"></i> Hire Unit
                        </button>
                    </div>
                </div>
            `;
            equipmentGrid.appendChild(card);
        });

        attachEquipmentCardEvents();
    }

    // Filter Buttons Event Setup
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderEquipment(filterValue);
        });
    });

    // Initial render
    renderEquipment('all');

    // ----------------------------------------------------------------------
    // 3. DETAIL MODAL HANDLER (SPECS POPUP & LIGHTBOX)
    // ----------------------------------------------------------------------
    const detailModal = document.getElementById('detail-modal');
    const detailModalContent = document.getElementById('detail-modal-content');
    const closeDetailModalBtn = document.getElementById('close-detail-modal-btn');

    function openEquipmentDetail(itemId) {
        const item = equipmentCatalog.find(e => e.id === itemId);
        if (!item || !detailModal || !detailModalContent) return;

        let specsRowsHtml = '';
        for (const [key, val] of Object.entries(item.specs)) {
            specsRowsHtml += `
                <tr>
                    <td class="spec-key"><strong>${key}</strong></td>
                    <td class="spec-val">${val}</td>
                </tr>
            `;
        }

        detailModalContent.innerHTML = `
            <div class="modal-detail-wrapper">
                <div class="modal-detail-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallbackImage}'">
                    <div class="modal-detail-badge">${item.categoryName}</div>
                </div>
                <div class="modal-detail-info">
                    <h2 class="modal-detail-title">${item.name}</h2>
                    <p class="modal-detail-subtitle">${item.model} — Technical Specifications</p>
                    <p class="modal-detail-desc">${item.description}</p>
                    
                    <h4 class="specs-table-title"><i class="fa-solid fa-list-check"></i> Technical Specs Sheet</h4>
                    <table class="specs-table">
                        <tbody>
                            ${specsRowsHtml}
                        </tbody>
                    </table>

                    <div class="modal-detail-cta">
                        <button class="btn btn-accent btn-lg w-full rent-from-detail-btn" data-id="${item.id}" data-name="${item.name} - ${item.model}">
                            <i class="fa-solid fa-paper-plane"></i> Request Quotation For This Unit
                        </button>
                    </div>
                </div>
            </div>
        `;

        detailModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const rentFromDetailBtn = detailModalContent.querySelector('.rent-from-detail-btn');
        if (rentFromDetailBtn) {
            rentFromDetailBtn.addEventListener('click', () => {
                const eqName = rentFromDetailBtn.getAttribute('data-name');
                closeDetailModal();
                openQuotationModalWithUnit(eqName);
            });
        }
    }

    function closeDetailModal() {
        if (detailModal) {
            detailModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (closeDetailModalBtn) {
        closeDetailModalBtn.addEventListener('click', closeDetailModal);
    }

    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target === detailModal) {
                closeDetailModal();
            }
        });
    }

    function attachEquipmentCardEvents() {
        document.querySelectorAll('.view-spec-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.getAttribute('data-id');
                openEquipmentDetail(itemId);
            });
        });

        document.querySelectorAll('.rent-this-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const eqName = btn.getAttribute('data-name');
                openQuotationModalWithUnit(eqName);
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. QUOTATION MODAL & WHATSAPP GENERATOR
    // ----------------------------------------------------------------------
    const quoteModal = document.getElementById('quote-modal');
    const openQuoteBtns = document.querySelectorAll('.open-quote-modal');
    const closeQuoteBtn = document.getElementById('close-modal-btn');
    const quoteForm = document.getElementById('quote-form');
    const equipmentSelect = document.getElementById('equipment-select');

    function openQuotationModal() {
        if (quoteModal) {
            quoteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeQuotationModal() {
        if (quoteModal) {
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function openQuotationModalWithUnit(unitName) {
        openQuotationModal();
        if (equipmentSelect && unitName) {
            let matchedOption = Array.from(equipmentSelect.options).find(opt => 
                opt.text.toLowerCase().includes(unitName.toLowerCase()) || 
                unitName.toLowerCase().includes(opt.value.toLowerCase())
            );
            if (matchedOption) {
                equipmentSelect.value = matchedOption.value;
            } else {
                let customOpt = document.createElement('option');
                customOpt.value = unitName;
                customOpt.text = unitName;
                customOpt.selected = true;
                equipmentSelect.appendChild(customOpt);
            }
        }
    }

    openQuoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openQuotationModal();
        });
    });

    if (closeQuoteBtn) {
        closeQuoteBtn.addEventListener('click', closeQuotationModal);
    }

    if (quoteModal) {
        quoteModal.addEventListener('click', (e) => {
            if (e.target === quoteModal) {
                closeQuotationModal();
            }
        });
    }

    // Toast Notification System
    function showToast(message, type = 'success') {
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check toast-icon"></i>
            <div class="toast-message">${message}</div>
            <button class="toast-close">&times;</button>
        `;

        toastContainer.appendChild(toast);

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.classList.add('toast-fadeout');
            setTimeout(() => toast.remove(), 300);
        });

        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.add('toast-fadeout');
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);
    }

    // WhatsApp Direct Submission
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('client-name')?.value || 'Prospective Client';
            const email = document.getElementById('client-email')?.value || '-';
            const phone = document.getElementById('client-phone')?.value || '-';
            const unit = equipmentSelect?.options[equipmentSelect.selectedIndex]?.text || 'General Equipment Inquiry';
            const duration = document.getElementById('rental-duration')?.value || 'Monthly Contract';
            const notes = document.getElementById('project-location')?.value || 'No specific location specified.';

            const targetPhone = document.getElementById('contact-target')?.value || '6289660621246';
            
            const message = 
`*PERMINTAAN PENAWARAN HARGA (QUOTATION) - PT KARYA CIPTA SETIAWAN*
=========================================
*Nama / Perusahaan:* ${name}
*Email:* ${email}
*Telepon/WA:* ${phone}
-----------------------------------------
*Layanan / Unit Alat:* ${unit}
*Durasi / Jenis Kontrak:* ${duration}
*Lokasi & Detail Proyek:* 
${notes}
=========================================
_Dikirim via Website Profile PT KARYA CIPTA SETIAWAN_`;

            const encodedMsg = encodeURIComponent(message);
            const waUrl = `https://wa.me/${targetPhone}?text=${encodedMsg}`;

            showToast('Quotation Request Prepared! Opening WhatsApp...', 'success');
            closeQuotationModal();
            
            setTimeout(() => {
                window.open(waUrl, '_blank');
                quoteForm.reset();
            }, 600);
        });
    }

    // ----------------------------------------------------------------------
    // 5. ANIMATED NUMERIC COUNTER (Trust Metrics)
    // ----------------------------------------------------------------------
    const counterElements = document.querySelectorAll('.counter-number, .stat-num');
    let animated = false;

    function animateCounters() {
        if (animated) return;

        counterElements.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // ms
                const stepTime = 30;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = target + '+';
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.ceil(current);
                    }
                }, stepTime);

                animated = true;
            }
        });
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Run check on load

    // ----------------------------------------------------------------------
    // 6. STICKY HEADER & MOBILE NAVIGATION DRAWER
    // ----------------------------------------------------------------------
    const siteHeader = document.getElementById('site-header');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader?.classList.add('scrolled');
        } else {
            siteHeader?.classList.remove('scrolled');
        }
    });

    function toggleMobileMenu() {
        hamburgerBtn?.classList.toggle('active');
        navMenu?.classList.toggle('active');
        mobileOverlay?.classList.toggle('active');
        document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu?.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // ----------------------------------------------------------------------
    // 7. SCROLL TO TOP BUTTON
    // ----------------------------------------------------------------------
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});