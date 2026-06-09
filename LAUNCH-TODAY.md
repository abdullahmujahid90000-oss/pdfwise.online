# PDFWise — Launch Today Guide
## Buy Domain → GitHub → Google Console → AdSense (All in One Day)

---

## STEP 1 — BUY YOUR DOMAIN (15 minutes)

### Go to Namecheap (cheapest + easiest)
**URL:** https://www.namecheap.com

1. Go to namecheap.com
2. Type `pdfwise.io` in the search bar and press Enter
3. If available, click **Add to Cart** (~$12–15/year)
4. Click **View Cart** → **Confirm Order**
5. Create a Namecheap account (or log in)
6. Pay with card or PayPal
7. Done — you own the domain ✅

> If `pdfwise.io` is taken, try: `pdfwise.net` / `pdfwisetools.com` / `mypdfwise.io`

---

## STEP 2 — CREATE A GITHUB ACCOUNT (5 minutes)

**URL:** https://github.com

1. Click **Sign up** (top right)
2. Enter your email: `abdullah.mujahid90000@gmail.com`
3. Create a password
4. Choose a username — use something like `pdfwise` or `abdullahmujahid`
5. Verify your email (check inbox)
6. You now have a GitHub account ✅

---

## STEP 3 — CREATE YOUR REPOSITORY (3 minutes)

1. After logging in, click the **green "New" button** (top left) OR go to:
   **https://github.com/new**

2. In **Repository name** — type EXACTLY:
   ```
   pdfwise.io
   ```
   (or if your username is abdullahmujahid, you can also name it `abdullahmujahid.github.io`)

3. Set it to **Public**

4. Leave everything else default

5. Click **Create repository** ✅

---

## STEP 4 — UPLOAD YOUR FILES (10 minutes)

### Install GitHub Desktop (Easiest method)

**Download:** https://desktop.github.com

1. Download and install GitHub Desktop
2. Open it → click **Sign in to GitHub.com**
3. Authorize it with your GitHub account

### Clone your new repo:
1. In GitHub Desktop: click **File → Clone Repository**
2. Find your `pdfwise.io` repo in the list → click it
3. Choose where to save it on your computer (e.g., Desktop)
4. Click **Clone**

### Copy your PDFWise files:
1. Open Finder (Mac) or File Explorer (Windows)
2. Go to: **Downloads → ABDULLAH MUJAHID → PDFWise-v2**
3. Select ALL files and folders inside PDFWise-v2:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `privacy.html`
   - `terms.html`
   - `ads.txt`
   - `robots.txt`
   - `sitemap.xml`
   - `css/` folder
   - `js/` folder
   - `tools/` folder
   - `blog/` folder
4. **Copy** all of them (Cmd+C on Mac / Ctrl+C on Windows)
5. Open the cloned repo folder (where GitHub Desktop saved it)
6. **Paste** everything inside (Cmd+V / Ctrl+V)

### Push to GitHub:
1. Go back to GitHub Desktop
2. You'll see all the files listed as changes on the left
3. At the bottom left, type in Summary: `Launch PDFWise website`
4. Click **Commit to main**
5. Click **Push origin** (top right blue button)
6. Done — files are live on GitHub ✅

---

## STEP 5 — ENABLE GITHUB PAGES (3 minutes)

1. Go to your repo on github.com:
   `https://github.com/YOURUSERNAME/pdfwise.io`
2. Click **Settings** tab (top of repo)
3. In the left sidebar, scroll down and click **Pages**
4. Under **Source**: select **Deploy from a branch**
5. Under **Branch**: select **main** and folder **/ (root)**
6. Click **Save**
7. Wait 2 minutes, then refresh
8. You'll see: ✅ **Your site is live at `https://yourusername.github.io/pdfwise.io`**

---

## STEP 6 — CONNECT YOUR DOMAIN (15 minutes)

### In Namecheap — Add DNS Records:

1. Log in to https://www.namecheap.com
2. Click **Domain List** (left sidebar)
3. Click **Manage** next to `pdfwise.io`
4. Click the **Advanced DNS** tab
5. Delete any existing A Records
6. Add these **4 A Records** (one at a time):

| Type | Host | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | 185.199.108.153    | Auto |
| A    | @    | 185.199.109.153    | Auto |
| A    | @    | 185.199.110.153    | Auto |
| A    | @    | 185.199.111.153    | Auto |

7. Add a **CNAME Record**:

| Type  | Host | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | YOURUSERNAME.github.io         | Auto |

8. Click the ✅ checkmark to save each record

### In GitHub Pages — Set Custom Domain:

1. Go back to your GitHub repo → Settings → Pages
2. Under **Custom domain**, type: `www.pdfwise.io`
3. Click **Save**
4. Check **Enforce HTTPS** (may take a few minutes to activate)

