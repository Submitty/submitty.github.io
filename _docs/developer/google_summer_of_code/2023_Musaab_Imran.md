---
title: Musaab Imran
category: Developer > Google Summer of Code 2023
---

## 🛡️ Website Security and Penetration Testing
The security of the Submitty website is of paramount importance due to its direct impact on student grades and academic integrity. Even a single vulnerability can lead to unfair academic advantages and legal complications concerning student data protection. Therefore, this project aimed to contribute to the assurance of proper access control, authorization mechanisms, and robust code that align with the high security standards expected from educational platforms like Submitty.

---
## 🎯 Project Scope
The primary goal of this project was to conduct an extensive penetration testing campaign to identify and remediate potential vulnerabilities in the Submitty website. The scope of the project encompassed a wide array of attacks, spanning from common web vulnerabilities to more advanced exploitation techniques. The ultimate aim was to fortify the security posture of Submitty and bolster its protection against malicious attacks.

---
## 💡 Penetration Testing Highlights
Throughout the Google Summer of Code program, I engaged in a full-fledged penetration testing lifecycle. I meticulously tested the Submitty website for vulnerabilities and potential security gaps. 


###### ☠️ <u> Attacks </u>
The following list presents an overview of the attacks that were tested:
1. Cross-Site Scripting (XSS)
2. SQL Injection
3. Cross-Site Request Forgery (CSRF)
4. Remote File Inclusion (RFI)
5. Local File Inclusion (LFI)
6. Server-Side Request Forgery (SSRF)
7. Clickjacking
8. Directory Traversal
9. XML External Entity (XXE) Injection
10. Zip Bomb
11. Command Injection
12. Path Traversal
13. Session Hijacking
14. Remote Code Execution (RCE)
15. Open Redirects
16. Authentication Bypass
17.	XML Injection 
18.	JSON Injection 
19.	DOM-based XSS 
20.	HTML Injection 
21.	Web Shell Upload 
22.	XML Quadratic Blowup 
23.	Reflected File Download 
24.	Null Byte Injection 
25.	File Upload 


###### 🛠️ <u> Tools </u>
To achieve a comprehensive security assessment, I used various security tools, including but not limited to:

1. Nessus
2. Nikto
3. SQLMap
4. Burp Suite
5. Nmap
6. Wireshark
7. Metasploit
8. OWASP ZAP (Zed Attack Proxy)

---
## 🔎 Static Code Analysis
In addition to dynamic testing, I performed static code analysis using prominent vulnerability scanning tools such as:

1. Codacy Security Scan
2. CodeQL Analysis
3. Snyk Security
4. DevSkim
5. EthicalCheck

---
## 🔐 Security PRs
This section contains pull requests related to security enhancements, fixes, and updates.

#### Cache Control
Implemented Cache-Control header to ensure proper resource caching behavior. This prevents intermediaries from caching the resource, reducing the risk of serving outdated content.

🔹[PR #9693](https://github.com/Submitty/Submitty/pull/9693)

#### Content Type Options
Content-Type-Options header stops pages from loading during content-sniffing attacks, significantly reducing security risks by preventing incorrect MIME type interpretation.

🔹[PR #9694](https://github.com/Submitty/Submitty/pull/9694)

#### Content Security Policy
Implemented Content-Security-Policy header which prevents external iframe embedding, bolstering security by mitigating clickjacking threats.

🔹[PR #9695](https://github.com/Submitty/Submitty/pull/9695)

---
## 👾 Bugfix PRs
In this category, you'll find pull requests aimed at resolving various bugs.

#### Registration Section Input Validation
🔺[PR #9582](https://github.com/Submitty/Submitty/pull/9582)

#### Student Name in Blind Grading
🔺[PR #9644](https://github.com/Submitty/Submitty/pull/9644)

#### Download Files For Hidden Test Cases
🔺[PR #9678](https://github.com/Submitty/Submitty/pull/9678)

####  Number of Late Days
🔺[PR #9691](https://github.com/Submitty/Submitty/pull/9691)

---
## 🎨 UI/UX PRs
This section showcases pull requests that enhance the look, feel, and overall usability of our system.

#### Peer Grading Submission Browser
🔸[PR #9571](https://github.com/Submitty/Submitty/pull/9571)

#### Student Photos Upload Instructions
🔸[PR #9688](https://github.com/Submitty/Submitty/pull/9688)

#### Grade Inquiries per Grader
🔸[PR #9689](https://github.com/Submitty/Submitty/pull/9689)

#### Course Materials to Course Staff
🔸[PR #9692](https://github.com/Submitty/Submitty/pull/9692)


---
## 🚩 Conclusion
The Submitty Website Security and Penetration Testing project was an exciting and rewarding journey. By executing a wide array of attacks and utilizing many security tools, I aimed to create a safer and more resilient platform for educational purposes. I am thrilled to have contributed to the enhancement of Submitty's security and to have strengthened its overall security posture.

For any inquiries, feedback, or additional information, please feel free to contact me at **[musaabimran2001@gmail.com](mailto:musaabimran2001@gmail.com)**.

---
## 🤝 Acknowledgment
I extend my heartfelt gratitude to the Submitty team for their unwavering support throughout the Google Summer of Code program. My sincere thanks to mentors **Dr. Barb Culter** and **Chris Reed** for their invaluable guidance, which significantly enriched my learning experience. Their expertise and insights were pivotal in shaping my growth, and I eagerly anticipate contributing to Submitty in the future.

Sincerely,

**Musaab Imran**