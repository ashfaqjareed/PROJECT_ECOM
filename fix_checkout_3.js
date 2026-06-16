const fs = require('fs');

let html = fs.readFileSync('checkout.html', 'utf-8');

// Insert Installment CSS
const css_insert = `
    .installment-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #f59e0b, #f97316);
      color: #000;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.5rem 1.2rem;
      border-radius: 999px;
      cursor: pointer;
      margin-top: 0.75rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .installment-pill:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(245,158,11,0.4);
    }
`;

const styleCloseIndex = html.indexOf('</style>');
html = html.substring(0, styleCloseIndex) + css_insert + html.substring(styleCloseIndex);

// Insert Installment Pill Below Grand Total
const grandTotalHtml = `<div
            style="background: var(--primary); padding: 20px; display: flex; justify-content: space-between; align-items: center;">
            <span
              style="font-size: 14px; font-weight: 900; color: #fff; text-transform: uppercase; letter-spacing: 1px;">Grand
              Total</span>
            <span style="font-size: 24px; font-weight: 900; color: #fff;" id="total">RS. 0</span>
          </div>`;

const pillHtml = `
          <!-- Installment Pill -->
          <div style="text-align: right;">
            <div class="installment-pill" id="installmentTrigger" onclick="document.getElementById('installmentModal').style.display='flex'">
              <span>💡</span> Pay 1st deposit in installments
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
`;

if (html.includes(grandTotalHtml)) {
    html = html.replace(grandTotalHtml, grandTotalHtml + pillHtml);
} else {
    console.error("Could not find Grand Total HTML block to replace.");
}

// Insert Installment Modal
const timerModalIndex = html.indexOf('<!-- ═══ TIMER MODAL (PAY LATER) ═══ -->');
const installmentModalHtml = `
    <!-- ═══ INSTALLMENT MODAL ═══ -->
    <div id="installmentModal"
      style="position: fixed; inset: 0; z-index: 10001; display: none; align-items: center; justify-content: center; background: rgba(0,0,0,0.85); backdrop-filter: blur(16px);">
      <div class="policy-modal-box" style="max-width: 500px; padding: 40px; position: relative; text-align: left;">
        <button onclick="document.getElementById('installmentModal').style.display='none'" style="position:absolute; top:16px; right:16px; width:36px; height:36px; background:rgba(0,0,0,0.05); border:none; border-radius:10px; cursor:pointer; color:var(--text); font-size:18px; display:flex; align-items:center; justify-content:center; transition:background 0.2s;" onmouseover="this.style.background='rgba(239,68,68,0.1)'; this.style.color='#ef4444'" onmouseout="this.style.background='rgba(0,0,0,0.05)'; this.style.color='var(--text)'">✕</button>
        <h2 style="font-size: 24px; font-weight: 900; margin-bottom: 12px; color: #0f172a;">Installment Deposit Plan</h2>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 24px; line-height: 1.6;">
          Split your deposit payment into smaller installments.
        </p>
        <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 20px; border-radius: 16px; margin-bottom: 24px;">
          <ul style="padding-left: 20px; color: #92400e; font-size: 14px; line-height: 1.6; margin: 0;">
            <li style="margin-bottom: 8px;"><b>40% Now:</b> Pay 40% of the total now to secure your order.</li>
            <li><b>60% on Delivery:</b> Pay the remaining 60% plus delivery fee upon receipt of your items.</li>
          </ul>
        </div>
        <p style="color: #ef4444; font-size: 13px; margin-bottom: 24px; font-weight: 600;">
          Terms: The 40% deposit is non-refundable if the order is cancelled after dispatch.
        </p>
        <button onclick="document.getElementById('installmentModal').style.display='none'; document.getElementById('paymentScreenshot').click();"
            style="width: 100%; padding: 18px; background: #f97316; color: #fff; border: none; border-radius: 16px; font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 8px 24px rgba(249,115,22,0.3); transition: all 0.3s;"
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 32px rgba(249,115,22,0.4)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 8px 24px rgba(249,115,22,0.3)'">
            I Agree &amp; Continue
        </button>
      </div>
    </div>
`;
html = html.substring(0, timerModalIndex) + installmentModalHtml + html.substring(timerModalIndex);

fs.writeFileSync('checkout.html', html, 'utf-8');
console.log("FIX 3 applied!");