### Wait for DNS propagation:
- DNS takes **10 minutes to 2 hours** to spread worldwide
- Test at: https://dnschecker.org — type `pdfwise.io`
- Once it shows green checkmarks, your site is live at `https://www.pdfwise.io` ✅

---

## STEP 7 — SUBMIT TO GOOGLE SEARCH CONSOLE (10 minutes)

**URL:** https://search.google.com/search-console

1. Sign in with your Google account
2. Click **Add Property** (top left dropdown)
3. Select **URL prefix**
4. Enter: `https://www.pdfwise.io`
5. Click **Continue**

### Verify ownership via HTML tag:
1. Google shows you a `<meta>` tag like:
   ```html
   <meta name="google-site-verification" content="XXXXXX..." />
   ```
2. Open your `PDFWise-v2/index.html` file in any text editor (Notepad, TextEdit)
3. Find the `<head>` section near the top
4. Paste that meta tag right after `<meta charset="UTF-8" />`
5. Save the file
6. Upload again via GitHub Desktop (same steps: commit → push)
7. Wait 2–3 minutes for GitHub to update
8. Back in Search Console → click **Verify**
9. ✅ Verified!

### Submit your sitemap:
1. In Search Console left sidebar → click **Sitemaps**
2. In the "Add a new sitemap" box, type: `sitemap.xml`
3. Click **Submit**
4. Status should show **Success** ✅

### Request indexing:
1. In Search Console → click **URL Inspection** (left sidebar)
2. Type your URL: `https://www.pdfwise.io/`
3. Click **Request Indexing**
4. Repeat for: `https://www.pdfwise.io/tools/compress.html`

---

## STEP 8 — APPLY FOR GOOGLE ADSENSE (10 minutes)

**URL:** https://adsense.google.com/start

1. Click **Get started**
2. Sign in with your Google account (same one as Search Console)
3. Under **Your site**, enter: `https://www.pdfwise.io`
4. Select your country
5. Accept Terms and Conditions
6. Click **Start using AdSense**

### Add the AdSense verification code:
Google will give you a code like:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
```

Your **Publisher ID** is the part that says `ca-pub-XXXX`

1. Open ALL your HTML files and replace `ca-pub-XXXXXXXXXX` with your real Publisher ID
   - Best way: Open VS Code (free at code.visualstudio.com)
   - File → Open Folder → select PDFWise-v2
   - Press **Ctrl+Shift+H** (Windows) or **Cmd+Shift+H** (Mac)
   - Find: `ca-pub-XXXXXXXXXX`
   - Replace: `ca-pub-YOUR-REAL-ID`
   - Click **Replace All**

2. Also update `ads.txt` — open it and change:
   ```
   google.com, pub-XXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
   to:
   ```
   google.com, pub-YOUR-REAL-ID, DIRECT, f08c47fec0942fa0
   ```

3. Save all files, then push to GitHub again via GitHub Desktop

4. Go back to AdSense → click **Done**

### What happens next:
- Google reviews your site within **1–7 days** (custom domain = faster)
- You'll get an email at your Gmail when approved
- Status: **Approved** → you can immediately start placing real ad units ✅
- Status: **Action required** → fix the specific issue they mention, resubmit

---

## STEP 9 — SETUP GOOGLE ANALYTICS (Optional but recommended)

**URL:** https://analytics.google.com

1. Sign in → click **Start measuring**
2. Account name: `PDFWise`
3. Property name: `pdfwise.io`
4. Select your country and currency
5. Click **Create**
6. Under **Data Stream** → choose **Web**
7. Enter your URL: `https://www.pdfwise.io`
8. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
9. Open `index.html` and replace `G-XXXXXXXXXX` with your real Measurement ID
10. Push to GitHub again

---

## TODAY'S CHECKLIST ✅

- [ ] Buy pdfwise.io on Namecheap
- [ ] Create GitHub account
- [ ] Create repo `pdfwise.io`
- [ ] Install GitHub Desktop
- [ ] Copy PDFWise-v2 files into cloned repo
- [ ] Commit + Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Add DNS records in Namecheap
- [ ] Set custom domain in GitHub Pages
- [ ] Wait for DNS (10–120 minutes)
- [ ] Test: https://www.pdfwise.io loads ✅
- [ ] Add Google Search Console verification tag
- [ ] Submit sitemap.xml
- [ ] Apply for Google AdSense
- [ ] Replace ca-pub-XXXXXXXXXX with real Publisher ID
- [ ] Push updated files to GitHub

---

## SUPPORT

If anything goes wrong, the most common issues are:
- **Site shows "404"** → GitHub Pages not enabled, or wrong branch selected
- **Domain not connecting** → DNS takes up to 2 hours; check dnschecker.org
- **AdSense rejected** → Usually "insufficient content" — your blog articles fix this
- **HTTPS not working** → Wait 30 min after adding custom domain, then check "Enforce HTTPS"

*You've got everything needed. Launch PDFWise today.*
