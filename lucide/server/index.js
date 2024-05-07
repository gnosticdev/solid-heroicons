import { ssr } from 'solid-js/web';

var _tmpl$ = "<path d=\"M3.5 13h6\"></path>",
  _tmpl$2 = "<path d=\"m2 16 4.5-9 4.5 9\"></path>",
  _tmpl$3 = "<path d=\"M18 7v9\"></path>",
  _tmpl$4 = "<path d=\"m14 12 4 4 4-4\"></path>",
  _tmpl$5 = "<path d=\"M18 16V7\"></path>",
  _tmpl$6 = "<path d=\"m14 11 4-4 4 4\"></path>",
  _tmpl$7 = "<path d=\"M21 14h-5\"></path>",
  _tmpl$8 = "<path d=\"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16\"></path>",
  _tmpl$9 = "<path d=\"M4.5 13h6\"></path>",
  _tmpl$10 = "<path d=\"m3 16 4.5-9 4.5 9\"></path>",
  _tmpl$11 = "<circle cx=\"16\" cy=\"4\" r=\"1\"></circle>",
  _tmpl$12 = "<path d=\"m18 19 1-7-6 1\"></path>",
  _tmpl$13 = "<path d=\"m5 8 3-3 5.5 3-2.36 3.5\"></path>",
  _tmpl$14 = "<path d=\"M4.24 14.5a5 5 0 0 0 6.88 6\"></path>",
  _tmpl$15 = "<path d=\"M13.76 17.5a5 5 0 0 0-6.88-6\"></path>",
  _tmpl$16 = "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"></path>",
  _tmpl$17 = "<path d=\"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$18 = "<path d=\"M6 8h12\"></path>",
  _tmpl$19 = "<path d=\"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12\"></path>",
  _tmpl$20 = "<path d=\"M6.6 15.6A2 2 0 1 0 10 17v-5\"></path>",
  _tmpl$21 = "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path>",
  _tmpl$22 = "<path d=\"m12 15 5 6H7Z\"></path>",
  _tmpl$23 = "<circle cx=\"12\" cy=\"13\" r=\"8\"></circle>",
  _tmpl$24 = "<path d=\"M5 3 2 6\"></path>",
  _tmpl$25 = "<path d=\"m22 6-3-3\"></path>",
  _tmpl$26 = "<path d=\"M6.38 18.7 4 21\"></path>",
  _tmpl$27 = "<path d=\"M17.64 18.67 20 21\"></path>",
  _tmpl$28 = "<path d=\"m9 13 2 2 4-4\"></path>",
  _tmpl$29 = "<path d=\"M9 13h6\"></path>",
  _tmpl$30 = "<path d=\"M6.87 6.87a8 8 0 1 0 11.26 11.26\"></path>",
  _tmpl$31 = "<path d=\"M19.9 14.25a8 8 0 0 0-9.15-9.15\"></path>",
  _tmpl$32 = "<path d=\"M6.26 18.67 4 21\"></path>",
  _tmpl$33 = "<path d=\"m2 2 20 20\"></path>",
  _tmpl$34 = "<path d=\"M4 4 2 6\"></path>",
  _tmpl$35 = "<path d=\"M12 10v6\"></path>",
  _tmpl$36 = "<path d=\"M12 9v4l2 2\"></path>",
  _tmpl$37 = "<path d=\"M11 21c0-2.5 2-2.5 2-5\"></path>",
  _tmpl$38 = "<path d=\"M16 21c0-2.5 2-2.5 2-5\"></path>",
  _tmpl$39 = "<path d=\"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8\"></path>",
  _tmpl$40 = "<path d=\"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z\"></path>",
  _tmpl$41 = "<path d=\"M6 21c0-2.5 2-2.5 2-5\"></path>",
  _tmpl$42 = "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$43 = "<polyline points=\"11 3 11 11 14 8 17 11 17 3\"></polyline>",
  _tmpl$44 = "<path d=\"M2 12h20\"></path>",
  _tmpl$45 = "<path d=\"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4\"></path>",
  _tmpl$46 = "<path d=\"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4\"></path>",
  _tmpl$47 = "<path d=\"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1\"></path>",
  _tmpl$48 = "<path d=\"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1\"></path>",
  _tmpl$49 = "<path d=\"M12 2v20\"></path>",
  _tmpl$50 = "<path d=\"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4\"></path>",
  _tmpl$51 = "<path d=\"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4\"></path>",
  _tmpl$52 = "<path d=\"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1\"></path>",
  _tmpl$53 = "<path d=\"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1\"></path>",
  _tmpl$54 = "<line x1=\"21\" x2=\"3\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$55 = "<line x1=\"17\" x2=\"7\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$56 = "<line x1=\"19\" x2=\"5\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$57 = "<rect width=\"6\" height=\"16\" x=\"4\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$58 = "<rect width=\"6\" height=\"9\" x=\"14\" y=\"9\" rx=\"2\"></rect>",
  _tmpl$59 = "<path d=\"M22 22H2\"></path>",
  _tmpl$60 = "<rect width=\"16\" height=\"6\" x=\"2\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$61 = "<rect width=\"9\" height=\"6\" x=\"9\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$62 = "<path d=\"M22 22V2\"></path>",
  _tmpl$63 = "<rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"></rect>",
  _tmpl$64 = "<rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"></rect>",
  _tmpl$65 = "<path d=\"M17 22v-5\"></path>",
  _tmpl$66 = "<path d=\"M17 7V2\"></path>",
  _tmpl$67 = "<path d=\"M7 22v-3\"></path>",
  _tmpl$68 = "<path d=\"M7 5V2\"></path>",
  _tmpl$69 = "<path d=\"M10 2v20\"></path>",
  _tmpl$70 = "<path d=\"M20 2v20\"></path>",
  _tmpl$71 = "<path d=\"M4 2v20\"></path>",
  _tmpl$72 = "<path d=\"M14 2v20\"></path>",
  _tmpl$73 = "<rect width=\"6\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"></rect>",
  _tmpl$74 = "<rect width=\"6\" height=\"10\" x=\"16\" y=\"7\" rx=\"2\"></rect>",
  _tmpl$75 = "<rect width=\"6\" height=\"10\" x=\"12\" y=\"7\" rx=\"2\"></rect>",
  _tmpl$76 = "<path d=\"M22 2v20\"></path>",
  _tmpl$77 = "<rect width=\"6\" height=\"14\" x=\"6\" y=\"5\" rx=\"2\"></rect>",
  _tmpl$78 = "<path d=\"M2 2v20\"></path>",
  _tmpl$79 = "<rect width=\"6\" height=\"10\" x=\"9\" y=\"7\" rx=\"2\"></rect>",
  _tmpl$80 = "<path d=\"M4 22V2\"></path>",
  _tmpl$81 = "<path d=\"M20 22V2\"></path>",
  _tmpl$82 = "<rect width=\"6\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\"></rect>",
  _tmpl$83 = "<rect width=\"6\" height=\"10\" x=\"15\" y=\"7\" rx=\"2\"></rect>",
  _tmpl$84 = "<path d=\"M3 2v20\"></path>",
  _tmpl$85 = "<path d=\"M21 2v20\"></path>",
  _tmpl$86 = "<line x1=\"3\" x2=\"21\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$87 = "<line x1=\"3\" x2=\"21\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$88 = "<line x1=\"3\" x2=\"21\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$89 = "<line x1=\"15\" x2=\"3\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$90 = "<line x1=\"17\" x2=\"3\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$91 = "<line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$92 = "<line x1=\"21\" x2=\"7\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$93 = "<rect width=\"6\" height=\"16\" x=\"4\" y=\"6\" rx=\"2\"></rect>",
  _tmpl$94 = "<rect width=\"6\" height=\"9\" x=\"14\" y=\"6\" rx=\"2\"></rect>",
  _tmpl$95 = "<path d=\"M22 2H2\"></path>",
  _tmpl$96 = "<rect width=\"9\" height=\"6\" x=\"6\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$97 = "<rect width=\"16\" height=\"6\" x=\"6\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$98 = "<path d=\"M22 17h-3\"></path>",
  _tmpl$99 = "<path d=\"M22 7h-5\"></path>",
  _tmpl$100 = "<path d=\"M5 17H2\"></path>",
  _tmpl$101 = "<path d=\"M7 7H2\"></path>",
  _tmpl$102 = "<rect x=\"5\" y=\"14\" width=\"14\" height=\"6\" rx=\"2\"></rect>",
  _tmpl$103 = "<rect x=\"7\" y=\"4\" width=\"10\" height=\"6\" rx=\"2\"></rect>",
  _tmpl$104 = "<rect width=\"14\" height=\"6\" x=\"5\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$105 = "<rect width=\"10\" height=\"6\" x=\"7\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$106 = "<path d=\"M2 20h20\"></path>",
  _tmpl$107 = "<path d=\"M2 10h20\"></path>",
  _tmpl$108 = "<path d=\"M2 14h20\"></path>",
  _tmpl$109 = "<path d=\"M2 4h20\"></path>",
  _tmpl$110 = "<rect width=\"14\" height=\"6\" x=\"5\" y=\"16\" rx=\"2\"></rect>",
  _tmpl$111 = "<rect width=\"10\" height=\"6\" x=\"7\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$112 = "<rect width=\"14\" height=\"6\" x=\"5\" y=\"12\" rx=\"2\"></rect>",
  _tmpl$113 = "<path d=\"M2 22h20\"></path>",
  _tmpl$114 = "<rect width=\"10\" height=\"6\" x=\"7\" y=\"6\" rx=\"2\"></rect>",
  _tmpl$115 = "<path d=\"M2 2h20\"></path>",
  _tmpl$116 = "<rect width=\"10\" height=\"6\" x=\"7\" y=\"9\" rx=\"2\"></rect>",
  _tmpl$117 = "<path d=\"M22 20H2\"></path>",
  _tmpl$118 = "<path d=\"M22 4H2\"></path>",
  _tmpl$119 = "<rect width=\"14\" height=\"6\" x=\"5\" y=\"15\" rx=\"2\"></rect>",
  _tmpl$120 = "<rect width=\"10\" height=\"6\" x=\"7\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$121 = "<path d=\"M2 21h20\"></path>",
  _tmpl$122 = "<path d=\"M2 3h20\"></path>",
  _tmpl$123 = "<path d=\"M10 10H6\"></path>",
  _tmpl$124 = "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"></path>",
  _tmpl$125 = "<path d=\"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14\"></path>",
  _tmpl$126 = "<path d=\"M8 8v4\"></path>",
  _tmpl$127 = "<path d=\"M9 18h6\"></path>",
  _tmpl$128 = "<circle cx=\"17\" cy=\"18\" r=\"2\"></circle>",
  _tmpl$129 = "<circle cx=\"7\" cy=\"18\" r=\"2\"></circle>",
  _tmpl$130 = "<path d=\"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13\"></path>",
  _tmpl$131 = "<path d=\"M16 12h3\"></path>",
  _tmpl$132 = "<path d=\"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5\"></path>",
  _tmpl$133 = "<path d=\"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5\"></path>",
  _tmpl$134 = "<path d=\"M12 22V8\"></path>",
  _tmpl$135 = "<path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>",
  _tmpl$136 = "<circle cx=\"12\" cy=\"5\" r=\"3\"></circle>",
  _tmpl$137 = "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
  _tmpl$138 = "<path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path>",
  _tmpl$139 = "<path d=\"M7.5 8 10 9\"></path>",
  _tmpl$140 = "<path d=\"m14 9 2.5-1\"></path>",
  _tmpl$141 = "<path d=\"M9 10h0\"></path>",
  _tmpl$142 = "<path d=\"M15 10h0\"></path>",
  _tmpl$143 = "<path d=\"M8 15h8\"></path>",
  _tmpl$144 = "<path d=\"M8 9h2\"></path>",
  _tmpl$145 = "<path d=\"M14 9h2\"></path>",
  _tmpl$146 = "<path d=\"M2 12 7 2\"></path>",
  _tmpl$147 = "<path d=\"m7 12 5-10\"></path>",
  _tmpl$148 = "<path d=\"m12 12 5-10\"></path>",
  _tmpl$149 = "<path d=\"m17 12 5-10\"></path>",
  _tmpl$150 = "<path d=\"M4.5 7h15\"></path>",
  _tmpl$151 = "<path d=\"M12 16v6\"></path>",
  _tmpl$152 = "<path d=\"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4\"></path>",
  _tmpl$153 = "<path d=\"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z\"></path>",
  _tmpl$154 = "<path d=\"M9 12v5\"></path>",
  _tmpl$155 = "<path d=\"M15 12v5\"></path>",
  _tmpl$156 = "<path d=\"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1\"></path>",
  _tmpl$157 = "<path d=\"m14.31 8 5.74 9.94\"></path>",
  _tmpl$158 = "<path d=\"M9.69 8h11.48\"></path>",
  _tmpl$159 = "<path d=\"m7.38 12 5.74-9.94\"></path>",
  _tmpl$160 = "<path d=\"M9.69 16 3.95 6.06\"></path>",
  _tmpl$161 = "<path d=\"M14.31 16H2.83\"></path>",
  _tmpl$162 = "<path d=\"m16.62 12-5.74 9.94\"></path>",
  _tmpl$163 = "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$164 = "<path d=\"M6 8h.01\"></path>",
  _tmpl$165 = "<path d=\"M10 8h.01\"></path>",
  _tmpl$166 = "<path d=\"M14 8h.01\"></path>",
  _tmpl$167 = "<rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"></rect>",
  _tmpl$168 = "<path d=\"M10 4v4\"></path>",
  _tmpl$169 = "<path d=\"M2 8h20\"></path>",
  _tmpl$170 = "<path d=\"M6 4v4\"></path>",
  _tmpl$171 = "<path d=\"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z\"></path>",
  _tmpl$172 = "<path d=\"M10 2c1 .5 2 2 2 5\"></path>",
  _tmpl$173 = "<rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$174 = "<path d=\"M4 8v11a2 2 0 0 0 2 2h2\"></path>",
  _tmpl$175 = "<path d=\"M20 8v11a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$176 = "<path d=\"m9 15 3-3 3 3\"></path>",
  _tmpl$177 = "<path d=\"M12 12v9\"></path>",
  _tmpl$178 = "<path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8\"></path>",
  _tmpl$179 = "<path d=\"m9.5 17 5-5\"></path>",
  _tmpl$180 = "<path d=\"m9.5 12 5 5\"></path>",
  _tmpl$181 = "<path d=\"M10 12h4\"></path>",
  _tmpl$182 = "<path d=\"M3 3v18h18\"></path>",
  _tmpl$183 = "<path d=\"M7 12v5h12V8l-5 5-4-4Z\"></path>",
  _tmpl$184 = "<path d=\"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$185 = "<path d=\"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z\"></path>",
  _tmpl$186 = "<path d=\"M5 18v2\"></path>",
  _tmpl$187 = "<path d=\"M19 18v2\"></path>",
  _tmpl$188 = "<path d=\"M15 5H9\"></path>",
  _tmpl$189 = "<path d=\"M15 9v3h4l-7 7-7-7h4V9z\"></path>",
  _tmpl$190 = "<path d=\"M15 6v6h4l-7 7-7-7h4V6h6z\"></path>",
  _tmpl$191 = "<path d=\"M19 15V9\"></path>",
  _tmpl$192 = "<path d=\"M15 15h-3v4l-7-7 7-7v4h3v6z\"></path>",
  _tmpl$193 = "<path d=\"M18 15h-6v4l-7-7 7-7v4h6v6z\"></path>",
  _tmpl$194 = "<path d=\"M5 9v6\"></path>",
  _tmpl$195 = "<path d=\"M9 9h3V5l7 7-7 7v-4H9V9z\"></path>",
  _tmpl$196 = "<path d=\"M6 9h6V5l7 7-7 7v-4H6V9z\"></path>",
  _tmpl$197 = "<path d=\"M9 19h6\"></path>",
  _tmpl$198 = "<path d=\"M9 15v-3H5l7-7 7 7h-4v3H9z\"></path>",
  _tmpl$199 = "<path d=\"M9 18v-6H5l7-7 7 7h-4v6H9z\"></path>",
  _tmpl$200 = "<path d=\"m3 16 4 4 4-4\"></path>",
  _tmpl$201 = "<path d=\"M7 20V4\"></path>",
  _tmpl$202 = "<rect x=\"15\" y=\"4\" width=\"4\" height=\"6\" ry=\"2\"></rect>",
  _tmpl$203 = "<path d=\"M17 20v-6h-2\"></path>",
  _tmpl$204 = "<path d=\"M15 20h4\"></path>",
  _tmpl$205 = "<path d=\"M17 10V4h-2\"></path>",
  _tmpl$206 = "<path d=\"M15 10h4\"></path>",
  _tmpl$207 = "<rect x=\"15\" y=\"14\" width=\"4\" height=\"6\" ry=\"2\"></rect>",
  _tmpl$208 = "<path d=\"M20 8h-5\"></path>",
  _tmpl$209 = "<path d=\"M15 10V6.5a2.5 2.5 0 0 1 5 0V10\"></path>",
  _tmpl$210 = "<path d=\"M15 14h5l-5 6h5\"></path>",
  _tmpl$211 = "<path d=\"M19 3H5\"></path>",
  _tmpl$212 = "<path d=\"M12 21V7\"></path>",
  _tmpl$213 = "<path d=\"m6 15 6 6 6-6\"></path>",
  _tmpl$214 = "<path d=\"M17 7 7 17\"></path>",
  _tmpl$215 = "<path d=\"M17 17H7V7\"></path>",
  _tmpl$216 = "<path d=\"M11 4h4\"></path>",
  _tmpl$217 = "<path d=\"M11 8h7\"></path>",
  _tmpl$218 = "<path d=\"M11 12h10\"></path>",
  _tmpl$219 = "<path d=\"m7 7 10 10\"></path>",
  _tmpl$220 = "<path d=\"M17 7v10H7\"></path>",
  _tmpl$221 = "<path d=\"M12 2v14\"></path>",
  _tmpl$222 = "<path d=\"m19 9-7 7-7-7\"></path>",
  _tmpl$223 = "<circle cx=\"12\" cy=\"21\" r=\"1\"></circle>",
  _tmpl$224 = "<path d=\"M12 17V3\"></path>",
  _tmpl$225 = "<path d=\"m6 11 6 6 6-6\"></path>",
  _tmpl$226 = "<path d=\"M19 21H5\"></path>",
  _tmpl$227 = "<path d=\"m21 8-4-4-4 4\"></path>",
  _tmpl$228 = "<path d=\"M17 4v16\"></path>",
  _tmpl$229 = "<path d=\"M11 4h10\"></path>",
  _tmpl$230 = "<path d=\"M11 12h4\"></path>",
  _tmpl$231 = "<path d=\"M7 4v16\"></path>",
  _tmpl$232 = "<path d=\"M15 4h5l-5 6h5\"></path>",
  _tmpl$233 = "<path d=\"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20\"></path>",
  _tmpl$234 = "<path d=\"M20 18h-5\"></path>",
  _tmpl$235 = "<path d=\"M12 5v14\"></path>",
  _tmpl$236 = "<path d=\"m19 12-7 7-7-7\"></path>",
  _tmpl$237 = "<path d=\"m9 6-6 6 6 6\"></path>",
  _tmpl$238 = "<path d=\"M3 12h14\"></path>",
  _tmpl$239 = "<path d=\"M21 19V5\"></path>",
  _tmpl$240 = "<path d=\"M8 3 4 7l4 4\"></path>",
  _tmpl$241 = "<path d=\"M4 7h16\"></path>",
  _tmpl$242 = "<path d=\"m16 21 4-4-4-4\"></path>",
  _tmpl$243 = "<path d=\"M20 17H4\"></path>",
  _tmpl$244 = "<path d=\"M3 19V5\"></path>",
  _tmpl$245 = "<path d=\"m13 6-6 6 6 6\"></path>",
  _tmpl$246 = "<path d=\"M7 12h14\"></path>",
  _tmpl$247 = "<path d=\"m12 19-7-7 7-7\"></path>",
  _tmpl$248 = "<path d=\"M19 12H5\"></path>",
  _tmpl$249 = "<path d=\"M3 5v14\"></path>",
  _tmpl$250 = "<path d=\"M21 12H7\"></path>",
  _tmpl$251 = "<path d=\"m15 18 6-6-6-6\"></path>",
  _tmpl$252 = "<path d=\"m16 3 4 4-4 4\"></path>",
  _tmpl$253 = "<path d=\"M20 7H4\"></path>",
  _tmpl$254 = "<path d=\"m8 21-4-4 4-4\"></path>",
  _tmpl$255 = "<path d=\"M4 17h16\"></path>",
  _tmpl$256 = "<path d=\"M17 12H3\"></path>",
  _tmpl$257 = "<path d=\"m11 18 6-6-6-6\"></path>",
  _tmpl$258 = "<path d=\"M21 5v14\"></path>",
  _tmpl$259 = "<path d=\"M5 12h14\"></path>",
  _tmpl$260 = "<path d=\"m12 5 7 7-7 7\"></path>",
  _tmpl$261 = "<path d=\"m3 8 4-4 4 4\"></path>",
  _tmpl$262 = "<path d=\"m21 16-4 4-4-4\"></path>",
  _tmpl$263 = "<path d=\"M17 20V4\"></path>",
  _tmpl$264 = "<path d=\"m5 9 7-7 7 7\"></path>",
  _tmpl$265 = "<path d=\"M12 16V2\"></path>",
  _tmpl$266 = "<path d=\"m18 9-6-6-6 6\"></path>",
  _tmpl$267 = "<path d=\"M12 3v14\"></path>",
  _tmpl$268 = "<path d=\"M5 21h14\"></path>",
  _tmpl$269 = "<path d=\"M7 17V7h10\"></path>",
  _tmpl$270 = "<path d=\"M17 17 7 7\"></path>",
  _tmpl$271 = "<path d=\"M11 16h7\"></path>",
  _tmpl$272 = "<path d=\"M11 20h10\"></path>",
  _tmpl$273 = "<path d=\"M7 7h10v10\"></path>",
  _tmpl$274 = "<path d=\"M7 17 17 7\"></path>",
  _tmpl$275 = "<path d=\"M5 3h14\"></path>",
  _tmpl$276 = "<path d=\"m18 13-6-6-6 6\"></path>",
  _tmpl$277 = "<path d=\"M12 7v14\"></path>",
  _tmpl$278 = "<path d=\"M11 20h4\"></path>",
  _tmpl$279 = "<path d=\"m5 12 7-7 7 7\"></path>",
  _tmpl$280 = "<path d=\"M12 19V5\"></path>",
  _tmpl$281 = "<path d=\"m4 6 3-3 3 3\"></path>",
  _tmpl$282 = "<path d=\"M7 17V3\"></path>",
  _tmpl$283 = "<path d=\"m14 6 3-3 3 3\"></path>",
  _tmpl$284 = "<path d=\"M17 17V3\"></path>",
  _tmpl$285 = "<path d=\"M4 21h16\"></path>",
  _tmpl$286 = "<path d=\"M12 6v12\"></path>",
  _tmpl$287 = "<path d=\"M17.196 9 6.804 15\"></path>",
  _tmpl$288 = "<path d=\"m6.804 9 10.392 6\"></path>",
  _tmpl$289 = "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle>",
  _tmpl$290 = "<path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\"></path>",
  _tmpl$291 = "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle>",
  _tmpl$292 = "<path d=\"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z\"></path>",
  _tmpl$293 = "<path d=\"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z\"></path>",
  _tmpl$294 = "<path d=\"M2 10v3\"></path>",
  _tmpl$295 = "<path d=\"M6 6v11\"></path>",
  _tmpl$296 = "<path d=\"M10 3v18\"></path>",
  _tmpl$297 = "<path d=\"M14 8v7\"></path>",
  _tmpl$298 = "<path d=\"M18 5v13\"></path>",
  _tmpl$299 = "<path d=\"M22 10v3\"></path>",
  _tmpl$300 = "<path d=\"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2\"></path>",
  _tmpl$301 = "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"></path>",
  _tmpl$302 = "<circle cx=\"12\" cy=\"8\" r=\"6\"></circle>",
  _tmpl$303 = "<path d=\"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9\"></path>",
  _tmpl$304 = "<path d=\"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z\"></path>",
  _tmpl$305 = "<path d=\"M4 4v16h16\"></path>",
  _tmpl$306 = "<path d=\"m4 20 7-7\"></path>",
  _tmpl$307 = "<path d=\"M9 12h.01\"></path>",
  _tmpl$308 = "<path d=\"M15 12h.01\"></path>",
  _tmpl$309 = "<path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"></path>",
  _tmpl$310 = "<path d=\"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"></path>",
  _tmpl$311 = "<path d=\"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z\"></path>",
  _tmpl$312 = "<path d=\"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$313 = "<path d=\"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5\"></path>",
  _tmpl$314 = "<path d=\"M8 10h8\"></path>",
  _tmpl$315 = "<path d=\"M8 18h8\"></path>",
  _tmpl$316 = "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"></path>",
  _tmpl$317 = "<line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line>",
  _tmpl$318 = "<line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$319 = "<path d=\"M12 7v10\"></path>",
  _tmpl$320 = "<path d=\"M15.4 10a4 4 0 1 0 0 4\"></path>",
  _tmpl$321 = "<path d=\"m9 12 2 2 4-4\"></path>",
  _tmpl$322 = "<path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"></path>",
  _tmpl$323 = "<path d=\"M12 18V6\"></path>",
  _tmpl$324 = "<path d=\"M7 12h5\"></path>",
  _tmpl$325 = "<path d=\"M15 9.4a4 4 0 1 0 0 5.2\"></path>",
  _tmpl$326 = "<path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path>",
  _tmpl$327 = "<line x1=\"12\" x2=\"12.01\" y1=\"17\" y2=\"17\"></line>",
  _tmpl$328 = "<path d=\"M8 8h8\"></path>",
  _tmpl$329 = "<path d=\"M8 12h8\"></path>",
  _tmpl$330 = "<path d=\"m13 17-5-1h1a4 4 0 0 0 0-8\"></path>",
  _tmpl$331 = "<line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"12\"></line>",
  _tmpl$332 = "<line x1=\"12\" x2=\"12.01\" y1=\"8\" y2=\"8\"></line>",
  _tmpl$333 = "<path d=\"m9 8 3 3v7\"></path>",
  _tmpl$334 = "<path d=\"m12 11 3-3\"></path>",
  _tmpl$335 = "<path d=\"M9 12h6\"></path>",
  _tmpl$336 = "<path d=\"M9 16h6\"></path>",
  _tmpl$337 = "<line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$338 = "<path d=\"m15 9-6 6\"></path>",
  _tmpl$339 = "<path d=\"M9 9h.01\"></path>",
  _tmpl$340 = "<path d=\"M15 15h.01\"></path>",
  _tmpl$341 = "<line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"16\"></line>",
  _tmpl$342 = "<path d=\"M8 12h4\"></path>",
  _tmpl$343 = "<path d=\"M10 16V9.5a2.5 2.5 0 0 1 5 0\"></path>",
  _tmpl$344 = "<path d=\"M8 16h7\"></path>",
  _tmpl$345 = "<path d=\"M9 16h5\"></path>",
  _tmpl$346 = "<path d=\"M9 12h5a2 2 0 1 0 0-4h-3v9\"></path>",
  _tmpl$347 = "<path d=\"M11 17V8h4\"></path>",
  _tmpl$348 = "<path d=\"M11 12h3\"></path>",
  _tmpl$349 = "<path d=\"M9 16h4\"></path>",
  _tmpl$350 = "<line x1=\"15\" x2=\"9\" y1=\"9\" y2=\"15\"></line>",
  _tmpl$351 = "<line x1=\"9\" x2=\"15\" y1=\"9\" y2=\"15\"></line>",
  _tmpl$352 = "<path d=\"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2\"></path>",
  _tmpl$353 = "<path d=\"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10\"></path>",
  _tmpl$354 = "<rect width=\"13\" height=\"8\" x=\"8\" y=\"6\" rx=\"1\"></rect>",
  _tmpl$355 = "<circle cx=\"18\" cy=\"20\" r=\"2\"></circle>",
  _tmpl$356 = "<circle cx=\"9\" cy=\"20\" r=\"2\"></circle>",
  _tmpl$357 = "<path d=\"m4.9 4.9 14.2 14.2\"></path>",
  _tmpl$358 = "<path d=\"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5\"></path>",
  _tmpl$359 = "<path d=\"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z\"></path>",
  _tmpl$360 = "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"></rect>",
  _tmpl$361 = "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$362 = "<path d=\"M6 12h.01M18 12h.01\"></path>",
  _tmpl$363 = "<line x1=\"18\" x2=\"18\" y1=\"20\" y2=\"10\"></line>",
  _tmpl$364 = "<line x1=\"12\" x2=\"12\" y1=\"20\" y2=\"4\"></line>",
  _tmpl$365 = "<line x1=\"6\" x2=\"6\" y1=\"20\" y2=\"14\"></line>",
  _tmpl$366 = "<path d=\"M18 17V9\"></path>",
  _tmpl$367 = "<path d=\"M13 17V5\"></path>",
  _tmpl$368 = "<path d=\"M8 17v-3\"></path>",
  _tmpl$369 = "<path d=\"M13 17V9\"></path>",
  _tmpl$370 = "<path d=\"M18 17V5\"></path>",
  _tmpl$371 = "<rect width=\"4\" height=\"7\" x=\"7\" y=\"10\" rx=\"1\"></rect>",
  _tmpl$372 = "<rect width=\"4\" height=\"12\" x=\"15\" y=\"5\" rx=\"1\"></rect>",
  _tmpl$373 = "<rect width=\"12\" height=\"4\" x=\"7\" y=\"5\" rx=\"1\"></rect>",
  _tmpl$374 = "<rect width=\"7\" height=\"4\" x=\"7\" y=\"13\" rx=\"1\"></rect>",
  _tmpl$375 = "<path d=\"M7 16h8\"></path>",
  _tmpl$376 = "<path d=\"M7 11h12\"></path>",
  _tmpl$377 = "<path d=\"M7 6h3\"></path>",
  _tmpl$378 = "<line x1=\"12\" x2=\"12\" y1=\"20\" y2=\"10\"></line>",
  _tmpl$379 = "<line x1=\"18\" x2=\"18\" y1=\"20\" y2=\"4\"></line>",
  _tmpl$380 = "<line x1=\"6\" x2=\"6\" y1=\"20\" y2=\"16\"></line>",
  _tmpl$381 = "<path d=\"M8 5v14\"></path>",
  _tmpl$382 = "<path d=\"M17 5v14\"></path>",
  _tmpl$383 = "<path d=\"M4 20h16\"></path>",
  _tmpl$384 = "<path d=\"m6 16 6-12 6 12\"></path>",
  _tmpl$385 = "<path d=\"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5\"></path>",
  _tmpl$386 = "<line x1=\"10\" x2=\"8\" y1=\"5\" y2=\"7\"></line>",
  _tmpl$387 = "<line x1=\"2\" x2=\"22\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$388 = "<line x1=\"7\" x2=\"7\" y1=\"19\" y2=\"21\"></line>",
  _tmpl$389 = "<line x1=\"17\" x2=\"17\" y1=\"19\" y2=\"21\"></line>",
  _tmpl$390 = "<path d=\"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$391 = "<path d=\"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1\"></path>",
  _tmpl$392 = "<path d=\"m11 7-3 5h4l-3 5\"></path>",
  _tmpl$393 = "<line x1=\"22\" x2=\"22\" y1=\"11\" y2=\"13\"></line>",
  _tmpl$394 = "<rect width=\"16\" height=\"10\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$395 = "<line x1=\"6\" x2=\"6\" y1=\"11\" y2=\"13\"></line>",
  _tmpl$396 = "<line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"13\"></line>",
  _tmpl$397 = "<line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"13\"></line>",
  _tmpl$398 = "<path d=\"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2\"></path>",
  _tmpl$399 = "<path d=\"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2\"></path>",
  _tmpl$400 = "<line x1=\"10\" x2=\"10\" y1=\"7\" y2=\"13\"></line>",
  _tmpl$401 = "<line x1=\"10\" x2=\"10\" y1=\"17\" y2=\"17.01\"></line>",
  _tmpl$402 = "<path d=\"M4.5 3h15\"></path>",
  _tmpl$403 = "<path d=\"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3\"></path>",
  _tmpl$404 = "<path d=\"M6 14h12\"></path>",
  _tmpl$405 = "<path d=\"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1\"></path>",
  _tmpl$406 = "<path d=\"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66\"></path>",
  _tmpl$407 = "<path d=\"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04\"></path>",
  _tmpl$408 = "<line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"></line>",
  _tmpl$409 = "<path d=\"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z\"></path>",
  _tmpl$410 = "<path d=\"M5.341 10.62a4 4 0 1 0 5.279-5.28\"></path>",
  _tmpl$411 = "<path d=\"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8\"></path>",
  _tmpl$412 = "<path d=\"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\"></path>",
  _tmpl$413 = "<path d=\"M12 4v6\"></path>",
  _tmpl$414 = "<path d=\"M2 18h20\"></path>",
  _tmpl$415 = "<path d=\"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8\"></path>",
  _tmpl$416 = "<path d=\"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4\"></path>",
  _tmpl$417 = "<path d=\"M3 18h18\"></path>",
  _tmpl$418 = "<path d=\"M2 4v16\"></path>",
  _tmpl$419 = "<path d=\"M2 8h18a2 2 0 0 1 2 2v10\"></path>",
  _tmpl$420 = "<path d=\"M2 17h20\"></path>",
  _tmpl$421 = "<path d=\"M6 8v9\"></path>",
  _tmpl$422 = "<circle cx=\"12.5\" cy=\"8.5\" r=\"2.5\"></circle>",
  _tmpl$423 = "<path d=\"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z\"></path>",
  _tmpl$424 = "<path d=\"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5\"></path>",
  _tmpl$425 = "<path d=\"M13 13v5\"></path>",
  _tmpl$426 = "<path d=\"M17 11.47V8\"></path>",
  _tmpl$427 = "<path d=\"M17 11h1a3 3 0 0 1 2.745 4.211\"></path>",
  _tmpl$428 = "<path d=\"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3\"></path>",
  _tmpl$429 = "<path d=\"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268\"></path>",
  _tmpl$430 = "<path d=\"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12\"></path>",
  _tmpl$431 = "<path d=\"M9 14.6V18\"></path>",
  _tmpl$432 = "<path d=\"M17 11h1a3 3 0 0 1 0 6h-1\"></path>",
  _tmpl$433 = "<path d=\"M9 12v6\"></path>",
  _tmpl$434 = "<path d=\"M13 12v6\"></path>",
  _tmpl$435 = "<path d=\"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z\"></path>",
  _tmpl$436 = "<path d=\"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8\"></path>",
  _tmpl$437 = "<path d=\"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3\"></path>",
  _tmpl$438 = "<path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"></path>",
  _tmpl$439 = "<circle cx=\"18\" cy=\"8\" r=\"3\"></circle>",
  _tmpl$440 = "<path d=\"M18.8 4A6.3 8.7 0 0 1 20 9\"></path>",
  _tmpl$441 = "<circle cx=\"9\" cy=\"9\" r=\"7\"></circle>",
  _tmpl$442 = "<rect width=\"10\" height=\"6\" x=\"4\" y=\"16\" rx=\"2\"></rect>",
  _tmpl$443 = "<path d=\"M14 19c3 0 4.6-1.6 4.6-1.6\"></path>",
  _tmpl$444 = "<circle cx=\"20\" cy=\"16\" r=\"2\"></circle>",
  _tmpl$445 = "<path d=\"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2\"></path>",
  _tmpl$446 = "<path d=\"M15 8h6\"></path>",
  _tmpl$447 = "<path d=\"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5\"></path>",
  _tmpl$448 = "<path d=\"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7\"></path>",
  _tmpl$449 = "<path d=\"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7\"></path>",
  _tmpl$450 = "<path d=\"M18 5v6\"></path>",
  _tmpl$451 = "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"></path>",
  _tmpl$452 = "<path d=\"M4 2C2.8 3.7 2 5.7 2 8\"></path>",
  _tmpl$453 = "<path d=\"M22 8c0-2.3-.8-4.3-2-6\"></path>",
  _tmpl$454 = "<rect width=\"13\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$455 = "<path d=\"m22 15-3-3 3-3\"></path>",
  _tmpl$456 = "<rect width=\"13\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$457 = "<rect width=\"13\" height=\"7\" x=\"8\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$458 = "<path d=\"m2 9 3 3-3 3\"></path>",
  _tmpl$459 = "<rect width=\"13\" height=\"7\" x=\"8\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$460 = "<rect width=\"7\" height=\"13\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$461 = "<path d=\"m9 22 3-3 3 3\"></path>",
  _tmpl$462 = "<rect width=\"7\" height=\"13\" x=\"14\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$463 = "<rect width=\"7\" height=\"13\" x=\"3\" y=\"8\" rx=\"1\"></rect>",
  _tmpl$464 = "<path d=\"m15 2-3 3-3-3\"></path>",
  _tmpl$465 = "<rect width=\"7\" height=\"13\" x=\"14\" y=\"8\" rx=\"1\"></rect>",
  _tmpl$466 = "<circle cx=\"18.5\" cy=\"17.5\" r=\"3.5\"></circle>",
  _tmpl$467 = "<circle cx=\"5.5\" cy=\"17.5\" r=\"3.5\"></circle>",
  _tmpl$468 = "<circle cx=\"15\" cy=\"5\" r=\"1\"></circle>",
  _tmpl$469 = "<path d=\"M12 17.5V14l-3-3 4-3 2 3h2\"></path>",
  _tmpl$470 = "<rect x=\"14\" y=\"14\" width=\"4\" height=\"6\" rx=\"2\"></rect>",
  _tmpl$471 = "<rect x=\"6\" y=\"4\" width=\"4\" height=\"6\" rx=\"2\"></rect>",
  _tmpl$472 = "<path d=\"M6 20h4\"></path>",
  _tmpl$473 = "<path d=\"M14 10h4\"></path>",
  _tmpl$474 = "<path d=\"M6 14h2v6\"></path>",
  _tmpl$475 = "<path d=\"M14 4h2v6\"></path>",
  _tmpl$476 = "<circle cx=\"12\" cy=\"11.9\" r=\"2\"></circle>",
  _tmpl$477 = "<path d=\"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6\"></path>",
  _tmpl$478 = "<path d=\"m8.9 10.1 1.4.8\"></path>",
  _tmpl$479 = "<path d=\"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5\"></path>",
  _tmpl$480 = "<path d=\"m15.1 10.1-1.4.8\"></path>",
  _tmpl$481 = "<path d=\"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2\"></path>",
  _tmpl$482 = "<path d=\"M12 13.9v1.6\"></path>",
  _tmpl$483 = "<path d=\"M13.5 5.4c-1-.2-2-.2-3 0\"></path>",
  _tmpl$484 = "<path d=\"M17 16.4c.7-.7 1.2-1.6 1.5-2.5\"></path>",
  _tmpl$485 = "<path d=\"M5.5 13.9c.3.9.8 1.8 1.5 2.5\"></path>",
  _tmpl$486 = "<path d=\"M16 7h.01\"></path>",
  _tmpl$487 = "<path d=\"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20\"></path>",
  _tmpl$488 = "<path d=\"m20 7 2 .5-2 .5\"></path>",
  _tmpl$489 = "<path d=\"M10 18v3\"></path>",
  _tmpl$490 = "<path d=\"M14 17.75V21\"></path>",
  _tmpl$491 = "<path d=\"M7 18a6 6 0 0 0 3.84-10.61\"></path>",
  _tmpl$492 = "<path d=\"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727\"></path>",
  _tmpl$493 = "<circle cx=\"15\" cy=\"15\" r=\"7\"></circle>",
  _tmpl$494 = "<path d=\"M3 3h18\"></path>",
  _tmpl$495 = "<path d=\"M20 7H8\"></path>",
  _tmpl$496 = "<path d=\"M20 11H8\"></path>",
  _tmpl$497 = "<path d=\"M10 19h10\"></path>",
  _tmpl$498 = "<path d=\"M8 15h12\"></path>",
  _tmpl$499 = "<path d=\"M4 3v14\"></path>",
  _tmpl$500 = "<circle cx=\"4\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$501 = "<rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$502 = "<path d=\"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3\"></path>",
  _tmpl$503 = "<path d=\"m7 7 10 10-5 5V2l5 5L7 17\"></path>",
  _tmpl$504 = "<line x1=\"18\" x2=\"21\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$505 = "<line x1=\"3\" x2=\"6\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$506 = "<path d=\"m17 17-5 5V12l-5 5\"></path>",
  _tmpl$507 = "<path d=\"M14.5 9.5 17 7l-5-5v4.5\"></path>",
  _tmpl$508 = "<path d=\"M20.83 14.83a4 4 0 0 0 0-5.66\"></path>",
  _tmpl$509 = "<path d=\"M18 12h.01\"></path>",
  _tmpl$510 = "<path d=\"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8\"></path>",
  _tmpl$511 = "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>",
  _tmpl$512 = "<circle cx=\"11\" cy=\"13\" r=\"9\"></circle>",
  _tmpl$513 = "<path d=\"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95\"></path>",
  _tmpl$514 = "<path d=\"m22 2-1.5 1.5\"></path>",
  _tmpl$515 = "<path d=\"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z\"></path>",
  _tmpl$516 = "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20\"></path>",
  _tmpl$517 = "<path d=\"m8 13 4-7 4 7\"></path>",
  _tmpl$518 = "<path d=\"M9.1 11h5.7\"></path>",
  _tmpl$519 = "<path d=\"M8 8v3\"></path>",
  _tmpl$520 = "<path d=\"M12 6v7\"></path>",
  _tmpl$521 = "<path d=\"M16 8v3\"></path>",
  _tmpl$522 = "<path d=\"m9 9.5 2 2 4-4\"></path>",
  _tmpl$523 = "<path d=\"M2 16V4a2 2 0 0 1 2-2h11\"></path>",
  _tmpl$524 = "<path d=\"M5 14H4a2 2 0 1 0 0 4h1\"></path>",
  _tmpl$525 = "<path d=\"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12\"></path>",
  _tmpl$526 = "<path d=\"M20 22h-2\"></path>",
  _tmpl$527 = "<path d=\"M20 15v2h-2\"></path>",
  _tmpl$528 = "<path d=\"M4 19.5V15\"></path>",
  _tmpl$529 = "<path d=\"M20 8v3\"></path>",
  _tmpl$530 = "<path d=\"M18 2h2v2\"></path>",
  _tmpl$531 = "<path d=\"M4 11V9\"></path>",
  _tmpl$532 = "<path d=\"M12 2h2\"></path>",
  _tmpl$533 = "<path d=\"M12 22h2\"></path>",
  _tmpl$534 = "<path d=\"M12 17h2\"></path>",
  _tmpl$535 = "<path d=\"M8 22H6.5a2.5 2.5 0 0 1 0-5H8\"></path>",
  _tmpl$536 = "<path d=\"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8\"></path>",
  _tmpl$537 = "<path d=\"M12 13V7\"></path>",
  _tmpl$538 = "<path d=\"m9 10 3 3 3-3\"></path>",
  _tmpl$539 = "<circle cx=\"9\" cy=\"12\" r=\"1\"></circle>",
  _tmpl$540 = "<path d=\"M8 12v-2a4 4 0 0 1 8 0v2\"></path>",
  _tmpl$541 = "<circle cx=\"15\" cy=\"12\" r=\"1\"></circle>",
  _tmpl$542 = "<path d=\"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z\"></path>",
  _tmpl$543 = "<circle cx=\"10\" cy=\"8\" r=\"2\"></circle>",
  _tmpl$544 = "<path d=\"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17\"></path>",
  _tmpl$545 = "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14\"></path>",
  _tmpl$546 = "<path d=\"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20\"></path>",
  _tmpl$547 = "<circle cx=\"14\" cy=\"8\" r=\"2\"></circle>",
  _tmpl$548 = "<path d=\"m20 2-4.5 4.5\"></path>",
  _tmpl$549 = "<path d=\"m19 3 1 1\"></path>",
  _tmpl$550 = "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10\"></path>",
  _tmpl$551 = "<path d=\"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20\"></path>",
  _tmpl$552 = "<rect width=\"8\" height=\"5\" x=\"12\" y=\"6\" rx=\"1\"></rect>",
  _tmpl$553 = "<path d=\"M18 6V4a2 2 0 1 0-4 0v2\"></path>",
  _tmpl$554 = "<polyline points=\"10 2 10 10 13 7 16 10 16 2\"></polyline>",
  _tmpl$555 = "<path d=\"M9 10h6\"></path>",
  _tmpl$556 = "<path d=\"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z\"></path>",
  _tmpl$557 = "<path d=\"m16 12 2 2 4-4\"></path>",
  _tmpl$558 = "<path d=\"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3\"></path>",
  _tmpl$559 = "<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path>",
  _tmpl$560 = "<path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>",
  _tmpl$561 = "<path d=\"M6 8h2\"></path>",
  _tmpl$562 = "<path d=\"M6 12h2\"></path>",
  _tmpl$563 = "<path d=\"M16 8h2\"></path>",
  _tmpl$564 = "<path d=\"M16 12h2\"></path>",
  _tmpl$565 = "<path d=\"M12 7v6\"></path>",
  _tmpl$566 = "<path d=\"M8 7h6\"></path>",
  _tmpl$567 = "<path d=\"M8 11h8\"></path>",
  _tmpl$568 = "<path d=\"M16 8V6H8v2\"></path>",
  _tmpl$569 = "<path d=\"M10 13h4\"></path>",
  _tmpl$570 = "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2\"></path>",
  _tmpl$571 = "<path d=\"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20\"></path>",
  _tmpl$572 = "<path d=\"m9 10 3-3 3 3\"></path>",
  _tmpl$573 = "<path d=\"m9 5 3-3 3 3\"></path>",
  _tmpl$574 = "<circle cx=\"12\" cy=\"8\" r=\"2\"></circle>",
  _tmpl$575 = "<path d=\"M15 13a3 3 0 1 0-6 0\"></path>",
  _tmpl$576 = "<path d=\"m14.5 7-5 5\"></path>",
  _tmpl$577 = "<path d=\"m9.5 7 5 5\"></path>",
  _tmpl$578 = "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z\"></path>",
  _tmpl$579 = "<path d=\"m9 10 2 2 4-4\"></path>",
  _tmpl$580 = "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\"></path>",
  _tmpl$581 = "<line x1=\"15\" x2=\"9\" y1=\"10\" y2=\"10\"></line>",
  _tmpl$582 = "<line x1=\"12\" x2=\"12\" y1=\"7\" y2=\"13\"></line>",
  _tmpl$583 = "<path d=\"m14.5 7.5-5 5\"></path>",
  _tmpl$584 = "<path d=\"m9.5 7.5 5 5\"></path>",
  _tmpl$585 = "<path d=\"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\"></path>",
  _tmpl$586 = "<path d=\"M8 8v1\"></path>",
  _tmpl$587 = "<path d=\"M12 8v1\"></path>",
  _tmpl$588 = "<path d=\"M16 8v1\"></path>",
  _tmpl$589 = "<rect width=\"20\" height=\"12\" x=\"2\" y=\"9\" rx=\"2\"></rect>",
  _tmpl$590 = "<circle cx=\"8\" cy=\"15\" r=\"2\"></circle>",
  _tmpl$591 = "<circle cx=\"16\" cy=\"15\" r=\"2\"></circle>",
  _tmpl$592 = "<path d=\"M12 6V2H8\"></path>",
  _tmpl$593 = "<path d=\"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z\"></path>",
  _tmpl$594 = "<path d=\"M2 12h2\"></path>",
  _tmpl$595 = "<path d=\"M9 11v2\"></path>",
  _tmpl$596 = "<path d=\"M15 11v2\"></path>",
  _tmpl$597 = "<path d=\"M20 12h2\"></path>",
  _tmpl$598 = "<path d=\"M13.67 8H18a2 2 0 0 1 2 2v4.33\"></path>",
  _tmpl$599 = "<path d=\"M2 14h2\"></path>",
  _tmpl$600 = "<path d=\"M20 14h2\"></path>",
  _tmpl$601 = "<path d=\"M22 22 2 2\"></path>",
  _tmpl$602 = "<path d=\"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586\"></path>",
  _tmpl$603 = "<path d=\"M9 13v2\"></path>",
  _tmpl$604 = "<path d=\"M9.67 4H12v2.33\"></path>",
  _tmpl$605 = "<path d=\"M12 8V4H8\"></path>",
  _tmpl$606 = "<rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"></rect>",
  _tmpl$607 = "<path d=\"M15 13v2\"></path>",
  _tmpl$608 = "<path d=\"M5 3a2 2 0 0 0-2 2\"></path>",
  _tmpl$609 = "<path d=\"M19 3a2 2 0 0 1 2 2\"></path>",
  _tmpl$610 = "<path d=\"M21 19a2 2 0 0 1-2 2\"></path>",
  _tmpl$611 = "<path d=\"M5 21a2 2 0 0 1-2-2\"></path>",
  _tmpl$612 = "<path d=\"M9 3h1\"></path>",
  _tmpl$613 = "<path d=\"M9 21h1\"></path>",
  _tmpl$614 = "<path d=\"M14 3h1\"></path>",
  _tmpl$615 = "<path d=\"M14 21h1\"></path>",
  _tmpl$616 = "<path d=\"M3 9v1\"></path>",
  _tmpl$617 = "<path d=\"M21 9v1\"></path>",
  _tmpl$618 = "<path d=\"M3 14v1\"></path>",
  _tmpl$619 = "<path d=\"M21 14v1\"></path>",
  _tmpl$620 = "<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\"></path>",
  _tmpl$621 = "<path d=\"m3.3 7 8.7 5 8.7-5\"></path>",
  _tmpl$622 = "<path d=\"M12 22V12\"></path>",
  _tmpl$623 = "<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\"></path>",
  _tmpl$624 = "<path d=\"m7 16.5-4.74-2.85\"></path>",
  _tmpl$625 = "<path d=\"m7 16.5 5-3\"></path>",
  _tmpl$626 = "<path d=\"M7 16.5v5.17\"></path>",
  _tmpl$627 = "<path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\"></path>",
  _tmpl$628 = "<path d=\"m17 16.5-5-3\"></path>",
  _tmpl$629 = "<path d=\"m17 16.5 4.74-2.85\"></path>",
  _tmpl$630 = "<path d=\"M17 16.5v5.17\"></path>",
  _tmpl$631 = "<path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\"></path>",
  _tmpl$632 = "<path d=\"M12 8 7.26 5.15\"></path>",
  _tmpl$633 = "<path d=\"m12 8 4.74-2.85\"></path>",
  _tmpl$634 = "<path d=\"M12 13.5V8\"></path>",
  _tmpl$635 = "<path d=\"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1\"></path>",
  _tmpl$636 = "<path d=\"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1\"></path>",
  _tmpl$637 = "<path d=\"M16 3h3v18h-3\"></path>",
  _tmpl$638 = "<path d=\"M8 21H5V3h3\"></path>",
  _tmpl$639 = "<path d=\"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\"></path>",
  _tmpl$640 = "<path d=\"M9 13a4.5 4.5 0 0 0 3-4\"></path>",
  _tmpl$641 = "<path d=\"M6.003 5.125A3 3 0 0 0 6.401 6.5\"></path>",
  _tmpl$642 = "<path d=\"M3.477 10.896a4 4 0 0 1 .585-.396\"></path>",
  _tmpl$643 = "<path d=\"M6 18a4 4 0 0 1-1.967-.516\"></path>",
  _tmpl$644 = "<path d=\"M12 13h4\"></path>",
  _tmpl$645 = "<path d=\"M12 18h6a2 2 0 0 1 2 2v1\"></path>",
  _tmpl$646 = "<path d=\"M12 8h8\"></path>",
  _tmpl$647 = "<path d=\"M16 8V5a2 2 0 0 1 2-2\"></path>",
  _tmpl$648 = "<circle cx=\"16\" cy=\"13\" r=\".5\"></circle>",
  _tmpl$649 = "<circle cx=\"18\" cy=\"3\" r=\".5\"></circle>",
  _tmpl$650 = "<circle cx=\"20\" cy=\"21\" r=\".5\"></circle>",
  _tmpl$651 = "<circle cx=\"20\" cy=\"8\" r=\".5\"></circle>",
  _tmpl$652 = "<path d=\"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5\"></path>",
  _tmpl$653 = "<path d=\"M17.599 6.5a3 3 0 0 0 .399-1.375\"></path>",
  _tmpl$654 = "<path d=\"M19.938 10.5a4 4 0 0 1 .585.396\"></path>",
  _tmpl$655 = "<path d=\"M19.967 17.484A4 4 0 0 1 18 18\"></path>",
  _tmpl$656 = "<circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
  _tmpl$657 = "<path d=\"m15.7 10.4-.9.4\"></path>",
  _tmpl$658 = "<path d=\"m9.2 13.2-.9.4\"></path>",
  _tmpl$659 = "<path d=\"m13.6 15.7-.4-.9\"></path>",
  _tmpl$660 = "<path d=\"m10.8 9.2-.4-.9\"></path>",
  _tmpl$661 = "<path d=\"m15.7 13.5-.9-.4\"></path>",
  _tmpl$662 = "<path d=\"m9.2 10.9-.9-.4\"></path>",
  _tmpl$663 = "<path d=\"m10.5 15.7.4-.9\"></path>",
  _tmpl$664 = "<path d=\"m13.1 9.2.4-.9\"></path>",
  _tmpl$665 = "<path d=\"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z\"></path>",
  _tmpl$666 = "<path d=\"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4\"></path>",
  _tmpl$667 = "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$668 = "<path d=\"M12 9v6\"></path>",
  _tmpl$669 = "<path d=\"M16 15v6\"></path>",
  _tmpl$670 = "<path d=\"M16 3v6\"></path>",
  _tmpl$671 = "<path d=\"M3 15h18\"></path>",
  _tmpl$672 = "<path d=\"M3 9h18\"></path>",
  _tmpl$673 = "<path d=\"M8 15v6\"></path>",
  _tmpl$674 = "<path d=\"M8 3v6\"></path>",
  _tmpl$675 = "<path d=\"M12 12h.01\"></path>",
  _tmpl$676 = "<path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"></path>",
  _tmpl$677 = "<path d=\"M22 13a18.15 18.15 0 0 1-20 0\"></path>",
  _tmpl$678 = "<rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"></rect>",
  _tmpl$679 = "<path d=\"M12 11v4\"></path>",
  _tmpl$680 = "<path d=\"M14 13h-4\"></path>",
  _tmpl$681 = "<path d=\"M18 6v14\"></path>",
  _tmpl$682 = "<path d=\"M6 6v14\"></path>",
  _tmpl$683 = "<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>",
  _tmpl$684 = "<rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"2\"></rect>",
  _tmpl$685 = "<path d=\"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2\"></path>",
  _tmpl$686 = "<path d=\"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2\"></path>",
  _tmpl$687 = "<path d=\"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08\"></path>",
  _tmpl$688 = "<path d=\"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z\"></path>",
  _tmpl$689 = "<path d=\"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2\"></path>",
  _tmpl$690 = "<path d=\"M14.12 3.88 16 2\"></path>",
  _tmpl$691 = "<path d=\"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3\"></path>",
  _tmpl$692 = "<path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4\"></path>",
  _tmpl$693 = "<path d=\"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13\"></path>",
  _tmpl$694 = "<path d=\"M12 20v-8\"></path>",
  _tmpl$695 = "<path d=\"M6 13H2\"></path>",
  _tmpl$696 = "<path d=\"M3 21c0-2.1 1.7-3.9 3.8-4\"></path>",
  _tmpl$697 = "<path d=\"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z\"></path>",
  _tmpl$698 = "<path d=\"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5\"></path>",
  _tmpl$699 = "<path d=\"M6.53 9C4.6 8.8 3 7.1 3 5\"></path>",
  _tmpl$700 = "<path d=\"m8 2 1.88 1.88\"></path>",
  _tmpl$701 = "<path d=\"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"></path>",
  _tmpl$702 = "<path d=\"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6\"></path>",
  _tmpl$703 = "<path d=\"M12 20v-9\"></path>",
  _tmpl$704 = "<path d=\"M22 13h-4\"></path>",
  _tmpl$705 = "<path d=\"M17.2 17c2.1.1 3.8 1.9 3.8 4\"></path>",
  _tmpl$706 = "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"></path>",
  _tmpl$707 = "<path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"></path>",
  _tmpl$708 = "<path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$709 = "<path d=\"M10 6h4\"></path>",
  _tmpl$710 = "<path d=\"M10 10h4\"></path>",
  _tmpl$711 = "<path d=\"M10 14h4\"></path>",
  _tmpl$712 = "<path d=\"M10 18h4\"></path>",
  _tmpl$713 = "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$714 = "<path d=\"M9 22v-4h6v4\"></path>",
  _tmpl$715 = "<path d=\"M8 6h.01\"></path>",
  _tmpl$716 = "<path d=\"M16 6h.01\"></path>",
  _tmpl$717 = "<path d=\"M12 6h.01\"></path>",
  _tmpl$718 = "<path d=\"M12 10h.01\"></path>",
  _tmpl$719 = "<path d=\"M12 14h.01\"></path>",
  _tmpl$720 = "<path d=\"M16 10h.01\"></path>",
  _tmpl$721 = "<path d=\"M16 14h.01\"></path>",
  _tmpl$722 = "<path d=\"M8 10h.01\"></path>",
  _tmpl$723 = "<path d=\"M8 14h.01\"></path>",
  _tmpl$724 = "<path d=\"M4 6 2 7\"></path>",
  _tmpl$725 = "<path d=\"m22 7-2-1\"></path>",
  _tmpl$726 = "<rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$727 = "<path d=\"M4 11h16\"></path>",
  _tmpl$728 = "<path d=\"M8 15h.01\"></path>",
  _tmpl$729 = "<path d=\"M16 15h.01\"></path>",
  _tmpl$730 = "<path d=\"M6 19v2\"></path>",
  _tmpl$731 = "<path d=\"M18 21v-2\"></path>",
  _tmpl$732 = "<path d=\"M8 6v6\"></path>",
  _tmpl$733 = "<path d=\"M15 6v6\"></path>",
  _tmpl$734 = "<path d=\"M2 12h19.6\"></path>",
  _tmpl$735 = "<path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"></path>",
  _tmpl$736 = "<path d=\"M9 18h5\"></path>",
  _tmpl$737 = "<circle cx=\"16\" cy=\"18\" r=\"2\"></circle>",
  _tmpl$738 = "<path d=\"M10 3h.01\"></path>",
  _tmpl$739 = "<path d=\"M14 2h.01\"></path>",
  _tmpl$740 = "<path d=\"m2 9 20-5\"></path>",
  _tmpl$741 = "<path d=\"M12 12V6.5\"></path>",
  _tmpl$742 = "<rect width=\"16\" height=\"10\" x=\"4\" y=\"12\" rx=\"3\"></rect>",
  _tmpl$743 = "<path d=\"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1\"></path>",
  _tmpl$744 = "<path d=\"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9\"></path>",
  _tmpl$745 = "<path d=\"M21 21v-2h-4\"></path>",
  _tmpl$746 = "<path d=\"M3 5h4V3\"></path>",
  _tmpl$747 = "<path d=\"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3\"></path>",
  _tmpl$748 = "<circle cx=\"9\" cy=\"7\" r=\"2\"></circle>",
  _tmpl$749 = "<path d=\"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6\"></path>",
  _tmpl$750 = "<path d=\"M16 13H3\"></path>",
  _tmpl$751 = "<path d=\"M16 17H3\"></path>",
  _tmpl$752 = "<path d=\"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8\"></path>",
  _tmpl$753 = "<path d=\"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1\"></path>",
  _tmpl$754 = "<path d=\"M7 8v3\"></path>",
  _tmpl$755 = "<path d=\"M12 8v3\"></path>",
  _tmpl$756 = "<path d=\"M17 8v3\"></path>",
  _tmpl$757 = "<path d=\"M7 4h0.01\"></path>",
  _tmpl$758 = "<path d=\"M12 4h0.01\"></path>",
  _tmpl$759 = "<path d=\"M17 4h0.01\"></path>",
  _tmpl$760 = "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$761 = "<line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$762 = "<line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"></line>",
  _tmpl$763 = "<path d=\"M12 18h.01\"></path>",
  _tmpl$764 = "<path d=\"M8 18h.01\"></path>",
  _tmpl$765 = "<path d=\"M8 2v4\"></path>",
  _tmpl$766 = "<path d=\"M16 2v4\"></path>",
  _tmpl$767 = "<path d=\"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8\"></path>",
  _tmpl$768 = "<path d=\"M3 10h18\"></path>",
  _tmpl$769 = "<path d=\"m16 20 2 2 4-4\"></path>",
  _tmpl$770 = "<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$771 = "<path d=\"m9 16 2 2 4-4\"></path>",
  _tmpl$772 = "<path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\"></path>",
  _tmpl$773 = "<path d=\"M3 10h5\"></path>",
  _tmpl$774 = "<path d=\"M17.5 17.5 16 16.3V14\"></path>",
  _tmpl$775 = "<circle cx=\"16\" cy=\"16\" r=\"6\"></circle>",
  _tmpl$776 = "<path d=\"M16 18h.01\"></path>",
  _tmpl$777 = "<path d=\"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z\"></path>",
  _tmpl$778 = "<path d=\"M15 22v-4a2 2 0 0 1 2-2h4\"></path>",
  _tmpl$779 = "<path d=\"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7\"></path>",
  _tmpl$780 = "<path d=\"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z\"></path>",
  _tmpl$781 = "<path d=\"M10 16h4\"></path>",
  _tmpl$782 = "<path d=\"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8\"></path>",
  _tmpl$783 = "<path d=\"M16 19h6\"></path>",
  _tmpl$784 = "<path d=\"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18\"></path>",
  _tmpl$785 = "<path d=\"M21 15.5V6a2 2 0 0 0-2-2H9.5\"></path>",
  _tmpl$786 = "<path d=\"M3 10h7\"></path>",
  _tmpl$787 = "<path d=\"M21 10h-5.5\"></path>",
  _tmpl$788 = "<path d=\"M12 14v4\"></path>",
  _tmpl$789 = "<path d=\"M19 16v6\"></path>",
  _tmpl$790 = "<path d=\"M17 14h-6\"></path>",
  _tmpl$791 = "<path d=\"M13 18H7\"></path>",
  _tmpl$792 = "<path d=\"M7 14h.01\"></path>",
  _tmpl$793 = "<path d=\"M17 18h.01\"></path>",
  _tmpl$794 = "<path d=\"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5\"></path>",
  _tmpl$795 = "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle>",
  _tmpl$796 = "<path d=\"m22 22-1.5-1.5\"></path>",
  _tmpl$797 = "<path d=\"m17 22 5-5\"></path>",
  _tmpl$798 = "<path d=\"m17 17 5 5\"></path>",
  _tmpl$799 = "<path d=\"m14 14-4 4\"></path>",
  _tmpl$800 = "<path d=\"m10 14 4 4\"></path>",
  _tmpl$801 = "<path d=\"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16\"></path>",
  _tmpl$802 = "<path d=\"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5\"></path>",
  _tmpl$803 = "<path d=\"M14.121 15.121A3 3 0 1 1 9.88 10.88\"></path>",
  _tmpl$804 = "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"></path>",
  _tmpl$805 = "<circle cx=\"12\" cy=\"13\" r=\"3\"></circle>",
  _tmpl$806 = "<path d=\"M9 5v4\"></path>",
  _tmpl$807 = "<rect width=\"4\" height=\"6\" x=\"7\" y=\"9\" rx=\"1\"></rect>",
  _tmpl$808 = "<path d=\"M9 15v2\"></path>",
  _tmpl$809 = "<path d=\"M17 3v2\"></path>",
  _tmpl$810 = "<rect width=\"4\" height=\"8\" x=\"15\" y=\"5\" rx=\"1\"></rect>",
  _tmpl$811 = "<path d=\"M17 13v3\"></path>",
  _tmpl$812 = "<path d=\"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z\"></path>",
  _tmpl$813 = "<path d=\"M17.75 7 15 2.1\"></path>",
  _tmpl$814 = "<path d=\"M10.9 4.8 13 9\"></path>",
  _tmpl$815 = "<path d=\"m7.9 9.7 2 4.4\"></path>",
  _tmpl$816 = "<path d=\"M4.9 14.7 7 18.9\"></path>",
  _tmpl$817 = "<path d=\"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1\"></path>",
  _tmpl$818 = "<path d=\"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657\"></path>",
  _tmpl$819 = "<path d=\"M14 16.5V14\"></path>",
  _tmpl$820 = "<path d=\"M14 6.5v1.843\"></path>",
  _tmpl$821 = "<path d=\"M10 10v7.5\"></path>",
  _tmpl$822 = "<path d=\"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1\"></path>",
  _tmpl$823 = "<path d=\"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1\"></path>",
  _tmpl$824 = "<path d=\"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z\"></path>",
  _tmpl$825 = "<path d=\"M14 6.5v10\"></path>",
  _tmpl$826 = "<path d=\"M10 7.5v10\"></path>",
  _tmpl$827 = "<path d=\"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1\"></path>",
  _tmpl$828 = "<path d=\"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1\"></path>",
  _tmpl$829 = "<path d=\"M12 22v-4\"></path>",
  _tmpl$830 = "<path d=\"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6\"></path>",
  _tmpl$831 = "<path d=\"M10.5 5H19a2 2 0 0 1 2 2v8.5\"></path>",
  _tmpl$832 = "<path d=\"M17 11h-.5\"></path>",
  _tmpl$833 = "<path d=\"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2\"></path>",
  _tmpl$834 = "<path d=\"M7 11h4\"></path>",
  _tmpl$835 = "<path d=\"M7 15h2.5\"></path>",
  _tmpl$836 = "<rect width=\"18\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$837 = "<path d=\"M7 15h4M15 15h2M7 11h2M13 11h4\"></path>",
  _tmpl$838 = "<path d=\"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8\"></path>",
  _tmpl$839 = "<path d=\"M17 14h.01\"></path>",
  _tmpl$840 = "<rect width=\"18\" height=\"8\" x=\"3\" y=\"10\" rx=\"2\"></rect>",
  _tmpl$841 = "<path d=\"M10 2h4\"></path>",
  _tmpl$842 = "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"></path>",
  _tmpl$843 = "<circle cx=\"7\" cy=\"17\" r=\"2\"></circle>",
  _tmpl$844 = "<path d=\"M9 17h6\"></path>",
  _tmpl$845 = "<circle cx=\"17\" cy=\"17\" r=\"2\"></circle>",
  _tmpl$846 = "<rect width=\"4\" height=\"4\" x=\"2\" y=\"9\"></rect>",
  _tmpl$847 = "<rect width=\"4\" height=\"10\" x=\"10\" y=\"9\"></rect>",
  _tmpl$848 = "<path d=\"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2\"></path>",
  _tmpl$849 = "<circle cx=\"8\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$850 = "<path d=\"M10 19h12v-2\"></path>",
  _tmpl$851 = "<path d=\"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46\"></path>",
  _tmpl$852 = "<path d=\"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z\"></path>",
  _tmpl$853 = "<path d=\"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z\"></path>",
  _tmpl$854 = "<circle cx=\"7\" cy=\"12\" r=\"3\"></circle>",
  _tmpl$855 = "<path d=\"M10 9v6\"></path>",
  _tmpl$856 = "<circle cx=\"17\" cy=\"12\" r=\"3\"></circle>",
  _tmpl$857 = "<path d=\"M14 7v8\"></path>",
  _tmpl$858 = "<path d=\"m3 15 4-8 4 8\"></path>",
  _tmpl$859 = "<path d=\"M4 13h6\"></path>",
  _tmpl$860 = "<circle cx=\"18\" cy=\"12\" r=\"3\"></circle>",
  _tmpl$861 = "<path d=\"M21 9v6\"></path>",
  _tmpl$862 = "<path d=\"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4\"></path>",
  _tmpl$863 = "<circle cx=\"8\" cy=\"10\" r=\"2\"></circle>",
  _tmpl$864 = "<circle cx=\"16\" cy=\"10\" r=\"2\"></circle>",
  _tmpl$865 = "<path d=\"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3\"></path>",
  _tmpl$866 = "<path d=\"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path>",
  _tmpl$867 = "<path d=\"M2 12a9 9 0 0 1 8 8\"></path>",
  _tmpl$868 = "<path d=\"M2 16a5 5 0 0 1 4 4\"></path>",
  _tmpl$869 = "<line x1=\"2\" x2=\"2.01\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$870 = "<path d=\"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z\"></path>",
  _tmpl$871 = "<path d=\"M18 11V4H6v7\"></path>",
  _tmpl$872 = "<path d=\"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4\"></path>",
  _tmpl$873 = "<path d=\"M22 11V9\"></path>",
  _tmpl$874 = "<path d=\"M2 11V9\"></path>",
  _tmpl$875 = "<path d=\"M6 4V2\"></path>",
  _tmpl$876 = "<path d=\"M18 4V2\"></path>",
  _tmpl$877 = "<path d=\"M10 4V2\"></path>",
  _tmpl$878 = "<path d=\"M14 4V2\"></path>",
  _tmpl$879 = "<path d=\"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z\"></path>",
  _tmpl$880 = "<path d=\"M8 14v.5\"></path>",
  _tmpl$881 = "<path d=\"M16 14v.5\"></path>",
  _tmpl$882 = "<path d=\"M11.25 16.25h1.5L12 17l-.75-.75Z\"></path>",
  _tmpl$883 = "<path d=\"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97\"></path>",
  _tmpl$884 = "<path d=\"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z\"></path>",
  _tmpl$885 = "<path d=\"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15\"></path>",
  _tmpl$886 = "<path d=\"M2 21v-4\"></path>",
  _tmpl$887 = "<path d=\"M7 9h.01\"></path>",
  _tmpl$888 = "<path d=\"M18 6 7 17l-5-5\"></path>",
  _tmpl$889 = "<path d=\"m22 10-7.5 7.5L13 16\"></path>",
  _tmpl$890 = "<path d=\"M20 6 9 17l-5-5\"></path>",
  _tmpl$891 = "<path d=\"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z\"></path>",
  _tmpl$892 = "<path d=\"M6 17h12\"></path>",
  _tmpl$893 = "<path d=\"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z\"></path>",
  _tmpl$894 = "<path d=\"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z\"></path>",
  _tmpl$895 = "<path d=\"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12\"></path>",
  _tmpl$896 = "<path d=\"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z\"></path>",
  _tmpl$897 = "<path d=\"m6 9 6 6 6-6\"></path>",
  _tmpl$898 = "<path d=\"m17 18-6-6 6-6\"></path>",
  _tmpl$899 = "<path d=\"M7 6v12\"></path>",
  _tmpl$900 = "<path d=\"m7 18 6-6-6-6\"></path>",
  _tmpl$901 = "<path d=\"M17 6v12\"></path>",
  _tmpl$902 = "<path d=\"m15 18-6-6 6-6\"></path>",
  _tmpl$903 = "<path d=\"m9 18 6-6-6-6\"></path>",
  _tmpl$904 = "<path d=\"m18 15-6-6-6 6\"></path>",
  _tmpl$905 = "<path d=\"m7 20 5-5 5 5\"></path>",
  _tmpl$906 = "<path d=\"m7 4 5 5 5-5\"></path>",
  _tmpl$907 = "<path d=\"m7 6 5 5 5-5\"></path>",
  _tmpl$908 = "<path d=\"m7 13 5 5 5-5\"></path>",
  _tmpl$909 = "<path d=\"m9 7-5 5 5 5\"></path>",
  _tmpl$910 = "<path d=\"m15 7 5 5-5 5\"></path>",
  _tmpl$911 = "<path d=\"m11 17-5-5 5-5\"></path>",
  _tmpl$912 = "<path d=\"m18 17-5-5 5-5\"></path>",
  _tmpl$913 = "<path d=\"m20 17-5-5 5-5\"></path>",
  _tmpl$914 = "<path d=\"m4 17 5-5-5-5\"></path>",
  _tmpl$915 = "<path d=\"m6 17 5-5-5-5\"></path>",
  _tmpl$916 = "<path d=\"m13 17 5-5-5-5\"></path>",
  _tmpl$917 = "<path d=\"m7 15 5 5 5-5\"></path>",
  _tmpl$918 = "<path d=\"m7 9 5-5 5 5\"></path>",
  _tmpl$919 = "<path d=\"m17 11-5-5-5 5\"></path>",
  _tmpl$920 = "<path d=\"m17 18-5-5-5 5\"></path>",
  _tmpl$921 = "<line x1=\"21.17\" x2=\"12\" y1=\"8\" y2=\"8\"></line>",
  _tmpl$922 = "<line x1=\"3.95\" x2=\"8.54\" y1=\"6.06\" y2=\"14\"></line>",
  _tmpl$923 = "<line x1=\"10.88\" x2=\"15.46\" y1=\"21.94\" y2=\"14\"></line>",
  _tmpl$924 = "<path d=\"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2\"></path>",
  _tmpl$925 = "<path d=\"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4\"></path>",
  _tmpl$926 = "<path d=\"M18 22V5l-6-3-6 3v17\"></path>",
  _tmpl$927 = "<path d=\"M12 7v5\"></path>",
  _tmpl$928 = "<path d=\"M10 9h4\"></path>",
  _tmpl$929 = "<path d=\"M12 12H2v4h14\"></path>",
  _tmpl$930 = "<path d=\"M22 12v4\"></path>",
  _tmpl$931 = "<path d=\"M18 12h-.5\"></path>",
  _tmpl$932 = "<path d=\"M7 12v4\"></path>",
  _tmpl$933 = "<path d=\"M18 8c0-2.5-2-2.5-2-5\"></path>",
  _tmpl$934 = "<path d=\"M22 8c0-2.5-2-2.5-2-5\"></path>",
  _tmpl$935 = "<path d=\"M18 12H2v4h16\"></path>",
  _tmpl$936 = "<path d=\"M12 8v8\"></path>",
  _tmpl$937 = "<path d=\"m8 12 4 4 4-4\"></path>",
  _tmpl$938 = "<path d=\"M16 12H8\"></path>",
  _tmpl$939 = "<path d=\"m12 8-4 4 4 4\"></path>",
  _tmpl$940 = "<path d=\"M2 12a10 10 0 1 1 10 10\"></path>",
  _tmpl$941 = "<path d=\"m2 22 10-10\"></path>",
  _tmpl$942 = "<path d=\"M8 22H2v-6\"></path>",
  _tmpl$943 = "<path d=\"M12 22a10 10 0 1 1 10-10\"></path>",
  _tmpl$944 = "<path d=\"M22 22 12 12\"></path>",
  _tmpl$945 = "<path d=\"M22 16v6h-6\"></path>",
  _tmpl$946 = "<path d=\"M2 8V2h6\"></path>",
  _tmpl$947 = "<path d=\"m2 2 10 10\"></path>",
  _tmpl$948 = "<path d=\"M12 2A10 10 0 1 1 2 12\"></path>",
  _tmpl$949 = "<path d=\"M22 12A10 10 0 1 1 12 2\"></path>",
  _tmpl$950 = "<path d=\"M22 2 12 12\"></path>",
  _tmpl$951 = "<path d=\"M16 2h6v6\"></path>",
  _tmpl$952 = "<path d=\"m12 16 4-4-4-4\"></path>",
  _tmpl$953 = "<path d=\"m16 12-4-4-4 4\"></path>",
  _tmpl$954 = "<path d=\"M12 16V8\"></path>",
  _tmpl$955 = "<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path>",
  _tmpl$956 = "<path d=\"m9 11 3 3L22 4\"></path>",
  _tmpl$957 = "<path d=\"m16 10-4 4-4-4\"></path>",
  _tmpl$958 = "<path d=\"m14 16-4-4 4-4\"></path>",
  _tmpl$959 = "<path d=\"m10 8 4 4-4 4\"></path>",
  _tmpl$960 = "<path d=\"m8 14 4-4 4 4\"></path>",
  _tmpl$961 = "<path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\"></path>",
  _tmpl$962 = "<path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\"></path>",
  _tmpl$963 = "<path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\"></path>",
  _tmpl$964 = "<path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\"></path>",
  _tmpl$965 = "<path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\"></path>",
  _tmpl$966 = "<path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\"></path>",
  _tmpl$967 = "<path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\"></path>",
  _tmpl$968 = "<path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\"></path>",
  _tmpl$969 = "<line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$970 = "<line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"8\"></line>",
  _tmpl$971 = "<path d=\"M10.1 2.18a9.93 9.93 0 0 1 3.8 0\"></path>",
  _tmpl$972 = "<path d=\"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7\"></path>",
  _tmpl$973 = "<path d=\"M21.82 10.1a9.93 9.93 0 0 1 0 3.8\"></path>",
  _tmpl$974 = "<path d=\"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69\"></path>",
  _tmpl$975 = "<path d=\"M13.9 21.82a9.94 9.94 0 0 1-3.8 0\"></path>",
  _tmpl$976 = "<path d=\"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7\"></path>",
  _tmpl$977 = "<path d=\"M2.18 13.9a9.93 9.93 0 0 1 0-3.8\"></path>",
  _tmpl$978 = "<path d=\"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69\"></path>",
  _tmpl$979 = "<path d=\"M17 12h.01\"></path>",
  _tmpl$980 = "<path d=\"M7 12h.01\"></path>",
  _tmpl$981 = "<path d=\"M7 10h10\"></path>",
  _tmpl$982 = "<path d=\"M7 14h10\"></path>",
  _tmpl$983 = "<path d=\"M12 2a10 10 0 0 1 7.38 16.75\"></path>",
  _tmpl$984 = "<path d=\"M2.5 8.875a10 10 0 0 0-.5 3\"></path>",
  _tmpl$985 = "<path d=\"M2.83 16a10 10 0 0 0 2.43 3.4\"></path>",
  _tmpl$986 = "<path d=\"M4.636 5.235a10 10 0 0 1 .891-.857\"></path>",
  _tmpl$987 = "<path d=\"M8.644 21.42a10 10 0 0 0 7.631-.38\"></path>",
  _tmpl$988 = "<path d=\"M15.6 2.7a10 10 0 1 0 5.7 5.7\"></path>",
  _tmpl$989 = "<path d=\"M13.4 10.6 19 5\"></path>",
  _tmpl$990 = "<path d=\"M12 17h.01\"></path>",
  _tmpl$991 = "<path d=\"M8.35 2.69A10 10 0 0 1 21.3 15.65\"></path>",
  _tmpl$992 = "<path d=\"M19.08 19.08A10 10 0 1 1 4.92 4.92\"></path>",
  _tmpl$993 = "<path d=\"m5 5 14 14\"></path>",
  _tmpl$994 = "<path d=\"M13 13a3 3 0 1 0 0-6H9v2\"></path>",
  _tmpl$995 = "<path d=\"M9 17v-2.34\"></path>",
  _tmpl$996 = "<path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"></path>",
  _tmpl$997 = "<line x1=\"10\" x2=\"10\" y1=\"15\" y2=\"9\"></line>",
  _tmpl$998 = "<line x1=\"14\" x2=\"14\" y1=\"15\" y2=\"9\"></line>",
  _tmpl$999 = "<polygon points=\"10 8 16 12 10 16 10 8\"></polygon>",
  _tmpl$1000 = "<path d=\"M12 12V7\"></path>",
  _tmpl$1001 = "<path d=\"M16 9a5 5 0 1 1-8 0\"></path>",
  _tmpl$1002 = "<path d=\"M22 2 2 22\"></path>",
  _tmpl$1003 = "<line x1=\"9\" x2=\"15\" y1=\"15\" y2=\"9\"></line>",
  _tmpl$1004 = "<rect width=\"6\" height=\"6\" x=\"9\" y=\"9\"></rect>",
  _tmpl$1005 = "<path d=\"M18 20a6 6 0 0 0-12 0\"></path>",
  _tmpl$1006 = "<circle cx=\"12\" cy=\"10\" r=\"4\"></circle>",
  _tmpl$1007 = "<circle cx=\"12\" cy=\"10\" r=\"3\"></circle>",
  _tmpl$1008 = "<path d=\"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662\"></path>",
  _tmpl$1009 = "<path d=\"m9 9 6 6\"></path>",
  _tmpl$1010 = "<path d=\"M11 9h4a2 2 0 0 0 2-2V3\"></path>",
  _tmpl$1011 = "<circle cx=\"9\" cy=\"9\" r=\"2\"></circle>",
  _tmpl$1012 = "<path d=\"M7 21v-4a2 2 0 0 1 2-2h4\"></path>",
  _tmpl$1013 = "<circle cx=\"15\" cy=\"15\" r=\"2\"></circle>",
  _tmpl$1014 = "<path d=\"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z\"></path>",
  _tmpl$1015 = "<path d=\"M19.65 15.66A8 8 0 0 1 8.35 4.34\"></path>",
  _tmpl$1016 = "<path d=\"m14 10-5.5 5.5\"></path>",
  _tmpl$1017 = "<path d=\"M14 17.85V10H6.15\"></path>",
  _tmpl$1018 = "<path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z\"></path>",
  _tmpl$1019 = "<path d=\"m6.2 5.3 3.1 3.9\"></path>",
  _tmpl$1020 = "<path d=\"m12.4 3.4 3.1 4\"></path>",
  _tmpl$1021 = "<path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z\"></path>",
  _tmpl$1022 = "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect>",
  _tmpl$1023 = "<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$1024 = "<path d=\"m9 14 2 2 4-4\"></path>",
  _tmpl$1025 = "<path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2\"></path>",
  _tmpl$1026 = "<path d=\"M16 4h2a2 2 0 0 1 2 2v4\"></path>",
  _tmpl$1027 = "<path d=\"M21 14H11\"></path>",
  _tmpl$1028 = "<path d=\"m15 10-4 4 4 4\"></path>",
  _tmpl$1029 = "<path d=\"M12 11h4\"></path>",
  _tmpl$1030 = "<path d=\"M12 16h4\"></path>",
  _tmpl$1031 = "<path d=\"M8 11h.01\"></path>",
  _tmpl$1032 = "<path d=\"M8 16h.01\"></path>",
  _tmpl$1033 = "<path d=\"M9 14h6\"></path>",
  _tmpl$1034 = "<path d=\"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z\"></path>",
  _tmpl$1035 = "<path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10\"></path>",
  _tmpl$1036 = "<path d=\"m17 10 4 4-4 4\"></path>",
  _tmpl$1037 = "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\"></rect>",
  _tmpl$1038 = "<path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5\"></path>",
  _tmpl$1039 = "<path d=\"M16 4h2a2 2 0 0 1 1.73 1\"></path>",
  _tmpl$1040 = "<path d=\"M8 18h1\"></path>",
  _tmpl$1041 = "<path d=\"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z\"></path>",
  _tmpl$1042 = "<path d=\"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z\"></path>",
  _tmpl$1043 = "<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5\"></path>",
  _tmpl$1044 = "<path d=\"M4 13.5V6a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$1045 = "<path d=\"M12 17v-6\"></path>",
  _tmpl$1046 = "<path d=\"M9 12v-1h6v1\"></path>",
  _tmpl$1047 = "<path d=\"M11 17h2\"></path>",
  _tmpl$1048 = "<path d=\"M12 11v6\"></path>",
  _tmpl$1049 = "<path d=\"m15 11-6 6\"></path>",
  _tmpl$1050 = "<path d=\"m9 11 6 6\"></path>",
  _tmpl$1051 = "<polyline points=\"12 6 12 12 14.5 8\"></polyline>",
  _tmpl$1052 = "<polyline points=\"12 6 12 12 8 10\"></polyline>",
  _tmpl$1053 = "<polyline points=\"12 6 12 12 9.5 8\"></polyline>",
  _tmpl$1054 = "<polyline points=\"12 6 12 12\"></polyline>",
  _tmpl$1055 = "<polyline points=\"12 6 12 12 16 10\"></polyline>",
  _tmpl$1056 = "<polyline points=\"12 6 12 12 16.5 12\"></polyline>",
  _tmpl$1057 = "<polyline points=\"12 6 12 12 16 14\"></polyline>",
  _tmpl$1058 = "<polyline points=\"12 6 12 12 14.5 16\"></polyline>",
  _tmpl$1059 = "<polyline points=\"12 6 12 12 12 16.5\"></polyline>",
  _tmpl$1060 = "<polyline points=\"12 6 12 12 9.5 16\"></polyline>",
  _tmpl$1061 = "<polyline points=\"12 6 12 12 8 14\"></polyline>",
  _tmpl$1062 = "<polyline points=\"12 6 12 12 7.5 12\"></polyline>",
  _tmpl$1063 = "<circle cx=\"12\" cy=\"17\" r=\"3\"></circle>",
  _tmpl$1064 = "<path d=\"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2\"></path>",
  _tmpl$1065 = "<path d=\"m15.7 18.4-.9-.3\"></path>",
  _tmpl$1066 = "<path d=\"m9.2 15.9-.9-.3\"></path>",
  _tmpl$1067 = "<path d=\"m10.6 20.7.3-.9\"></path>",
  _tmpl$1068 = "<path d=\"m13.1 14.2.3-.9\"></path>",
  _tmpl$1069 = "<path d=\"m13.6 20.7-.4-1\"></path>",
  _tmpl$1070 = "<path d=\"m10.8 14.3-.4-1\"></path>",
  _tmpl$1071 = "<path d=\"m8.3 18.6 1-.4\"></path>",
  _tmpl$1072 = "<path d=\"m14.7 15.8 1-.4\"></path>",
  _tmpl$1073 = "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"></path>",
  _tmpl$1074 = "<path d=\"m8 17 4 4 4-4\"></path>",
  _tmpl$1075 = "<path d=\"M8 19v1\"></path>",
  _tmpl$1076 = "<path d=\"M8 14v1\"></path>",
  _tmpl$1077 = "<path d=\"M16 19v1\"></path>",
  _tmpl$1078 = "<path d=\"M16 14v1\"></path>",
  _tmpl$1079 = "<path d=\"M12 21v1\"></path>",
  _tmpl$1080 = "<path d=\"M12 16v1\"></path>",
  _tmpl$1081 = "<path d=\"M16 17H7\"></path>",
  _tmpl$1082 = "<path d=\"M17 21H9\"></path>",
  _tmpl$1083 = "<path d=\"M16 14v2\"></path>",
  _tmpl$1084 = "<path d=\"M8 14v2\"></path>",
  _tmpl$1085 = "<path d=\"M16 20h.01\"></path>",
  _tmpl$1086 = "<path d=\"M8 20h.01\"></path>",
  _tmpl$1087 = "<path d=\"M12 16v2\"></path>",
  _tmpl$1088 = "<path d=\"M12 22h.01\"></path>",
  _tmpl$1089 = "<path d=\"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973\"></path>",
  _tmpl$1090 = "<path d=\"m13 12-3 5h4l-3 5\"></path>",
  _tmpl$1091 = "<path d=\"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197\"></path>",
  _tmpl$1092 = "<path d=\"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24\"></path>",
  _tmpl$1093 = "<path d=\"M11 20v2\"></path>",
  _tmpl$1094 = "<path d=\"M7 19v2\"></path>",
  _tmpl$1095 = "<path d=\"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z\"></path>",
  _tmpl$1096 = "<path d=\"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197\"></path>",
  _tmpl$1097 = "<path d=\"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193\"></path>",
  _tmpl$1098 = "<path d=\"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07\"></path>",
  _tmpl$1099 = "<path d=\"m9.2 22 3-7\"></path>",
  _tmpl$1100 = "<path d=\"m9 13-3 7\"></path>",
  _tmpl$1101 = "<path d=\"m17 13-3 7\"></path>",
  _tmpl$1102 = "<path d=\"M16 14v6\"></path>",
  _tmpl$1103 = "<path d=\"M8 14v6\"></path>",
  _tmpl$1104 = "<path d=\"M8 19h.01\"></path>",
  _tmpl$1105 = "<path d=\"M12 21h.01\"></path>",
  _tmpl$1106 = "<path d=\"M16 19h.01\"></path>",
  _tmpl$1107 = "<path d=\"M12 2v2\"></path>",
  _tmpl$1108 = "<path d=\"m4.93 4.93 1.41 1.41\"></path>",
  _tmpl$1109 = "<path d=\"m19.07 4.93-1.41 1.41\"></path>",
  _tmpl$1110 = "<path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\"></path>",
  _tmpl$1111 = "<path d=\"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\"></path>",
  _tmpl$1112 = "<path d=\"m16 16-4-4-4 4\"></path>",
  _tmpl$1113 = "<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"></path>",
  _tmpl$1114 = "<path d=\"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"></path>",
  _tmpl$1115 = "<path d=\"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5\"></path>",
  _tmpl$1116 = "<path d=\"M16.17 7.83 2 22\"></path>",
  _tmpl$1117 = "<path d=\"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12\"></path>",
  _tmpl$1118 = "<path d=\"m7.83 7.83 8.34 8.34\"></path>",
  _tmpl$1119 = "<path d=\"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z\"></path>",
  _tmpl$1120 = "<path d=\"M12 17.66L12 22\"></path>",
  _tmpl$1121 = "<path d=\"m18 16 4-4-4-4\"></path>",
  _tmpl$1122 = "<path d=\"m6 8-4 4 4 4\"></path>",
  _tmpl$1123 = "<path d=\"m14.5 4-5 16\"></path>",
  _tmpl$1124 = "<polyline points=\"16 18 22 12 16 6\"></polyline>",
  _tmpl$1125 = "<polyline points=\"8 6 2 12 8 18\"></polyline>",
  _tmpl$1126 = "<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon>",
  _tmpl$1127 = "<line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"15.5\"></line>",
  _tmpl$1128 = "<polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline>",
  _tmpl$1129 = "<polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline>",
  _tmpl$1130 = "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"8.5\"></line>",
  _tmpl$1131 = "<polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline>",
  _tmpl$1132 = "<polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline>",
  _tmpl$1133 = "<polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline>",
  _tmpl$1134 = "<polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline>",
  _tmpl$1135 = "<line x1=\"12\" x2=\"12\" y1=\"22.08\" y2=\"12\"></line>",
  _tmpl$1136 = "<path d=\"M10 2v2\"></path>",
  _tmpl$1137 = "<path d=\"M14 2v2\"></path>",
  _tmpl$1138 = "<path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\"></path>",
  _tmpl$1139 = "<path d=\"M6 2v2\"></path>",
  _tmpl$1140 = "<path d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z\"></path>",
  _tmpl$1141 = "<path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\"></path>",
  _tmpl$1142 = "<path d=\"M12 22v-2\"></path>",
  _tmpl$1143 = "<path d=\"m17 20.66-1-1.73\"></path>",
  _tmpl$1144 = "<path d=\"M11 10.27 7 3.34\"></path>",
  _tmpl$1145 = "<path d=\"m20.66 17-1.73-1\"></path>",
  _tmpl$1146 = "<path d=\"m3.34 7 1.73 1\"></path>",
  _tmpl$1147 = "<path d=\"M14 12h8\"></path>",
  _tmpl$1148 = "<path d=\"m20.66 7-1.73 1\"></path>",
  _tmpl$1149 = "<path d=\"m3.34 17 1.73-1\"></path>",
  _tmpl$1150 = "<path d=\"m17 3.34-1 1.73\"></path>",
  _tmpl$1151 = "<path d=\"m11 13.73-4 6.93\"></path>",
  _tmpl$1152 = "<circle cx=\"8\" cy=\"8\" r=\"6\"></circle>",
  _tmpl$1153 = "<path d=\"M18.09 10.37A6 6 0 1 1 10.34 18\"></path>",
  _tmpl$1154 = "<path d=\"M7 6h1v4\"></path>",
  _tmpl$1155 = "<path d=\"m16.71 13.88.7.71-2.82 2.82\"></path>",
  _tmpl$1156 = "<path d=\"M12 3v18\"></path>",
  _tmpl$1157 = "<path d=\"M9 3v18\"></path>",
  _tmpl$1158 = "<path d=\"M15 3v18\"></path>",
  _tmpl$1159 = "<path d=\"M7.5 3v18\"></path>",
  _tmpl$1160 = "<path d=\"M16.5 3v18\"></path>",
  _tmpl$1161 = "<rect width=\"8\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$1162 = "<path d=\"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2\"></path>",
  _tmpl$1163 = "<path d=\"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2\"></path>",
  _tmpl$1164 = "<path d=\"M10 18H5c-1.7 0-3-1.3-3-3v-1\"></path>",
  _tmpl$1165 = "<polyline points=\"7 21 10 18 7 15\"></polyline>",
  _tmpl$1166 = "<rect width=\"8\" height=\"8\" x=\"14\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$1167 = "<path d=\"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\"></path>",
  _tmpl$1168 = "<polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>",
  _tmpl$1169 = "<path d=\"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z\"></path>",
  _tmpl$1170 = "<path d=\"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z\"></path>",
  _tmpl$1171 = "<path d=\"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z\"></path>",
  _tmpl$1172 = "<path d=\"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z\"></path>",
  _tmpl$1173 = "<rect width=\"14\" height=\"8\" x=\"5\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$1174 = "<rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$1175 = "<path d=\"M6 18h2\"></path>",
  _tmpl$1176 = "<path d=\"M12 18h6\"></path>",
  _tmpl$1177 = "<path d=\"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z\"></path>",
  _tmpl$1178 = "<path d=\"M20 16a8 8 0 1 0-16 0\"></path>",
  _tmpl$1179 = "<path d=\"M12 4v4\"></path>",
  _tmpl$1180 = "<path d=\"M10 4h4\"></path>",
  _tmpl$1181 = "<path d=\"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98\"></path>",
  _tmpl$1182 = "<ellipse cx=\"12\" cy=\"19\" rx=\"9\" ry=\"3\"></ellipse>",
  _tmpl$1183 = "<rect x=\"2\" y=\"6\" width=\"20\" height=\"8\" rx=\"1\"></rect>",
  _tmpl$1184 = "<path d=\"M17 14v7\"></path>",
  _tmpl$1185 = "<path d=\"M7 14v7\"></path>",
  _tmpl$1186 = "<path d=\"M17 3v3\"></path>",
  _tmpl$1187 = "<path d=\"M7 3v3\"></path>",
  _tmpl$1188 = "<path d=\"M10 14 2.3 6.3\"></path>",
  _tmpl$1189 = "<path d=\"m14 6 7.7 7.7\"></path>",
  _tmpl$1190 = "<path d=\"m8 6 8 8\"></path>",
  _tmpl$1191 = "<path d=\"M16 18a4 4 0 0 0-8 0\"></path>",
  _tmpl$1192 = "<circle cx=\"12\" cy=\"11\" r=\"3\"></circle>",
  _tmpl$1193 = "<line x1=\"8\" x2=\"8\" y1=\"2\" y2=\"4\"></line>",
  _tmpl$1194 = "<line x1=\"16\" x2=\"16\" y1=\"2\" y2=\"4\"></line>",
  _tmpl$1195 = "<path d=\"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2\"></path>",
  _tmpl$1196 = "<circle cx=\"12\" cy=\"10\" r=\"2\"></circle>",
  _tmpl$1197 = "<path d=\"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z\"></path>",
  _tmpl$1198 = "<path d=\"M10 21.9V14L2.1 9.1\"></path>",
  _tmpl$1199 = "<path d=\"m10 14 11.9-6.9\"></path>",
  _tmpl$1200 = "<path d=\"M14 19.8v-8.1\"></path>",
  _tmpl$1201 = "<path d=\"M18 17.5V9.4\"></path>",
  _tmpl$1202 = "<path d=\"M12 18a6 6 0 0 0 0-12v12z\"></path>",
  _tmpl$1203 = "<path d=\"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5\"></path>",
  _tmpl$1204 = "<path d=\"M8.5 8.5v.01\"></path>",
  _tmpl$1205 = "<path d=\"M16 15.5v.01\"></path>",
  _tmpl$1206 = "<path d=\"M12 12v.01\"></path>",
  _tmpl$1207 = "<path d=\"M11 17v.01\"></path>",
  _tmpl$1208 = "<path d=\"M7 14v.01\"></path>",
  _tmpl$1209 = "<path d=\"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\"></path>",
  _tmpl$1210 = "<path d=\"m4 8 16-4\"></path>",
  _tmpl$1211 = "<path d=\"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8\"></path>",
  _tmpl$1212 = "<path d=\"m12 15 2 2 4-4\"></path>",
  _tmpl$1213 = "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$1214 = "<path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path>",
  _tmpl$1215 = "<line x1=\"12\" x2=\"18\" y1=\"15\" y2=\"15\"></line>",
  _tmpl$1216 = "<line x1=\"15\" x2=\"15\" y1=\"12\" y2=\"18\"></line>",
  _tmpl$1217 = "<line x1=\"12\" x2=\"18\" y1=\"18\" y2=\"12\"></line>",
  _tmpl$1218 = "<line x1=\"12\" x2=\"18\" y1=\"12\" y2=\"18\"></line>",
  _tmpl$1219 = "<path d=\"M9.17 14.83a4 4 0 1 0 0-5.66\"></path>",
  _tmpl$1220 = "<path d=\"M14.83 14.83a4 4 0 1 1 0-5.66\"></path>",
  _tmpl$1221 = "<polyline points=\"9 10 4 15 9 20\"></polyline>",
  _tmpl$1222 = "<path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>",
  _tmpl$1223 = "<polyline points=\"15 10 20 15 15 20\"></polyline>",
  _tmpl$1224 = "<path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>",
  _tmpl$1225 = "<polyline points=\"14 15 9 20 4 15\"></polyline>",
  _tmpl$1226 = "<path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>",
  _tmpl$1227 = "<polyline points=\"14 9 9 4 4 9\"></polyline>",
  _tmpl$1228 = "<path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>",
  _tmpl$1229 = "<polyline points=\"10 15 15 20 20 15\"></polyline>",
  _tmpl$1230 = "<path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>",
  _tmpl$1231 = "<polyline points=\"10 9 15 4 20 9\"></polyline>",
  _tmpl$1232 = "<path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>",
  _tmpl$1233 = "<polyline points=\"9 14 4 9 9 4\"></polyline>",
  _tmpl$1234 = "<path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>",
  _tmpl$1235 = "<polyline points=\"15 14 20 9 15 4\"></polyline>",
  _tmpl$1236 = "<path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>",
  _tmpl$1237 = "<rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$1238 = "<rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\"></rect>",
  _tmpl$1239 = "<path d=\"M15 2v2\"></path>",
  _tmpl$1240 = "<path d=\"M15 20v2\"></path>",
  _tmpl$1241 = "<path d=\"M2 15h2\"></path>",
  _tmpl$1242 = "<path d=\"M2 9h2\"></path>",
  _tmpl$1243 = "<path d=\"M20 15h2\"></path>",
  _tmpl$1244 = "<path d=\"M20 9h2\"></path>",
  _tmpl$1245 = "<path d=\"M9 2v2\"></path>",
  _tmpl$1246 = "<path d=\"M9 20v2\"></path>",
  _tmpl$1247 = "<path d=\"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1\"></path>",
  _tmpl$1248 = "<path d=\"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1\"></path>",
  _tmpl$1249 = "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"></rect>",
  _tmpl$1250 = "<line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"></line>",
  _tmpl$1251 = "<path d=\"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z\"></path>",
  _tmpl$1252 = "<path d=\"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83\"></path>",
  _tmpl$1253 = "<path d=\"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4\"></path>",
  _tmpl$1254 = "<path d=\"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2\"></path>",
  _tmpl$1255 = "<path d=\"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5\"></path>",
  _tmpl$1256 = "<path d=\"M6 2v14a2 2 0 0 0 2 2h14\"></path>",
  _tmpl$1257 = "<path d=\"M18 22V8a2 2 0 0 0-2-2H2\"></path>",
  _tmpl$1258 = "<path d=\"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z\"></path>",
  _tmpl$1259 = "<line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1260 = "<line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1261 = "<line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\"></line>",
  _tmpl$1262 = "<line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\"></line>",
  _tmpl$1263 = "<path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\"></path>",
  _tmpl$1264 = "<path d=\"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z\"></path>",
  _tmpl$1265 = "<path d=\"M10 22v-8L2.25 9.15\"></path>",
  _tmpl$1266 = "<path d=\"m10 14 11.77-6.87\"></path>",
  _tmpl$1267 = "<path d=\"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8\"></path>",
  _tmpl$1268 = "<path d=\"M5 8h14\"></path>",
  _tmpl$1269 = "<path d=\"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0\"></path>",
  _tmpl$1270 = "<path d=\"m12 8 1-6h2\"></path>",
  _tmpl$1271 = "<circle cx=\"12\" cy=\"12\" r=\"8\"></circle>",
  _tmpl$1272 = "<line x1=\"3\" x2=\"6\" y1=\"3\" y2=\"6\"></line>",
  _tmpl$1273 = "<line x1=\"21\" x2=\"18\" y1=\"3\" y2=\"6\"></line>",
  _tmpl$1274 = "<line x1=\"3\" x2=\"6\" y1=\"21\" y2=\"18\"></line>",
  _tmpl$1275 = "<line x1=\"21\" x2=\"18\" y1=\"21\" y2=\"18\"></line>",
  _tmpl$1276 = "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse>",
  _tmpl$1277 = "<path d=\"M3 5v14a9 3 0 0 0 18 0V5\"></path>",
  _tmpl$1278 = "<path d=\"M3 12a9 3 0 0 0 5 2.69\"></path>",
  _tmpl$1279 = "<path d=\"M21 9.3V5\"></path>",
  _tmpl$1280 = "<path d=\"M3 5v14a9 3 0 0 0 6.47 2.88\"></path>",
  _tmpl$1281 = "<path d=\"M12 12v4h4\"></path>",
  _tmpl$1282 = "<path d=\"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16\"></path>",
  _tmpl$1283 = "<path d=\"M3 5V19A9 3 0 0 0 15 21.84\"></path>",
  _tmpl$1284 = "<path d=\"M21 5V8\"></path>",
  _tmpl$1285 = "<path d=\"M21 12L18 17H22L19 22\"></path>",
  _tmpl$1286 = "<path d=\"M3 12A9 3 0 0 0 14.59 14.87\"></path>",
  _tmpl$1287 = "<path d=\"M3 5V19A9 3 0 0 0 21 19V5\"></path>",
  _tmpl$1288 = "<path d=\"M3 12A9 3 0 0 0 21 12\"></path>",
  _tmpl$1289 = "<path d=\"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z\"></path>",
  _tmpl$1290 = "<line x1=\"18\" x2=\"12\" y1=\"9\" y2=\"15\"></line>",
  _tmpl$1291 = "<line x1=\"12\" x2=\"18\" y1=\"9\" y2=\"15\"></line>",
  _tmpl$1292 = "<circle cx=\"12\" cy=\"4\" r=\"2\"></circle>",
  _tmpl$1293 = "<path d=\"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8\"></path>",
  _tmpl$1294 = "<path d=\"M3.2 14.8a9 9 0 0 0 17.6 0\"></path>",
  _tmpl$1295 = "<circle cx=\"19\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$1296 = "<circle cx=\"5\" cy=\"5\" r=\"2\"></circle>",
  _tmpl$1297 = "<path d=\"M6.48 3.66a10 10 0 0 1 13.86 13.86\"></path>",
  _tmpl$1298 = "<path d=\"m6.41 6.41 11.18 11.18\"></path>",
  _tmpl$1299 = "<path d=\"M3.66 6.48a10 10 0 0 0 13.86 13.86\"></path>",
  _tmpl$1300 = "<path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z\"></path>",
  _tmpl$1301 = "<path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z\"></path>",
  _tmpl$1302 = "<path d=\"M9.2 9.2h.01\"></path>",
  _tmpl$1303 = "<path d=\"m14.5 9.5-5 5\"></path>",
  _tmpl$1304 = "<path d=\"M14.7 14.8h.01\"></path>",
  _tmpl$1305 = "<path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z\"></path>",
  _tmpl$1306 = "<path d=\"M15 9h.01\"></path>",
  _tmpl$1307 = "<path d=\"M9 15h.01\"></path>",
  _tmpl$1308 = "<path d=\"M16 8h.01\"></path>",
  _tmpl$1309 = "<path d=\"M8 8h.01\"></path>",
  _tmpl$1310 = "<path d=\"M16 16h.01\"></path>",
  _tmpl$1311 = "<path d=\"M16 12h.01\"></path>",
  _tmpl$1312 = "<path d=\"M8 12h.01\"></path>",
  _tmpl$1313 = "<rect width=\"12\" height=\"12\" x=\"2\" y=\"10\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$1314 = "<path d=\"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6\"></path>",
  _tmpl$1315 = "<path d=\"M6 18h.01\"></path>",
  _tmpl$1316 = "<path d=\"M10 14h.01\"></path>",
  _tmpl$1317 = "<path d=\"M15 6h.01\"></path>",
  _tmpl$1318 = "<path d=\"M18 9h.01\"></path>",
  _tmpl$1319 = "<path d=\"M5 10h14\"></path>",
  _tmpl$1320 = "<path d=\"M6 12c0-1.7.7-3.2 1.8-4.2\"></path>",
  _tmpl$1321 = "<path d=\"M18 12c0 1.7-.7 3.2-1.8 4.2\"></path>",
  _tmpl$1322 = "<circle cx=\"12\" cy=\"12\" r=\"5\"></circle>",
  _tmpl$1323 = "<circle cx=\"12\" cy=\"6\" r=\"1\"></circle>",
  _tmpl$1324 = "<line x1=\"5\" x2=\"19\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1325 = "<circle cx=\"12\" cy=\"18\" r=\"1\"></circle>",
  _tmpl$1326 = "<path d=\"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5\"></path>",
  _tmpl$1327 = "<path d=\"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5\"></path>",
  _tmpl$1328 = "<path d=\"m17 6-2.5-2.5\"></path>",
  _tmpl$1329 = "<path d=\"m14 8-1.5-1.5\"></path>",
  _tmpl$1330 = "<path d=\"m7 18 2.5 2.5\"></path>",
  _tmpl$1331 = "<path d=\"m3.5 14.5.5.5\"></path>",
  _tmpl$1332 = "<path d=\"m20 9 .5.5\"></path>",
  _tmpl$1333 = "<path d=\"m6.5 12.5 1 1\"></path>",
  _tmpl$1334 = "<path d=\"m16.5 10.5 1 1\"></path>",
  _tmpl$1335 = "<path d=\"m10 16 1.5 1.5\"></path>",
  _tmpl$1336 = "<path d=\"M2 15c6.667-6 13.333 0 20-6\"></path>",
  _tmpl$1337 = "<path d=\"M9 22c1.798-1.998 2.518-3.995 2.807-5.993\"></path>",
  _tmpl$1338 = "<path d=\"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993\"></path>",
  _tmpl$1339 = "<path d=\"m14 8-1-1\"></path>",
  _tmpl$1340 = "<path d=\"M6 16h12\"></path>",
  _tmpl$1341 = "<path d=\"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5\"></path>",
  _tmpl$1342 = "<path d=\"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5\"></path>",
  _tmpl$1343 = "<path d=\"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306\"></path>",
  _tmpl$1344 = "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\"></line>",
  _tmpl$1345 = "<path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>",
  _tmpl$1346 = "<path d=\"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3\"></path>",
  _tmpl$1347 = "<path d=\"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14\"></path>",
  _tmpl$1348 = "<path d=\"M14 12v.01\"></path>",
  _tmpl$1349 = "<path d=\"M13 4h3a2 2 0 0 1 2 2v14\"></path>",
  _tmpl$1350 = "<path d=\"M2 20h3\"></path>",
  _tmpl$1351 = "<path d=\"M13 20h9\"></path>",
  _tmpl$1352 = "<path d=\"M10 12v.01\"></path>",
  _tmpl$1353 = "<path d=\"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z\"></path>",
  _tmpl$1354 = "<circle cx=\"12.1\" cy=\"12.1\" r=\"1\"></circle>",
  _tmpl$1355 = "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>",
  _tmpl$1356 = "<polyline points=\"7 10 12 15 17 10\"></polyline>",
  _tmpl$1357 = "<line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"></line>",
  _tmpl$1358 = "<circle cx=\"12\" cy=\"5\" r=\"2\"></circle>",
  _tmpl$1359 = "<path d=\"m3 21 8.02-14.26\"></path>",
  _tmpl$1360 = "<path d=\"m12.99 6.74 1.93 3.44\"></path>",
  _tmpl$1361 = "<path d=\"M19 12c-3.87 4-10.13 4-14 0\"></path>",
  _tmpl$1362 = "<path d=\"m21 21-2.16-3.84\"></path>",
  _tmpl$1363 = "<path d=\"M10 11h.01\"></path>",
  _tmpl$1364 = "<path d=\"M14 6h.01\"></path>",
  _tmpl$1365 = "<path d=\"M18 6h.01\"></path>",
  _tmpl$1366 = "<path d=\"M6.5 13.1h.01\"></path>",
  _tmpl$1367 = "<path d=\"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3\"></path>",
  _tmpl$1368 = "<path d=\"M17.4 9.9c-.8.8-2 .8-2.8 0\"></path>",
  _tmpl$1369 = "<path d=\"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7\"></path>",
  _tmpl$1370 = "<path d=\"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4\"></path>",
  _tmpl$1371 = "<path d=\"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94\"></path>",
  _tmpl$1372 = "<path d=\"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32\"></path>",
  _tmpl$1373 = "<path d=\"M8.56 2.75c4.37 6 6 9.42 8 17.72\"></path>",
  _tmpl$1374 = "<path d=\"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z\"></path>",
  _tmpl$1375 = "<path d=\"M18 6h4\"></path>",
  _tmpl$1376 = "<path d=\"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3\"></path>",
  _tmpl$1377 = "<path d=\"m5 10-2 8\"></path>",
  _tmpl$1378 = "<path d=\"M12 10v3c0 .6-.4 1-1 1H8\"></path>",
  _tmpl$1379 = "<path d=\"m7 18 2-8\"></path>",
  _tmpl$1380 = "<path d=\"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z\"></path>",
  _tmpl$1381 = "<path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"></path>",
  _tmpl$1382 = "<path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\"></path>",
  _tmpl$1383 = "<path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"></path>",
  _tmpl$1384 = "<path d=\"m2 2 8 8\"></path>",
  _tmpl$1385 = "<path d=\"m22 2-8 8\"></path>",
  _tmpl$1386 = "<ellipse cx=\"12\" cy=\"9\" rx=\"10\" ry=\"5\"></ellipse>",
  _tmpl$1387 = "<path d=\"M7 13.4v7.9\"></path>",
  _tmpl$1388 = "<path d=\"M12 14v8\"></path>",
  _tmpl$1389 = "<path d=\"M17 13.4v7.9\"></path>",
  _tmpl$1390 = "<path d=\"M2 9v8a10 5 0 0 0 20 0V9\"></path>",
  _tmpl$1391 = "<path d=\"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23\"></path>",
  _tmpl$1392 = "<path d=\"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59\"></path>",
  _tmpl$1393 = "<path d=\"M14.4 14.4 9.6 9.6\"></path>",
  _tmpl$1394 = "<path d=\"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z\"></path>",
  _tmpl$1395 = "<path d=\"m21.5 21.5-1.4-1.4\"></path>",
  _tmpl$1396 = "<path d=\"M3.9 3.9 2.5 2.5\"></path>",
  _tmpl$1397 = "<path d=\"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z\"></path>",
  _tmpl$1398 = "<path d=\"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46\"></path>",
  _tmpl$1399 = "<path d=\"M6 8.5c0-.75.13-1.47.36-2.14\"></path>",
  _tmpl$1400 = "<path d=\"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76\"></path>",
  _tmpl$1401 = "<path d=\"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18\"></path>",
  _tmpl$1402 = "<path d=\"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0\"></path>",
  _tmpl$1403 = "<path d=\"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4\"></path>",
  _tmpl$1404 = "<path d=\"M7 3.34V5a3 3 0 0 0 3 3\"></path>",
  _tmpl$1405 = "<path d=\"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"></path>",
  _tmpl$1406 = "<path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"></path>",
  _tmpl$1407 = "<path d=\"M12 2a10 10 0 1 0 9.54 13\"></path>",
  _tmpl$1408 = "<path d=\"M20 6V4a2 2 0 1 0-4 0v2\"></path>",
  _tmpl$1409 = "<rect width=\"8\" height=\"5\" x=\"14\" y=\"6\" rx=\"1\"></rect>",
  _tmpl$1410 = "<path d=\"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17\"></path>",
  _tmpl$1411 = "<path d=\"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"></path>",
  _tmpl$1412 = "<path d=\"M12 2a7 7 0 1 0 10 10\"></path>",
  _tmpl$1413 = "<circle cx=\"11.5\" cy=\"12.5\" r=\"3.5\"></circle>",
  _tmpl$1414 = "<path d=\"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z\"></path>",
  _tmpl$1415 = "<path d=\"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625\"></path>",
  _tmpl$1416 = "<path d=\"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297\"></path>",
  _tmpl$1417 = "<path d=\"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z\"></path>",
  _tmpl$1418 = "<circle cx=\"12\" cy=\"5\" r=\"1\"></circle>",
  _tmpl$1419 = "<circle cx=\"12\" cy=\"19\" r=\"1\"></circle>",
  _tmpl$1420 = "<circle cx=\"19\" cy=\"12\" r=\"1\"></circle>",
  _tmpl$1421 = "<circle cx=\"5\" cy=\"12\" r=\"1\"></circle>",
  _tmpl$1422 = "<line x1=\"5\" x2=\"19\" y1=\"9\" y2=\"9\"></line>",
  _tmpl$1423 = "<line x1=\"5\" x2=\"19\" y1=\"15\" y2=\"15\"></line>",
  _tmpl$1424 = "<line x1=\"19\" x2=\"5\" y1=\"5\" y2=\"19\"></line>",
  _tmpl$1425 = "<path d=\"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21\"></path>",
  _tmpl$1426 = "<path d=\"M22 21H7\"></path>",
  _tmpl$1427 = "<path d=\"m5 11 9 9\"></path>",
  _tmpl$1428 = "<path d=\"M4 10h12\"></path>",
  _tmpl$1429 = "<path d=\"M4 14h9\"></path>",
  _tmpl$1430 = "<path d=\"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2\"></path>",
  _tmpl$1431 = "<path d=\"m21 21-6-6m6 6v-4.8m0 4.8h-4.8\"></path>",
  _tmpl$1432 = "<path d=\"M3 16.2V21m0 0h4.8M3 21l6-6\"></path>",
  _tmpl$1433 = "<path d=\"M21 7.8V3m0 0h-4.8M21 3l-6 6\"></path>",
  _tmpl$1434 = "<path d=\"M3 7.8V3m0 0h4.8M3 3l6 6\"></path>",
  _tmpl$1435 = "<path d=\"M15 3h6v6\"></path>",
  _tmpl$1436 = "<path d=\"M10 14 21 3\"></path>",
  _tmpl$1437 = "<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>",
  _tmpl$1438 = "<path d=\"M9.88 9.88a3 3 0 1 0 4.24 4.24\"></path>",
  _tmpl$1439 = "<path d=\"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68\"></path>",
  _tmpl$1440 = "<path d=\"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61\"></path>",
  _tmpl$1441 = "<path d=\"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z\"></path>",
  _tmpl$1442 = "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>",
  _tmpl$1443 = "<path d=\"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"></path>",
  _tmpl$1444 = "<path d=\"M17 18h1\"></path>",
  _tmpl$1445 = "<path d=\"M12 18h1\"></path>",
  _tmpl$1446 = "<path d=\"M7 18h1\"></path>",
  _tmpl$1447 = "<path d=\"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z\"></path>",
  _tmpl$1448 = "<polygon points=\"13 19 22 12 13 5 13 19\"></polygon>",
  _tmpl$1449 = "<polygon points=\"2 19 11 12 2 5 2 19\"></polygon>",
  _tmpl$1450 = "<path d=\"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z\"></path>",
  _tmpl$1451 = "<path d=\"M16 8 2 22\"></path>",
  _tmpl$1452 = "<path d=\"M17.5 15H9\"></path>",
  _tmpl$1453 = "<path d=\"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"></path>",
  _tmpl$1454 = "<path d=\"M6 8h4\"></path>",
  _tmpl$1455 = "<path d=\"M6 18h4\"></path>",
  _tmpl$1456 = "<path d=\"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"></path>",
  _tmpl$1457 = "<path d=\"M14 8h4\"></path>",
  _tmpl$1458 = "<path d=\"M14 18h4\"></path>",
  _tmpl$1459 = "<path d=\"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"></path>",
  _tmpl$1460 = "<path d=\"M12 2v4\"></path>",
  _tmpl$1461 = "<path d=\"m6.8 15-3.5 2\"></path>",
  _tmpl$1462 = "<path d=\"m20.7 7-3.5 2\"></path>",
  _tmpl$1463 = "<path d=\"M6.8 9 3.3 7\"></path>",
  _tmpl$1464 = "<path d=\"m20.7 17-3.5-2\"></path>",
  _tmpl$1465 = "<path d=\"m9 22 3-8 3 8\"></path>",
  _tmpl$1466 = "<path d=\"M8 22h8\"></path>",
  _tmpl$1467 = "<path d=\"M18 18.7a9 9 0 1 0-12 0\"></path>",
  _tmpl$1468 = "<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path>",
  _tmpl$1469 = "<path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path>",
  _tmpl$1470 = "<path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path>",
  _tmpl$1471 = "<path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path>",
  _tmpl$1472 = "<path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>",
  _tmpl$1473 = "<path d=\"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18\"></path>",
  _tmpl$1474 = "<path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$1475 = "<circle cx=\"10\" cy=\"20\" r=\"2\"></circle>",
  _tmpl$1476 = "<path d=\"M10 7V6\"></path>",
  _tmpl$1477 = "<path d=\"M10 12v-1\"></path>",
  _tmpl$1478 = "<path d=\"M10 18v-2\"></path>",
  _tmpl$1479 = "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2\"></path>",
  _tmpl$1480 = "<circle cx=\"3\" cy=\"17\" r=\"1\"></circle>",
  _tmpl$1481 = "<path d=\"M2 17v-3a4 4 0 0 1 8 0v3\"></path>",
  _tmpl$1482 = "<circle cx=\"9\" cy=\"17\" r=\"1\"></circle>",
  _tmpl$1483 = "<path d=\"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$1484 = "<path d=\"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0\"></path>",
  _tmpl$1485 = "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"></path>",
  _tmpl$1486 = "<path d=\"m8 18 4-4\"></path>",
  _tmpl$1487 = "<path d=\"M8 10v8h8\"></path>",
  _tmpl$1488 = "<path d=\"m14 12.5 1 5.5-3-1-3 1 1-5.5\"></path>",
  _tmpl$1489 = "<path d=\"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$1490 = "<path d=\"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\"></path>",
  _tmpl$1491 = "<path d=\"M7 16.5 8 22l-3-1-3 1 1-5.5\"></path>",
  _tmpl$1492 = "<path d=\"M8 18v-1\"></path>",
  _tmpl$1493 = "<path d=\"M12 18v-6\"></path>",
  _tmpl$1494 = "<path d=\"M16 18v-3\"></path>",
  _tmpl$1495 = "<path d=\"M8 18v-2\"></path>",
  _tmpl$1496 = "<path d=\"M12 18v-4\"></path>",
  _tmpl$1497 = "<path d=\"M16 18v-6\"></path>",
  _tmpl$1498 = "<path d=\"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"></path>",
  _tmpl$1499 = "<path d=\"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z\"></path>",
  _tmpl$1500 = "<path d=\"M7 17v5\"></path>",
  _tmpl$1501 = "<path d=\"M11.7 14.2 7 17l-4.7-2.8\"></path>",
  _tmpl$1502 = "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"></path>",
  _tmpl$1503 = "<path d=\"m3 15 2 2 4-4\"></path>",
  _tmpl$1504 = "<path d=\"m9 15 2 2 4-4\"></path>",
  _tmpl$1505 = "<path d=\"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$1506 = "<circle cx=\"8\" cy=\"16\" r=\"6\"></circle>",
  _tmpl$1507 = "<path d=\"M9.5 17.5 8 16.25V14\"></path>",
  _tmpl$1508 = "<path d=\"m5 12-3 3 3 3\"></path>",
  _tmpl$1509 = "<path d=\"m9 18 3-3-3-3\"></path>",
  _tmpl$1510 = "<path d=\"M10 12.5 8 15l2 2.5\"></path>",
  _tmpl$1511 = "<path d=\"m14 12.5 2 2.5-2 2.5\"></path>",
  _tmpl$1512 = "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z\"></path>",
  _tmpl$1513 = "<circle cx=\"6\" cy=\"14\" r=\"3\"></circle>",
  _tmpl$1514 = "<path d=\"M6 10v1\"></path>",
  _tmpl$1515 = "<path d=\"M6 17v1\"></path>",
  _tmpl$1516 = "<path d=\"M10 14H9\"></path>",
  _tmpl$1517 = "<path d=\"M3 14H2\"></path>",
  _tmpl$1518 = "<path d=\"m9 11-.88.88\"></path>",
  _tmpl$1519 = "<path d=\"M3.88 16.12 3 17\"></path>",
  _tmpl$1520 = "<path d=\"m9 17-.88-.88\"></path>",
  _tmpl$1521 = "<path d=\"M3.88 11.88 3 11\"></path>",
  _tmpl$1522 = "<rect width=\"4\" height=\"6\" x=\"2\" y=\"12\" rx=\"2\"></rect>",
  _tmpl$1523 = "<path d=\"M10 12h2v6\"></path>",
  _tmpl$1524 = "<path d=\"m9 15 3 3 3-3\"></path>",
  _tmpl$1525 = "<path d=\"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z\"></path>",
  _tmpl$1526 = "<circle cx=\"10\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$1527 = "<path d=\"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22\"></path>",
  _tmpl$1528 = "<path d=\"M2 15h10\"></path>",
  _tmpl$1529 = "<path d=\"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1\"></path>",
  _tmpl$1530 = "<path d=\"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"></path>",
  _tmpl$1531 = "<path d=\"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1\"></path>",
  _tmpl$1532 = "<path d=\"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"></path>",
  _tmpl$1533 = "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6\"></path>",
  _tmpl$1534 = "<circle cx=\"4\" cy=\"16\" r=\"2\"></circle>",
  _tmpl$1535 = "<path d=\"m10 10-4.5 4.5\"></path>",
  _tmpl$1536 = "<path d=\"m9 11 1 1\"></path>",
  _tmpl$1537 = "<circle cx=\"10\" cy=\"16\" r=\"2\"></circle>",
  _tmpl$1538 = "<path d=\"m16 10-4.5 4.5\"></path>",
  _tmpl$1539 = "<path d=\"m15 11 1 1\"></path>",
  _tmpl$1540 = "<path d=\"m16 13-3.5 3.5-2-2L8 17\"></path>",
  _tmpl$1541 = "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1\"></path>",
  _tmpl$1542 = "<rect width=\"8\" height=\"5\" x=\"2\" y=\"13\" rx=\"1\"></rect>",
  _tmpl$1543 = "<path d=\"M8 13v-2a2 2 0 1 0-4 0v2\"></path>",
  _tmpl$1544 = "<rect width=\"8\" height=\"6\" x=\"8\" y=\"12\" rx=\"1\"></rect>",
  _tmpl$1545 = "<path d=\"M10 12v-2a2 2 0 1 1 4 0v2\"></path>",
  _tmpl$1546 = "<path d=\"M3 15h6\"></path>",
  _tmpl$1547 = "<path d=\"M9 15h6\"></path>",
  _tmpl$1548 = "<circle cx=\"14\" cy=\"16\" r=\"2\"></circle>",
  _tmpl$1549 = "<circle cx=\"6\" cy=\"18\" r=\"2\"></circle>",
  _tmpl$1550 = "<path d=\"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5\"></path>",
  _tmpl$1551 = "<path d=\"M8 18v-7.7L16 9v7\"></path>",
  _tmpl$1552 = "<path d=\"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2\"></path>",
  _tmpl$1553 = "<path d=\"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6\"></path>",
  _tmpl$1554 = "<path d=\"m5 11-3 3\"></path>",
  _tmpl$1555 = "<path d=\"m5 17-3-3h10\"></path>",
  _tmpl$1556 = "<path d=\"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2\"></path>",
  _tmpl$1557 = "<path d=\"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z\"></path>",
  _tmpl$1558 = "<path d=\"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10\"></path>",
  _tmpl$1559 = "<path d=\"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z\"></path>",
  _tmpl$1560 = "<path d=\"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5\"></path>",
  _tmpl$1561 = "<path d=\"M4.017 11.512a6 6 0 1 0 8.466 8.475\"></path>",
  _tmpl$1562 = "<path d=\"M8 16v-6a6 6 0 0 1 6 6z\"></path>",
  _tmpl$1563 = "<path d=\"M6 12v6\"></path>",
  _tmpl$1564 = "<path d=\"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3\"></path>",
  _tmpl$1565 = "<path d=\"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$1566 = "<path d=\"M16 14a2 2 0 0 0-2 2\"></path>",
  _tmpl$1567 = "<path d=\"M20 14a2 2 0 0 1 2 2\"></path>",
  _tmpl$1568 = "<path d=\"M20 22a2 2 0 0 0 2-2\"></path>",
  _tmpl$1569 = "<path d=\"M16 22a2 2 0 0 1-2-2\"></path>",
  _tmpl$1570 = "<circle cx=\"11.5\" cy=\"14.5\" r=\"2.5\"></circle>",
  _tmpl$1571 = "<path d=\"M13.3 16.3 15 18\"></path>",
  _tmpl$1572 = "<path d=\"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$1573 = "<path d=\"m9 18-1.5-1.5\"></path>",
  _tmpl$1574 = "<circle cx=\"5\" cy=\"14\" r=\"3\"></circle>",
  _tmpl$1575 = "<path d=\"M10 11v2\"></path>",
  _tmpl$1576 = "<path d=\"M8 17h8\"></path>",
  _tmpl$1577 = "<path d=\"M14 16v2\"></path>",
  _tmpl$1578 = "<path d=\"M8 13h2\"></path>",
  _tmpl$1579 = "<path d=\"M14 13h2\"></path>",
  _tmpl$1580 = "<path d=\"M8 17h2\"></path>",
  _tmpl$1581 = "<path d=\"M14 17h2\"></path>",
  _tmpl$1582 = "<path d=\"M21 7h-3a2 2 0 0 1-2-2V2\"></path>",
  _tmpl$1583 = "<path d=\"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z\"></path>",
  _tmpl$1584 = "<path d=\"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15\"></path>",
  _tmpl$1585 = "<path d=\"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11\"></path>",
  _tmpl$1586 = "<path d=\"m10 18 3-3-3-3\"></path>",
  _tmpl$1587 = "<path d=\"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7\"></path>",
  _tmpl$1588 = "<path d=\"m8 16 2-2-2-2\"></path>",
  _tmpl$1589 = "<path d=\"M12 18h4\"></path>",
  _tmpl$1590 = "<path d=\"M10 9H8\"></path>",
  _tmpl$1591 = "<path d=\"M16 13H8\"></path>",
  _tmpl$1592 = "<path d=\"M16 17H8\"></path>",
  _tmpl$1593 = "<path d=\"M2 13v-1h6v1\"></path>",
  _tmpl$1594 = "<path d=\"M5 12v6\"></path>",
  _tmpl$1595 = "<path d=\"M4 18h2\"></path>",
  _tmpl$1596 = "<path d=\"M9 13v-1h6v1\"></path>",
  _tmpl$1597 = "<path d=\"M12 12v6\"></path>",
  _tmpl$1598 = "<path d=\"M11 18h2\"></path>",
  _tmpl$1599 = "<path d=\"m15 15-3-3-3 3\"></path>",
  _tmpl$1600 = "<rect width=\"8\" height=\"6\" x=\"2\" y=\"12\" rx=\"1\"></rect>",
  _tmpl$1601 = "<path d=\"m10 15.5 4 2.5v-6l-4 2.5\"></path>",
  _tmpl$1602 = "<path d=\"m10 11 5 3-5 3v-6Z\"></path>",
  _tmpl$1603 = "<path d=\"M11.5 13.5a2.5 2.5 0 0 1 0 3\"></path>",
  _tmpl$1604 = "<path d=\"M15 12a5 5 0 0 1 0 6\"></path>",
  _tmpl$1605 = "<path d=\"M11 11a5 5 0 0 1 0 6\"></path>",
  _tmpl$1606 = "<path d=\"M4.268 21A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$1607 = "<path d=\"m7 10-3 2H2v4h2l3 2z\"></path>",
  _tmpl$1608 = "<path d=\"M12 9v4\"></path>",
  _tmpl$1609 = "<path d=\"m8 12.5-5 5\"></path>",
  _tmpl$1610 = "<path d=\"m3 12.5 5 5\"></path>",
  _tmpl$1611 = "<path d=\"m14.5 12.5-5 5\"></path>",
  _tmpl$1612 = "<path d=\"m9.5 12.5 5 5\"></path>",
  _tmpl$1613 = "<path d=\"M20 7h-3a2 2 0 0 1-2-2V2\"></path>",
  _tmpl$1614 = "<path d=\"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z\"></path>",
  _tmpl$1615 = "<path d=\"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8\"></path>",
  _tmpl$1616 = "<path d=\"M7 3v18\"></path>",
  _tmpl$1617 = "<path d=\"M3 7.5h4\"></path>",
  _tmpl$1618 = "<path d=\"M3 12h18\"></path>",
  _tmpl$1619 = "<path d=\"M3 16.5h4\"></path>",
  _tmpl$1620 = "<path d=\"M17 3v18\"></path>",
  _tmpl$1621 = "<path d=\"M17 7.5h4\"></path>",
  _tmpl$1622 = "<path d=\"M17 16.5h4\"></path>",
  _tmpl$1623 = "<path d=\"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055\"></path>",
  _tmpl$1624 = "<path d=\"m22 3-5 5\"></path>",
  _tmpl$1625 = "<path d=\"m17 3 5 5\"></path>",
  _tmpl$1626 = "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>",
  _tmpl$1627 = "<path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"></path>",
  _tmpl$1628 = "<path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"></path>",
  _tmpl$1629 = "<path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"></path>",
  _tmpl$1630 = "<path d=\"M2 12a10 10 0 0 1 18-6\"></path>",
  _tmpl$1631 = "<path d=\"M2 16h.01\"></path>",
  _tmpl$1632 = "<path d=\"M21.8 16c.2-2 .131-5.354 0-6\"></path>",
  _tmpl$1633 = "<path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"></path>",
  _tmpl$1634 = "<path d=\"M8.65 22c.21-.66.45-1.32.57-2\"></path>",
  _tmpl$1635 = "<path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"></path>",
  _tmpl$1636 = "<path d=\"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5\"></path>",
  _tmpl$1637 = "<path d=\"M9 18h8\"></path>",
  _tmpl$1638 = "<path d=\"M18 3h-3\"></path>",
  _tmpl$1639 = "<path d=\"M11 3a6 6 0 0 0-6 6v11\"></path>",
  _tmpl$1640 = "<path d=\"M5 13h4\"></path>",
  _tmpl$1641 = "<path d=\"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z\"></path>",
  _tmpl$1642 = "<path d=\"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058\"></path>",
  _tmpl$1643 = "<path d=\"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618\"></path>",
  _tmpl$1644 = "<path d=\"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20\"></path>",
  _tmpl$1645 = "<path d=\"M2 16s9-15 20-4C11 23 2 8 2 8\"></path>",
  _tmpl$1646 = "<path d=\"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z\"></path>",
  _tmpl$1647 = "<path d=\"M18 12v.5\"></path>",
  _tmpl$1648 = "<path d=\"M16 17.93a9.77 9.77 0 0 1 0-11.86\"></path>",
  _tmpl$1649 = "<path d=\"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33\"></path>",
  _tmpl$1650 = "<path d=\"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4\"></path>",
  _tmpl$1651 = "<path d=\"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98\"></path>",
  _tmpl$1652 = "<path d=\"M8 2c3 0 5 2 8 2s4-1 4-1v11\"></path>",
  _tmpl$1653 = "<path d=\"M4 22V4\"></path>",
  _tmpl$1654 = "<path d=\"M4 15s1-1 4-1 5 2 8 2\"></path>",
  _tmpl$1655 = "<path d=\"M17 22V2L7 7l10 5\"></path>",
  _tmpl$1656 = "<path d=\"M7 22V2l10 5-10 5\"></path>",
  _tmpl$1657 = "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path>",
  _tmpl$1658 = "<line x1=\"4\" x2=\"4\" y1=\"22\" y2=\"15\"></line>",
  _tmpl$1659 = "<path d=\"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z\"></path>",
  _tmpl$1660 = "<path d=\"m5 22 14-4\"></path>",
  _tmpl$1661 = "<path d=\"m5 18 14 4\"></path>",
  _tmpl$1662 = "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"></path>",
  _tmpl$1663 = "<path d=\"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4\"></path>",
  _tmpl$1664 = "<path d=\"M7 2h11v4c0 2-2 2-2 4v1\"></path>",
  _tmpl$1665 = "<line x1=\"11\" x2=\"18\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$1666 = "<path d=\"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z\"></path>",
  _tmpl$1667 = "<line x1=\"6\" x2=\"18\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$1668 = "<line x1=\"12\" x2=\"12\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1669 = "<path d=\"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542\"></path>",
  _tmpl$1670 = "<path d=\"M10 2v2.343\"></path>",
  _tmpl$1671 = "<path d=\"M14 2v6.343\"></path>",
  _tmpl$1672 = "<path d=\"M8.5 2h7\"></path>",
  _tmpl$1673 = "<path d=\"M7 16h9\"></path>",
  _tmpl$1674 = "<path d=\"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2\"></path>",
  _tmpl$1675 = "<path d=\"M7 16h10\"></path>",
  _tmpl$1676 = "<path d=\"M10 2v7.31\"></path>",
  _tmpl$1677 = "<path d=\"M14 9.3V1.99\"></path>",
  _tmpl$1678 = "<path d=\"M14 9.3a6.5 6.5 0 1 1-4 0\"></path>",
  _tmpl$1679 = "<path d=\"M5.52 16h12.96\"></path>",
  _tmpl$1680 = "<path d=\"m3 7 5 5-5 5V7\"></path>",
  _tmpl$1681 = "<path d=\"m21 7-5 5 5 5V7\"></path>",
  _tmpl$1682 = "<path d=\"M12 20v2\"></path>",
  _tmpl$1683 = "<path d=\"M12 14v2\"></path>",
  _tmpl$1684 = "<path d=\"M12 8v2\"></path>",
  _tmpl$1685 = "<path d=\"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3\"></path>",
  _tmpl$1686 = "<path d=\"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3\"></path>",
  _tmpl$1687 = "<path d=\"m17 3-5 5-5-5h10\"></path>",
  _tmpl$1688 = "<path d=\"m17 21-5-5-5 5h10\"></path>",
  _tmpl$1689 = "<path d=\"M4 12H2\"></path>",
  _tmpl$1690 = "<path d=\"M10 12H8\"></path>",
  _tmpl$1691 = "<path d=\"M16 12h-2\"></path>",
  _tmpl$1692 = "<path d=\"M22 12h-2\"></path>",
  _tmpl$1693 = "<path d=\"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$1694 = "<path d=\"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3\"></path>",
  _tmpl$1695 = "<path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\"></path>",
  _tmpl$1696 = "<path d=\"M12 10v12\"></path>",
  _tmpl$1697 = "<path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\"></path>",
  _tmpl$1698 = "<path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\"></path>",
  _tmpl$1699 = "<path d=\"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5\"></path>",
  _tmpl$1700 = "<path d=\"M12 7.5V9\"></path>",
  _tmpl$1701 = "<path d=\"M7.5 12H9\"></path>",
  _tmpl$1702 = "<path d=\"M16.5 12H15\"></path>",
  _tmpl$1703 = "<path d=\"M12 16.5V15\"></path>",
  _tmpl$1704 = "<path d=\"m8 8 1.88 1.88\"></path>",
  _tmpl$1705 = "<path d=\"M14.12 9.88 16 8\"></path>",
  _tmpl$1706 = "<path d=\"m8 16 1.88-1.88\"></path>",
  _tmpl$1707 = "<path d=\"M14.12 14.12 16 16\"></path>",
  _tmpl$1708 = "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$1709 = "<path d=\"M17 3h2a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$1710 = "<path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$1711 = "<path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"></path>",
  _tmpl$1712 = "<path d=\"M2 12h6\"></path>",
  _tmpl$1713 = "<path d=\"M22 12h-6\"></path>",
  _tmpl$1714 = "<path d=\"m19 9-3 3 3 3\"></path>",
  _tmpl$1715 = "<path d=\"m5 15 3-3-3-3\"></path>",
  _tmpl$1716 = "<path d=\"M12 22v-6\"></path>",
  _tmpl$1717 = "<path d=\"M12 8V2\"></path>",
  _tmpl$1718 = "<path d=\"m15 19-3-3-3 3\"></path>",
  _tmpl$1719 = "<path d=\"m15 5-3 3-3-3\"></path>",
  _tmpl$1720 = "<circle cx=\"15\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$1721 = "<path d=\"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1\"></path>",
  _tmpl$1722 = "<path d=\"M15 11v-1\"></path>",
  _tmpl$1723 = "<path d=\"M15 17v-2\"></path>",
  _tmpl$1724 = "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"></path>",
  _tmpl$1725 = "<path d=\"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2\"></path>",
  _tmpl$1726 = "<path d=\"M16 14v2l1 1\"></path>",
  _tmpl$1727 = "<path d=\"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3\"></path>",
  _tmpl$1728 = "<path d=\"m21.7 19.4-.9-.3\"></path>",
  _tmpl$1729 = "<path d=\"m15.2 16.9-.9-.3\"></path>",
  _tmpl$1730 = "<path d=\"m16.6 21.7.3-.9\"></path>",
  _tmpl$1731 = "<path d=\"m19.1 15.2.3-.9\"></path>",
  _tmpl$1732 = "<path d=\"m19.6 21.7-.4-1\"></path>",
  _tmpl$1733 = "<path d=\"m16.8 15.3-.4-1\"></path>",
  _tmpl$1734 = "<path d=\"m14.3 19.6 1-.4\"></path>",
  _tmpl$1735 = "<path d=\"m20.7 16.8 1-.4\"></path>",
  _tmpl$1736 = "<path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z\"></path>",
  _tmpl$1737 = "<circle cx=\"12\" cy=\"13\" r=\"1\"></circle>",
  _tmpl$1738 = "<path d=\"m15 13-3 3-3-3\"></path>",
  _tmpl$1739 = "<path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\"></path>",
  _tmpl$1740 = "<circle cx=\"13\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$1741 = "<path d=\"M18 19c-2.8 0-5-2.2-5-5v8\"></path>",
  _tmpl$1742 = "<circle cx=\"20\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$1743 = "<circle cx=\"12\" cy=\"13\" r=\"2\"></circle>",
  _tmpl$1744 = "<path d=\"M14 13h3\"></path>",
  _tmpl$1745 = "<path d=\"M7 13h3\"></path>",
  _tmpl$1746 = "<path d=\"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5\"></path>",
  _tmpl$1747 = "<path d=\"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z\"></path>",
  _tmpl$1748 = "<path d=\"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1\"></path>",
  _tmpl$1749 = "<path d=\"M2 13h10\"></path>",
  _tmpl$1750 = "<path d=\"m9 16 3-3-3-3\"></path>",
  _tmpl$1751 = "<path d=\"M8 10v4\"></path>",
  _tmpl$1752 = "<path d=\"M12 10v2\"></path>",
  _tmpl$1753 = "<path d=\"M16 10v6\"></path>",
  _tmpl$1754 = "<circle cx=\"16\" cy=\"20\" r=\"2\"></circle>",
  _tmpl$1755 = "<path d=\"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$1756 = "<path d=\"m22 14-4.5 4.5\"></path>",
  _tmpl$1757 = "<path d=\"m21 15 1 1\"></path>",
  _tmpl$1758 = "<rect width=\"8\" height=\"5\" x=\"14\" y=\"17\" rx=\"1\"></rect>",
  _tmpl$1759 = "<path d=\"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5\"></path>",
  _tmpl$1760 = "<path d=\"M20 17v-2a2 2 0 1 0-4 0v2\"></path>",
  _tmpl$1761 = "<path d=\"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$1762 = "<circle cx=\"14\" cy=\"15\" r=\"1\"></circle>",
  _tmpl$1763 = "<path d=\"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$1764 = "<path d=\"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5\"></path>",
  _tmpl$1765 = "<path d=\"m5 10-3 3 3 3\"></path>",
  _tmpl$1766 = "<path d=\"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z\"></path>",
  _tmpl$1767 = "<path d=\"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5\"></path>",
  _tmpl$1768 = "<path d=\"M12 15v5\"></path>",
  _tmpl$1769 = "<circle cx=\"11.5\" cy=\"12.5\" r=\"2.5\"></circle>",
  _tmpl$1770 = "<path d=\"M13.3 14.3 15 16\"></path>",
  _tmpl$1771 = "<circle cx=\"17\" cy=\"17\" r=\"3\"></circle>",
  _tmpl$1772 = "<path d=\"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1\"></path>",
  _tmpl$1773 = "<path d=\"m21 21-1.5-1.5\"></path>",
  _tmpl$1774 = "<path d=\"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7\"></path>",
  _tmpl$1775 = "<path d=\"m8 16 3-3-3-3\"></path>",
  _tmpl$1776 = "<path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5\"></path>",
  _tmpl$1777 = "<path d=\"M12 10v4h4\"></path>",
  _tmpl$1778 = "<path d=\"m12 14 1.535-1.605a5 5 0 0 1 8 1.5\"></path>",
  _tmpl$1779 = "<path d=\"M22 22v-4h-4\"></path>",
  _tmpl$1780 = "<path d=\"m22 18-1.535 1.605a5 5 0 0 1-8-1.5\"></path>",
  _tmpl$1781 = "<path d=\"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z\"></path>",
  _tmpl$1782 = "<path d=\"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z\"></path>",
  _tmpl$1783 = "<path d=\"M3 5a2 2 0 0 0 2 2h3\"></path>",
  _tmpl$1784 = "<path d=\"M3 3v13a2 2 0 0 0 2 2h3\"></path>",
  _tmpl$1785 = "<path d=\"m9 13 3-3 3 3\"></path>",
  _tmpl$1786 = "<path d=\"m9.5 10.5 5 5\"></path>",
  _tmpl$1787 = "<path d=\"m14.5 10.5-5 5\"></path>",
  _tmpl$1788 = "<path d=\"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z\"></path>",
  _tmpl$1789 = "<path d=\"M2 8v11a2 2 0 0 0 2 2h14\"></path>",
  _tmpl$1790 = "<path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\"></path>",
  _tmpl$1791 = "<path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\"></path>",
  _tmpl$1792 = "<path d=\"M16 17h4\"></path>",
  _tmpl$1793 = "<path d=\"M4 13h4\"></path>",
  _tmpl$1794 = "<path d=\"M12 12H5a2 2 0 0 0-2 2v5\"></path>",
  _tmpl$1795 = "<circle cx=\"13\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$1796 = "<circle cx=\"5\" cy=\"19\" r=\"2\"></circle>",
  _tmpl$1797 = "<path d=\"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5\"></path>",
  _tmpl$1798 = "<polyline points=\"15 17 20 12 15 7\"></polyline>",
  _tmpl$1799 = "<path d=\"M4 18v-2a4 4 0 0 1 4-4h12\"></path>",
  _tmpl$1800 = "<line x1=\"22\" x2=\"2\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$1801 = "<line x1=\"22\" x2=\"2\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$1802 = "<line x1=\"6\" x2=\"6\" y1=\"2\" y2=\"22\"></line>",
  _tmpl$1803 = "<line x1=\"18\" x2=\"18\" y1=\"2\" y2=\"22\"></line>",
  _tmpl$1804 = "<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7\"></path>",
  _tmpl$1805 = "<line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"></line>",
  _tmpl$1806 = "<line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"></line>",
  _tmpl$1807 = "<line x1=\"3\" x2=\"15\" y1=\"22\" y2=\"22\"></line>",
  _tmpl$1808 = "<line x1=\"4\" x2=\"14\" y1=\"9\" y2=\"9\"></line>",
  _tmpl$1809 = "<path d=\"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18\"></path>",
  _tmpl$1810 = "<path d=\"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5\"></path>",
  _tmpl$1811 = "<rect width=\"10\" height=\"8\" x=\"7\" y=\"8\" rx=\"1\"></rect>",
  _tmpl$1812 = "<path d=\"M2 7v10\"></path>",
  _tmpl$1813 = "<path d=\"M6 5v14\"></path>",
  _tmpl$1814 = "<rect width=\"12\" height=\"18\" x=\"10\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$1815 = "<path d=\"M2 3v18\"></path>",
  _tmpl$1816 = "<rect width=\"12\" height=\"18\" x=\"6\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$1817 = "<path d=\"M22 3v18\"></path>",
  _tmpl$1818 = "<rect width=\"18\" height=\"14\" x=\"3\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$1819 = "<path d=\"M4 21h1\"></path>",
  _tmpl$1820 = "<path d=\"M19 21h1\"></path>",
  _tmpl$1821 = "<path d=\"M7 2h10\"></path>",
  _tmpl$1822 = "<path d=\"M5 6h14\"></path>",
  _tmpl$1823 = "<rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"></rect>",
  _tmpl$1824 = "<path d=\"M3 2h18\"></path>",
  _tmpl$1825 = "<rect width=\"18\" height=\"12\" x=\"3\" y=\"6\" rx=\"2\"></rect>",
  _tmpl$1826 = "<path d=\"M3 22h18\"></path>",
  _tmpl$1827 = "<line x1=\"6\" x2=\"10\" y1=\"11\" y2=\"11\"></line>",
  _tmpl$1828 = "<line x1=\"8\" x2=\"8\" y1=\"9\" y2=\"13\"></line>",
  _tmpl$1829 = "<line x1=\"15\" x2=\"15.01\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1830 = "<line x1=\"18\" x2=\"18.01\" y1=\"10\" y2=\"10\"></line>",
  _tmpl$1831 = "<path d=\"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z\"></path>",
  _tmpl$1832 = "<line x1=\"6\" x2=\"10\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1833 = "<line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\"></line>",
  _tmpl$1834 = "<line x1=\"15\" x2=\"15.01\" y1=\"13\" y2=\"13\"></line>",
  _tmpl$1835 = "<line x1=\"18\" x2=\"18.01\" y1=\"11\" y2=\"11\"></line>",
  _tmpl$1836 = "<path d=\"M8 6h10\"></path>",
  _tmpl$1837 = "<path d=\"M6 12h9\"></path>",
  _tmpl$1838 = "<path d=\"M11 18h7\"></path>",
  _tmpl$1839 = "<path d=\"m12 14 4-4\"></path>",
  _tmpl$1840 = "<path d=\"M3.34 19a10 10 0 1 1 17.32 0\"></path>",
  _tmpl$1841 = "<path d=\"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8\"></path>",
  _tmpl$1842 = "<path d=\"m16 16 6-6\"></path>",
  _tmpl$1843 = "<path d=\"m8 8 6-6\"></path>",
  _tmpl$1844 = "<path d=\"m9 7 8 8\"></path>",
  _tmpl$1845 = "<path d=\"m21 11-8-8\"></path>",
  _tmpl$1846 = "<path d=\"M6 3h12l4 6-10 13L2 9Z\"></path>",
  _tmpl$1847 = "<path d=\"M11 3 8 9l4 13 4-13-3-6\"></path>",
  _tmpl$1848 = "<path d=\"M2 9h20\"></path>",
  _tmpl$1849 = "<path d=\"M9 10h.01\"></path>",
  _tmpl$1850 = "<path d=\"M15 10h.01\"></path>",
  _tmpl$1851 = "<path d=\"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z\"></path>",
  _tmpl$1852 = "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"></rect>",
  _tmpl$1853 = "<path d=\"M12 8v13\"></path>",
  _tmpl$1854 = "<path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\"></path>",
  _tmpl$1855 = "<path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\"></path>",
  _tmpl$1856 = "<path d=\"M6 3v12\"></path>",
  _tmpl$1857 = "<path d=\"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path>",
  _tmpl$1858 = "<path d=\"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path>",
  _tmpl$1859 = "<path d=\"M15 6a9 9 0 0 0-9 9\"></path>",
  _tmpl$1860 = "<path d=\"M18 15v6\"></path>",
  _tmpl$1861 = "<path d=\"M21 18h-6\"></path>",
  _tmpl$1862 = "<line x1=\"6\" x2=\"6\" y1=\"3\" y2=\"15\"></line>",
  _tmpl$1863 = "<circle cx=\"18\" cy=\"6\" r=\"3\"></circle>",
  _tmpl$1864 = "<circle cx=\"6\" cy=\"18\" r=\"3\"></circle>",
  _tmpl$1865 = "<path d=\"M18 9a9 9 0 0 1-9 9\"></path>",
  _tmpl$1866 = "<line x1=\"3\" x2=\"9\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1867 = "<line x1=\"15\" x2=\"21\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$1868 = "<path d=\"M12 3v6\"></path>",
  _tmpl$1869 = "<path d=\"M12 15v6\"></path>",
  _tmpl$1870 = "<circle cx=\"5\" cy=\"6\" r=\"3\"></circle>",
  _tmpl$1871 = "<path d=\"M12 6h5a2 2 0 0 1 2 2v7\"></path>",
  _tmpl$1872 = "<path d=\"m15 9-3-3 3-3\"></path>",
  _tmpl$1873 = "<circle cx=\"19\" cy=\"18\" r=\"3\"></circle>",
  _tmpl$1874 = "<path d=\"M12 18H7a2 2 0 0 1-2-2V9\"></path>",
  _tmpl$1875 = "<path d=\"m9 15 3 3-3 3\"></path>",
  _tmpl$1876 = "<circle cx=\"6\" cy=\"6\" r=\"3\"></circle>",
  _tmpl$1877 = "<path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path>",
  _tmpl$1878 = "<path d=\"M11 18H8a2 2 0 0 1-2-2V9\"></path>",
  _tmpl$1879 = "<circle cx=\"12\" cy=\"18\" r=\"3\"></circle>",
  _tmpl$1880 = "<path d=\"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9\"></path>",
  _tmpl$1881 = "<path d=\"M12 12v3\"></path>",
  _tmpl$1882 = "<circle cx=\"5\" cy=\"18\" r=\"3\"></circle>",
  _tmpl$1883 = "<circle cx=\"19\" cy=\"6\" r=\"3\"></circle>",
  _tmpl$1884 = "<path d=\"M16 15.7A9 9 0 0 0 19 9\"></path>",
  _tmpl$1885 = "<path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>",
  _tmpl$1886 = "<path d=\"M5 9v12\"></path>",
  _tmpl$1887 = "<path d=\"M6 9v12\"></path>",
  _tmpl$1888 = "<path d=\"m21 3-6 6\"></path>",
  _tmpl$1889 = "<path d=\"m21 9-6-6\"></path>",
  _tmpl$1890 = "<path d=\"M18 11.5V15\"></path>",
  _tmpl$1891 = "<path d=\"M12 6h5a2 2 0 0 1 2 2v3\"></path>",
  _tmpl$1892 = "<path d=\"M19 15v6\"></path>",
  _tmpl$1893 = "<path d=\"M22 18h-6\"></path>",
  _tmpl$1894 = "<path d=\"M13 6h3a2 2 0 0 1 2 2v3\"></path>",
  _tmpl$1895 = "<path d=\"M18 6V5\"></path>",
  _tmpl$1896 = "<path d=\"M18 11v-1\"></path>",
  _tmpl$1897 = "<line x1=\"6\" x2=\"6\" y1=\"9\" y2=\"21\"></line>",
  _tmpl$1898 = "<path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\"></path>",
  _tmpl$1899 = "<path d=\"M9 18c-4.51 2-5-2-7-2\"></path>",
  _tmpl$1900 = "<path d=\"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z\"></path>",
  _tmpl$1901 = "<path d=\"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z\"></path>",
  _tmpl$1902 = "<path d=\"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0\"></path>",
  _tmpl$1903 = "<circle cx=\"6\" cy=\"15\" r=\"4\"></circle>",
  _tmpl$1904 = "<circle cx=\"18\" cy=\"15\" r=\"4\"></circle>",
  _tmpl$1905 = "<path d=\"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2\"></path>",
  _tmpl$1906 = "<path d=\"M2.5 13 5 7c.7-1.3 1.4-2 3-2\"></path>",
  _tmpl$1907 = "<path d=\"M21.5 13 19 7c-.7-1.3-1.5-2-3-2\"></path>",
  _tmpl$1908 = "<path d=\"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13\"></path>",
  _tmpl$1909 = "<path d=\"M2 12h8.5\"></path>",
  _tmpl$1910 = "<path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"></path>",
  _tmpl$1911 = "<path d=\"M12 13V2l8 4-8 4\"></path>",
  _tmpl$1912 = "<path d=\"M20.561 10.222a9 9 0 1 1-12.55-5.29\"></path>",
  _tmpl$1913 = "<path d=\"M8.002 9.997a5 5 0 1 0 8.9 2.02\"></path>",
  _tmpl$1914 = "<path d=\"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4\"></path>",
  _tmpl$1915 = "<path d=\"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2\"></path>",
  _tmpl$1916 = "<path d=\"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5\"></path>",
  _tmpl$1917 = "<path d=\"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0\"></path>",
  _tmpl$1918 = "<path d=\"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0\"></path>",
  _tmpl$1919 = "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"></path>",
  _tmpl$1920 = "<path d=\"M22 10v6\"></path>",
  _tmpl$1921 = "<path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"></path>",
  _tmpl$1922 = "<path d=\"M22 5V2l-5.89 5.89\"></path>",
  _tmpl$1923 = "<circle cx=\"16.6\" cy=\"15.89\" r=\"3\"></circle>",
  _tmpl$1924 = "<circle cx=\"8.11\" cy=\"7.4\" r=\"3\"></circle>",
  _tmpl$1925 = "<circle cx=\"12.35\" cy=\"11.65\" r=\"3\"></circle>",
  _tmpl$1926 = "<circle cx=\"13.91\" cy=\"5.85\" r=\"3\"></circle>",
  _tmpl$1927 = "<circle cx=\"18.15\" cy=\"10.09\" r=\"3\"></circle>",
  _tmpl$1928 = "<circle cx=\"6.56\" cy=\"13.2\" r=\"3\"></circle>",
  _tmpl$1929 = "<circle cx=\"10.8\" cy=\"17.44\" r=\"3\"></circle>",
  _tmpl$1930 = "<circle cx=\"5\" cy=\"19\" r=\"3\"></circle>",
  _tmpl$1931 = "<path d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3\"></path>",
  _tmpl$1932 = "<path d=\"m16 19 2 2 4-4\"></path>",
  _tmpl$1933 = "<path d=\"m16 16 5 5\"></path>",
  _tmpl$1934 = "<path d=\"m16 21 5-5\"></path>",
  _tmpl$1935 = "<circle cx=\"12\" cy=\"9\" r=\"1\"></circle>",
  _tmpl$1936 = "<circle cx=\"19\" cy=\"9\" r=\"1\"></circle>",
  _tmpl$1937 = "<circle cx=\"5\" cy=\"9\" r=\"1\"></circle>",
  _tmpl$1938 = "<circle cx=\"12\" cy=\"15\" r=\"1\"></circle>",
  _tmpl$1939 = "<circle cx=\"19\" cy=\"15\" r=\"1\"></circle>",
  _tmpl$1940 = "<circle cx=\"5\" cy=\"15\" r=\"1\"></circle>",
  _tmpl$1941 = "<circle cx=\"9\" cy=\"5\" r=\"1\"></circle>",
  _tmpl$1942 = "<circle cx=\"9\" cy=\"19\" r=\"1\"></circle>",
  _tmpl$1943 = "<circle cx=\"15\" cy=\"19\" r=\"1\"></circle>",
  _tmpl$1944 = "<circle cx=\"19\" cy=\"5\" r=\"1\"></circle>",
  _tmpl$1945 = "<circle cx=\"5\" cy=\"5\" r=\"1\"></circle>",
  _tmpl$1946 = "<circle cx=\"19\" cy=\"19\" r=\"1\"></circle>",
  _tmpl$1947 = "<circle cx=\"5\" cy=\"19\" r=\"1\"></circle>",
  _tmpl$1948 = "<path d=\"M3 7V5c0-1.1.9-2 2-2h2\"></path>",
  _tmpl$1949 = "<path d=\"M17 3h2c1.1 0 2 .9 2 2v2\"></path>",
  _tmpl$1950 = "<path d=\"M21 17v2c0 1.1-.9 2-2 2h-2\"></path>",
  _tmpl$1951 = "<path d=\"M7 21H5c-1.1 0-2-.9-2-2v-2\"></path>",
  _tmpl$1952 = "<rect width=\"7\" height=\"5\" x=\"7\" y=\"7\" rx=\"1\"></rect>",
  _tmpl$1953 = "<rect width=\"7\" height=\"5\" x=\"10\" y=\"12\" rx=\"1\"></rect>",
  _tmpl$1954 = "<path d=\"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z\"></path>",
  _tmpl$1955 = "<path d=\"m17 7-5.1 5.1\"></path>",
  _tmpl$1956 = "<circle cx=\"11.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$1957 = "<path d=\"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4\"></path>",
  _tmpl$1958 = "<path d=\"m6 16 2 2\"></path>",
  _tmpl$1959 = "<path d=\"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856\"></path>",
  _tmpl$1960 = "<path d=\"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288\"></path>",
  _tmpl$1961 = "<path d=\"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025\"></path>",
  _tmpl$1962 = "<path d=\"m8.5 16.5-1-1\"></path>",
  _tmpl$1963 = "<path d=\"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9\"></path>",
  _tmpl$1964 = "<path d=\"m18 15 4-4\"></path>",
  _tmpl$1965 = "<path d=\"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\"></path>",
  _tmpl$1966 = "<path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\"></path>",
  _tmpl$1967 = "<path d=\"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"></path>",
  _tmpl$1968 = "<path d=\"m2 16 6 6\"></path>",
  _tmpl$1969 = "<circle cx=\"16\" cy=\"9\" r=\"2.9\"></circle>",
  _tmpl$1970 = "<circle cx=\"6\" cy=\"5\" r=\"3\"></circle>",
  _tmpl$1971 = "<path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\"></path>",
  _tmpl$1972 = "<path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"></path>",
  _tmpl$1973 = "<path d=\"m2 15 6 6\"></path>",
  _tmpl$1974 = "<path d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z\"></path>",
  _tmpl$1975 = "<path d=\"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14\"></path>",
  _tmpl$1976 = "<path d=\"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"></path>",
  _tmpl$1977 = "<path d=\"m2 13 6 6\"></path>",
  _tmpl$1978 = "<path d=\"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4\"></path>",
  _tmpl$1979 = "<path d=\"M14 11V9a2 2 0 1 0-4 0v2\"></path>",
  _tmpl$1980 = "<path d=\"M10 10.5V5a2 2 0 1 0-4 0v9\"></path>",
  _tmpl$1981 = "<path d=\"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5\"></path>",
  _tmpl$1982 = "<path d=\"M12 3V2\"></path>",
  _tmpl$1983 = "<path d=\"M5 10a7.1 7.1 0 0 1 14 0\"></path>",
  _tmpl$1984 = "<path d=\"M4 10h16\"></path>",
  _tmpl$1985 = "<path d=\"M2 14h12a2 2 0 1 1 0 4h-2\"></path>",
  _tmpl$1986 = "<path d=\"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18\"></path>",
  _tmpl$1987 = "<path d=\"M5 14v7H2\"></path>",
  _tmpl$1988 = "<path d=\"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0\"></path>",
  _tmpl$1989 = "<path d=\"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2\"></path>",
  _tmpl$1990 = "<path d=\"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8\"></path>",
  _tmpl$1991 = "<path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"></path>",
  _tmpl$1992 = "<path d=\"m11 17 2 2a1 1 0 1 0 3-3\"></path>",
  _tmpl$1993 = "<path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"></path>",
  _tmpl$1994 = "<path d=\"m21 3 1 11h-2\"></path>",
  _tmpl$1995 = "<path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"></path>",
  _tmpl$1996 = "<path d=\"M3 4h8\"></path>",
  _tmpl$1997 = "<path d=\"M12 2v8\"></path>",
  _tmpl$1998 = "<path d=\"m16 6-4 4-4-4\"></path>",
  _tmpl$1999 = "<path d=\"M10 18h.01\"></path>",
  _tmpl$2000 = "<path d=\"m16 6-4-4-4 4\"></path>",
  _tmpl$2001 = "<line x1=\"22\" x2=\"2\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2002 = "<path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>",
  _tmpl$2003 = "<line x1=\"6\" x2=\"6.01\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$2004 = "<line x1=\"10\" x2=\"10.01\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$2005 = "<path d=\"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z\"></path>",
  _tmpl$2006 = "<path d=\"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5\"></path>",
  _tmpl$2007 = "<path d=\"M4 15v-3a6 6 0 0 1 6-6h0\"></path>",
  _tmpl$2008 = "<path d=\"M14 6h0a6 6 0 0 1 6 6v3\"></path>",
  _tmpl$2009 = "<line x1=\"4\" x2=\"20\" y1=\"9\" y2=\"9\"></line>",
  _tmpl$2010 = "<line x1=\"4\" x2=\"20\" y1=\"15\" y2=\"15\"></line>",
  _tmpl$2011 = "<line x1=\"10\" x2=\"8\" y1=\"3\" y2=\"21\"></line>",
  _tmpl$2012 = "<line x1=\"16\" x2=\"14\" y1=\"3\" y2=\"21\"></line>",
  _tmpl$2013 = "<path d=\"m5.2 6.2 1.4 1.4\"></path>",
  _tmpl$2014 = "<path d=\"M2 13h2\"></path>",
  _tmpl$2015 = "<path d=\"M20 13h2\"></path>",
  _tmpl$2016 = "<path d=\"m17.4 7.6 1.4-1.4\"></path>",
  _tmpl$2017 = "<path d=\"M22 17H2\"></path>",
  _tmpl$2018 = "<path d=\"M22 21H2\"></path>",
  _tmpl$2019 = "<path d=\"M16 13a4 4 0 0 0-8 0\"></path>",
  _tmpl$2020 = "<path d=\"M12 5V2.5\"></path>",
  _tmpl$2021 = "<path d=\"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z\"></path>",
  _tmpl$2022 = "<path d=\"M7.5 12h9\"></path>",
  _tmpl$2023 = "<path d=\"M4 12h8\"></path>",
  _tmpl$2024 = "<path d=\"M4 18V6\"></path>",
  _tmpl$2025 = "<path d=\"m17 12 3-2v8\"></path>",
  _tmpl$2026 = "<path d=\"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1\"></path>",
  _tmpl$2027 = "<path d=\"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2\"></path>",
  _tmpl$2028 = "<path d=\"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2\"></path>",
  _tmpl$2029 = "<path d=\"M17 10v4h4\"></path>",
  _tmpl$2030 = "<path d=\"M21 10v8\"></path>",
  _tmpl$2031 = "<path d=\"M17 13v-3h4\"></path>",
  _tmpl$2032 = "<path d=\"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17\"></path>",
  _tmpl$2033 = "<circle cx=\"19\" cy=\"16\" r=\"2\"></circle>",
  _tmpl$2034 = "<path d=\"M20 10c-2 2-3 3.5-3 6\"></path>",
  _tmpl$2035 = "<path d=\"M6 12h12\"></path>",
  _tmpl$2036 = "<path d=\"M6 20V4\"></path>",
  _tmpl$2037 = "<path d=\"M18 20V4\"></path>",
  _tmpl$2038 = "<path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\"></path>",
  _tmpl$2039 = "<path d=\"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z\"></path>",
  _tmpl$2040 = "<path d=\"M21 16v2a4 4 0 0 1-4 4h-5\"></path>",
  _tmpl$2041 = "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"></path>",
  _tmpl$2042 = "<path d=\"m12 13-1-1 2-2-3-3 2-2\"></path>",
  _tmpl$2043 = "<path d=\"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66\"></path>",
  _tmpl$2044 = "<path d=\"m18 15-2-2\"></path>",
  _tmpl$2045 = "<path d=\"m15 18-2-2\"></path>",
  _tmpl$2046 = "<line x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\"></line>",
  _tmpl$2047 = "<path d=\"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35\"></path>",
  _tmpl$2048 = "<path d=\"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17\"></path>",
  _tmpl$2049 = "<path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"></path>",
  _tmpl$2050 = "<path d=\"M11 8c2-3-2-3 0-6\"></path>",
  _tmpl$2051 = "<path d=\"M15.5 8c2-3-2-3 0-6\"></path>",
  _tmpl$2052 = "<path d=\"M6 10h.01\"></path>",
  _tmpl$2053 = "<path d=\"M6 14h.01\"></path>",
  _tmpl$2054 = "<path d=\"M10 16v-4\"></path>",
  _tmpl$2055 = "<path d=\"M14 16v-4\"></path>",
  _tmpl$2056 = "<path d=\"M18 16v-4\"></path>",
  _tmpl$2057 = "<path d=\"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3\"></path>",
  _tmpl$2058 = "<path d=\"M5 20v2\"></path>",
  _tmpl$2059 = "<path d=\"M19 20v2\"></path>",
  _tmpl$2060 = "<path d=\"m9 11-6 6v3h9l3-3\"></path>",
  _tmpl$2061 = "<path d=\"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4\"></path>",
  _tmpl$2062 = "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>",
  _tmpl$2063 = "<path d=\"M3 3v5h5\"></path>",
  _tmpl$2064 = "<path d=\"M12 7v5l4 2\"></path>",
  _tmpl$2065 = "<path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>",
  _tmpl$2066 = "<polyline points=\"9 22 9 12 15 12 15 22\"></polyline>",
  _tmpl$2067 = "<path d=\"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27\"></path>",
  _tmpl$2068 = "<path d=\"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28\"></path>",
  _tmpl$2069 = "<path d=\"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26\"></path>",
  _tmpl$2070 = "<path d=\"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25\"></path>",
  _tmpl$2071 = "<path d=\"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75\"></path>",
  _tmpl$2072 = "<path d=\"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24\"></path>",
  _tmpl$2073 = "<path d=\"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28\"></path>",
  _tmpl$2074 = "<path d=\"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05\"></path>",
  _tmpl$2075 = "<path d=\"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18\"></path>",
  _tmpl$2076 = "<path d=\"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88\"></path>",
  _tmpl$2077 = "<path d=\"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36\"></path>",
  _tmpl$2078 = "<path d=\"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87\"></path>",
  _tmpl$2079 = "<path d=\"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08\"></path>",
  _tmpl$2080 = "<path d=\"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57\"></path>",
  _tmpl$2081 = "<path d=\"M4.93 4.93 3 3a.7.7 0 0 1 0-1\"></path>",
  _tmpl$2082 = "<path d=\"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15\"></path>",
  _tmpl$2083 = "<path d=\"M12 6v4\"></path>",
  _tmpl$2084 = "<path d=\"M14 14h-4\"></path>",
  _tmpl$2085 = "<path d=\"M14 18h-4\"></path>",
  _tmpl$2086 = "<path d=\"M14 8h-4\"></path>",
  _tmpl$2087 = "<path d=\"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$2088 = "<path d=\"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18\"></path>",
  _tmpl$2089 = "<path d=\"M10 22v-6.57\"></path>",
  _tmpl$2090 = "<path d=\"M12 11h.01\"></path>",
  _tmpl$2091 = "<path d=\"M12 7h.01\"></path>",
  _tmpl$2092 = "<path d=\"M14 15.43V22\"></path>",
  _tmpl$2093 = "<path d=\"M15 16a5 5 0 0 0-6 0\"></path>",
  _tmpl$2094 = "<path d=\"M16 11h.01\"></path>",
  _tmpl$2095 = "<path d=\"M8 7h.01\"></path>",
  _tmpl$2096 = "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"></rect>",
  _tmpl$2097 = "<path d=\"M5 22h14\"></path>",
  _tmpl$2098 = "<path d=\"M5 2h14\"></path>",
  _tmpl$2099 = "<path d=\"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22\"></path>",
  _tmpl$2100 = "<path d=\"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2\"></path>",
  _tmpl$2101 = "<path d=\"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0\"></path>",
  _tmpl$2102 = "<path d=\"M12.14 11a3.5 3.5 0 1 1 6.71 0\"></path>",
  _tmpl$2103 = "<path d=\"M15.5 6.5a3.5 3.5 0 1 0-7 0\"></path>",
  _tmpl$2104 = "<path d=\"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11\"></path>",
  _tmpl$2105 = "<path d=\"M17 7A5 5 0 0 0 7 7\"></path>",
  _tmpl$2106 = "<path d=\"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4\"></path>",
  _tmpl$2107 = "<path d=\"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21\"></path>",
  _tmpl$2108 = "<path d=\"m14 19 3 3v-5.5\"></path>",
  _tmpl$2109 = "<path d=\"m17 22 3-3\"></path>",
  _tmpl$2110 = "<path d=\"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7\"></path>",
  _tmpl$2111 = "<line x1=\"16\" x2=\"22\" y1=\"5\" y2=\"5\"></line>",
  _tmpl$2112 = "<path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"></path>",
  _tmpl$2113 = "<path d=\"M10.41 10.41a2 2 0 1 1-2.83-2.83\"></path>",
  _tmpl$2114 = "<line x1=\"13.5\" x2=\"6\" y1=\"13.5\" y2=\"21\"></line>",
  _tmpl$2115 = "<line x1=\"18\" x2=\"21\" y1=\"12\" y2=\"15\"></line>",
  _tmpl$2116 = "<path d=\"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59\"></path>",
  _tmpl$2117 = "<path d=\"M21 15V5a2 2 0 0 0-2-2H9\"></path>",
  _tmpl$2118 = "<path d=\"m11 16-5 5\"></path>",
  _tmpl$2119 = "<path d=\"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5\"></path>",
  _tmpl$2120 = "<path d=\"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z\"></path>",
  _tmpl$2121 = "<path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7\"></path>",
  _tmpl$2122 = "<line x1=\"19\" x2=\"19\" y1=\"2\" y2=\"8\"></line>",
  _tmpl$2123 = "<path d=\"m14 19.5 3-3 3 3\"></path>",
  _tmpl$2124 = "<path d=\"M17 22v-5.5\"></path>",
  _tmpl$2125 = "<path d=\"M18 22H4a2 2 0 0 1-2-2V6\"></path>",
  _tmpl$2126 = "<path d=\"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18\"></path>",
  _tmpl$2127 = "<rect width=\"16\" height=\"16\" x=\"6\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$2128 = "<path d=\"M12 3v12\"></path>",
  _tmpl$2129 = "<path d=\"m8 11 4 4 4-4\"></path>",
  _tmpl$2130 = "<path d=\"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4\"></path>",
  _tmpl$2131 = "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline>",
  _tmpl$2132 = "<polyline points=\"7 8 3 12 7 16\"></polyline>",
  _tmpl$2133 = "<line x1=\"21\" x2=\"11\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2134 = "<line x1=\"21\" x2=\"11\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$2135 = "<line x1=\"21\" x2=\"11\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$2136 = "<polyline points=\"3 8 7 12 3 16\"></polyline>",
  _tmpl$2137 = "<path d=\"M6 3h12\"></path>",
  _tmpl$2138 = "<path d=\"m6 13 8.5 8\"></path>",
  _tmpl$2139 = "<path d=\"M6 13h3\"></path>",
  _tmpl$2140 = "<path d=\"M9 13c6.667 0 6.667-10 0-10\"></path>",
  _tmpl$2141 = "<path d=\"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z\"></path>",
  _tmpl$2142 = "<path d=\"M12 16v-4\"></path>",
  _tmpl$2143 = "<path d=\"M12 8h.01\"></path>",
  _tmpl$2144 = "<path d=\"M7 7h.01\"></path>",
  _tmpl$2145 = "<path d=\"M17 7h.01\"></path>",
  _tmpl$2146 = "<path d=\"M7 17h.01\"></path>",
  _tmpl$2147 = "<path d=\"M17 17h.01\"></path>",
  _tmpl$2148 = "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"></rect>",
  _tmpl$2149 = "<path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path>",
  _tmpl$2150 = "<line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"></line>",
  _tmpl$2151 = "<line x1=\"19\" x2=\"10\" y1=\"4\" y2=\"4\"></line>",
  _tmpl$2152 = "<line x1=\"14\" x2=\"5\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$2153 = "<line x1=\"15\" x2=\"9\" y1=\"4\" y2=\"20\"></line>",
  _tmpl$2154 = "<path d=\"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8\"></path>",
  _tmpl$2155 = "<polyline points=\"16 14 20 18 16 22\"></polyline>",
  _tmpl$2156 = "<path d=\"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4\"></path>",
  _tmpl$2157 = "<polyline points=\"8 22 4 18 8 14\"></polyline>",
  _tmpl$2158 = "<path d=\"M12 9.5V21m0-11.5L6 3m6 6.5L18 3\"></path>",
  _tmpl$2159 = "<path d=\"M6 15h12\"></path>",
  _tmpl$2160 = "<path d=\"M6 11h12\"></path>",
  _tmpl$2161 = "<path d=\"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z\"></path>",
  _tmpl$2162 = "<path d=\"M6 15v-2\"></path>",
  _tmpl$2163 = "<path d=\"M12 15V9\"></path>",
  _tmpl$2164 = "<circle cx=\"12\" cy=\"6\" r=\"3\"></circle>",
  _tmpl$2165 = "<path d=\"M6 5v11\"></path>",
  _tmpl$2166 = "<path d=\"M12 5v6\"></path>",
  _tmpl$2167 = "<path d=\"M18 5v14\"></path>",
  _tmpl$2168 = "<path d=\"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z\"></path>",
  _tmpl$2169 = "<circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$2170 = "<path d=\"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z\"></path>",
  _tmpl$2171 = "<path d=\"m14 7 3 3\"></path>",
  _tmpl$2172 = "<path d=\"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4\"></path>",
  _tmpl$2173 = "<circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\"></circle>",
  _tmpl$2174 = "<path d=\"m21 2-9.6 9.6\"></path>",
  _tmpl$2175 = "<path d=\"m15.5 7.5 3 3L22 7l-3-3\"></path>",
  _tmpl$2176 = "<path d=\"M18 8h.01\"></path>",
  _tmpl$2177 = "<path d=\"M6 12v4\"></path>",
  _tmpl$2178 = "<path d=\"M10 12v4\"></path>",
  _tmpl$2179 = "<path d=\"M14 12v4\"></path>",
  _tmpl$2180 = "<path d=\"M18 12v4\"></path>",
  _tmpl$2181 = "<path d=\"M 20 4 A2 2 0 0 1 22 6\"></path>",
  _tmpl$2182 = "<path d=\"M 22 6 L 22 16.41\"></path>",
  _tmpl$2183 = "<path d=\"M 7 16 L 16 16\"></path>",
  _tmpl$2184 = "<path d=\"M 9.69 4 L 20 4\"></path>",
  _tmpl$2185 = "<path d=\"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2\"></path>",
  _tmpl$2186 = "<path d=\"M12 2v5\"></path>",
  _tmpl$2187 = "<path d=\"M6 7h12l4 9H2l4-9Z\"></path>",
  _tmpl$2188 = "<path d=\"M9.17 16a3 3 0 1 0 5.66 0\"></path>",
  _tmpl$2189 = "<path d=\"m14 5-3 3 2 7 8-8-7-2Z\"></path>",
  _tmpl$2190 = "<path d=\"m14 5-3 3-3-3 3-3 3 3Z\"></path>",
  _tmpl$2191 = "<path d=\"M9.5 6.5 4 12l3 6\"></path>",
  _tmpl$2192 = "<path d=\"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z\"></path>",
  _tmpl$2193 = "<path d=\"M9 2h6l3 7H6l3-7Z\"></path>",
  _tmpl$2194 = "<path d=\"M12 9v13\"></path>",
  _tmpl$2195 = "<path d=\"M9 22h6\"></path>",
  _tmpl$2196 = "<path d=\"M11 13h6l3 7H8l3-7Z\"></path>",
  _tmpl$2197 = "<path d=\"M14 13V8a2 2 0 0 0-2-2H8\"></path>",
  _tmpl$2198 = "<path d=\"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z\"></path>",
  _tmpl$2199 = "<path d=\"M11 4h6l3 7H8l3-7Z\"></path>",
  _tmpl$2200 = "<path d=\"M14 11v5a2 2 0 0 1-2 2H8\"></path>",
  _tmpl$2201 = "<path d=\"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z\"></path>",
  _tmpl$2202 = "<path d=\"M8 2h8l4 10H4L8 2Z\"></path>",
  _tmpl$2203 = "<path d=\"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z\"></path>",
  _tmpl$2204 = "<path d=\"m12 8 6-3-6-3v10\"></path>",
  _tmpl$2205 = "<path d=\"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12\"></path>",
  _tmpl$2206 = "<path d=\"m6.49 12.85 11.02 6.3\"></path>",
  _tmpl$2207 = "<path d=\"M17.51 12.85 6.5 19.15\"></path>",
  _tmpl$2208 = "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\"></line>",
  _tmpl$2209 = "<line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\"></line>",
  _tmpl$2210 = "<line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\"></line>",
  _tmpl$2211 = "<line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\"></line>",
  _tmpl$2212 = "<line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\"></line>",
  _tmpl$2213 = "<polygon points=\"12 2 20 7 4 7\"></polygon>",
  _tmpl$2214 = "<path d=\"m5 8 6 6\"></path>",
  _tmpl$2215 = "<path d=\"m4 14 6-6 2-3\"></path>",
  _tmpl$2216 = "<path d=\"M2 5h12\"></path>",
  _tmpl$2217 = "<path d=\"M7 2h1\"></path>",
  _tmpl$2218 = "<path d=\"m22 22-5-10-5 10\"></path>",
  _tmpl$2219 = "<path d=\"M14 18h6\"></path>",
  _tmpl$2220 = "<rect width=\"18\" height=\"12\" x=\"3\" y=\"4\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$2221 = "<line x1=\"2\" x2=\"22\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$2222 = "<path d=\"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16\"></path>",
  _tmpl$2223 = "<path d=\"M7 22a5 5 0 0 1-2-4\"></path>",
  _tmpl$2224 = "<path d=\"M7 16.93c.96.43 1.96.74 2.99.91\"></path>",
  _tmpl$2225 = "<path d=\"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2\"></path>",
  _tmpl$2226 = "<path d=\"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path>",
  _tmpl$2227 = "<path d=\"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z\"></path>",
  _tmpl$2228 = "<path d=\"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1\"></path>",
  _tmpl$2229 = "<path d=\"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z\"></path>",
  _tmpl$2230 = "<path d=\"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12\"></path>",
  _tmpl$2231 = "<path d=\"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z\"></path>",
  _tmpl$2232 = "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\"></path>",
  _tmpl$2233 = "<path d=\"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59\"></path>",
  _tmpl$2234 = "<path d=\"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59\"></path>",
  _tmpl$2235 = "<path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\"></path>",
  _tmpl$2236 = "<path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\"></path>",
  _tmpl$2237 = "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2238 = "<rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2239 = "<rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect>",
  _tmpl$2240 = "<rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>",
  _tmpl$2241 = "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2242 = "<rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$2243 = "<rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$2244 = "<path d=\"M14 4h7\"></path>",
  _tmpl$2245 = "<path d=\"M14 9h7\"></path>",
  _tmpl$2246 = "<path d=\"M14 15h7\"></path>",
  _tmpl$2247 = "<path d=\"M14 20h7\"></path>",
  _tmpl$2248 = "<rect width=\"7\" height=\"18\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2249 = "<rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2250 = "<rect width=\"9\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$2251 = "<rect width=\"5\" height=\"7\" x=\"16\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$2252 = "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"></path>",
  _tmpl$2253 = "<path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"></path>",
  _tmpl$2254 = "<path d=\"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22\"></path>",
  _tmpl$2255 = "<path d=\"M2 22 17 7\"></path>",
  _tmpl$2256 = "<rect width=\"8\" height=\"18\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2257 = "<path d=\"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z\"></path>",
  _tmpl$2258 = "<path d=\"m16 6 4 14\"></path>",
  _tmpl$2259 = "<path d=\"M12 6v14\"></path>",
  _tmpl$2260 = "<path d=\"M8 8v12\"></path>",
  _tmpl$2261 = "<path d=\"M4 4v16\"></path>",
  _tmpl$2262 = "<path d=\"m4.93 4.93 4.24 4.24\"></path>",
  _tmpl$2263 = "<path d=\"m14.83 9.17 4.24-4.24\"></path>",
  _tmpl$2264 = "<path d=\"m14.83 14.83 4.24 4.24\"></path>",
  _tmpl$2265 = "<path d=\"m9.17 14.83-4.24 4.24\"></path>",
  _tmpl$2266 = "<path d=\"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2\"></path>",
  _tmpl$2267 = "<path d=\"M6 12h4\"></path>",
  _tmpl$2268 = "<path d=\"M14 12h2v8\"></path>",
  _tmpl$2269 = "<path d=\"M14 20h4\"></path>",
  _tmpl$2270 = "<path d=\"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5\"></path>",
  _tmpl$2271 = "<path d=\"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5\"></path>",
  _tmpl$2272 = "<path d=\"M10 22h4\"></path>",
  _tmpl$2273 = "<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"></path>",
  _tmpl$2274 = "<path d=\"m19 9-5 5-4-4-3 3\"></path>",
  _tmpl$2275 = "<path d=\"M9 17H7A5 5 0 0 1 7 7\"></path>",
  _tmpl$2276 = "<path d=\"M15 7h2a5 5 0 0 1 4 8\"></path>",
  _tmpl$2277 = "<line x1=\"8\" x2=\"12\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2278 = "<path d=\"M9 17H7A5 5 0 0 1 7 7h2\"></path>",
  _tmpl$2279 = "<path d=\"M15 7h2a5 5 0 1 1 0 10h-2\"></path>",
  _tmpl$2280 = "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path>",
  _tmpl$2281 = "<path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>",
  _tmpl$2282 = "<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path>",
  _tmpl$2283 = "<rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"></rect>",
  _tmpl$2284 = "<circle cx=\"4\" cy=\"4\" r=\"2\"></circle>",
  _tmpl$2285 = "<path d=\"m3 17 2 2 4-4\"></path>",
  _tmpl$2286 = "<path d=\"m3 7 2 2 4-4\"></path>",
  _tmpl$2287 = "<path d=\"M13 6h8\"></path>",
  _tmpl$2288 = "<path d=\"M13 12h8\"></path>",
  _tmpl$2289 = "<path d=\"M13 18h8\"></path>",
  _tmpl$2290 = "<path d=\"m3 10 2.5-2.5L3 5\"></path>",
  _tmpl$2291 = "<path d=\"m3 19 2.5-2.5L3 14\"></path>",
  _tmpl$2292 = "<path d=\"M10 6h11\"></path>",
  _tmpl$2293 = "<path d=\"M10 12h11\"></path>",
  _tmpl$2294 = "<path d=\"M10 18h11\"></path>",
  _tmpl$2295 = "<path d=\"M16 12H3\"></path>",
  _tmpl$2296 = "<path d=\"M16 6H3\"></path>",
  _tmpl$2297 = "<path d=\"M10 18H3\"></path>",
  _tmpl$2298 = "<path d=\"M21 6v10a2 2 0 0 1-2 2h-5\"></path>",
  _tmpl$2299 = "<path d=\"m16 16-2 2 2 2\"></path>",
  _tmpl$2300 = "<path d=\"M3 6h18\"></path>",
  _tmpl$2301 = "<path d=\"M7 12h10\"></path>",
  _tmpl$2302 = "<path d=\"M11 12H3\"></path>",
  _tmpl$2303 = "<path d=\"M16 18H3\"></path>",
  _tmpl$2304 = "<path d=\"M21 12h-6\"></path>",
  _tmpl$2305 = "<path d=\"M21 15V6\"></path>",
  _tmpl$2306 = "<path d=\"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z\"></path>",
  _tmpl$2307 = "<path d=\"M12 12H3\"></path>",
  _tmpl$2308 = "<path d=\"M12 18H3\"></path>",
  _tmpl$2309 = "<line x1=\"10\" x2=\"21\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$2310 = "<line x1=\"10\" x2=\"21\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2311 = "<line x1=\"10\" x2=\"21\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$2312 = "<path d=\"M4 6h1v4\"></path>",
  _tmpl$2313 = "<path d=\"M4 10h2\"></path>",
  _tmpl$2314 = "<path d=\"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1\"></path>",
  _tmpl$2315 = "<path d=\"M18 9v6\"></path>",
  _tmpl$2316 = "<path d=\"M21 6H3\"></path>",
  _tmpl$2317 = "<path d=\"M7 12H3\"></path>",
  _tmpl$2318 = "<path d=\"M7 18H3\"></path>",
  _tmpl$2319 = "<path d=\"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14\"></path>",
  _tmpl$2320 = "<path d=\"M11 10v4h4\"></path>",
  _tmpl$2321 = "<path d=\"M10 6H3\"></path>",
  _tmpl$2322 = "<path d=\"M21 18V8a2 2 0 0 0-2-2h-5\"></path>",
  _tmpl$2323 = "<path d=\"m16 8-2-2 2-2\"></path>",
  _tmpl$2324 = "<rect x=\"3\" y=\"5\" width=\"6\" height=\"6\" rx=\"1\"></rect>",
  _tmpl$2325 = "<path d=\"M21 12h-8\"></path>",
  _tmpl$2326 = "<path d=\"M21 6H8\"></path>",
  _tmpl$2327 = "<path d=\"M21 18h-8\"></path>",
  _tmpl$2328 = "<path d=\"M3 6v4c0 1.1.9 2 2 2h3\"></path>",
  _tmpl$2329 = "<path d=\"M3 10v6c0 1.1.9 2 2 2h3\"></path>",
  _tmpl$2330 = "<path d=\"m16 12 5 3-5 3v-6Z\"></path>",
  _tmpl$2331 = "<path d=\"m19 10-4 4\"></path>",
  _tmpl$2332 = "<path d=\"m15 10 4 4\"></path>",
  _tmpl$2333 = "<line x1=\"8\" x2=\"21\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$2334 = "<line x1=\"8\" x2=\"21\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2335 = "<line x1=\"8\" x2=\"21\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$2336 = "<line x1=\"3\" x2=\"3.01\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$2337 = "<line x1=\"3\" x2=\"3.01\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2338 = "<line x1=\"3\" x2=\"3.01\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$2339 = "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\"></path>",
  _tmpl$2340 = "<path d=\"M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5\"></path>",
  _tmpl$2341 = "<path d=\"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6\"></path>",
  _tmpl$2342 = "<path d=\"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6\"></path>",
  _tmpl$2343 = "<path d=\"m16.2 7.8 2.9-2.9\"></path>",
  _tmpl$2344 = "<path d=\"M18 12h4\"></path>",
  _tmpl$2345 = "<path d=\"m16.2 16.2 2.9 2.9\"></path>",
  _tmpl$2346 = "<path d=\"M12 18v4\"></path>",
  _tmpl$2347 = "<path d=\"m4.9 19.1 2.9-2.9\"></path>",
  _tmpl$2348 = "<path d=\"M2 12h4\"></path>",
  _tmpl$2349 = "<path d=\"m4.9 4.9 2.9 2.9\"></path>",
  _tmpl$2350 = "<line x1=\"2\" x2=\"5\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2351 = "<line x1=\"19\" x2=\"22\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2352 = "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"5\"></line>",
  _tmpl$2353 = "<line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"></line>",
  _tmpl$2354 = "<circle cx=\"12\" cy=\"12\" r=\"7\"></circle>",
  _tmpl$2355 = "<path d=\"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11\"></path>",
  _tmpl$2356 = "<path d=\"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29\"></path>",
  _tmpl$2357 = "<circle cx=\"12\" cy=\"16\" r=\"1\"></circle>",
  _tmpl$2358 = "<path d=\"M7 10V7a5 5 0 0 1 9.33-2.5\"></path>",
  _tmpl$2359 = "<rect x=\"3\" y=\"10\" width=\"18\" height=\"12\" rx=\"2\"></rect>",
  _tmpl$2360 = "<path d=\"M7 10V7a5 5 0 0 1 10 0v3\"></path>",
  _tmpl$2361 = "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$2362 = "<path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>",
  _tmpl$2363 = "<path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>",
  _tmpl$2364 = "<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path>",
  _tmpl$2365 = "<polyline points=\"10 17 15 12 10 7\"></polyline>",
  _tmpl$2366 = "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>",
  _tmpl$2367 = "<polyline points=\"16 17 21 12 16 7\"></polyline>",
  _tmpl$2368 = "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle>",
  _tmpl$2369 = "<path d=\"m21 21-4.3-4.3\"></path>",
  _tmpl$2370 = "<path d=\"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0\"></path>",
  _tmpl$2371 = "<path d=\"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0\"></path>",
  _tmpl$2372 = "<path d=\"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14\"></path>",
  _tmpl$2373 = "<path d=\"M10 20h4\"></path>",
  _tmpl$2374 = "<circle cx=\"8\" cy=\"20\" r=\"2\"></circle>",
  _tmpl$2375 = "<path d=\"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15\"></path>",
  _tmpl$2376 = "<path d=\"m5 8 4 4\"></path>",
  _tmpl$2377 = "<path d=\"m12 15 4 4\"></path>",
  _tmpl$2378 = "<path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"></path>",
  _tmpl$2379 = "<path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"></path>",
  _tmpl$2380 = "<path d=\"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"></path>",
  _tmpl$2381 = "<path d=\"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z\"></path>",
  _tmpl$2382 = "<path d=\"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10\"></path>",
  _tmpl$2383 = "<path d=\"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5\"></path>",
  _tmpl$2384 = "<path d=\"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2\"></path>",
  _tmpl$2385 = "<path d=\"M20 22v.01\"></path>",
  _tmpl$2386 = "<path d=\"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5\"></path>",
  _tmpl$2387 = "<path d=\"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z\"></path>",
  _tmpl$2388 = "<path d=\"M20 14v4\"></path>",
  _tmpl$2389 = "<path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9\"></path>",
  _tmpl$2390 = "<path d=\"m17 17 4 4\"></path>",
  _tmpl$2391 = "<path d=\"m21 17-4 4\"></path>",
  _tmpl$2392 = "<path d=\"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z\"></path>",
  _tmpl$2393 = "<polyline points=\"15,9 18,9 18,11\"></polyline>",
  _tmpl$2394 = "<path d=\"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0\"></path>",
  _tmpl$2395 = "<line x1=\"6\" x2=\"7\" y1=\"10\" y2=\"10\"></line>",
  _tmpl$2396 = "<rect width=\"16\" height=\"13\" x=\"6\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$2397 = "<path d=\"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7\"></path>",
  _tmpl$2398 = "<path d=\"M2 8v11c0 1.1.9 2 2 2h14\"></path>",
  _tmpl$2399 = "<path d=\"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5\"></path>",
  _tmpl$2400 = "<path d=\"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82\"></path>",
  _tmpl$2401 = "<path d=\"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13\"></path>",
  _tmpl$2402 = "<path d=\"M14.9 9.25a3 3 0 0 0-2.15-2.16\"></path>",
  _tmpl$2403 = "<path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"></path>",
  _tmpl$2404 = "<path d=\"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0\"></path>",
  _tmpl$2405 = "<path d=\"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835\"></path>",
  _tmpl$2406 = "<path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\"></path>",
  _tmpl$2407 = "<path d=\"M15 5.764v15\"></path>",
  _tmpl$2408 = "<path d=\"M9 3.236v15\"></path>",
  _tmpl$2409 = "<path d=\"M12 11v11\"></path>",
  _tmpl$2410 = "<path d=\"m19 3-7 8-7-8Z\"></path>",
  _tmpl$2411 = "<polyline points=\"15 3 21 3 21 9\"></polyline>",
  _tmpl$2412 = "<polyline points=\"9 21 3 21 3 15\"></polyline>",
  _tmpl$2413 = "<line x1=\"21\" x2=\"14\" y1=\"3\" y2=\"10\"></line>",
  _tmpl$2414 = "<line x1=\"3\" x2=\"10\" y1=\"21\" y2=\"14\"></line>",
  _tmpl$2415 = "<path d=\"M8 3H5a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$2416 = "<path d=\"M21 8V5a2 2 0 0 0-2-2h-3\"></path>",
  _tmpl$2417 = "<path d=\"M3 16v3a2 2 0 0 0 2 2h3\"></path>",
  _tmpl$2418 = "<path d=\"M16 21h3a2 2 0 0 0 2-2v-3\"></path>",
  _tmpl$2419 = "<path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\"></path>",
  _tmpl$2420 = "<path d=\"M11 12 5.12 2.2\"></path>",
  _tmpl$2421 = "<path d=\"m13 12 5.88-9.8\"></path>",
  _tmpl$2422 = "<path d=\"M8 7h8\"></path>",
  _tmpl$2423 = "<circle cx=\"12\" cy=\"17\" r=\"5\"></circle>",
  _tmpl$2424 = "<path d=\"M12 18v-2h-.5\"></path>",
  _tmpl$2425 = "<path d=\"M9.26 9.26 3 11v3l14.14 3.14\"></path>",
  _tmpl$2426 = "<path d=\"M21 15.34V6l-7.31 2.03\"></path>",
  _tmpl$2427 = "<path d=\"M11.6 16.8a3 3 0 1 1-5.8-1.6\"></path>",
  _tmpl$2428 = "<path d=\"m3 11 18-5v12L3 14v-3z\"></path>",
  _tmpl$2429 = "<line x1=\"8\" x2=\"16\" y1=\"15\" y2=\"15\"></line>",
  _tmpl$2430 = "<path d=\"M6 19v-3\"></path>",
  _tmpl$2431 = "<path d=\"M10 19v-3\"></path>",
  _tmpl$2432 = "<path d=\"M14 19v-3\"></path>",
  _tmpl$2433 = "<path d=\"M18 19v-3\"></path>",
  _tmpl$2434 = "<path d=\"M8 11V9\"></path>",
  _tmpl$2435 = "<path d=\"M16 11V9\"></path>",
  _tmpl$2436 = "<path d=\"M12 11V9\"></path>",
  _tmpl$2437 = "<path d=\"M2 15h20\"></path>",
  _tmpl$2438 = "<path d=\"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z\"></path>",
  _tmpl$2439 = "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$2440 = "<line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$2441 = "<line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$2442 = "<path d=\"m8 6 4-4 4 4\"></path>",
  _tmpl$2443 = "<path d=\"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22\"></path>",
  _tmpl$2444 = "<path d=\"m20 22-5-5\"></path>",
  _tmpl$2445 = "<path d=\"M10 9.5 8 12l2 2.5\"></path>",
  _tmpl$2446 = "<path d=\"m14 9.5 2 2.5-2 2.5\"></path>",
  _tmpl$2447 = "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22z\"></path>",
  _tmpl$2448 = "<path d=\"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1\"></path>",
  _tmpl$2449 = "<path d=\"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1\"></path>",
  _tmpl$2450 = "<path d=\"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5\"></path>",
  _tmpl$2451 = "<path d=\"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1\"></path>",
  _tmpl$2452 = "<path d=\"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1\"></path>",
  _tmpl$2453 = "<path d=\"M3.5 17.5 2 22l4.5-1.5\"></path>",
  _tmpl$2454 = "<path d=\"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5\"></path>",
  _tmpl$2455 = "<path d=\"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1\"></path>",
  _tmpl$2456 = "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"></path>",
  _tmpl$2457 = "<path d=\"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7\"></path>",
  _tmpl$2458 = "<path d=\"M20.5 14.9A9 9 0 0 0 9.1 3.5\"></path>",
  _tmpl$2459 = "<path d=\"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7\"></path>",
  _tmpl$2460 = "<path d=\"m10 15-3-3 3-3\"></path>",
  _tmpl$2461 = "<path d=\"M7 12h7a2 2 0 0 1 2 2v1\"></path>",
  _tmpl$2462 = "<path d=\"M12 8v4\"></path>",
  _tmpl$2463 = "<path d=\"M12 16h.01\"></path>",
  _tmpl$2464 = "<path d=\"M10 7.5 8 10l2 2.5\"></path>",
  _tmpl$2465 = "<path d=\"m14 7.5 2 2.5-2 2.5\"></path>",
  _tmpl$2466 = "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>",
  _tmpl$2467 = "<path d=\"M3 6V5c0-1.1.9-2 2-2h2\"></path>",
  _tmpl$2468 = "<path d=\"M11 3h3\"></path>",
  _tmpl$2469 = "<path d=\"M18 3h1c1.1 0 2 .9 2 2\"></path>",
  _tmpl$2470 = "<path d=\"M21 9v2\"></path>",
  _tmpl$2471 = "<path d=\"M21 15c0 1.1-.9 2-2 2h-1\"></path>",
  _tmpl$2472 = "<path d=\"M14 17h-3\"></path>",
  _tmpl$2473 = "<path d=\"m7 17-4 4v-5\"></path>",
  _tmpl$2474 = "<path d=\"M3 12v-2\"></path>",
  _tmpl$2475 = "<path d=\"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2\"></path>",
  _tmpl$2476 = "<path d=\"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7\"></path>",
  _tmpl$2477 = "<path d=\"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8\"></path>",
  _tmpl$2478 = "<path d=\"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10\"></path>",
  _tmpl$2479 = "<path d=\"M8 12a2 2 0 0 0 2-2V8H8\"></path>",
  _tmpl$2480 = "<path d=\"M14 12a2 2 0 0 0 2-2V8h-2\"></path>",
  _tmpl$2481 = "<path d=\"m10 7-3 3 3 3\"></path>",
  _tmpl$2482 = "<path d=\"M17 13v-1a2 2 0 0 0-2-2H7\"></path>",
  _tmpl$2483 = "<path d=\"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7\"></path>",
  _tmpl$2484 = "<path d=\"M16 3h5v5\"></path>",
  _tmpl$2485 = "<path d=\"m16 8 5-5\"></path>",
  _tmpl$2486 = "<path d=\"M13 8H7\"></path>",
  _tmpl$2487 = "<path d=\"M17 12H7\"></path>",
  _tmpl$2488 = "<path d=\"M12 7v2\"></path>",
  _tmpl$2489 = "<path d=\"M12 13h.01\"></path>",
  _tmpl$2490 = "<path d=\"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z\"></path>",
  _tmpl$2491 = "<path d=\"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1\"></path>",
  _tmpl$2492 = "<path d=\"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2\"></path>",
  _tmpl$2493 = "<path d=\"M5 10v2a7 7 0 0 0 12 5\"></path>",
  _tmpl$2494 = "<path d=\"M15 9.34V5a3 3 0 0 0-5.68-1.33\"></path>",
  _tmpl$2495 = "<path d=\"M9 9v3a3 3 0 0 0 5.12 2.12\"></path>",
  _tmpl$2496 = "<path d=\"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12\"></path>",
  _tmpl$2497 = "<circle cx=\"17\" cy=\"7\" r=\"5\"></circle>",
  _tmpl$2498 = "<path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z\"></path>",
  _tmpl$2499 = "<path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path>",
  _tmpl$2500 = "<path d=\"M6 18h8\"></path>",
  _tmpl$2501 = "<path d=\"M14 22a7 7 0 1 0 0-14h-1\"></path>",
  _tmpl$2502 = "<path d=\"M9 14h2\"></path>",
  _tmpl$2503 = "<path d=\"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z\"></path>",
  _tmpl$2504 = "<path d=\"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\"></path>",
  _tmpl$2505 = "<rect width=\"20\" height=\"15\" x=\"2\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$2506 = "<rect width=\"8\" height=\"7\" x=\"6\" y=\"8\" rx=\"1\"></rect>",
  _tmpl$2507 = "<path d=\"M18 8v7\"></path>",
  _tmpl$2508 = "<path d=\"M18 19v2\"></path>",
  _tmpl$2509 = "<path d=\"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z\"></path>",
  _tmpl$2510 = "<path d=\"M12 13v8\"></path>",
  _tmpl$2511 = "<path d=\"M12 3v3\"></path>",
  _tmpl$2512 = "<path d=\"M8 2h8\"></path>",
  _tmpl$2513 = "<path d=\"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3\"></path>",
  _tmpl$2514 = "<path d=\"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435\"></path>",
  _tmpl$2515 = "<path d=\"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2\"></path>",
  _tmpl$2516 = "<path d=\"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0\"></path>",
  _tmpl$2517 = "<polyline points=\"4 14 10 14 10 20\"></polyline>",
  _tmpl$2518 = "<polyline points=\"20 10 14 10 14 4\"></polyline>",
  _tmpl$2519 = "<line x1=\"14\" x2=\"21\" y1=\"10\" y2=\"3\"></line>",
  _tmpl$2520 = "<path d=\"M8 3v3a2 2 0 0 1-2 2H3\"></path>",
  _tmpl$2521 = "<path d=\"M21 8h-3a2 2 0 0 1-2-2V3\"></path>",
  _tmpl$2522 = "<path d=\"M3 16h3a2 2 0 0 1 2 2v3\"></path>",
  _tmpl$2523 = "<path d=\"M16 21v-3a2 2 0 0 1 2-2h3\"></path>",
  _tmpl$2524 = "<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$2525 = "<path d=\"M12 17v4\"></path>",
  _tmpl$2526 = "<path d=\"M8 21h8\"></path>",
  _tmpl$2527 = "<path d=\"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9\"></path>",
  _tmpl$2528 = "<path d=\"m15 10-3 3-3-3\"></path>",
  _tmpl$2529 = "<path d=\"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2\"></path>",
  _tmpl$2530 = "<path d=\"M22 15V5a2 2 0 0 0-2-2H9\"></path>",
  _tmpl$2531 = "<path d=\"M10 13V7\"></path>",
  _tmpl$2532 = "<path d=\"M14 13V7\"></path>",
  _tmpl$2533 = "<path d=\"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z\"></path>",
  _tmpl$2534 = "<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"></rect>",
  _tmpl$2535 = "<path d=\"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8\"></path>",
  _tmpl$2536 = "<path d=\"M10 19v-3.96 3.15\"></path>",
  _tmpl$2537 = "<path d=\"M7 19h5\"></path>",
  _tmpl$2538 = "<rect width=\"6\" height=\"10\" x=\"16\" y=\"12\" rx=\"2\"></rect>",
  _tmpl$2539 = "<path d=\"M5.5 20H8\"></path>",
  _tmpl$2540 = "<path d=\"M17 9h.01\"></path>",
  _tmpl$2541 = "<rect width=\"10\" height=\"16\" x=\"12\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$2542 = "<path d=\"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$2543 = "<circle cx=\"17\" cy=\"15\" r=\"1\"></circle>",
  _tmpl$2544 = "<rect x=\"9\" y=\"7\" width=\"6\" height=\"6\" rx=\"1\"></rect>",
  _tmpl$2545 = "<path d=\"m14.5 12.5-5-5\"></path>",
  _tmpl$2546 = "<path d=\"m9.5 12.5 5-5\"></path>",
  _tmpl$2547 = "<line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\"></line>",
  _tmpl$2548 = "<line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\"></line>",
  _tmpl$2549 = "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9\"></path>",
  _tmpl$2550 = "<path d=\"M20 3v4\"></path>",
  _tmpl$2551 = "<path d=\"M22 5h-4\"></path>",
  _tmpl$2552 = "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"></path>",
  _tmpl$2553 = "<path d=\"m8 3 4 8 5-5 5 15H2L8 3z\"></path>",
  _tmpl$2554 = "<path d=\"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19\"></path>",
  _tmpl$2555 = "<path d=\"M12 6v.343\"></path>",
  _tmpl$2556 = "<path d=\"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218\"></path>",
  _tmpl$2557 = "<path d=\"M19 13.343V9A7 7 0 0 0 8.56 2.902\"></path>",
  _tmpl$2558 = "<path d=\"m4 4 7.07 17 2.51-7.39L21 11.07z\"></path>",
  _tmpl$2559 = "<path d=\"m2 2 4 11 2-5 5-2Z\"></path>",
  _tmpl$2560 = "<path d=\"m11.8 11.8 8.4 8.4\"></path>",
  _tmpl$2561 = "<path d=\"m9 9 5 12 1.8-5.2L21 14Z\"></path>",
  _tmpl$2562 = "<path d=\"M7.2 2.2 8 5.1\"></path>",
  _tmpl$2563 = "<path d=\"m5.1 8-2.9-.8\"></path>",
  _tmpl$2564 = "<path d=\"M14 4.1 12 6\"></path>",
  _tmpl$2565 = "<path d=\"m6 12-1.9 2\"></path>",
  _tmpl$2566 = "<path d=\"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path>",
  _tmpl$2567 = "<path d=\"m13 13 6 6\"></path>",
  _tmpl$2568 = "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"7\"></rect>",
  _tmpl$2569 = "<path d=\"M5 3v16h16\"></path>",
  _tmpl$2570 = "<path d=\"m5 19 6-6\"></path>",
  _tmpl$2571 = "<path d=\"m2 6 3-3 3 3\"></path>",
  _tmpl$2572 = "<path d=\"m18 16 3 3-3 3\"></path>",
  _tmpl$2573 = "<polyline points=\"5 11 5 5 11 5\"></polyline>",
  _tmpl$2574 = "<polyline points=\"19 13 19 19 13 19\"></polyline>",
  _tmpl$2575 = "<line x1=\"5\" x2=\"19\" y1=\"5\" y2=\"19\"></line>",
  _tmpl$2576 = "<polyline points=\"13 5 19 5 19 11\"></polyline>",
  _tmpl$2577 = "<polyline points=\"11 19 5 19 5 13\"></polyline>",
  _tmpl$2578 = "<path d=\"M11 19H5V13\"></path>",
  _tmpl$2579 = "<path d=\"M19 5L5 19\"></path>",
  _tmpl$2580 = "<path d=\"M19 13V19H13\"></path>",
  _tmpl$2581 = "<path d=\"M5 5L19 19\"></path>",
  _tmpl$2582 = "<path d=\"M8 18L12 22L16 18\"></path>",
  _tmpl$2583 = "<path d=\"M12 2V22\"></path>",
  _tmpl$2584 = "<polyline points=\"18 8 22 12 18 16\"></polyline>",
  _tmpl$2585 = "<polyline points=\"6 8 2 12 6 16\"></polyline>",
  _tmpl$2586 = "<path d=\"M6 8L2 12L6 16\"></path>",
  _tmpl$2587 = "<path d=\"M2 12H22\"></path>",
  _tmpl$2588 = "<path d=\"M18 8L22 12L18 16\"></path>",
  _tmpl$2589 = "<path d=\"M5 11V5H11\"></path>",
  _tmpl$2590 = "<path d=\"M13 5H19V11\"></path>",
  _tmpl$2591 = "<path d=\"M8 6L12 2L16 6\"></path>",
  _tmpl$2592 = "<polyline points=\"8 18 12 22 16 18\"></polyline>",
  _tmpl$2593 = "<polyline points=\"8 6 12 2 16 6\"></polyline>",
  _tmpl$2594 = "<polyline points=\"5 9 2 12 5 15\"></polyline>",
  _tmpl$2595 = "<polyline points=\"9 5 12 2 15 5\"></polyline>",
  _tmpl$2596 = "<polyline points=\"15 19 12 22 9 19\"></polyline>",
  _tmpl$2597 = "<polyline points=\"19 9 22 12 19 15\"></polyline>",
  _tmpl$2598 = "<circle cx=\"8\" cy=\"18\" r=\"4\"></circle>",
  _tmpl$2599 = "<path d=\"M12 18V2l7 4\"></path>",
  _tmpl$2600 = "<circle cx=\"12\" cy=\"18\" r=\"4\"></circle>",
  _tmpl$2601 = "<path d=\"M16 18V2\"></path>",
  _tmpl$2602 = "<path d=\"M9 18V5l12-2v13\"></path>",
  _tmpl$2603 = "<path d=\"m9 9 12-2\"></path>",
  _tmpl$2604 = "<circle cx=\"18\" cy=\"16\" r=\"3\"></circle>",
  _tmpl$2605 = "<path d=\"M9.31 9.31 5 21l7-4 7 4-1.17-3.17\"></path>",
  _tmpl$2606 = "<path d=\"M14.53 8.88 12 2l-1.17 3.17\"></path>",
  _tmpl$2607 = "<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>",
  _tmpl$2608 = "<path d=\"M8.43 8.43 3 11l8 2 2 8 2.57-5.43\"></path>",
  _tmpl$2609 = "<path d=\"M17.39 11.73 22 2l-9.73 4.61\"></path>",
  _tmpl$2610 = "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>",
  _tmpl$2611 = "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"></rect>",
  _tmpl$2612 = "<rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"></rect>",
  _tmpl$2613 = "<rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"></rect>",
  _tmpl$2614 = "<path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"></path>",
  _tmpl$2615 = "<path d=\"M12 12V8\"></path>",
  _tmpl$2616 = "<path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2\"></path>",
  _tmpl$2617 = "<path d=\"M18 14h-8\"></path>",
  _tmpl$2618 = "<path d=\"M15 18h-5\"></path>",
  _tmpl$2619 = "<path d=\"M10 6h8v4h-8V6Z\"></path>",
  _tmpl$2620 = "<path d=\"M6 8.32a7.43 7.43 0 0 1 0 7.36\"></path>",
  _tmpl$2621 = "<path d=\"M9.46 6.21a11.76 11.76 0 0 1 0 11.58\"></path>",
  _tmpl$2622 = "<path d=\"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8\"></path>",
  _tmpl$2623 = "<path d=\"M16.37 2a20.16 20.16 0 0 1 0 20\"></path>",
  _tmpl$2624 = "<path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4\"></path>",
  _tmpl$2625 = "<path d=\"M2 6h4\"></path>",
  _tmpl$2626 = "<path d=\"M2 10h4\"></path>",
  _tmpl$2627 = "<path d=\"M2 14h4\"></path>",
  _tmpl$2628 = "<path d=\"M2 18h4\"></path>",
  _tmpl$2629 = "<path d=\"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z\"></path>",
  _tmpl$2630 = "<path d=\"M15 2v20\"></path>",
  _tmpl$2631 = "<path d=\"M15 7h5\"></path>",
  _tmpl$2632 = "<path d=\"M15 12h5\"></path>",
  _tmpl$2633 = "<path d=\"M15 17h5\"></path>",
  _tmpl$2634 = "<path d=\"M9.5 8h5\"></path>",
  _tmpl$2635 = "<path d=\"M9.5 12H16\"></path>",
  _tmpl$2636 = "<path d=\"M9.5 16H14\"></path>",
  _tmpl$2637 = "<path d=\"M16 2v20\"></path>",
  _tmpl$2638 = "<path d=\"M16 4h2a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$2639 = "<path d=\"M20 12v2\"></path>",
  _tmpl$2640 = "<path d=\"M20 18v2a2 2 0 0 1-2 2h-1\"></path>",
  _tmpl$2641 = "<path d=\"M13 22h-2\"></path>",
  _tmpl$2642 = "<path d=\"M7 22H6a2 2 0 0 1-2-2v-2\"></path>",
  _tmpl$2643 = "<path d=\"M4 14v-2\"></path>",
  _tmpl$2644 = "<path d=\"M4 8V6a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$2645 = "<path d=\"M8 10h6\"></path>",
  _tmpl$2646 = "<path d=\"M8 14h8\"></path>",
  _tmpl$2647 = "<path d=\"M8 18h5\"></path>",
  _tmpl$2648 = "<rect width=\"16\" height=\"18\" x=\"4\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$2649 = "<path d=\"M12 4V2\"></path>",
  _tmpl$2650 = "<path d=\"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939\"></path>",
  _tmpl$2651 = "<path d=\"M19 10v3.343\"></path>",
  _tmpl$2652 = "<path d=\"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192\"></path>",
  _tmpl$2653 = "<path d=\"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4\"></path>",
  _tmpl$2654 = "<path d=\"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z\"></path>",
  _tmpl$2655 = "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>",
  _tmpl$2656 = "<path d=\"M10 15V9\"></path>",
  _tmpl$2657 = "<path d=\"M14 15V9\"></path>",
  _tmpl$2658 = "<path d=\"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714z\"></path>",
  _tmpl$2659 = "<path d=\"M3 3h6l6 18h6\"></path>",
  _tmpl$2660 = "<path d=\"M14 3h7\"></path>",
  _tmpl$2661 = "<circle cx=\"19\" cy=\"5\" r=\"2\"></circle>",
  _tmpl$2662 = "<path d=\"M10.4 21.9a10 10 0 0 0 9.941-15.416\"></path>",
  _tmpl$2663 = "<path d=\"M13.5 2.1a10 10 0 0 0-9.841 15.416\"></path>",
  _tmpl$2664 = "<path d=\"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025\"></path>",
  _tmpl$2665 = "<path d=\"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009\"></path>",
  _tmpl$2666 = "<path d=\"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027\"></path>",
  _tmpl$2667 = "<path d=\"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z\"></path>",
  _tmpl$2668 = "<path d=\"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9\"></path>",
  _tmpl$2669 = "<path d=\"m16 16 2 2 4-4\"></path>",
  _tmpl$2670 = "<path d=\"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14\"></path>",
  _tmpl$2671 = "<path d=\"m7.5 4.27 9 5.15\"></path>",
  _tmpl$2672 = "<polyline points=\"3.29 7 12 12 20.71 7\"></polyline>",
  _tmpl$2673 = "<line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"12\"></line>",
  _tmpl$2674 = "<path d=\"M16 16h6\"></path>",
  _tmpl$2675 = "<path d=\"M12 22v-9\"></path>",
  _tmpl$2676 = "<path d=\"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z\"></path>",
  _tmpl$2677 = "<path d=\"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13\"></path>",
  _tmpl$2678 = "<path d=\"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z\"></path>",
  _tmpl$2679 = "<path d=\"M19 13v6\"></path>",
  _tmpl$2680 = "<circle cx=\"18.5\" cy=\"15.5\" r=\"2.5\"></circle>",
  _tmpl$2681 = "<path d=\"M20.27 17.27 22 19\"></path>",
  _tmpl$2682 = "<path d=\"m17 13 5 5m-5 0 5-5\"></path>",
  _tmpl$2683 = "<path d=\"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z\"></path>",
  _tmpl$2684 = "<path d=\"m5 2 5 5\"></path>",
  _tmpl$2685 = "<path d=\"M2 13h15\"></path>",
  _tmpl$2686 = "<path d=\"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z\"></path>",
  _tmpl$2687 = "<rect width=\"16\" height=\"6\" x=\"2\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$2688 = "<path d=\"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"></path>",
  _tmpl$2689 = "<rect width=\"4\" height=\"6\" x=\"8\" y=\"16\" rx=\"1\"></rect>",
  _tmpl$2690 = "<path d=\"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z\"></path>",
  _tmpl$2691 = "<path d=\"M6 12V2h12v10\"></path>",
  _tmpl$2692 = "<path d=\"M14 2v4\"></path>",
  _tmpl$2693 = "<path d=\"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z\"></path>",
  _tmpl$2694 = "<path d=\"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7\"></path>",
  _tmpl$2695 = "<path d=\"M14.5 17.5 4.5 15\"></path>",
  _tmpl$2696 = "<circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$2697 = "<circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$2698 = "<circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$2699 = "<circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$2700 = "<path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z\"></path>",
  _tmpl$2701 = "<path d=\"m15 8-3 3-3-3\"></path>",
  _tmpl$2702 = "<path d=\"M14 15h1\"></path>",
  _tmpl$2703 = "<path d=\"M19 15h2\"></path>",
  _tmpl$2704 = "<path d=\"M3 15h2\"></path>",
  _tmpl$2705 = "<path d=\"M9 15h1\"></path>",
  _tmpl$2706 = "<path d=\"m16 15-3-3 3-3\"></path>",
  _tmpl$2707 = "<path d=\"M9 14v1\"></path>",
  _tmpl$2708 = "<path d=\"M9 19v2\"></path>",
  _tmpl$2709 = "<path d=\"M9 3v2\"></path>",
  _tmpl$2710 = "<path d=\"M9 9v1\"></path>",
  _tmpl$2711 = "<path d=\"m14 9 3 3-3 3\"></path>",
  _tmpl$2712 = "<path d=\"m8 9 3 3-3 3\"></path>",
  _tmpl$2713 = "<path d=\"M15 14v1\"></path>",
  _tmpl$2714 = "<path d=\"M15 19v2\"></path>",
  _tmpl$2715 = "<path d=\"M15 3v2\"></path>",
  _tmpl$2716 = "<path d=\"M15 9v1\"></path>",
  _tmpl$2717 = "<path d=\"m9 16 3-3 3 3\"></path>",
  _tmpl$2718 = "<path d=\"M14 9h1\"></path>",
  _tmpl$2719 = "<path d=\"M19 9h2\"></path>",
  _tmpl$2720 = "<path d=\"M3 9h2\"></path>",
  _tmpl$2721 = "<path d=\"M9 9h1\"></path>",
  _tmpl$2722 = "<path d=\"m15 14-3 3-3-3\"></path>",
  _tmpl$2723 = "<path d=\"M9 15h12\"></path>",
  _tmpl$2724 = "<path d=\"M3 15h12\"></path>",
  _tmpl$2725 = "<path d=\"M9 21V9\"></path>",
  _tmpl$2726 = "<path d=\"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>",
  _tmpl$2727 = "<path d=\"M8 21s-4-3-4-9 4-9 4-9\"></path>",
  _tmpl$2728 = "<path d=\"M16 3s4 3 4 9-4 9-4 9\"></path>",
  _tmpl$2729 = "<path d=\"M9 9a3 3 0 1 1 6 0\"></path>",
  _tmpl$2730 = "<path d=\"M11 15h2\"></path>",
  _tmpl$2731 = "<path d=\"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3\"></path>",
  _tmpl$2732 = "<path d=\"M12 19v3\"></path>",
  _tmpl$2733 = "<path d=\"M5.8 11.3 2 22l10.7-3.79\"></path>",
  _tmpl$2734 = "<path d=\"M4 3h.01\"></path>",
  _tmpl$2735 = "<path d=\"M22 8h.01\"></path>",
  _tmpl$2736 = "<path d=\"M15 2h.01\"></path>",
  _tmpl$2737 = "<path d=\"M22 20h.01\"></path>",
  _tmpl$2738 = "<path d=\"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10\"></path>",
  _tmpl$2739 = "<path d=\"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17\"></path>",
  _tmpl$2740 = "<path d=\"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7\"></path>",
  _tmpl$2741 = "<path d=\"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z\"></path>",
  _tmpl$2742 = "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"></rect>",
  _tmpl$2743 = "<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"></rect>",
  _tmpl$2744 = "<circle cx=\"11\" cy=\"4\" r=\"2\"></circle>",
  _tmpl$2745 = "<circle cx=\"18\" cy=\"8\" r=\"2\"></circle>",
  _tmpl$2746 = "<path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\"></path>",
  _tmpl$2747 = "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$2748 = "<path d=\"M15 14h.01\"></path>",
  _tmpl$2749 = "<path d=\"M9 6h6\"></path>",
  _tmpl$2750 = "<path d=\"M12 20h9\"></path>",
  _tmpl$2751 = "<path d=\"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z\"></path>",
  _tmpl$2752 = "<path d=\"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z\"></path>",
  _tmpl$2753 = "<path d=\"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18\"></path>",
  _tmpl$2754 = "<path d=\"m2.3 2.3 7.286 7.286\"></path>",
  _tmpl$2755 = "<circle cx=\"11\" cy=\"11\" r=\"2\"></circle>",
  _tmpl$2756 = "<path d=\"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z\"></path>",
  _tmpl$2757 = "<path d=\"m15 5 3 3\"></path>",
  _tmpl$2758 = "<path d=\"m15 5 4 4\"></path>",
  _tmpl$2759 = "<path d=\"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13\"></path>",
  _tmpl$2760 = "<path d=\"m8 6 2-2\"></path>",
  _tmpl$2761 = "<path d=\"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z\"></path>",
  _tmpl$2762 = "<path d=\"m18 16 2-2\"></path>",
  _tmpl$2763 = "<path d=\"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17\"></path>",
  _tmpl$2764 = "<path d=\"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z\"></path>",
  _tmpl$2765 = "<circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle>",
  _tmpl$2766 = "<circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>",
  _tmpl$2767 = "<path d=\"m9 20 3-6 3 6\"></path>",
  _tmpl$2768 = "<path d=\"m6 8 6 2 6-2\"></path>",
  _tmpl$2769 = "<path d=\"M12 10v4\"></path>",
  _tmpl$2770 = "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
  _tmpl$2771 = "<path d=\"M14.05 2a9 9 0 0 1 8 7.94\"></path>",
  _tmpl$2772 = "<path d=\"M14.05 6A5 5 0 0 1 18 10\"></path>",
  _tmpl$2773 = "<polyline points=\"18 2 22 6 18 10\"></polyline>",
  _tmpl$2774 = "<line x1=\"14\" x2=\"22\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$2775 = "<polyline points=\"16 2 16 8 22 8\"></polyline>",
  _tmpl$2776 = "<line x1=\"22\" x2=\"16\" y1=\"2\" y2=\"8\"></line>",
  _tmpl$2777 = "<line x1=\"16\" x2=\"22\" y1=\"2\" y2=\"8\"></line>",
  _tmpl$2778 = "<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path>",
  _tmpl$2779 = "<line x1=\"22\" x2=\"2\" y1=\"2\" y2=\"22\"></line>",
  _tmpl$2780 = "<polyline points=\"22 8 22 2 16 2\"></polyline>",
  _tmpl$2781 = "<line x1=\"16\" x2=\"22\" y1=\"8\" y2=\"2\"></line>",
  _tmpl$2782 = "<line x1=\"9\" x2=\"9\" y1=\"4\" y2=\"20\"></line>",
  _tmpl$2783 = "<path d=\"M4 7c0-1.7 1.3-3 3-3h13\"></path>",
  _tmpl$2784 = "<path d=\"M18 20c-1.7 0-3-1.3-3-3V4\"></path>",
  _tmpl$2785 = "<path d=\"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8\"></path>",
  _tmpl$2786 = "<path d=\"M6 14v4\"></path>",
  _tmpl$2787 = "<path d=\"M10 14v4\"></path>",
  _tmpl$2788 = "<path d=\"M14 14v4\"></path>",
  _tmpl$2789 = "<path d=\"M18 14v4\"></path>",
  _tmpl$2790 = "<path d=\"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912\"></path>",
  _tmpl$2791 = "<path d=\"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393\"></path>",
  _tmpl$2792 = "<path d=\"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z\"></path>",
  _tmpl$2793 = "<path d=\"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319\"></path>",
  _tmpl$2794 = "<path d=\"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4\"></path>",
  _tmpl$2795 = "<rect width=\"10\" height=\"7\" x=\"12\" y=\"13\" rx=\"2\"></rect>",
  _tmpl$2796 = "<path d=\"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3\"></path>",
  _tmpl$2797 = "<rect width=\"10\" height=\"7\" x=\"12\" y=\"13.5\" ry=\"2\"></rect>",
  _tmpl$2798 = "<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path>",
  _tmpl$2799 = "<path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>",
  _tmpl$2800 = "<path d=\"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z\"></path>",
  _tmpl$2801 = "<path d=\"M2 9v1c0 1.1.9 2 2 2h1\"></path>",
  _tmpl$2802 = "<path d=\"M16 11h0\"></path>",
  _tmpl$2803 = "<path d=\"M14 3v11\"></path>",
  _tmpl$2804 = "<path d=\"M14 9h-3a3 3 0 0 1 0-6h9\"></path>",
  _tmpl$2805 = "<path d=\"M18 3v11\"></path>",
  _tmpl$2806 = "<path d=\"M22 18H2l4-4\"></path>",
  _tmpl$2807 = "<path d=\"m6 22-4-4\"></path>",
  _tmpl$2808 = "<path d=\"M10 3v11\"></path>",
  _tmpl$2809 = "<path d=\"M10 9H7a1 1 0 0 1 0-6h8\"></path>",
  _tmpl$2810 = "<path d=\"m18 14 4 4H2\"></path>",
  _tmpl$2811 = "<path d=\"m22 18-4 4\"></path>",
  _tmpl$2812 = "<path d=\"M13 4v16\"></path>",
  _tmpl$2813 = "<path d=\"M19 4H9.5a4.5 4.5 0 0 0 0 9H13\"></path>",
  _tmpl$2814 = "<path d=\"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z\"></path>",
  _tmpl$2815 = "<path d=\"m8.5 8.5 7 7\"></path>",
  _tmpl$2816 = "<line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"22\"></line>",
  _tmpl$2817 = "<path d=\"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12\"></path>",
  _tmpl$2818 = "<path d=\"M15 9.34V6h1a2 2 0 0 0 0-4H7.89\"></path>",
  _tmpl$2819 = "<path d=\"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z\"></path>",
  _tmpl$2820 = "<path d=\"m2 22 1-1h3l9-9\"></path>",
  _tmpl$2821 = "<path d=\"M3 21v-3l9-9\"></path>",
  _tmpl$2822 = "<path d=\"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z\"></path>",
  _tmpl$2823 = "<path d=\"M15 11h.01\"></path>",
  _tmpl$2824 = "<path d=\"M11 15h.01\"></path>",
  _tmpl$2825 = "<path d=\"m2 16 20 6-6-20A20 20 0 0 0 2 16\"></path>",
  _tmpl$2826 = "<path d=\"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4\"></path>",
  _tmpl$2827 = "<path d=\"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z\"></path>",
  _tmpl$2828 = "<path d=\"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z\"></path>",
  _tmpl$2829 = "<path d=\"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\"></path>",
  _tmpl$2830 = "<polygon points=\"6 3 20 12 6 21 6 3\"></polygon>",
  _tmpl$2831 = "<path d=\"M9 2v6\"></path>",
  _tmpl$2832 = "<path d=\"M15 2v6\"></path>",
  _tmpl$2833 = "<path d=\"M12 17v5\"></path>",
  _tmpl$2834 = "<path d=\"M6 11V8h12v3a6 6 0 1 1-12 0v0Z\"></path>",
  _tmpl$2835 = "<path d=\"m13 2-2 2.5h3L12 7\"></path>",
  _tmpl$2836 = "<path d=\"M10 14v-3\"></path>",
  _tmpl$2837 = "<path d=\"M14 14v-3\"></path>",
  _tmpl$2838 = "<path d=\"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z\"></path>",
  _tmpl$2839 = "<path d=\"M12 22v-3\"></path>",
  _tmpl$2840 = "<path d=\"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z\"></path>",
  _tmpl$2841 = "<path d=\"m2 22 3-3\"></path>",
  _tmpl$2842 = "<path d=\"M7.5 13.5 10 11\"></path>",
  _tmpl$2843 = "<path d=\"M10.5 16.5 13 14\"></path>",
  _tmpl$2844 = "<path d=\"m18 3-4 4h6l-4 4\"></path>",
  _tmpl$2845 = "<path d=\"M12 22v-5\"></path>",
  _tmpl$2846 = "<path d=\"M9 8V2\"></path>",
  _tmpl$2847 = "<path d=\"M15 8V2\"></path>",
  _tmpl$2848 = "<path d=\"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z\"></path>",
  _tmpl$2849 = "<path d=\"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2\"></path>",
  _tmpl$2850 = "<path d=\"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z\"></path>",
  _tmpl$2851 = "<path d=\"M18 11.66V22a4 4 0 0 0 4-4V6\"></path>",
  _tmpl$2852 = "<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path>",
  _tmpl$2853 = "<polyline points=\"8 10 12 14 16 10\"></polyline>",
  _tmpl$2854 = "<path d=\"M16.85 18.58a9 9 0 1 0-9.7 0\"></path>",
  _tmpl$2855 = "<path d=\"M8 14a5 5 0 1 1 8 0\"></path>",
  _tmpl$2856 = "<circle cx=\"12\" cy=\"11\" r=\"1\"></circle>",
  _tmpl$2857 = "<path d=\"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z\"></path>",
  _tmpl$2858 = "<path d=\"M10 4.5V4a2 2 0 0 0-2.41-1.957\"></path>",
  _tmpl$2859 = "<path d=\"M13.9 8.4a2 2 0 0 0-1.26-1.295\"></path>",
  _tmpl$2860 = "<path d=\"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158\"></path>",
  _tmpl$2861 = "<path d=\"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343\"></path>",
  _tmpl$2862 = "<path d=\"M6 6v8\"></path>",
  _tmpl$2863 = "<path d=\"M22 14a8 8 0 0 1-8 8\"></path>",
  _tmpl$2864 = "<path d=\"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0\"></path>",
  _tmpl$2865 = "<path d=\"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1\"></path>",
  _tmpl$2866 = "<path d=\"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10\"></path>",
  _tmpl$2867 = "<path d=\"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"></path>",
  _tmpl$2868 = "<path d=\"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4\"></path>",
  _tmpl$2869 = "<path d=\"M10 22 9 8\"></path>",
  _tmpl$2870 = "<path d=\"m14 22 1-14\"></path>",
  _tmpl$2871 = "<path d=\"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z\"></path>",
  _tmpl$2872 = "<path d=\"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z\"></path>",
  _tmpl$2873 = "<path d=\"m22 22-5.5-5.5\"></path>",
  _tmpl$2874 = "<path d=\"M18 7c0-5.333-8-5.333-8 0\"></path>",
  _tmpl$2875 = "<path d=\"M10 7v14\"></path>",
  _tmpl$2876 = "<path d=\"M6 21h12\"></path>",
  _tmpl$2877 = "<path d=\"M6 13h10\"></path>",
  _tmpl$2878 = "<path d=\"M18.36 6.64A9 9 0 0 1 20.77 15\"></path>",
  _tmpl$2879 = "<path d=\"M6.16 6.16a9 9 0 1 0 12.68 12.68\"></path>",
  _tmpl$2880 = "<path d=\"M12 2v10\"></path>",
  _tmpl$2881 = "<path d=\"M18.4 6.6a9 9 0 1 1-12.77.04\"></path>",
  _tmpl$2882 = "<path d=\"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3\"></path>",
  _tmpl$2883 = "<path d=\"m7 21 5-5 5 5\"></path>",
  _tmpl$2884 = "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$2885 = "<path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"></path>",
  _tmpl$2886 = "<rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\"></rect>",
  _tmpl$2887 = "<path d=\"M5 7 3 5\"></path>",
  _tmpl$2888 = "<path d=\"M9 6V3\"></path>",
  _tmpl$2889 = "<path d=\"m13 7 2-2\"></path>",
  _tmpl$2890 = "<circle cx=\"9\" cy=\"13\" r=\"3\"></circle>",
  _tmpl$2891 = "<path d=\"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17\"></path>",
  _tmpl$2892 = "<path d=\"M16 16h2\"></path>",
  _tmpl$2893 = "<path d=\"M12 9v11\"></path>",
  _tmpl$2894 = "<path d=\"M2 9h13a2 2 0 0 1 2 2v9\"></path>",
  _tmpl$2895 = "<path d=\"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z\"></path>",
  _tmpl$2896 = "<path d=\"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z\"></path>",
  _tmpl$2897 = "<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2898 = "<rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2899 = "<rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>",
  _tmpl$2900 = "<path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$2901 = "<path d=\"M21 21v.01\"></path>",
  _tmpl$2902 = "<path d=\"M12 7v3a2 2 0 0 1-2 2H7\"></path>",
  _tmpl$2903 = "<path d=\"M3 12h.01\"></path>",
  _tmpl$2904 = "<path d=\"M12 3h.01\"></path>",
  _tmpl$2905 = "<path d=\"M12 16v.01\"></path>",
  _tmpl$2906 = "<path d=\"M16 12h1\"></path>",
  _tmpl$2907 = "<path d=\"M21 12v.01\"></path>",
  _tmpl$2908 = "<path d=\"M12 21v-1\"></path>",
  _tmpl$2909 = "<path d=\"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z\"></path>",
  _tmpl$2910 = "<path d=\"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z\"></path>",
  _tmpl$2911 = "<path d=\"M13 16a3 3 0 0 1 2.24 5\"></path>",
  _tmpl$2912 = "<path d=\"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3\"></path>",
  _tmpl$2913 = "<path d=\"M20 8.54V4a2 2 0 1 0-4 0v3\"></path>",
  _tmpl$2914 = "<path d=\"M7.612 12.524a3 3 0 1 0-1.6 4.3\"></path>",
  _tmpl$2915 = "<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"></path>",
  _tmpl$2916 = "<path d=\"M4 6h.01\"></path>",
  _tmpl$2917 = "<path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"></path>",
  _tmpl$2918 = "<path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"></path>",
  _tmpl$2919 = "<path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"></path>",
  _tmpl$2920 = "<path d=\"m13.41 10.59 5.66-5.66\"></path>",
  _tmpl$2921 = "<path d=\"M12 12h0.01\"></path>",
  _tmpl$2922 = "<path d=\"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z\"></path>",
  _tmpl$2923 = "<path d=\"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z\"></path>",
  _tmpl$2924 = "<path d=\"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z\"></path>",
  _tmpl$2925 = "<path d=\"M3 12h4l3 9 4-17h7\"></path>",
  _tmpl$2926 = "<path d=\"M5 16v2\"></path>",
  _tmpl$2927 = "<path d=\"M19 16v2\"></path>",
  _tmpl$2928 = "<rect width=\"20\" height=\"8\" x=\"2\" y=\"8\" rx=\"2\"></rect>",
  _tmpl$2929 = "<path d=\"M18 12h0\"></path>",
  _tmpl$2930 = "<path d=\"M4.9 16.1C1 12.2 1 5.8 4.9 1.9\"></path>",
  _tmpl$2931 = "<path d=\"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5\"></path>",
  _tmpl$2932 = "<circle cx=\"12\" cy=\"9\" r=\"2\"></circle>",
  _tmpl$2933 = "<path d=\"M16.2 4.8c2 2 2.26 5.11.8 7.47\"></path>",
  _tmpl$2934 = "<path d=\"M19.1 1.9a9.96 9.96 0 0 1 0 14.1\"></path>",
  _tmpl$2935 = "<path d=\"M9.5 18h5\"></path>",
  _tmpl$2936 = "<path d=\"m8 22 4-11 4 11\"></path>",
  _tmpl$2937 = "<path d=\"M4.9 19.1C1 15.2 1 8.8 4.9 4.9\"></path>",
  _tmpl$2938 = "<path d=\"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5\"></path>",
  _tmpl$2939 = "<path d=\"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5\"></path>",
  _tmpl$2940 = "<path d=\"M19.1 4.9C23 8.8 23 15.1 19.1 19\"></path>",
  _tmpl$2941 = "<path d=\"M20.34 17.52a10 10 0 1 0-2.82 2.82\"></path>",
  _tmpl$2942 = "<path d=\"m13.41 13.41 4.18 4.18\"></path>",
  _tmpl$2943 = "<path d=\"M5 15h14\"></path>",
  _tmpl$2944 = "<path d=\"M5 9h14\"></path>",
  _tmpl$2945 = "<path d=\"m14 20-5-5 6-6-5-5\"></path>",
  _tmpl$2946 = "<path d=\"M22 17a10 10 0 0 0-20 0\"></path>",
  _tmpl$2947 = "<path d=\"M6 17a6 6 0 0 1 12 0\"></path>",
  _tmpl$2948 = "<path d=\"M10 17a2 2 0 0 1 4 0\"></path>",
  _tmpl$2949 = "<path d=\"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4\"></path>",
  _tmpl$2950 = "<path d=\"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3\"></path>",
  _tmpl$2951 = "<path d=\"M13.2 18a3 3 0 0 0-2.2-5\"></path>",
  _tmpl$2952 = "<path d=\"M13 22H4a2 2 0 0 1 0-4h12\"></path>",
  _tmpl$2953 = "<path d=\"M16 9h.01\"></path>",
  _tmpl$2954 = "<rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$2955 = "<path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\"></path>",
  _tmpl$2956 = "<path d=\"M12 6.5v11\"></path>",
  _tmpl$2957 = "<path d=\"M8 12h5\"></path>",
  _tmpl$2958 = "<path d=\"M16 9.5a4 4 0 1 0 0 5.2\"></path>",
  _tmpl$2959 = "<path d=\"M12 17.5 8 15h1a4 4 0 0 0 0-8\"></path>",
  _tmpl$2960 = "<path d=\"m12 10 3-3\"></path>",
  _tmpl$2961 = "<path d=\"m9 7 3 3v7.5\"></path>",
  _tmpl$2962 = "<path d=\"M9 11h6\"></path>",
  _tmpl$2963 = "<path d=\"M8 13h5\"></path>",
  _tmpl$2964 = "<path d=\"M10 17V9.5a2.5 2.5 0 0 1 5 0\"></path>",
  _tmpl$2965 = "<path d=\"M8 17h7\"></path>",
  _tmpl$2966 = "<path d=\"M8 15h5\"></path>",
  _tmpl$2967 = "<path d=\"M8 11h5a2 2 0 1 0 0-4h-3v10\"></path>",
  _tmpl$2968 = "<path d=\"M10 17V7h5\"></path>",
  _tmpl$2969 = "<path d=\"M10 11h4\"></path>",
  _tmpl$2970 = "<path d=\"M14 8H8\"></path>",
  _tmpl$2971 = "<path d=\"M13 16H8\"></path>",
  _tmpl$2972 = "<path d=\"M12 17.5v-11\"></path>",
  _tmpl$2973 = "<path d=\"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5\"></path>",
  _tmpl$2974 = "<path d=\"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12\"></path>",
  _tmpl$2975 = "<path d=\"m14 16-3 3 3 3\"></path>",
  _tmpl$2976 = "<path d=\"M8.293 13.596 7.196 9.5 3.1 10.598\"></path>",
  _tmpl$2977 = "<path d=\"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843\"></path>",
  _tmpl$2978 = "<path d=\"m13.378 9.633 4.096 1.098 1.097-4.096\"></path>",
  _tmpl$2979 = "<path d=\"m15 14 5-5-5-5\"></path>",
  _tmpl$2980 = "<path d=\"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13\"></path>",
  _tmpl$2981 = "<circle cx=\"12\" cy=\"17\" r=\"1\"></circle>",
  _tmpl$2982 = "<path d=\"M21 7v6h-6\"></path>",
  _tmpl$2983 = "<path d=\"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7\"></path>",
  _tmpl$2984 = "<path d=\"M3 2v6h6\"></path>",
  _tmpl$2985 = "<path d=\"M21 12A9 9 0 0 0 6 5.3L3 8\"></path>",
  _tmpl$2986 = "<path d=\"M21 22v-6h-6\"></path>",
  _tmpl$2987 = "<path d=\"M3 12a9 9 0 0 0 15 6.7l3-2.7\"></path>",
  _tmpl$2988 = "<path d=\"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>",
  _tmpl$2989 = "<path d=\"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16\"></path>",
  _tmpl$2990 = "<path d=\"M16 16h5v5\"></path>",
  _tmpl$2991 = "<path d=\"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47\"></path>",
  _tmpl$2992 = "<path d=\"M8 16H3v5\"></path>",
  _tmpl$2993 = "<path d=\"M3 12C3 9.51 4 7.26 5.64 5.64\"></path>",
  _tmpl$2994 = "<path d=\"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64\"></path>",
  _tmpl$2995 = "<path d=\"M21 12c0 1-.16 1.97-.47 2.87\"></path>",
  _tmpl$2996 = "<path d=\"M21 3v5h-5\"></path>",
  _tmpl$2997 = "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"></path>",
  _tmpl$2998 = "<path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"></path>",
  _tmpl$2999 = "<path d=\"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z\"></path>",
  _tmpl$3000 = "<path d=\"M15 7v6\"></path>",
  _tmpl$3001 = "<path d=\"M17 3v10\"></path>",
  _tmpl$3002 = "<path d=\"m12.67 5.5 8.66 5\"></path>",
  _tmpl$3003 = "<path d=\"m12.67 10.5 8.66-5\"></path>",
  _tmpl$3004 = "<path d=\"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z\"></path>",
  _tmpl$3005 = "<path d=\"M4 7V4h16v3\"></path>",
  _tmpl$3006 = "<path d=\"M5 20h6\"></path>",
  _tmpl$3007 = "<path d=\"M13 4 8 20\"></path>",
  _tmpl$3008 = "<path d=\"m15 15 5 5\"></path>",
  _tmpl$3009 = "<path d=\"m20 15-5 5\"></path>",
  _tmpl$3010 = "<path d=\"m17 2 4 4-4 4\"></path>",
  _tmpl$3011 = "<path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"></path>",
  _tmpl$3012 = "<path d=\"m7 22-4-4 4-4\"></path>",
  _tmpl$3013 = "<path d=\"M21 13v1a4 4 0 0 1-4 4H3\"></path>",
  _tmpl$3014 = "<path d=\"M11 10h1v4\"></path>",
  _tmpl$3015 = "<path d=\"m2 9 3-3 3 3\"></path>",
  _tmpl$3016 = "<path d=\"M13 18H7a2 2 0 0 1-2-2V6\"></path>",
  _tmpl$3017 = "<path d=\"m22 15-3 3-3-3\"></path>",
  _tmpl$3018 = "<path d=\"M11 6h6a2 2 0 0 1 2 2v10\"></path>",
  _tmpl$3019 = "<path d=\"M14 4c0-1.1.9-2 2-2\"></path>",
  _tmpl$3020 = "<path d=\"M20 2c1.1 0 2 .9 2 2\"></path>",
  _tmpl$3021 = "<path d=\"M22 8c0 1.1-.9 2-2 2\"></path>",
  _tmpl$3022 = "<path d=\"M16 10c-1.1 0-2-.9-2-2\"></path>",
  _tmpl$3023 = "<path d=\"m3 7 3 3 3-3\"></path>",
  _tmpl$3024 = "<path d=\"M6 10V5c0-1.7 1.3-3 3-3h1\"></path>",
  _tmpl$3025 = "<rect width=\"8\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$3026 = "<path d=\"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2\"></path>",
  _tmpl$3027 = "<path d=\"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2\"></path>",
  _tmpl$3028 = "<polyline points=\"7 17 2 12 7 7\"></polyline>",
  _tmpl$3029 = "<polyline points=\"12 17 7 12 12 7\"></polyline>",
  _tmpl$3030 = "<path d=\"M22 18v-2a4 4 0 0 0-4-4H7\"></path>",
  _tmpl$3031 = "<polyline points=\"9 17 4 12 9 7\"></polyline>",
  _tmpl$3032 = "<path d=\"M20 18v-2a4 4 0 0 0-4-4H4\"></path>",
  _tmpl$3033 = "<polygon points=\"11 19 2 12 11 5 11 19\"></polygon>",
  _tmpl$3034 = "<polygon points=\"22 19 13 12 22 5 22 19\"></polygon>",
  _tmpl$3035 = "<path d=\"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44\"></path>",
  _tmpl$3036 = "<path d=\"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z\"></path>",
  _tmpl$3037 = "<path d=\"m9.35 14.53 2.64-3.31\"></path>",
  _tmpl$3038 = "<path d=\"m11.97 18.04 2.99 4 3.54-2.54-3.93-5\"></path>",
  _tmpl$3039 = "<path d=\"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0\"></path>",
  _tmpl$3040 = "<path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\"></path>",
  _tmpl$3041 = "<path d=\"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\"></path>",
  _tmpl$3042 = "<path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\"></path>",
  _tmpl$3043 = "<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"></path>",
  _tmpl$3044 = "<polyline points=\"3.5 2 6.5 12.5 18 12.5\"></polyline>",
  _tmpl$3045 = "<line x1=\"9.5\" x2=\"5.5\" y1=\"12.5\" y2=\"20\"></line>",
  _tmpl$3046 = "<line x1=\"15\" x2=\"18.5\" y1=\"12.5\" y2=\"20\"></line>",
  _tmpl$3047 = "<path d=\"M2.75 18a13 13 0 0 0 18.5 0\"></path>",
  _tmpl$3048 = "<path d=\"M6 19V5\"></path>",
  _tmpl$3049 = "<path d=\"M10 19V6.8\"></path>",
  _tmpl$3050 = "<path d=\"M14 19v-7.8\"></path>",
  _tmpl$3051 = "<path d=\"M18 5v4\"></path>",
  _tmpl$3052 = "<path d=\"M18 19v-6\"></path>",
  _tmpl$3053 = "<path d=\"M22 19V9\"></path>",
  _tmpl$3054 = "<path d=\"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65\"></path>",
  _tmpl$3055 = "<path d=\"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2\"></path>",
  _tmpl$3056 = "<path d=\"m15.194 13.707 3.814 1.86-1.86 3.814\"></path>",
  _tmpl$3057 = "<path d=\"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4\"></path>",
  _tmpl$3058 = "<path d=\"M20 9V7a2 2 0 0 0-2-2h-6\"></path>",
  _tmpl$3059 = "<path d=\"m15 2-3 3 3 3\"></path>",
  _tmpl$3060 = "<path d=\"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$3061 = "<path d=\"M12 5H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$3062 = "<path d=\"m9 8 3-3-3-3\"></path>",
  _tmpl$3063 = "<path d=\"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"></path>",
  _tmpl$3064 = "<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\"></path>",
  _tmpl$3065 = "<circle cx=\"6\" cy=\"19\" r=\"3\"></circle>",
  _tmpl$3066 = "<path d=\"M9 19h8.5c.4 0 .9-.1 1.3-.2\"></path>",
  _tmpl$3067 = "<path d=\"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12\"></path>",
  _tmpl$3068 = "<path d=\"M21 15.3a3.5 3.5 0 0 0-3.3-3.3\"></path>",
  _tmpl$3069 = "<path d=\"M15 5h-4.3\"></path>",
  _tmpl$3070 = "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle>",
  _tmpl$3071 = "<path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\"></path>",
  _tmpl$3072 = "<path d=\"M6.01 18H6\"></path>",
  _tmpl$3073 = "<path d=\"M10.01 18H10\"></path>",
  _tmpl$3074 = "<path d=\"M15 10v4\"></path>",
  _tmpl$3075 = "<path d=\"M17.84 7.17a4 4 0 0 0-5.66 0\"></path>",
  _tmpl$3076 = "<path d=\"M20.66 4.34a8 8 0 0 0-11.31 0\"></path>",
  _tmpl$3077 = "<path d=\"M21 9H3\"></path>",
  _tmpl$3078 = "<path d=\"M21 15H3\"></path>",
  _tmpl$3079 = "<path d=\"M21 7.5H3\"></path>",
  _tmpl$3080 = "<path d=\"M21 12H3\"></path>",
  _tmpl$3081 = "<path d=\"M21 16.5H3\"></path>",
  _tmpl$3082 = "<path d=\"M4 11a9 9 0 0 1 9 9\"></path>",
  _tmpl$3083 = "<path d=\"M4 4a16 16 0 0 1 16 16\"></path>",
  _tmpl$3084 = "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\"></path>",
  _tmpl$3085 = "<path d=\"m14.5 12.5 2-2\"></path>",
  _tmpl$3086 = "<path d=\"m11.5 9.5 2-2\"></path>",
  _tmpl$3087 = "<path d=\"m8.5 6.5 2-2\"></path>",
  _tmpl$3088 = "<path d=\"m17.5 15.5 2-2\"></path>",
  _tmpl$3089 = "<path d=\"M6 11h8a4 4 0 0 0 0-8H9v18\"></path>",
  _tmpl$3090 = "<path d=\"M6 15h8\"></path>",
  _tmpl$3091 = "<path d=\"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z\"></path>",
  _tmpl$3092 = "<path d=\"M21 14 10 2 3 14h18Z\"></path>",
  _tmpl$3093 = "<path d=\"M10 2v16\"></path>",
  _tmpl$3094 = "<path d=\"M7 21h10\"></path>",
  _tmpl$3095 = "<path d=\"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z\"></path>",
  _tmpl$3096 = "<path d=\"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1\"></path>",
  _tmpl$3097 = "<path d=\"m13 12 4-4\"></path>",
  _tmpl$3098 = "<path d=\"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2\"></path>",
  _tmpl$3099 = "<path d=\"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3\"></path>",
  _tmpl$3100 = "<path d=\"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83\"></path>",
  _tmpl$3101 = "<path d=\"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z\"></path>",
  _tmpl$3102 = "<path d=\"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z\"></path>",
  _tmpl$3103 = "<path d=\"M4 10a7.31 7.31 0 0 0 10 10Z\"></path>",
  _tmpl$3104 = "<path d=\"m9 15 3-3\"></path>",
  _tmpl$3105 = "<path d=\"M17 13a6 6 0 0 0-6-6\"></path>",
  _tmpl$3106 = "<path d=\"M21 13A10 10 0 0 0 11 3\"></path>",
  _tmpl$3107 = "<path d=\"M13 7 9 3 5 7l4 4\"></path>",
  _tmpl$3108 = "<path d=\"m17 11 4 4-4 4-4-4\"></path>",
  _tmpl$3109 = "<path d=\"m8 12 4 4 6-6-4-4Z\"></path>",
  _tmpl$3110 = "<path d=\"m16 8 3-3\"></path>",
  _tmpl$3111 = "<path d=\"M9 21a6 6 0 0 0-6-6\"></path>",
  _tmpl$3112 = "<path d=\"M10 2v3a1 1 0 0 0 1 1h5\"></path>",
  _tmpl$3113 = "<path d=\"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6\"></path>",
  _tmpl$3114 = "<path d=\"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z\"></path>",
  _tmpl$3115 = "<path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"></path>",
  _tmpl$3116 = "<path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"></path>",
  _tmpl$3117 = "<path d=\"M7 3v4a1 1 0 0 0 1 1h7\"></path>",
  _tmpl$3118 = "<path d=\"M5 7v12h12\"></path>",
  _tmpl$3119 = "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\"></path>",
  _tmpl$3120 = "<path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\"></path>",
  _tmpl$3121 = "<path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\"></path>",
  _tmpl$3122 = "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path>",
  _tmpl$3123 = "<path d=\"M14 15H9v-5\"></path>",
  _tmpl$3124 = "<path d=\"M21 3 9 15\"></path>",
  _tmpl$3125 = "<path d=\"M8 7v10\"></path>",
  _tmpl$3126 = "<path d=\"M17 7v10\"></path>",
  _tmpl$3127 = "<path d=\"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5\"></path>",
  _tmpl$3128 = "<path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path>",
  _tmpl$3129 = "<path d=\"m16 16-1.9-1.9\"></path>",
  _tmpl$3130 = "<path d=\"M7 8h8\"></path>",
  _tmpl$3131 = "<path d=\"M7 16h6\"></path>",
  _tmpl$3132 = "<circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3133 = "<circle cx=\"18.5\" cy=\"5.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3134 = "<circle cx=\"11.5\" cy=\"11.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3135 = "<circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3136 = "<circle cx=\"17.5\" cy=\"14.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3137 = "<path d=\"M14 22v-4a2 2 0 1 0-4 0v4\"></path>",
  _tmpl$3138 = "<path d=\"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2\"></path>",
  _tmpl$3139 = "<path d=\"M18 5v17\"></path>",
  _tmpl$3140 = "<path d=\"m4 6 8-4 8 4\"></path>",
  _tmpl$3141 = "<path d=\"M6 5v17\"></path>",
  _tmpl$3142 = "<path d=\"M5.42 9.42 8 12\"></path>",
  _tmpl$3143 = "<circle cx=\"4\" cy=\"8\" r=\"2\"></circle>",
  _tmpl$3144 = "<path d=\"m14 6-8.58 8.58\"></path>",
  _tmpl$3145 = "<path d=\"M10.8 14.8 14 18\"></path>",
  _tmpl$3146 = "<path d=\"M8.12 8.12 12 12\"></path>",
  _tmpl$3147 = "<path d=\"M20 4 8.12 15.88\"></path>",
  _tmpl$3148 = "<path d=\"M14.8 14.8 20 20\"></path>",
  _tmpl$3149 = "<path d=\"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3\"></path>",
  _tmpl$3150 = "<path d=\"m17 8 5-5\"></path>",
  _tmpl$3151 = "<path d=\"M17 3h5v5\"></path>",
  _tmpl$3152 = "<path d=\"M15 12h-5\"></path>",
  _tmpl$3153 = "<path d=\"M15 8h-5\"></path>",
  _tmpl$3154 = "<path d=\"M19 17V5a2 2 0 0 0-2-2H4\"></path>",
  _tmpl$3155 = "<path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"></path>",
  _tmpl$3156 = "<path d=\"m8 11 2 2 4-4\"></path>",
  _tmpl$3157 = "<path d=\"m13 13.5 2-2.5-2-2.5\"></path>",
  _tmpl$3158 = "<path d=\"M9 8.5 7 11l2 2.5\"></path>",
  _tmpl$3159 = "<path d=\"m13.5 8.5-5 5\"></path>",
  _tmpl$3160 = "<path d=\"m8.5 8.5 5 5\"></path>",
  _tmpl$3161 = "<path d=\"m3 3 3 9-3 9 19-9Z\"></path>",
  _tmpl$3162 = "<path d=\"M6 12h16\"></path>",
  _tmpl$3163 = "<rect x=\"14\" y=\"14\" width=\"8\" height=\"8\" rx=\"2\"></rect>",
  _tmpl$3164 = "<rect x=\"2\" y=\"2\" width=\"8\" height=\"8\" rx=\"2\"></rect>",
  _tmpl$3165 = "<path d=\"M7 14v1a2 2 0 0 0 2 2h1\"></path>",
  _tmpl$3166 = "<path d=\"M14 7h1a2 2 0 0 1 2 2v1\"></path>",
  _tmpl$3167 = "<path d=\"m22 2-7 20-4-9-9-4Z\"></path>",
  _tmpl$3168 = "<path d=\"M22 2 11 13\"></path>",
  _tmpl$3169 = "<polyline points=\"8 8 12 4 16 8\"></polyline>",
  _tmpl$3170 = "<polyline points=\"16 16 12 20 8 16\"></polyline>",
  _tmpl$3171 = "<line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"21\"></line>",
  _tmpl$3172 = "<polyline points=\"8 8 4 12 8 16\"></polyline>",
  _tmpl$3173 = "<polyline points=\"16 16 20 12 16 8\"></polyline>",
  _tmpl$3174 = "<path d=\"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5\"></path>",
  _tmpl$3175 = "<path d=\"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5\"></path>",
  _tmpl$3176 = "<path d=\"M6 6h.01\"></path>",
  _tmpl$3177 = "<path d=\"m15.7 13.4-.9-.3\"></path>",
  _tmpl$3178 = "<path d=\"m9.2 10.9-.9-.3\"></path>",
  _tmpl$3179 = "<path d=\"m10.6 15.7.3-.9\"></path>",
  _tmpl$3180 = "<path d=\"m13.6 15.7-.4-1\"></path>",
  _tmpl$3181 = "<path d=\"m10.8 9.3-.4-1\"></path>",
  _tmpl$3182 = "<path d=\"m8.3 13.6 1-.4\"></path>",
  _tmpl$3183 = "<path d=\"m14.7 10.8 1-.4\"></path>",
  _tmpl$3184 = "<path d=\"m13.4 8.3-.3.9\"></path>",
  _tmpl$3185 = "<path d=\"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2\"></path>",
  _tmpl$3186 = "<path d=\"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2\"></path>",
  _tmpl$3187 = "<path d=\"m13 6-4 6h6l-4 6\"></path>",
  _tmpl$3188 = "<path d=\"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5\"></path>",
  _tmpl$3189 = "<path d=\"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z\"></path>",
  _tmpl$3190 = "<path d=\"M22 17v-1a2 2 0 0 0-2-2h-1\"></path>",
  _tmpl$3191 = "<path d=\"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z\"></path>",
  _tmpl$3192 = "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$3193 = "<rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$3194 = "<line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$3195 = "<line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$3196 = "<path d=\"M20 7h-9\"></path>",
  _tmpl$3197 = "<path d=\"M14 17H5\"></path>",
  _tmpl$3198 = "<circle cx=\"7\" cy=\"7\" r=\"3\"></circle>",
  _tmpl$3199 = "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"></path>",
  _tmpl$3200 = "<path d=\"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z\"></path>",
  _tmpl$3201 = "<rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"></rect>",
  _tmpl$3202 = "<circle cx=\"17.5\" cy=\"17.5\" r=\"3.5\"></circle>",
  _tmpl$3203 = "<circle cx=\"6\" cy=\"12\" r=\"3\"></circle>",
  _tmpl$3204 = "<circle cx=\"18\" cy=\"19\" r=\"3\"></circle>",
  _tmpl$3205 = "<line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"></line>",
  _tmpl$3206 = "<line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"></line>",
  _tmpl$3207 = "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path>",
  _tmpl$3208 = "<polyline points=\"16 6 12 2 8 6\"></polyline>",
  _tmpl$3209 = "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"15\"></line>",
  _tmpl$3210 = "<line x1=\"3\" x2=\"21\" y1=\"9\" y2=\"9\"></line>",
  _tmpl$3211 = "<line x1=\"3\" x2=\"21\" y1=\"15\" y2=\"15\"></line>",
  _tmpl$3212 = "<line x1=\"9\" x2=\"9\" y1=\"9\" y2=\"21\"></line>",
  _tmpl$3213 = "<line x1=\"15\" x2=\"15\" y1=\"9\" y2=\"21\"></line>",
  _tmpl$3214 = "<path d=\"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44\"></path>",
  _tmpl$3215 = "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path>",
  _tmpl$3216 = "<path d=\"m4.243 5.21 14.39 12.472\"></path>",
  _tmpl$3217 = "<path d=\"M12 22V2\"></path>",
  _tmpl$3218 = "<path d=\"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71\"></path>",
  _tmpl$3219 = "<path d=\"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264\"></path>",
  _tmpl$3220 = "<path d=\"m9.5 9.5 5 5\"></path>",
  _tmpl$3221 = "<path d=\"M12 2v7.5\"></path>",
  _tmpl$3222 = "<path d=\"m19 5-5.23 5.23\"></path>",
  _tmpl$3223 = "<path d=\"M22 12h-7.5\"></path>",
  _tmpl$3224 = "<path d=\"m19 19-5.23-5.23\"></path>",
  _tmpl$3225 = "<path d=\"M12 14.5V22\"></path>",
  _tmpl$3226 = "<path d=\"M10.23 13.77 5 19\"></path>",
  _tmpl$3227 = "<path d=\"M9.5 12H2\"></path>",
  _tmpl$3228 = "<path d=\"M10.23 10.23 5 5\"></path>",
  _tmpl$3229 = "<circle cx=\"12\" cy=\"12\" r=\"2.5\"></circle>",
  _tmpl$3230 = "<path d=\"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"></path>",
  _tmpl$3231 = "<path d=\"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76\"></path>",
  _tmpl$3232 = "<path d=\"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6\"></path>",
  _tmpl$3233 = "<path d=\"M12 2v3\"></path>",
  _tmpl$3234 = "<path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\"></path>",
  _tmpl$3235 = "<path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\"></path>",
  _tmpl$3236 = "<path d=\"M16 10a4 4 0 0 1-8 0\"></path>",
  _tmpl$3237 = "<path d=\"m15 11-1 9\"></path>",
  _tmpl$3238 = "<path d=\"m19 11-4-7\"></path>",
  _tmpl$3239 = "<path d=\"M2 11h20\"></path>",
  _tmpl$3240 = "<path d=\"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4\"></path>",
  _tmpl$3241 = "<path d=\"M4.5 15.5h15\"></path>",
  _tmpl$3242 = "<path d=\"m5 11 4-7\"></path>",
  _tmpl$3243 = "<path d=\"m9 11 1 9\"></path>",
  _tmpl$3244 = "<circle cx=\"8\" cy=\"21\" r=\"1\"></circle>",
  _tmpl$3245 = "<circle cx=\"19\" cy=\"21\" r=\"1\"></circle>",
  _tmpl$3246 = "<path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"></path>",
  _tmpl$3247 = "<path d=\"M2 22v-5l5-5 5 5-5 5z\"></path>",
  _tmpl$3248 = "<path d=\"M9.5 14.5 16 8\"></path>",
  _tmpl$3249 = "<path d=\"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2\"></path>",
  _tmpl$3250 = "<path d=\"m4 4 2.5 2.5\"></path>",
  _tmpl$3251 = "<path d=\"M13.5 6.5a4.95 4.95 0 0 0-7 7\"></path>",
  _tmpl$3252 = "<path d=\"M15 5 5 15\"></path>",
  _tmpl$3253 = "<path d=\"M14 17v.01\"></path>",
  _tmpl$3254 = "<path d=\"M10 16v.01\"></path>",
  _tmpl$3255 = "<path d=\"M13 13v.01\"></path>",
  _tmpl$3256 = "<path d=\"M16 10v.01\"></path>",
  _tmpl$3257 = "<path d=\"M11 20v.01\"></path>",
  _tmpl$3258 = "<path d=\"M17 14v.01\"></path>",
  _tmpl$3259 = "<path d=\"M20 11v.01\"></path>",
  _tmpl$3260 = "<path d=\"m15 15 6 6m-6-6v4.8m0-4.8h4.8\"></path>",
  _tmpl$3261 = "<path d=\"M9 19.8V15m0 0H4.2M9 15l-6 6\"></path>",
  _tmpl$3262 = "<path d=\"M15 4.2V9m0 0h4.8M15 9l6-6\"></path>",
  _tmpl$3263 = "<path d=\"M9 4.2V9m0 0H4.2M9 9 3 3\"></path>",
  _tmpl$3264 = "<path d=\"M12 22v-7l-2-2\"></path>",
  _tmpl$3265 = "<path d=\"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z\"></path>",
  _tmpl$3266 = "<path d=\"m14 14-2 2\"></path>",
  _tmpl$3267 = "<path d=\"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22\"></path>",
  _tmpl$3268 = "<path d=\"m18 2 4 4-4 4\"></path>",
  _tmpl$3269 = "<path d=\"M2 6h1.9c1.5 0 2.9.9 3.6 2.2\"></path>",
  _tmpl$3270 = "<path d=\"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8\"></path>",
  _tmpl$3271 = "<path d=\"m18 14 4 4-4 4\"></path>",
  _tmpl$3272 = "<path d=\"M18 7V4H6l6 8-6 8h12v-3\"></path>",
  _tmpl$3273 = "<path d=\"M2 20h.01\"></path>",
  _tmpl$3274 = "<path d=\"M7 20v-4\"></path>",
  _tmpl$3275 = "<path d=\"M17 20V8\"></path>",
  _tmpl$3276 = "<path d=\"M22 4v16\"></path>",
  _tmpl$3277 = "<path d=\"M10 9H4L2 7l2-2h6\"></path>",
  _tmpl$3278 = "<path d=\"M14 5h6l2 2-2 2h-6\"></path>",
  _tmpl$3279 = "<path d=\"M10 22V4a2 2 0 1 1 4 0v18\"></path>",
  _tmpl$3280 = "<path d=\"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z\"></path>",
  _tmpl$3281 = "<path d=\"M7 18v-6a5 5 0 1 1 10 0v6\"></path>",
  _tmpl$3282 = "<path d=\"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z\"></path>",
  _tmpl$3283 = "<path d=\"M21 12h1\"></path>",
  _tmpl$3284 = "<path d=\"M18.5 4.5 18 5\"></path>",
  _tmpl$3285 = "<path d=\"M2 12h1\"></path>",
  _tmpl$3286 = "<path d=\"M12 2v1\"></path>",
  _tmpl$3287 = "<path d=\"m4.929 4.929.707.707\"></path>",
  _tmpl$3288 = "<polygon points=\"19 20 9 12 19 4 19 20\"></polygon>",
  _tmpl$3289 = "<line x1=\"5\" x2=\"5\" y1=\"19\" y2=\"5\"></line>",
  _tmpl$3290 = "<polygon points=\"5 4 15 12 5 20 5 4\"></polygon>",
  _tmpl$3291 = "<line x1=\"19\" x2=\"19\" y1=\"5\" y2=\"19\"></line>",
  _tmpl$3292 = "<path d=\"M8 20v2h8v-2\"></path>",
  _tmpl$3293 = "<path d=\"m12.5 17-.5-1-.5 1h1z\"></path>",
  _tmpl$3294 = "<path d=\"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20\"></path>",
  _tmpl$3295 = "<rect width=\"3\" height=\"8\" x=\"13\" y=\"2\" rx=\"1.5\"></rect>",
  _tmpl$3296 = "<path d=\"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5\"></path>",
  _tmpl$3297 = "<rect width=\"3\" height=\"8\" x=\"8\" y=\"14\" rx=\"1.5\"></rect>",
  _tmpl$3298 = "<path d=\"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5\"></path>",
  _tmpl$3299 = "<rect width=\"8\" height=\"3\" x=\"14\" y=\"13\" rx=\"1.5\"></rect>",
  _tmpl$3300 = "<path d=\"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5\"></path>",
  _tmpl$3301 = "<rect width=\"8\" height=\"3\" x=\"2\" y=\"8\" rx=\"1.5\"></rect>",
  _tmpl$3302 = "<path d=\"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5\"></path>",
  _tmpl$3303 = "<path d=\"m8 14-6 6h9v-3\"></path>",
  _tmpl$3304 = "<path d=\"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z\"></path>",
  _tmpl$3305 = "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\"></line>",
  _tmpl$3306 = "<line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\"></line>",
  _tmpl$3307 = "<line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$3308 = "<line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$3309 = "<line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$3310 = "<line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$3311 = "<line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\"></line>",
  _tmpl$3312 = "<line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\"></line>",
  _tmpl$3313 = "<line x1=\"4\" x2=\"4\" y1=\"21\" y2=\"14\"></line>",
  _tmpl$3314 = "<line x1=\"4\" x2=\"4\" y1=\"10\" y2=\"3\"></line>",
  _tmpl$3315 = "<line x1=\"12\" x2=\"12\" y1=\"21\" y2=\"12\"></line>",
  _tmpl$3316 = "<line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"3\"></line>",
  _tmpl$3317 = "<line x1=\"20\" x2=\"20\" y1=\"21\" y2=\"16\"></line>",
  _tmpl$3318 = "<line x1=\"20\" x2=\"20\" y1=\"12\" y2=\"3\"></line>",
  _tmpl$3319 = "<line x1=\"2\" x2=\"6\" y1=\"14\" y2=\"14\"></line>",
  _tmpl$3320 = "<line x1=\"10\" x2=\"14\" y1=\"8\" y2=\"8\"></line>",
  _tmpl$3321 = "<line x1=\"18\" x2=\"22\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$3322 = "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$3323 = "<path d=\"M12.667 8 10 12h4l-2.667 4\"></path>",
  _tmpl$3324 = "<rect width=\"7\" height=\"12\" x=\"2\" y=\"6\" rx=\"1\"></rect>",
  _tmpl$3325 = "<path d=\"M13 8.32a7.43 7.43 0 0 1 0 7.36\"></path>",
  _tmpl$3326 = "<path d=\"M16.46 6.21a11.76 11.76 0 0 1 0 11.58\"></path>",
  _tmpl$3327 = "<path d=\"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8\"></path>",
  _tmpl$3328 = "<path d=\"M22 11v1a10 10 0 1 1-9-10\"></path>",
  _tmpl$3329 = "<path d=\"M16 5h6\"></path>",
  _tmpl$3330 = "<path d=\"M19 2v6\"></path>",
  _tmpl$3331 = "<path d=\"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0\"></path>",
  _tmpl$3332 = "<circle cx=\"10\" cy=\"13\" r=\"8\"></circle>",
  _tmpl$3333 = "<path d=\"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6\"></path>",
  _tmpl$3334 = "<path d=\"M18 3 19.1 5.2\"></path>",
  _tmpl$3335 = "<path d=\"M22 3 20.9 5.2\"></path>",
  _tmpl$3336 = "<path d=\"m20 16-4-4 4-4\"></path>",
  _tmpl$3337 = "<path d=\"m4 8 4 4-4 4\"></path>",
  _tmpl$3338 = "<path d=\"m16 4-4 4-4-4\"></path>",
  _tmpl$3339 = "<path d=\"m8 20 4-4 4 4\"></path>",
  _tmpl$3340 = "<path d=\"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$3341 = "<path d=\"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z\"></path>",
  _tmpl$3342 = "<path d=\"M4 18v2\"></path>",
  _tmpl$3343 = "<path d=\"M20 18v2\"></path>",
  _tmpl$3344 = "<path d=\"M12 4v9\"></path>",
  _tmpl$3345 = "<path d=\"M19.5 12 22 6\"></path>",
  _tmpl$3346 = "<path d=\"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62\"></path>",
  _tmpl$3347 = "<path d=\"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62\"></path>",
  _tmpl$3348 = "<path d=\"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62\"></path>",
  _tmpl$3349 = "<path d=\"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1\"></path>",
  _tmpl$3350 = "<path d=\"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z\"></path>",
  _tmpl$3351 = "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"></path>",
  _tmpl$3352 = "<path d=\"M4 17v2\"></path>",
  _tmpl$3353 = "<path d=\"M5 18H3\"></path>",
  _tmpl$3354 = "<circle cx=\"12\" cy=\"14\" r=\"4\"></circle>",
  _tmpl$3355 = "<path d=\"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20\"></path>",
  _tmpl$3356 = "<path d=\"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603\"></path>",
  _tmpl$3357 = "<path d=\"M17 15a3.5 3.5 0 0 0-.025-4.975\"></path>",
  _tmpl$3358 = "<path d=\"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1\"></path>",
  _tmpl$3359 = "<path d=\"M5 17A12 12 0 0 1 17 5\"></path>",
  _tmpl$3360 = "<path d=\"M8 3H3v5\"></path>",
  _tmpl$3361 = "<path d=\"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3\"></path>",
  _tmpl$3362 = "<path d=\"m15 9 6-6\"></path>",
  _tmpl$3363 = "<path d=\"M3 3h.01\"></path>",
  _tmpl$3364 = "<path d=\"M7 5h.01\"></path>",
  _tmpl$3365 = "<path d=\"M11 7h.01\"></path>",
  _tmpl$3366 = "<path d=\"M3 7h.01\"></path>",
  _tmpl$3367 = "<path d=\"M3 11h.01\"></path>",
  _tmpl$3368 = "<rect width=\"4\" height=\"4\" x=\"15\" y=\"5\"></rect>",
  _tmpl$3369 = "<path d=\"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2\"></path>",
  _tmpl$3370 = "<path d=\"m13 14 8-2\"></path>",
  _tmpl$3371 = "<path d=\"m13 19 8-2\"></path>",
  _tmpl$3372 = "<path d=\"M7 20h10\"></path>",
  _tmpl$3373 = "<path d=\"M10 20c5.5-2.5.8-6.4 3-10\"></path>",
  _tmpl$3374 = "<path d=\"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z\"></path>",
  _tmpl$3375 = "<path d=\"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z\"></path>",
  _tmpl$3376 = "<path d=\"M17 12h-2l-2 5-2-10-2 5H7\"></path>",
  _tmpl$3377 = "<path d=\"m16 8-8 8\"></path>",
  _tmpl$3378 = "<path d=\"M16 16H8V8\"></path>",
  _tmpl$3379 = "<path d=\"m8 8 8 8\"></path>",
  _tmpl$3380 = "<path d=\"M16 8v8H8\"></path>",
  _tmpl$3381 = "<path d=\"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6\"></path>",
  _tmpl$3382 = "<path d=\"m3 21 9-9\"></path>",
  _tmpl$3383 = "<path d=\"M9 21H3v-6\"></path>",
  _tmpl$3384 = "<path d=\"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6\"></path>",
  _tmpl$3385 = "<path d=\"m21 21-9-9\"></path>",
  _tmpl$3386 = "<path d=\"M21 15v6h-6\"></path>",
  _tmpl$3387 = "<path d=\"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6\"></path>",
  _tmpl$3388 = "<path d=\"m3 3 9 9\"></path>",
  _tmpl$3389 = "<path d=\"M3 9V3h6\"></path>",
  _tmpl$3390 = "<path d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6\"></path>",
  _tmpl$3391 = "<path d=\"m21 3-9 9\"></path>",
  _tmpl$3392 = "<path d=\"M8 16V8h8\"></path>",
  _tmpl$3393 = "<path d=\"M16 16 8 8\"></path>",
  _tmpl$3394 = "<path d=\"M8 8h8v8\"></path>",
  _tmpl$3395 = "<path d=\"m8 16 8-8\"></path>",
  _tmpl$3396 = "<path d=\"m8.5 14 7-4\"></path>",
  _tmpl$3397 = "<path d=\"m8.5 10 7 4\"></path>",
  _tmpl$3398 = "<path d=\"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2\"></path>",
  _tmpl$3399 = "<path d=\"M10 22H8\"></path>",
  _tmpl$3400 = "<path d=\"M16 22h-2\"></path>",
  _tmpl$3401 = "<circle cx=\"8\" cy=\"8\" r=\"2\"></circle>",
  _tmpl$3402 = "<path d=\"M9.414 9.414 12 12\"></path>",
  _tmpl$3403 = "<path d=\"M14.8 14.8 18 18\"></path>",
  _tmpl$3404 = "<circle cx=\"8\" cy=\"16\" r=\"2\"></circle>",
  _tmpl$3405 = "<path d=\"m18 6-8.586 8.586\"></path>",
  _tmpl$3406 = "<path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>",
  _tmpl$3407 = "<path d=\"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2\"></path>",
  _tmpl$3408 = "<path d=\"M8 7v7\"></path>",
  _tmpl$3409 = "<path d=\"M12 7v4\"></path>",
  _tmpl$3410 = "<path d=\"M16 7v9\"></path>",
  _tmpl$3411 = "<path d=\"m12 12 4 10 1.7-4.3L22 16Z\"></path>",
  _tmpl$3412 = "<path d=\"M9 21h2\"></path>",
  _tmpl$3413 = "<path d=\"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3\"></path>",
  _tmpl$3414 = "<path d=\"M9 11.2h5.7\"></path>",
  _tmpl$3415 = "<path d=\"M9 8h7\"></path>",
  _tmpl$3416 = "<path d=\"M8 12h6\"></path>",
  _tmpl$3417 = "<path d=\"M11 16h5\"></path>",
  _tmpl$3418 = "<path d=\"M7 7v10\"></path>",
  _tmpl$3419 = "<path d=\"M11 7v10\"></path>",
  _tmpl$3420 = "<path d=\"m15 7 2 10\"></path>",
  _tmpl$3421 = "<path d=\"M8 16V8l4 4 4-4v8\"></path>",
  _tmpl$3422 = "<path d=\"M7 8h10\"></path>",
  _tmpl$3423 = "<path d=\"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41\"></path>",
  _tmpl$3424 = "<path d=\"M3 8.7V19a2 2 0 0 0 2 2h10.3\"></path>",
  _tmpl$3425 = "<path d=\"M9 17v-2.3\"></path>",
  _tmpl$3426 = "<path d=\"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z\"></path>",
  _tmpl$3427 = "<path d=\"M7 7h10\"></path>",
  _tmpl$3428 = "<path d=\"M10 7v10\"></path>",
  _tmpl$3429 = "<path d=\"M16 17a2 2 0 0 1-2-2V7\"></path>",
  _tmpl$3430 = "<path d=\"M12 12H9.5a2.5 2.5 0 0 1 0-5H17\"></path>",
  _tmpl$3431 = "<path d=\"M16 7v10\"></path>",
  _tmpl$3432 = "<path d=\"m9 8 6 4-6 4Z\"></path>",
  _tmpl$3433 = "<path d=\"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8\"></path>",
  _tmpl$3434 = "<path d=\"M7 12h2l2 5 2-10h4\"></path>",
  _tmpl$3435 = "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect>",
  _tmpl$3436 = "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$3437 = "<path d=\"M16 8.9V7H8l4 5-4 5h8v-1.9\"></path>",
  _tmpl$3438 = "<path d=\"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3\"></path>",
  _tmpl$3439 = "<path d=\"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3\"></path>",
  _tmpl$3440 = "<line x1=\"12\" x2=\"12\" y1=\"4\" y2=\"20\"></line>",
  _tmpl$3441 = "<path d=\"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3\"></path>",
  _tmpl$3442 = "<path d=\"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3\"></path>",
  _tmpl$3443 = "<path d=\"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\"></path>",
  _tmpl$3444 = "<path d=\"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\"></path>",
  _tmpl$3445 = "<path d=\"m7 11 2-2-2-2\"></path>",
  _tmpl$3446 = "<path d=\"M11 13h4\"></path>",
  _tmpl$3447 = "<path d=\"M18 21a6 6 0 0 0-12 0\"></path>",
  _tmpl$3448 = "<circle cx=\"12\" cy=\"11\" r=\"4\"></circle>",
  _tmpl$3449 = "<path d=\"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$3450 = "<path d=\"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9\"></path>",
  _tmpl$3451 = "<path d=\"M15.236 22a3 3 0 0 0-2.2-5\"></path>",
  _tmpl$3452 = "<path d=\"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4\"></path>",
  _tmpl$3453 = "<path d=\"M18 13h.01\"></path>",
  _tmpl$3454 = "<path d=\"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10\"></path>",
  _tmpl$3455 = "<path d=\"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z\"></path>",
  _tmpl$3456 = "<path d=\"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13\"></path>",
  _tmpl$3457 = "<path d=\"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2\"></path>",
  _tmpl$3458 = "<path d=\"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43\"></path>",
  _tmpl$3459 = "<path d=\"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91\"></path>",
  _tmpl$3460 = "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>",
  _tmpl$3461 = "<polygon points=\"14,20 4,12 14,4\"></polygon>",
  _tmpl$3462 = "<line x1=\"6\" x2=\"6\" y1=\"4\" y2=\"20\"></line>",
  _tmpl$3463 = "<polygon points=\"10,4 20,12 10,20\"></polygon>",
  _tmpl$3464 = "<path d=\"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3\"></path>",
  _tmpl$3465 = "<path d=\"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4\"></path>",
  _tmpl$3466 = "<circle cx=\"20\" cy=\"10\" r=\"2\"></circle>",
  _tmpl$3467 = "<path d=\"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z\"></path>",
  _tmpl$3468 = "<path d=\"M14 3v4a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$3469 = "<path d=\"M8 13h0\"></path>",
  _tmpl$3470 = "<path d=\"M16 13h0\"></path>",
  _tmpl$3471 = "<path d=\"M10 16s.8 1 2 1c1.3 0 2-1 2-1\"></path>",
  _tmpl$3472 = "<path d=\"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z\"></path>",
  _tmpl$3473 = "<path d=\"M15 3v4a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$3474 = "<path d=\"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7\"></path>",
  _tmpl$3475 = "<path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4\"></path>",
  _tmpl$3476 = "<path d=\"M2 7h20\"></path>",
  _tmpl$3477 = "<path d=\"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7\"></path>",
  _tmpl$3478 = "<rect width=\"20\" height=\"6\" x=\"2\" y=\"4\" rx=\"2\"></rect>",
  _tmpl$3479 = "<rect width=\"20\" height=\"6\" x=\"2\" y=\"14\" rx=\"2\"></rect>",
  _tmpl$3480 = "<rect width=\"6\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$3481 = "<rect width=\"6\" height=\"20\" x=\"14\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$3482 = "<path d=\"M16 4H9a3 3 0 0 0-2.83 4\"></path>",
  _tmpl$3483 = "<path d=\"M14 12a4 4 0 0 1 0 8H6\"></path>",
  _tmpl$3484 = "<path d=\"m4 5 8 8\"></path>",
  _tmpl$3485 = "<path d=\"m12 5-8 8\"></path>",
  _tmpl$3486 = "<path d=\"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07\"></path>",
  _tmpl$3487 = "<path d=\"M12 4h.01\"></path>",
  _tmpl$3488 = "<path d=\"M20 12h.01\"></path>",
  _tmpl$3489 = "<path d=\"M12 20h.01\"></path>",
  _tmpl$3490 = "<path d=\"M4 12h.01\"></path>",
  _tmpl$3491 = "<path d=\"M17.657 6.343h.01\"></path>",
  _tmpl$3492 = "<path d=\"M17.657 17.657h.01\"></path>",
  _tmpl$3493 = "<path d=\"M6.343 17.657h.01\"></path>",
  _tmpl$3494 = "<path d=\"M6.343 6.343h.01\"></path>",
  _tmpl$3495 = "<path d=\"M12 3v1\"></path>",
  _tmpl$3496 = "<path d=\"M12 20v1\"></path>",
  _tmpl$3497 = "<path d=\"M3 12h1\"></path>",
  _tmpl$3498 = "<path d=\"M20 12h1\"></path>",
  _tmpl$3499 = "<path d=\"m18.364 5.636-.707.707\"></path>",
  _tmpl$3500 = "<path d=\"m6.343 17.657-.707.707\"></path>",
  _tmpl$3501 = "<path d=\"m5.636 5.636.707.707\"></path>",
  _tmpl$3502 = "<path d=\"m17.657 17.657.707.707\"></path>",
  _tmpl$3503 = "<path d=\"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4\"></path>",
  _tmpl$3504 = "<path d=\"m4.9 4.9 1.4 1.4\"></path>",
  _tmpl$3505 = "<path d=\"m17.7 17.7 1.4 1.4\"></path>",
  _tmpl$3506 = "<path d=\"m6.3 17.7-1.4 1.4\"></path>",
  _tmpl$3507 = "<path d=\"m19.1 4.9-1.4 1.4\"></path>",
  _tmpl$3508 = "<path d=\"M10 9a3 3 0 1 0 0 6\"></path>",
  _tmpl$3509 = "<path d=\"M14 21V3\"></path>",
  _tmpl$3510 = "<path d=\"M10 4V3\"></path>",
  _tmpl$3511 = "<path d=\"M10 21v-1\"></path>",
  _tmpl$3512 = "<path d=\"m3.64 18.36.7-.7\"></path>",
  _tmpl$3513 = "<path d=\"m4.34 6.34-.7-.7\"></path>",
  _tmpl$3514 = "<path d=\"m17 4-3 3\"></path>",
  _tmpl$3515 = "<path d=\"m14 17 3 3\"></path>",
  _tmpl$3516 = "<path d=\"m21 15-3-3 3-3\"></path>",
  _tmpl$3517 = "<path d=\"m17.66 17.66 1.41 1.41\"></path>",
  _tmpl$3518 = "<path d=\"m6.34 17.66-1.41 1.41\"></path>",
  _tmpl$3519 = "<path d=\"m4.93 10.93 1.41 1.41\"></path>",
  _tmpl$3520 = "<path d=\"M2 18h2\"></path>",
  _tmpl$3521 = "<path d=\"M20 18h2\"></path>",
  _tmpl$3522 = "<path d=\"m19.07 10.93-1.41 1.41\"></path>",
  _tmpl$3523 = "<path d=\"M12 10V2\"></path>",
  _tmpl$3524 = "<path d=\"m4 19 8-8\"></path>",
  _tmpl$3525 = "<path d=\"m12 19-8-8\"></path>",
  _tmpl$3526 = "<path d=\"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06\"></path>",
  _tmpl$3527 = "<path d=\"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z\"></path>",
  _tmpl$3528 = "<path d=\"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7\"></path>",
  _tmpl$3529 = "<path d=\"M 7 17h0.01\"></path>",
  _tmpl$3530 = "<path d=\"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8\"></path>",
  _tmpl$3531 = "<path d=\"M10 21V3h8\"></path>",
  _tmpl$3532 = "<path d=\"M6 16h9\"></path>",
  _tmpl$3533 = "<path d=\"M10 9.5h7\"></path>",
  _tmpl$3534 = "<path d=\"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5\"></path>",
  _tmpl$3535 = "<path d=\"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5\"></path>",
  _tmpl$3536 = "<path d=\"m18 22-3-3 3-3\"></path>",
  _tmpl$3537 = "<path d=\"m6 2 3 3-3 3\"></path>",
  _tmpl$3538 = "<polyline points=\"14.5 17.5 3 6 3 3 6 3 17.5 14.5\"></polyline>",
  _tmpl$3539 = "<line x1=\"13\" x2=\"19\" y1=\"19\" y2=\"13\"></line>",
  _tmpl$3540 = "<line x1=\"16\" x2=\"20\" y1=\"16\" y2=\"20\"></line>",
  _tmpl$3541 = "<line x1=\"19\" x2=\"21\" y1=\"21\" y2=\"19\"></line>",
  _tmpl$3542 = "<polyline points=\"14.5 6.5 18 3 21 3 21 6 17.5 9.5\"></polyline>",
  _tmpl$3543 = "<line x1=\"5\" x2=\"9\" y1=\"14\" y2=\"18\"></line>",
  _tmpl$3544 = "<line x1=\"7\" x2=\"4\" y1=\"17\" y2=\"20\"></line>",
  _tmpl$3545 = "<line x1=\"3\" x2=\"5\" y1=\"19\" y2=\"21\"></line>",
  _tmpl$3546 = "<path d=\"m18 2 4 4\"></path>",
  _tmpl$3547 = "<path d=\"m17 7 3-3\"></path>",
  _tmpl$3548 = "<path d=\"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5\"></path>",
  _tmpl$3549 = "<path d=\"m9 11 4 4\"></path>",
  _tmpl$3550 = "<path d=\"m5 19-3 3\"></path>",
  _tmpl$3551 = "<path d=\"m14 4 6 6\"></path>",
  _tmpl$3552 = "<path d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"></path>",
  _tmpl$3553 = "<path d=\"M12 21v-6\"></path>",
  _tmpl$3554 = "<path d=\"M12 9V3\"></path>",
  _tmpl$3555 = "<path d=\"M14 14v2\"></path>",
  _tmpl$3556 = "<path d=\"M14 20v2\"></path>",
  _tmpl$3557 = "<path d=\"M14 8v2\"></path>",
  _tmpl$3558 = "<path d=\"M2 15h8\"></path>",
  _tmpl$3559 = "<path d=\"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2\"></path>",
  _tmpl$3560 = "<path d=\"M2 9h8\"></path>",
  _tmpl$3561 = "<path d=\"M22 15h-4\"></path>",
  _tmpl$3562 = "<path d=\"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2\"></path>",
  _tmpl$3563 = "<path d=\"M22 9h-4\"></path>",
  _tmpl$3564 = "<path d=\"M5 3v18\"></path>",
  _tmpl$3565 = "<path d=\"M14 10h2\"></path>",
  _tmpl$3566 = "<path d=\"M15 22v-8\"></path>",
  _tmpl$3567 = "<path d=\"M15 2v4\"></path>",
  _tmpl$3568 = "<path d=\"M2 10h2\"></path>",
  _tmpl$3569 = "<path d=\"M20 10h2\"></path>",
  _tmpl$3570 = "<path d=\"M3 19h18\"></path>",
  _tmpl$3571 = "<path d=\"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6\"></path>",
  _tmpl$3572 = "<path d=\"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2\"></path>",
  _tmpl$3573 = "<path d=\"M8 10h2\"></path>",
  _tmpl$3574 = "<path d=\"M9 22v-8\"></path>",
  _tmpl$3575 = "<path d=\"M9 2v4\"></path>",
  _tmpl$3576 = "<rect width=\"10\" height=\"14\" x=\"3\" y=\"8\" rx=\"2\"></rect>",
  _tmpl$3577 = "<path d=\"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4\"></path>",
  _tmpl$3578 = "<line x1=\"12\" x2=\"12.01\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$3579 = "<circle cx=\"7\" cy=\"7\" r=\"5\"></circle>",
  _tmpl$3580 = "<circle cx=\"17\" cy=\"17\" r=\"5\"></circle>",
  _tmpl$3581 = "<path d=\"M12 17h10\"></path>",
  _tmpl$3582 = "<path d=\"m3.46 10.54 7.08-7.08\"></path>",
  _tmpl$3583 = "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\"></path>",
  _tmpl$3584 = "<path d=\"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19\"></path>",
  _tmpl$3585 = "<path d=\"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z\"></path>",
  _tmpl$3586 = "<circle cx=\"6.5\" cy=\"9.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3587 = "<path d=\"M9 4v16\"></path>",
  _tmpl$3588 = "<path d=\"M14 4v16\"></path>",
  _tmpl$3589 = "<path d=\"M19 4v16\"></path>",
  _tmpl$3590 = "<path d=\"M22 6 2 18\"></path>",
  _tmpl$3591 = "<circle cx=\"17\" cy=\"4\" r=\"2\"></circle>",
  _tmpl$3592 = "<path d=\"M15.59 5.41 5.41 15.59\"></path>",
  _tmpl$3593 = "<circle cx=\"4\" cy=\"17\" r=\"2\"></circle>",
  _tmpl$3594 = "<path d=\"M12 22s-4-9-1.5-11.5S22 12 22 12\"></path>",
  _tmpl$3595 = "<circle cx=\"12\" cy=\"12\" r=\"6\"></circle>",
  _tmpl$3596 = "<path d=\"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44\"></path>",
  _tmpl$3597 = "<path d=\"m13.56 11.747 4.332-.924\"></path>",
  _tmpl$3598 = "<path d=\"m16 21-3.105-6.21\"></path>",
  _tmpl$3599 = "<path d=\"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z\"></path>",
  _tmpl$3600 = "<path d=\"m6.158 8.633 1.114 4.456\"></path>",
  _tmpl$3601 = "<path d=\"m8 21 3.105-6.21\"></path>",
  _tmpl$3602 = "<path d=\"m14 5 3-3 3 3\"></path>",
  _tmpl$3603 = "<path d=\"m14 10 3-3 3 3\"></path>",
  _tmpl$3604 = "<path d=\"M17 14V2\"></path>",
  _tmpl$3605 = "<path d=\"M17 14H7l-5 8h20Z\"></path>",
  _tmpl$3606 = "<path d=\"M8 14v8\"></path>",
  _tmpl$3607 = "<path d=\"m9 14 5 8\"></path>",
  _tmpl$3608 = "<path d=\"M3.5 21 14 3\"></path>",
  _tmpl$3609 = "<path d=\"M20.5 21 10 3\"></path>",
  _tmpl$3610 = "<path d=\"M15.5 21 12 15l-3.5 6\"></path>",
  _tmpl$3611 = "<polyline points=\"4 17 10 11 4 5\"></polyline>",
  _tmpl$3612 = "<line x1=\"12\" x2=\"20\" y1=\"19\" y2=\"19\"></line>",
  _tmpl$3613 = "<path d=\"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3\"></path>",
  _tmpl$3614 = "<path d=\"m16 2 6 6\"></path>",
  _tmpl$3615 = "<path d=\"M12 16H4\"></path>",
  _tmpl$3616 = "<path d=\"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2\"></path>",
  _tmpl$3617 = "<path d=\"M14.5 16h-5\"></path>",
  _tmpl$3618 = "<path d=\"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2\"></path>",
  _tmpl$3619 = "<path d=\"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2\"></path>",
  _tmpl$3620 = "<path d=\"M3 2h7\"></path>",
  _tmpl$3621 = "<path d=\"M14 2h7\"></path>",
  _tmpl$3622 = "<path d=\"M9 16H4\"></path>",
  _tmpl$3623 = "<path d=\"M20 16h-5\"></path>",
  _tmpl$3624 = "<path d=\"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1\"></path>",
  _tmpl$3625 = "<path d=\"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5\"></path>",
  _tmpl$3626 = "<path d=\"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1\"></path>",
  _tmpl$3627 = "<path d=\"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7\"></path>",
  _tmpl$3628 = "<path d=\"M9 7v10\"></path>",
  _tmpl$3629 = "<path d=\"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1\"></path>",
  _tmpl$3630 = "<path d=\"M7 22h1a4 4 0 0 0 4-4v-1\"></path>",
  _tmpl$3631 = "<path d=\"M7 2h1a4 4 0 0 1 4 4v1\"></path>",
  _tmpl$3632 = "<path d=\"M17 6H3\"></path>",
  _tmpl$3633 = "<path d=\"M21 12H8\"></path>",
  _tmpl$3634 = "<path d=\"M21 18H8\"></path>",
  _tmpl$3635 = "<path d=\"M3 12v6\"></path>",
  _tmpl$3636 = "<path d=\"M10 12H3\"></path>",
  _tmpl$3637 = "<circle cx=\"17\" cy=\"15\" r=\"3\"></circle>",
  _tmpl$3638 = "<path d=\"m21 19-1.9-1.9\"></path>",
  _tmpl$3639 = "<line x1=\"7\" x2=\"15\" y1=\"8\" y2=\"8\"></line>",
  _tmpl$3640 = "<line x1=\"7\" x2=\"17\" y1=\"12\" y2=\"12\"></line>",
  _tmpl$3641 = "<line x1=\"7\" x2=\"13\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$3642 = "<path d=\"M17 6.1H3\"></path>",
  _tmpl$3643 = "<path d=\"M21 12.1H3\"></path>",
  _tmpl$3644 = "<path d=\"M15.1 18H3\"></path>",
  _tmpl$3645 = "<path d=\"M2 10s3-3 3-8\"></path>",
  _tmpl$3646 = "<path d=\"M22 10s-3-3-3-8\"></path>",
  _tmpl$3647 = "<path d=\"M10 2c0 4.4-3.6 8-8 8\"></path>",
  _tmpl$3648 = "<path d=\"M14 2c0 4.4 3.6 8 8 8\"></path>",
  _tmpl$3649 = "<path d=\"M2 10s2 2 2 5\"></path>",
  _tmpl$3650 = "<path d=\"M22 10s-2 2-2 5\"></path>",
  _tmpl$3651 = "<path d=\"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1\"></path>",
  _tmpl$3652 = "<path d=\"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1\"></path>",
  _tmpl$3653 = "<path d=\"M2 12h10\"></path>",
  _tmpl$3654 = "<path d=\"m3 9 3 3-3 3\"></path>",
  _tmpl$3655 = "<path d=\"M12 6 9 9 6 6\"></path>",
  _tmpl$3656 = "<path d=\"m6 18 3-3 1.5 1.5\"></path>",
  _tmpl$3657 = "<path d=\"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\"></path>",
  _tmpl$3658 = "<path d=\"M12 9a4 4 0 0 0-2 7.5\"></path>",
  _tmpl$3659 = "<path d=\"M12 3v2\"></path>",
  _tmpl$3660 = "<path d=\"m6.6 18.4-1.4 1.4\"></path>",
  _tmpl$3661 = "<path d=\"M4 13H2\"></path>",
  _tmpl$3662 = "<path d=\"M6.34 7.34 4.93 5.93\"></path>",
  _tmpl$3663 = "<path d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\"></path>",
  _tmpl$3664 = "<path d=\"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z\"></path>",
  _tmpl$3665 = "<path d=\"M7 10v12\"></path>",
  _tmpl$3666 = "<path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z\"></path>",
  _tmpl$3667 = "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"></path>",
  _tmpl$3668 = "<path d=\"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"></path>",
  _tmpl$3669 = "<path d=\"m9.5 14.5 5-5\"></path>",
  _tmpl$3670 = "<path d=\"M13 5v2\"></path>",
  _tmpl$3671 = "<path d=\"M13 17v2\"></path>",
  _tmpl$3672 = "<path d=\"M13 11v2\"></path>",
  _tmpl$3673 = "<path d=\"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7\"></path>",
  _tmpl$3674 = "<path d=\"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2\"></path>",
  _tmpl$3675 = "<path d=\"M12 12v-2\"></path>",
  _tmpl$3676 = "<path d=\"M12 14v-4\"></path>",
  _tmpl$3677 = "<path d=\"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6\"></path>",
  _tmpl$3678 = "<path d=\"M9 17H4v5\"></path>",
  _tmpl$3679 = "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"></line>",
  _tmpl$3680 = "<line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"></line>",
  _tmpl$3681 = "<circle cx=\"12\" cy=\"14\" r=\"8\"></circle>",
  _tmpl$3682 = "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"6\" ry=\"6\"></rect>",
  _tmpl$3683 = "<circle cx=\"8\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$3684 = "<circle cx=\"16\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$3685 = "<path d=\"M21 4H3\"></path>",
  _tmpl$3686 = "<path d=\"M18 8H6\"></path>",
  _tmpl$3687 = "<path d=\"M19 12H9\"></path>",
  _tmpl$3688 = "<path d=\"M16 16h-6\"></path>",
  _tmpl$3689 = "<path d=\"M11 20H9\"></path>",
  _tmpl$3690 = "<ellipse cx=\"12\" cy=\"11\" rx=\"3\" ry=\"2\"></ellipse>",
  _tmpl$3691 = "<ellipse cx=\"12\" cy=\"12.5\" rx=\"10\" ry=\"8.5\"></ellipse>",
  _tmpl$3692 = "<path d=\"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16\"></path>",
  _tmpl$3693 = "<path d=\"M2 14h12\"></path>",
  _tmpl$3694 = "<path d=\"M22 14h-2\"></path>",
  _tmpl$3695 = "<path d=\"M12 20v-6\"></path>",
  _tmpl$3696 = "<path d=\"M22 16V6a2 2 0 0 0-2-2H10\"></path>",
  _tmpl$3697 = "<path d=\"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z\"></path>",
  _tmpl$3698 = "<path d=\"M8 13v9\"></path>",
  _tmpl$3699 = "<path d=\"M16 22v-9\"></path>",
  _tmpl$3700 = "<path d=\"m9 6 1 7\"></path>",
  _tmpl$3701 = "<path d=\"m15 6-1 7\"></path>",
  _tmpl$3702 = "<path d=\"M12 6V2\"></path>",
  _tmpl$3703 = "<path d=\"M13 2h-2\"></path>",
  _tmpl$3704 = "<rect width=\"18\" height=\"12\" x=\"3\" y=\"8\" rx=\"1\"></rect>",
  _tmpl$3705 = "<path d=\"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3\"></path>",
  _tmpl$3706 = "<path d=\"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3\"></path>",
  _tmpl$3707 = "<path d=\"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1\"></path>",
  _tmpl$3708 = "<path d=\"M16 18h-5\"></path>",
  _tmpl$3709 = "<path d=\"M18 5a1 1 0 0 0-1 1v5.573\"></path>",
  _tmpl$3710 = "<path d=\"M3 4h9l1 7.246\"></path>",
  _tmpl$3711 = "<path d=\"M4 11V4\"></path>",
  _tmpl$3712 = "<path d=\"M7 15h.01\"></path>",
  _tmpl$3713 = "<path d=\"M8 10.1V4\"></path>",
  _tmpl$3714 = "<circle cx=\"18\" cy=\"18\" r=\"2\"></circle>",
  _tmpl$3715 = "<circle cx=\"7\" cy=\"15\" r=\"5\"></circle>",
  _tmpl$3716 = "<path d=\"M9.3 6.2a4.55 4.55 0 0 0 5.4 0\"></path>",
  _tmpl$3717 = "<path d=\"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3\"></path>",
  _tmpl$3718 = "<path d=\"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z\"></path>",
  _tmpl$3719 = "<path d=\"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8\"></path>",
  _tmpl$3720 = "<path d=\"M2 22V12a10 10 0 1 1 20 0v10\"></path>",
  _tmpl$3721 = "<path d=\"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8\"></path>",
  _tmpl$3722 = "<path d=\"M10 15h.01\"></path>",
  _tmpl$3723 = "<path d=\"M14 15h.01\"></path>",
  _tmpl$3724 = "<path d=\"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z\"></path>",
  _tmpl$3725 = "<path d=\"m9 19-2 3\"></path>",
  _tmpl$3726 = "<path d=\"m15 19 2 3\"></path>",
  _tmpl$3727 = "<path d=\"M8 3.1V7a4 4 0 0 0 8 0V3.1\"></path>",
  _tmpl$3728 = "<path d=\"m9 15-1-1\"></path>",
  _tmpl$3729 = "<path d=\"m15 15 1-1\"></path>",
  _tmpl$3730 = "<path d=\"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z\"></path>",
  _tmpl$3731 = "<path d=\"m8 19-2 3\"></path>",
  _tmpl$3732 = "<path d=\"m16 19 2 3\"></path>",
  _tmpl$3733 = "<path d=\"M2 17 17 2\"></path>",
  _tmpl$3734 = "<path d=\"m2 14 8 8\"></path>",
  _tmpl$3735 = "<path d=\"m5 11 8 8\"></path>",
  _tmpl$3736 = "<path d=\"m11 5 8 8\"></path>",
  _tmpl$3737 = "<path d=\"m14 2 8 8\"></path>",
  _tmpl$3738 = "<path d=\"M7 22 22 7\"></path>",
  _tmpl$3739 = "<path d=\"M12 3v8\"></path>",
  _tmpl$3740 = "<path d=\"m18 22-2-3\"></path>",
  _tmpl$3741 = "<path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"></path>",
  _tmpl$3742 = "<path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"></path>",
  _tmpl$3743 = "<line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"></line>",
  _tmpl$3744 = "<line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"></line>",
  _tmpl$3745 = "<path d=\"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z\"></path>",
  _tmpl$3746 = "<path d=\"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4\"></path>",
  _tmpl$3747 = "<path d=\"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3\"></path>",
  _tmpl$3748 = "<path d=\"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35\"></path>",
  _tmpl$3749 = "<path d=\"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14\"></path>",
  _tmpl$3750 = "<path d=\"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z\"></path>",
  _tmpl$3751 = "<path d=\"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z\"></path>",
  _tmpl$3752 = "<path d=\"M7 16v6\"></path>",
  _tmpl$3753 = "<path d=\"M13 19v3\"></path>",
  _tmpl$3754 = "<path d=\"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5\"></path>",
  _tmpl$3755 = "<rect width=\"3\" height=\"9\" x=\"7\" y=\"7\"></rect>",
  _tmpl$3756 = "<rect width=\"3\" height=\"5\" x=\"14\" y=\"7\"></rect>",
  _tmpl$3757 = "<polyline points=\"22 17 13.5 8.5 8.5 13.5 2 7\"></polyline>",
  _tmpl$3758 = "<polyline points=\"16 17 22 17 22 11\"></polyline>",
  _tmpl$3759 = "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\"></polyline>",
  _tmpl$3760 = "<polyline points=\"16 7 22 7 22 13\"></polyline>",
  _tmpl$3761 = "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path>",
  _tmpl$3762 = "<path d=\"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z\"></path>",
  _tmpl$3763 = "<path d=\"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"></path>",
  _tmpl$3764 = "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"></path>",
  _tmpl$3765 = "<path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"></path>",
  _tmpl$3766 = "<path d=\"M4 22h16\"></path>",
  _tmpl$3767 = "<path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"></path>",
  _tmpl$3768 = "<path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"></path>",
  _tmpl$3769 = "<path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\"></path>",
  _tmpl$3770 = "<path d=\"M15 18H9\"></path>",
  _tmpl$3771 = "<path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\"></path>",
  _tmpl$3772 = "<path d=\"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z\"></path>",
  _tmpl$3773 = "<path d=\"M4.82 7.9 8 10\"></path>",
  _tmpl$3774 = "<path d=\"M15.18 7.9 12 10\"></path>",
  _tmpl$3775 = "<path d=\"M16.93 10H20a2 2 0 0 1 0 4H2\"></path>",
  _tmpl$3776 = "<rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\"></rect>",
  _tmpl$3777 = "<polyline points=\"17 2 12 7 7 2\"></polyline>",
  _tmpl$3778 = "<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>",
  _tmpl$3779 = "<path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"></path>",
  _tmpl$3780 = "<polyline points=\"4 7 4 4 20 4 20 7\"></polyline>",
  _tmpl$3781 = "<line x1=\"9\" x2=\"15\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$3782 = "<path d=\"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575\"></path>",
  _tmpl$3783 = "<path d=\"M17.5 12H22A10 10 0 0 0 9.004 3.455\"></path>",
  _tmpl$3784 = "<path d=\"M22 12a10.06 10.06 1 0 0-20 0Z\"></path>",
  _tmpl$3785 = "<path d=\"M12 12v8a2 2 0 0 0 4 0\"></path>",
  _tmpl$3786 = "<path d=\"M6 4v6a6 6 0 0 0 12 0V4\"></path>",
  _tmpl$3787 = "<line x1=\"4\" x2=\"20\" y1=\"20\" y2=\"20\"></line>",
  _tmpl$3788 = "<path d=\"M9 14 4 9l5-5\"></path>",
  _tmpl$3789 = "<path d=\"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11\"></path>",
  _tmpl$3790 = "<path d=\"M3 7v6h6\"></path>",
  _tmpl$3791 = "<path d=\"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13\"></path>",
  _tmpl$3792 = "<path d=\"M16 12h6\"></path>",
  _tmpl$3793 = "<path d=\"M8 12H2\"></path>",
  _tmpl$3794 = "<path d=\"m19 15 3-3-3-3\"></path>",
  _tmpl$3795 = "<path d=\"m5 9-3 3 3 3\"></path>",
  _tmpl$3796 = "<path d=\"m15 19-3 3-3-3\"></path>",
  _tmpl$3797 = "<path d=\"m15 5-3-3-3 3\"></path>",
  _tmpl$3798 = "<rect width=\"8\" height=\"6\" x=\"5\" y=\"4\" rx=\"1\"></rect>",
  _tmpl$3799 = "<rect width=\"8\" height=\"6\" x=\"11\" y=\"14\" rx=\"1\"></rect>",
  _tmpl$3800 = "<circle cx=\"12\" cy=\"10\" r=\"1\"></circle>",
  _tmpl$3801 = "<path d=\"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2\"></path>",
  _tmpl$3802 = "<path d=\"M6 17v.01\"></path>",
  _tmpl$3803 = "<path d=\"M6 13v.01\"></path>",
  _tmpl$3804 = "<path d=\"M18 17v.01\"></path>",
  _tmpl$3805 = "<path d=\"M18 13v.01\"></path>",
  _tmpl$3806 = "<path d=\"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5\"></path>",
  _tmpl$3807 = "<path d=\"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2\"></path>",
  _tmpl$3808 = "<path d=\"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71\"></path>",
  _tmpl$3809 = "<path d=\"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71\"></path>",
  _tmpl$3810 = "<line x1=\"8\" x2=\"8\" y1=\"2\" y2=\"5\"></line>",
  _tmpl$3811 = "<line x1=\"2\" x2=\"5\" y1=\"8\" y2=\"8\"></line>",
  _tmpl$3812 = "<line x1=\"16\" x2=\"16\" y1=\"19\" y2=\"22\"></line>",
  _tmpl$3813 = "<line x1=\"19\" x2=\"22\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$3814 = "<path d=\"m19 5 3-3\"></path>",
  _tmpl$3815 = "<path d=\"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z\"></path>",
  _tmpl$3816 = "<polyline points=\"17 8 12 3 7 8\"></polyline>",
  _tmpl$3817 = "<line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\"></line>",
  _tmpl$3818 = "<circle cx=\"10\" cy=\"7\" r=\"1\"></circle>",
  _tmpl$3819 = "<circle cx=\"4\" cy=\"20\" r=\"1\"></circle>",
  _tmpl$3820 = "<path d=\"M4.7 19.3 19 5\"></path>",
  _tmpl$3821 = "<path d=\"m21 3-3 1 2 2Z\"></path>",
  _tmpl$3822 = "<path d=\"M9.26 7.68 5 12l2 5\"></path>",
  _tmpl$3823 = "<path d=\"m10 14 5 2 3.5-3.5\"></path>",
  _tmpl$3824 = "<path d=\"m18 12 1-1 1 1-1 1Z\"></path>",
  _tmpl$3825 = "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path>",
  _tmpl$3826 = "<circle cx=\"9\" cy=\"7\" r=\"4\"></circle>",
  _tmpl$3827 = "<polyline points=\"16 11 18 13 22 9\"></polyline>",
  _tmpl$3828 = "<circle cx=\"18\" cy=\"15\" r=\"3\"></circle>",
  _tmpl$3829 = "<path d=\"M10 15H6a4 4 0 0 0-4 4v2\"></path>",
  _tmpl$3830 = "<path d=\"m21.7 16.4-.9-.3\"></path>",
  _tmpl$3831 = "<path d=\"m15.2 13.9-.9-.3\"></path>",
  _tmpl$3832 = "<path d=\"m16.6 18.7.3-.9\"></path>",
  _tmpl$3833 = "<path d=\"m19.1 12.2.3-.9\"></path>",
  _tmpl$3834 = "<path d=\"m19.6 18.7-.4-1\"></path>",
  _tmpl$3835 = "<path d=\"m16.8 12.3-.4-1\"></path>",
  _tmpl$3836 = "<path d=\"m14.3 16.6 1-.4\"></path>",
  _tmpl$3837 = "<path d=\"m20.7 13.8 1-.4\"></path>",
  _tmpl$3838 = "<line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"></line>",
  _tmpl$3839 = "<line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"></line>",
  _tmpl$3840 = "<path d=\"M2 21a8 8 0 0 1 13.292-6\"></path>",
  _tmpl$3841 = "<circle cx=\"10\" cy=\"8\" r=\"5\"></circle>",
  _tmpl$3842 = "<path d=\"M2 21a8 8 0 0 1 10.434-7.62\"></path>",
  _tmpl$3843 = "<path d=\"m19.5 14.3-.4.9\"></path>",
  _tmpl$3844 = "<path d=\"m16.9 20.8-.4.9\"></path>",
  _tmpl$3845 = "<path d=\"m21.7 19.5-.9-.4\"></path>",
  _tmpl$3846 = "<path d=\"m15.2 16.9-.9-.4\"></path>",
  _tmpl$3847 = "<path d=\"m21.7 16.5-.9.4\"></path>",
  _tmpl$3848 = "<path d=\"m15.2 19.1-.9.4\"></path>",
  _tmpl$3849 = "<path d=\"m19.5 21.7-.4-.9\"></path>",
  _tmpl$3850 = "<path d=\"m16.9 15.2-.4-.9\"></path>",
  _tmpl$3851 = "<path d=\"M22 19h-6\"></path>",
  _tmpl$3852 = "<path d=\"m22 22-1.9-1.9\"></path>",
  _tmpl$3853 = "<path d=\"M2 21a8 8 0 0 1 11.873-7\"></path>",
  _tmpl$3854 = "<path d=\"m22 17-5 5\"></path>",
  _tmpl$3855 = "<circle cx=\"12\" cy=\"8\" r=\"5\"></circle>",
  _tmpl$3856 = "<path d=\"M20 21a8 8 0 0 0-16 0\"></path>",
  _tmpl$3857 = "<circle cx=\"10\" cy=\"7\" r=\"4\"></circle>",
  _tmpl$3858 = "<path d=\"M10.3 15H7a4 4 0 0 0-4 4v2\"></path>",
  _tmpl$3859 = "<path d=\"m21 21-1.9-1.9\"></path>",
  _tmpl$3860 = "<line x1=\"17\" x2=\"22\" y1=\"8\" y2=\"13\"></line>",
  _tmpl$3861 = "<line x1=\"22\" x2=\"17\" y1=\"8\" y2=\"13\"></line>",
  _tmpl$3862 = "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path>",
  _tmpl$3863 = "<circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
  _tmpl$3864 = "<path d=\"M18 21a8 8 0 0 0-16 0\"></path>",
  _tmpl$3865 = "<path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"></path>",
  _tmpl$3866 = "<path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path>",
  _tmpl$3867 = "<path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>",
  _tmpl$3868 = "<path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\"></path>",
  _tmpl$3869 = "<path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\"></path>",
  _tmpl$3870 = "<path d=\"m2.1 21.8 6.4-6.3\"></path>",
  _tmpl$3871 = "<path d=\"m19 5-7 7\"></path>",
  _tmpl$3872 = "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"></path>",
  _tmpl$3873 = "<path d=\"M7 2v20\"></path>",
  _tmpl$3874 = "<path d=\"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"></path>",
  _tmpl$3875 = "<path d=\"M2 5h20\"></path>",
  _tmpl$3876 = "<path d=\"M3 3v2\"></path>",
  _tmpl$3877 = "<path d=\"M7 3v2\"></path>",
  _tmpl$3878 = "<path d=\"M21 3v2\"></path>",
  _tmpl$3879 = "<path d=\"m19 5-7 7-7-7\"></path>",
  _tmpl$3880 = "<path d=\"m7.9 7.9 2.7 2.7\"></path>",
  _tmpl$3881 = "<path d=\"m13.4 10.6 2.7-2.7\"></path>",
  _tmpl$3882 = "<path d=\"m7.9 16.1 2.7-2.7\"></path>",
  _tmpl$3883 = "<circle cx=\"16.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3884 = "<path d=\"m13.4 13.4 2.7 2.7\"></path>",
  _tmpl$3885 = "<path d=\"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14\"></path>",
  _tmpl$3886 = "<path d=\"M16 8c4 0 6-2 6-6-4 0-6 2-6 6\"></path>",
  _tmpl$3887 = "<path d=\"M17.41 3.6a10 10 0 1 0 3 3\"></path>",
  _tmpl$3888 = "<path d=\"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z\"></path>",
  _tmpl$3889 = "<path d=\"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z\"></path>",
  _tmpl$3890 = "<path d=\"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z\"></path>",
  _tmpl$3891 = "<path d=\"m2 8 2 2-2 2 2 2-2 2\"></path>",
  _tmpl$3892 = "<path d=\"m22 8-2 2 2 2-2 2 2 2\"></path>",
  _tmpl$3893 = "<path d=\"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2\"></path>",
  _tmpl$3894 = "<path d=\"M16 10.34V6c0-.55-.45-1-1-1h-4.34\"></path>",
  _tmpl$3895 = "<rect width=\"8\" height=\"14\" x=\"8\" y=\"5\" rx=\"1\"></rect>",
  _tmpl$3896 = "<path d=\"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196\"></path>",
  _tmpl$3897 = "<path d=\"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2\"></path>",
  _tmpl$3898 = "<path d=\"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5\"></path>",
  _tmpl$3899 = "<rect x=\"2\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\"></rect>",
  _tmpl$3900 = "<circle cx=\"8\" cy=\"14\" r=\"2\"></circle>",
  _tmpl$3901 = "<circle cx=\"16\" cy=\"14\" r=\"2\"></circle>",
  _tmpl$3902 = "<path d=\"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z\"></path>",
  _tmpl$3903 = "<path d=\"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"></path>",
  _tmpl$3904 = "<path d=\"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2\"></path>",
  _tmpl$3905 = "<path d=\"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2\"></path>",
  _tmpl$3906 = "<circle cx=\"6\" cy=\"12\" r=\"4\"></circle>",
  _tmpl$3907 = "<circle cx=\"18\" cy=\"12\" r=\"4\"></circle>",
  _tmpl$3908 = "<line x1=\"6\" x2=\"18\" y1=\"16\" y2=\"16\"></line>",
  _tmpl$3909 = "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>",
  _tmpl$3910 = "<path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>",
  _tmpl$3911 = "<path d=\"M19.07 4.93a10 10 0 0 1 0 14.14\"></path>",
  _tmpl$3912 = "<line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\"></line>",
  _tmpl$3913 = "<line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\"></line>",
  _tmpl$3914 = "<path d=\"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z\"></path>",
  _tmpl$3915 = "<path d=\"M22 19H2\"></path>",
  _tmpl$3916 = "<path d=\"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2\"></path>",
  _tmpl$3917 = "<path d=\"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21\"></path>",
  _tmpl$3918 = "<path d=\"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14\"></path>",
  _tmpl$3919 = "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path>",
  _tmpl$3920 = "<path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path>",
  _tmpl$3921 = "<circle cx=\"8\" cy=\"9\" r=\"2\"></circle>",
  _tmpl$3922 = "<path d=\"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2\"></path>",
  _tmpl$3923 = "<path d=\"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72\"></path>",
  _tmpl$3924 = "<path d=\"M5 6v4\"></path>",
  _tmpl$3925 = "<path d=\"M19 14v4\"></path>",
  _tmpl$3926 = "<path d=\"M7 8H3\"></path>",
  _tmpl$3927 = "<path d=\"M21 16h-4\"></path>",
  _tmpl$3928 = "<path d=\"M11 3H9\"></path>",
  _tmpl$3929 = "<path d=\"M15 4V2\"></path>",
  _tmpl$3930 = "<path d=\"M15 16v-2\"></path>",
  _tmpl$3931 = "<path d=\"M17.8 11.8 19 13\"></path>",
  _tmpl$3932 = "<path d=\"M15 9h0\"></path>",
  _tmpl$3933 = "<path d=\"M17.8 6.2 19 5\"></path>",
  _tmpl$3934 = "<path d=\"M12.2 6.2 11 5\"></path>",
  _tmpl$3935 = "<path d=\"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z\"></path>",
  _tmpl$3936 = "<path d=\"M6 18h12\"></path>",
  _tmpl$3937 = "<rect width=\"12\" height=\"12\" x=\"6\" y=\"10\"></rect>",
  _tmpl$3938 = "<path d=\"M3 6h3\"></path>",
  _tmpl$3939 = "<path d=\"M17 6h.01\"></path>",
  _tmpl$3940 = "<rect width=\"18\" height=\"20\" x=\"3\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$3941 = "<circle cx=\"12\" cy=\"13\" r=\"5\"></circle>",
  _tmpl$3942 = "<path d=\"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5\"></path>",
  _tmpl$3943 = "<polyline points=\"12 10 12 12 13 13\"></polyline>",
  _tmpl$3944 = "<path d=\"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05\"></path>",
  _tmpl$3945 = "<path d=\"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05\"></path>",
  _tmpl$3946 = "<path d=\"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"></path>",
  _tmpl$3947 = "<path d=\"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"></path>",
  _tmpl$3948 = "<path d=\"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"></path>",
  _tmpl$3949 = "<circle cx=\"12\" cy=\"4.5\" r=\"2.5\"></circle>",
  _tmpl$3950 = "<path d=\"m10.2 6.3-3.9 3.9\"></path>",
  _tmpl$3951 = "<circle cx=\"4.5\" cy=\"12\" r=\"2.5\"></circle>",
  _tmpl$3952 = "<circle cx=\"19.5\" cy=\"12\" r=\"2.5\"></circle>",
  _tmpl$3953 = "<path d=\"m13.8 17.7 3.9-3.9\"></path>",
  _tmpl$3954 = "<circle cx=\"12\" cy=\"19.5\" r=\"2.5\"></circle>",
  _tmpl$3955 = "<circle cx=\"12\" cy=\"10\" r=\"8\"></circle>",
  _tmpl$3956 = "<path d=\"M7 22h10\"></path>",
  _tmpl$3957 = "<path d=\"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15\"></path>",
  _tmpl$3958 = "<path d=\"M9 3.4a4 4 0 0 1 6.52.66\"></path>",
  _tmpl$3959 = "<path d=\"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05\"></path>",
  _tmpl$3960 = "<path d=\"M20.3 20.3a4 4 0 0 1-2.3.7\"></path>",
  _tmpl$3961 = "<path d=\"M18.6 13a4 4 0 0 1 3.357 3.414\"></path>",
  _tmpl$3962 = "<path d=\"m12 6 .6 1\"></path>",
  _tmpl$3963 = "<path d=\"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2\"></path>",
  _tmpl$3964 = "<path d=\"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06\"></path>",
  _tmpl$3965 = "<path d=\"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8\"></path>",
  _tmpl$3966 = "<path d=\"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z\"></path>",
  _tmpl$3967 = "<path d=\"m16 8-1.17 1.17\"></path>",
  _tmpl$3968 = "<path d=\"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"></path>",
  _tmpl$3969 = "<path d=\"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97\"></path>",
  _tmpl$3970 = "<path d=\"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62\"></path>",
  _tmpl$3971 = "<path d=\"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z\"></path>",
  _tmpl$3972 = "<path d=\"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"></path>",
  _tmpl$3973 = "<path d=\"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98\"></path>",
  _tmpl$3974 = "<path d=\"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28\"></path>",
  _tmpl$3975 = "<path d=\"M2 22 16 8\"></path>",
  _tmpl$3976 = "<path d=\"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"></path>",
  _tmpl$3977 = "<path d=\"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"></path>",
  _tmpl$3978 = "<path d=\"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"></path>",
  _tmpl$3979 = "<path d=\"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"></path>",
  _tmpl$3980 = "<path d=\"M8.5 16.429a5 5 0 0 1 7 0\"></path>",
  _tmpl$3981 = "<path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\"></path>",
  _tmpl$3982 = "<path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\"></path>",
  _tmpl$3983 = "<path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\"></path>",
  _tmpl$3984 = "<path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\"></path>",
  _tmpl$3985 = "<path d=\"M2 8.82a15 15 0 0 1 20 0\"></path>",
  _tmpl$3986 = "<path d=\"M5 12.859a10 10 0 0 1 14 0\"></path>",
  _tmpl$3987 = "<path d=\"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2\"></path>",
  _tmpl$3988 = "<path d=\"M9.6 4.6A2 2 0 1 1 11 8H2\"></path>",
  _tmpl$3989 = "<path d=\"M12.6 19.4A2 2 0 1 0 14 16H2\"></path>",
  _tmpl$3990 = "<path d=\"M7 10h3m7 0h-1.343\"></path>",
  _tmpl$3991 = "<path d=\"M12 15v7\"></path>",
  _tmpl$3992 = "<path d=\"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198\"></path>",
  _tmpl$3993 = "<path d=\"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\"></path>",
  _tmpl$3994 = "<rect width=\"8\" height=\"8\" x=\"3\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$3995 = "<path d=\"M7 11v4a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$3996 = "<rect width=\"8\" height=\"8\" x=\"13\" y=\"13\" rx=\"2\"></rect>",
  _tmpl$3997 = "<path d=\"m19 12-1.5 3\"></path>",
  _tmpl$3998 = "<path d=\"M19.63 18.81 22 20\"></path>",
  _tmpl$3999 = "<path d=\"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z\"></path>",
  _tmpl$4000 = "<path d=\"M3 12h15a3 3 0 1 1 0 6h-4\"></path>",
  _tmpl$4001 = "<polyline points=\"16 16 14 18 16 20\"></polyline>",
  _tmpl$4002 = "<line x1=\"3\" x2=\"10\" y1=\"18\" y2=\"18\"></line>",
  _tmpl$4003 = "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>",
  _tmpl$4004 = "<path d=\"M18 6 6 18\"></path>",
  _tmpl$4005 = "<path d=\"m6 6 12 12\"></path>",
  _tmpl$4006 = "<path d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\"></path>",
  _tmpl$4007 = "<path d=\"m10 15 5-3-5-3z\"></path>",
  _tmpl$4008 = "<path d=\"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317\"></path>",
  _tmpl$4009 = "<path d=\"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773\"></path>",
  _tmpl$4010 = "<path d=\"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643\"></path>",
  _tmpl$4011 = "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"></path>",
  _tmpl$4012 = "<line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\"></line>",
  _tmpl$4013 = "<line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\"></line>",
  _tmpl$4014 = "<line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\"></line>";
const aArrowDown = {
  path: () => [ssr(_tmpl$), ssr(_tmpl$2), ssr(_tmpl$3), ssr(_tmpl$4)],
  outline: true,
  mini: false,
  title: 'A Arrow Down'
};
const aArrowUp = {
  path: () => [ssr(_tmpl$), ssr(_tmpl$2), ssr(_tmpl$5), ssr(_tmpl$6)],
  outline: true,
  mini: false,
  title: 'A Arrow Up'
};
const aLargeSmall = {
  path: () => [ssr(_tmpl$7), ssr(_tmpl$8), ssr(_tmpl$9), ssr(_tmpl$10)],
  outline: true,
  mini: false,
  title: 'A Large Small'
};
const accessibility = {
  path: () => [ssr(_tmpl$11), ssr(_tmpl$12), ssr(_tmpl$13), ssr(_tmpl$14), ssr(_tmpl$15)],
  outline: true,
  mini: false,
  title: 'Accessibility'
};
const activity = {
  path: () => ssr(_tmpl$16),
  outline: true,
  mini: false,
  title: 'Activity'
};
const airVent = {
  path: () => [ssr(_tmpl$17), ssr(_tmpl$18), ssr(_tmpl$19), ssr(_tmpl$20)],
  outline: true,
  mini: false,
  title: 'Air Vent'
};
const airplay = {
  path: () => [ssr(_tmpl$21), ssr(_tmpl$22)],
  outline: true,
  mini: false,
  title: 'Airplay'
};
const alarmClockCheck = {
  path: () => [ssr(_tmpl$23), ssr(_tmpl$24), ssr(_tmpl$25), ssr(_tmpl$26), ssr(_tmpl$27), ssr(_tmpl$28)],
  outline: true,
  mini: false,
  title: 'Alarm Clock Check'
};
const alarmClockMinus = {
  path: () => [ssr(_tmpl$23), ssr(_tmpl$24), ssr(_tmpl$25), ssr(_tmpl$26), ssr(_tmpl$27), ssr(_tmpl$29)],
  outline: true,
  mini: false,
  title: 'Alarm Clock Minus'
};
const alarmClockOff = {
  path: () => [ssr(_tmpl$30), ssr(_tmpl$31), ssr(_tmpl$25), ssr(_tmpl$32), ssr(_tmpl$33), ssr(_tmpl$34)],
  outline: true,
  mini: false,
  title: 'Alarm Clock Off'
};
const alarmClockPlus = {
  path: () => [ssr(_tmpl$23), ssr(_tmpl$24), ssr(_tmpl$25), ssr(_tmpl$26), ssr(_tmpl$27), ssr(_tmpl$35), ssr(_tmpl$29)],
  outline: true,
  mini: false,
  title: 'Alarm Clock Plus'
};
const alarmClock = {
  path: () => [ssr(_tmpl$23), ssr(_tmpl$36), ssr(_tmpl$24), ssr(_tmpl$25), ssr(_tmpl$26), ssr(_tmpl$27)],
  outline: true,
  mini: false,
  title: 'Alarm Clock'
};
const alarmSmoke = {
  path: () => [ssr(_tmpl$37), ssr(_tmpl$38), ssr(_tmpl$39), ssr(_tmpl$40), ssr(_tmpl$41)],
  outline: true,
  mini: false,
  title: 'Alarm Smoke'
};
const album = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$43)],
  outline: true,
  mini: false,
  title: 'Album'
};
const alignCenterHorizontal = {
  path: () => [ssr(_tmpl$44), ssr(_tmpl$45), ssr(_tmpl$46), ssr(_tmpl$47), ssr(_tmpl$48)],
  outline: true,
  mini: false,
  title: 'Align Center Horizontal'
};
const alignCenterVertical = {
  path: () => [ssr(_tmpl$49), ssr(_tmpl$50), ssr(_tmpl$51), ssr(_tmpl$52), ssr(_tmpl$53)],
  outline: true,
  mini: false,
  title: 'Align Center Vertical'
};
const alignCenter = {
  path: () => [ssr(_tmpl$54), ssr(_tmpl$55), ssr(_tmpl$56)],
  outline: true,
  mini: false,
  title: 'Align Center'
};
const alignEndHorizontal = {
  path: () => [ssr(_tmpl$57), ssr(_tmpl$58), ssr(_tmpl$59)],
  outline: true,
  mini: false,
  title: 'Align End Horizontal'
};
const alignEndVertical = {
  path: () => [ssr(_tmpl$60), ssr(_tmpl$61), ssr(_tmpl$62)],
  outline: true,
  mini: false,
  title: 'Align End Vertical'
};
const alignHorizontalDistributeCenter = {
  path: () => [ssr(_tmpl$63), ssr(_tmpl$64), ssr(_tmpl$65), ssr(_tmpl$66), ssr(_tmpl$67), ssr(_tmpl$68)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Distribute Center'
};
const alignHorizontalDistributeEnd = {
  path: () => [ssr(_tmpl$63), ssr(_tmpl$64), ssr(_tmpl$69), ssr(_tmpl$70)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Distribute End'
};
const alignHorizontalDistributeStart = {
  path: () => [ssr(_tmpl$63), ssr(_tmpl$64), ssr(_tmpl$71), ssr(_tmpl$72)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Distribute Start'
};
const alignHorizontalJustifyCenter = {
  path: () => [ssr(_tmpl$73), ssr(_tmpl$74), ssr(_tmpl$49)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Justify Center'
};
const alignHorizontalJustifyEnd = {
  path: () => [ssr(_tmpl$73), ssr(_tmpl$75), ssr(_tmpl$76)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Justify End'
};
const alignHorizontalJustifyStart = {
  path: () => [ssr(_tmpl$77), ssr(_tmpl$74), ssr(_tmpl$78)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Justify Start'
};
const alignHorizontalSpaceAround = {
  path: () => [ssr(_tmpl$79), ssr(_tmpl$80), ssr(_tmpl$81)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Space Around'
};
const alignHorizontalSpaceBetween = {
  path: () => [ssr(_tmpl$82), ssr(_tmpl$83), ssr(_tmpl$84), ssr(_tmpl$85)],
  outline: true,
  mini: false,
  title: 'Align Horizontal Space Between'
};
const alignJustify = {
  path: () => [ssr(_tmpl$86), ssr(_tmpl$87), ssr(_tmpl$88)],
  outline: true,
  mini: false,
  title: 'Align Justify'
};
const alignLeft = {
  path: () => [ssr(_tmpl$54), ssr(_tmpl$89), ssr(_tmpl$90)],
  outline: true,
  mini: false,
  title: 'Align Left'
};
const alignRight = {
  path: () => [ssr(_tmpl$54), ssr(_tmpl$91), ssr(_tmpl$92)],
  outline: true,
  mini: false,
  title: 'Align Right'
};
const alignStartHorizontal = {
  path: () => [ssr(_tmpl$93), ssr(_tmpl$94), ssr(_tmpl$95)],
  outline: true,
  mini: false,
  title: 'Align Start Horizontal'
};
const alignStartVertical = {
  path: () => [ssr(_tmpl$96), ssr(_tmpl$97), ssr(_tmpl$78)],
  outline: true,
  mini: false,
  title: 'Align Start Vertical'
};
const alignVerticalDistributeCenter = {
  path: () => [ssr(_tmpl$98), ssr(_tmpl$99), ssr(_tmpl$100), ssr(_tmpl$101), ssr(_tmpl$102), ssr(_tmpl$103)],
  outline: true,
  mini: false,
  title: 'Align Vertical Distribute Center'
};
const alignVerticalDistributeEnd = {
  path: () => [ssr(_tmpl$104), ssr(_tmpl$105), ssr(_tmpl$106), ssr(_tmpl$107)],
  outline: true,
  mini: false,
  title: 'Align Vertical Distribute End'
};
const alignVerticalDistributeStart = {
  path: () => [ssr(_tmpl$104), ssr(_tmpl$105), ssr(_tmpl$108), ssr(_tmpl$109)],
  outline: true,
  mini: false,
  title: 'Align Vertical Distribute Start'
};
const alignVerticalJustifyCenter = {
  path: () => [ssr(_tmpl$110), ssr(_tmpl$111), ssr(_tmpl$44)],
  outline: true,
  mini: false,
  title: 'Align Vertical Justify Center'
};
const alignVerticalJustifyEnd = {
  path: () => [ssr(_tmpl$112), ssr(_tmpl$111), ssr(_tmpl$113)],
  outline: true,
  mini: false,
  title: 'Align Vertical Justify End'
};
const alignVerticalJustifyStart = {
  path: () => [ssr(_tmpl$110), ssr(_tmpl$114), ssr(_tmpl$115)],
  outline: true,
  mini: false,
  title: 'Align Vertical Justify Start'
};
const alignVerticalSpaceAround = {
  path: () => [ssr(_tmpl$116), ssr(_tmpl$117), ssr(_tmpl$118)],
  outline: true,
  mini: false,
  title: 'Align Vertical Space Around'
};
const alignVerticalSpaceBetween = {
  path: () => [ssr(_tmpl$119), ssr(_tmpl$120), ssr(_tmpl$121), ssr(_tmpl$122)],
  outline: true,
  mini: false,
  title: 'Align Vertical Space Between'
};
const ambulance = {
  path: () => [ssr(_tmpl$123), ssr(_tmpl$124), ssr(_tmpl$125), ssr(_tmpl$126), ssr(_tmpl$127), ssr(_tmpl$128), ssr(_tmpl$129)],
  outline: true,
  mini: false,
  title: 'Ambulance'
};
const ampersand = {
  path: () => [ssr(_tmpl$130), ssr(_tmpl$131)],
  outline: true,
  mini: false,
  title: 'Ampersand'
};
const ampersands = {
  path: () => [ssr(_tmpl$132), ssr(_tmpl$133)],
  outline: true,
  mini: false,
  title: 'Ampersands'
};
const anchor = {
  path: () => [ssr(_tmpl$134), ssr(_tmpl$135), ssr(_tmpl$136)],
  outline: true,
  mini: false,
  title: 'Anchor'
};
const angry = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$138), ssr(_tmpl$139), ssr(_tmpl$140), ssr(_tmpl$141), ssr(_tmpl$142)],
  outline: true,
  mini: false,
  title: 'Angry'
};
const annoyed = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$143), ssr(_tmpl$144), ssr(_tmpl$145)],
  outline: true,
  mini: false,
  title: 'Annoyed'
};
const antenna = {
  path: () => [ssr(_tmpl$146), ssr(_tmpl$147), ssr(_tmpl$148), ssr(_tmpl$149), ssr(_tmpl$150), ssr(_tmpl$151)],
  outline: true,
  mini: false,
  title: 'Antenna'
};
const anvil = {
  path: () => [ssr(_tmpl$152), ssr(_tmpl$153), ssr(_tmpl$154), ssr(_tmpl$155), ssr(_tmpl$156)],
  outline: true,
  mini: false,
  title: 'Anvil'
};
const aperture = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$157), ssr(_tmpl$158), ssr(_tmpl$159), ssr(_tmpl$160), ssr(_tmpl$161), ssr(_tmpl$162)],
  outline: true,
  mini: false,
  title: 'Aperture'
};
const appWindowMac = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$164), ssr(_tmpl$165), ssr(_tmpl$166)],
  outline: true,
  mini: false,
  title: 'App Window Mac'
};
const appWindow = {
  path: () => [ssr(_tmpl$167), ssr(_tmpl$168), ssr(_tmpl$169), ssr(_tmpl$170)],
  outline: true,
  mini: false,
  title: 'App Window'
};
const apple = {
  path: () => [ssr(_tmpl$171), ssr(_tmpl$172)],
  outline: true,
  mini: false,
  title: 'Apple'
};
const archiveRestore = {
  path: () => [ssr(_tmpl$173), ssr(_tmpl$174), ssr(_tmpl$175), ssr(_tmpl$176), ssr(_tmpl$177)],
  outline: true,
  mini: false,
  title: 'Archive Restore'
};
const archiveX = {
  path: () => [ssr(_tmpl$173), ssr(_tmpl$178), ssr(_tmpl$179), ssr(_tmpl$180)],
  outline: true,
  mini: false,
  title: 'Archive X'
};
const archive = {
  path: () => [ssr(_tmpl$173), ssr(_tmpl$178), ssr(_tmpl$181)],
  outline: true,
  mini: false,
  title: 'Archive'
};
const areaChart = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$183)],
  outline: true,
  mini: false,
  title: 'Area Chart'
};
const armchair = {
  path: () => [ssr(_tmpl$184), ssr(_tmpl$185), ssr(_tmpl$186), ssr(_tmpl$187)],
  outline: true,
  mini: false,
  title: 'Armchair'
};
const arrowBigDownDash = {
  path: () => [ssr(_tmpl$188), ssr(_tmpl$189)],
  outline: true,
  mini: false,
  title: 'Arrow Big Down Dash'
};
const arrowBigDown = {
  path: () => ssr(_tmpl$190),
  outline: true,
  mini: false,
  title: 'Arrow Big Down'
};
const arrowBigLeftDash = {
  path: () => [ssr(_tmpl$191), ssr(_tmpl$192)],
  outline: true,
  mini: false,
  title: 'Arrow Big Left Dash'
};
const arrowBigLeft = {
  path: () => ssr(_tmpl$193),
  outline: true,
  mini: false,
  title: 'Arrow Big Left'
};
const arrowBigRightDash = {
  path: () => [ssr(_tmpl$194), ssr(_tmpl$195)],
  outline: true,
  mini: false,
  title: 'Arrow Big Right Dash'
};
const arrowBigRight = {
  path: () => ssr(_tmpl$196),
  outline: true,
  mini: false,
  title: 'Arrow Big Right'
};
const arrowBigUpDash = {
  path: () => [ssr(_tmpl$197), ssr(_tmpl$198)],
  outline: true,
  mini: false,
  title: 'Arrow Big Up Dash'
};
const arrowBigUp = {
  path: () => ssr(_tmpl$199),
  outline: true,
  mini: false,
  title: 'Arrow Big Up'
};
const arrowDown_0_1 = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$201), ssr(_tmpl$202), ssr(_tmpl$203), ssr(_tmpl$204)],
  outline: true,
  mini: false,
  title: 'Arrow Down 0 1'
};
const arrowDown_1_0 = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$201), ssr(_tmpl$205), ssr(_tmpl$206), ssr(_tmpl$207)],
  outline: true,
  mini: false,
  title: 'Arrow Down 1 0'
};
const arrowDownAZ = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$201), ssr(_tmpl$208), ssr(_tmpl$209), ssr(_tmpl$210)],
  outline: true,
  mini: false,
  title: 'Arrow Down A Z'
};
const arrowDownFromLine = {
  path: () => [ssr(_tmpl$211), ssr(_tmpl$212), ssr(_tmpl$213)],
  outline: true,
  mini: false,
  title: 'Arrow Down From Line'
};
const arrowDownLeft = {
  path: () => [ssr(_tmpl$214), ssr(_tmpl$215)],
  outline: true,
  mini: false,
  title: 'Arrow Down Left'
};
const arrowDownNarrowWide = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$201), ssr(_tmpl$216), ssr(_tmpl$217), ssr(_tmpl$218)],
  outline: true,
  mini: false,
  title: 'Arrow Down Narrow Wide'
};
const arrowDownRight = {
  path: () => [ssr(_tmpl$219), ssr(_tmpl$220)],
  outline: true,
  mini: false,
  title: 'Arrow Down Right'
};
const arrowDownToDot = {
  path: () => [ssr(_tmpl$221), ssr(_tmpl$222), ssr(_tmpl$223)],
  outline: true,
  mini: false,
  title: 'Arrow Down To Dot'
};
const arrowDownToLine = {
  path: () => [ssr(_tmpl$224), ssr(_tmpl$225), ssr(_tmpl$226)],
  outline: true,
  mini: false,
  title: 'Arrow Down To Line'
};
const arrowDownUp = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$201), ssr(_tmpl$227), ssr(_tmpl$228)],
  outline: true,
  mini: false,
  title: 'Arrow Down Up'
};
const arrowDownWideNarrow = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$201), ssr(_tmpl$229), ssr(_tmpl$217), ssr(_tmpl$230)],
  outline: true,
  mini: false,
  title: 'Arrow Down Wide Narrow'
};
const arrowDownZA = {
  path: () => [ssr(_tmpl$200), ssr(_tmpl$231), ssr(_tmpl$232), ssr(_tmpl$233), ssr(_tmpl$234)],
  outline: true,
  mini: false,
  title: 'Arrow Down Z A'
};
const arrowDown = {
  path: () => [ssr(_tmpl$235), ssr(_tmpl$236)],
  outline: true,
  mini: false,
  title: 'Arrow Down'
};
const arrowLeftFromLine = {
  path: () => [ssr(_tmpl$237), ssr(_tmpl$238), ssr(_tmpl$239)],
  outline: true,
  mini: false,
  title: 'Arrow Left From Line'
};
const arrowLeftRight = {
  path: () => [ssr(_tmpl$240), ssr(_tmpl$241), ssr(_tmpl$242), ssr(_tmpl$243)],
  outline: true,
  mini: false,
  title: 'Arrow Left Right'
};
const arrowLeftToLine = {
  path: () => [ssr(_tmpl$244), ssr(_tmpl$245), ssr(_tmpl$246)],
  outline: true,
  mini: false,
  title: 'Arrow Left To Line'
};
const arrowLeft = {
  path: () => [ssr(_tmpl$247), ssr(_tmpl$248)],
  outline: true,
  mini: false,
  title: 'Arrow Left'
};
const arrowRightFromLine = {
  path: () => [ssr(_tmpl$249), ssr(_tmpl$250), ssr(_tmpl$251)],
  outline: true,
  mini: false,
  title: 'Arrow Right From Line'
};
const arrowRightLeft = {
  path: () => [ssr(_tmpl$252), ssr(_tmpl$253), ssr(_tmpl$254), ssr(_tmpl$255)],
  outline: true,
  mini: false,
  title: 'Arrow Right Left'
};
const arrowRightToLine = {
  path: () => [ssr(_tmpl$256), ssr(_tmpl$257), ssr(_tmpl$258)],
  outline: true,
  mini: false,
  title: 'Arrow Right To Line'
};
const arrowRight = {
  path: () => [ssr(_tmpl$259), ssr(_tmpl$260)],
  outline: true,
  mini: false,
  title: 'Arrow Right'
};
const arrowUp_0_1 = {
  path: () => [ssr(_tmpl$261), ssr(_tmpl$231), ssr(_tmpl$202), ssr(_tmpl$203), ssr(_tmpl$204)],
  outline: true,
  mini: false,
  title: 'Arrow Up 0 1'
};
const arrowUp_1_0 = {
  path: () => [ssr(_tmpl$261), ssr(_tmpl$231), ssr(_tmpl$205), ssr(_tmpl$206), ssr(_tmpl$207)],
  outline: true,
  mini: false,
  title: 'Arrow Up 1 0'
};
const arrowUpAZ = {
  path: () => [ssr(_tmpl$261), ssr(_tmpl$231), ssr(_tmpl$208), ssr(_tmpl$209), ssr(_tmpl$210)],
  outline: true,
  mini: false,
  title: 'Arrow Up A Z'
};
const arrowUpDown = {
  path: () => [ssr(_tmpl$262), ssr(_tmpl$263), ssr(_tmpl$261), ssr(_tmpl$231)],
  outline: true,
  mini: false,
  title: 'Arrow Up Down'
};
const arrowUpFromDot = {
  path: () => [ssr(_tmpl$264), ssr(_tmpl$265), ssr(_tmpl$223)],
  outline: true,
  mini: false,
  title: 'Arrow Up From Dot'
};
const arrowUpFromLine = {
  path: () => [ssr(_tmpl$266), ssr(_tmpl$267), ssr(_tmpl$268)],
  outline: true,
  mini: false,
  title: 'Arrow Up From Line'
};
const arrowUpLeft = {
  path: () => [ssr(_tmpl$269), ssr(_tmpl$270)],
  outline: true,
  mini: false,
  title: 'Arrow Up Left'
};
const arrowUpNarrowWide = {
  path: () => [ssr(_tmpl$261), ssr(_tmpl$231), ssr(_tmpl$230), ssr(_tmpl$271), ssr(_tmpl$272)],
  outline: true,
  mini: false,
  title: 'Arrow Up Narrow Wide'
};
const arrowUpRight = {
  path: () => [ssr(_tmpl$273), ssr(_tmpl$274)],
  outline: true,
  mini: false,
  title: 'Arrow Up Right'
};
const arrowUpToLine = {
  path: () => [ssr(_tmpl$275), ssr(_tmpl$276), ssr(_tmpl$277)],
  outline: true,
  mini: false,
  title: 'Arrow Up To Line'
};
const arrowUpWideNarrow = {
  path: () => [ssr(_tmpl$261), ssr(_tmpl$231), ssr(_tmpl$218), ssr(_tmpl$271), ssr(_tmpl$278)],
  outline: true,
  mini: false,
  title: 'Arrow Up Wide Narrow'
};
const arrowUpZA = {
  path: () => [ssr(_tmpl$261), ssr(_tmpl$231), ssr(_tmpl$232), ssr(_tmpl$233), ssr(_tmpl$234)],
  outline: true,
  mini: false,
  title: 'Arrow Up Z A'
};
const arrowUp = {
  path: () => [ssr(_tmpl$279), ssr(_tmpl$280)],
  outline: true,
  mini: false,
  title: 'Arrow Up'
};
const arrowsUpFromLine = {
  path: () => [ssr(_tmpl$281), ssr(_tmpl$282), ssr(_tmpl$283), ssr(_tmpl$284), ssr(_tmpl$285)],
  outline: true,
  mini: false,
  title: 'Arrows Up From Line'
};
const asterisk = {
  path: () => [ssr(_tmpl$286), ssr(_tmpl$287), ssr(_tmpl$288)],
  outline: true,
  mini: false,
  title: 'Asterisk'
};
const atSign = {
  path: () => [ssr(_tmpl$289), ssr(_tmpl$290)],
  outline: true,
  mini: false,
  title: 'At Sign'
};
const atom = {
  path: () => [ssr(_tmpl$291), ssr(_tmpl$292), ssr(_tmpl$293)],
  outline: true,
  mini: false,
  title: 'Atom'
};
const audioLines = {
  path: () => [ssr(_tmpl$294), ssr(_tmpl$295), ssr(_tmpl$296), ssr(_tmpl$297), ssr(_tmpl$298), ssr(_tmpl$299)],
  outline: true,
  mini: false,
  title: 'Audio Lines'
};
const audioWaveform = {
  path: () => ssr(_tmpl$300),
  outline: true,
  mini: false,
  title: 'Audio Waveform'
};
const award = {
  path: () => [ssr(_tmpl$301), ssr(_tmpl$302)],
  outline: true,
  mini: false,
  title: 'Award'
};
const axe = {
  path: () => [ssr(_tmpl$303), ssr(_tmpl$304)],
  outline: true,
  mini: false,
  title: 'Axe'
};
const axis_3d = {
  path: () => [ssr(_tmpl$305), ssr(_tmpl$306)],
  outline: true,
  mini: false,
  title: 'Axis 3d'
};
const baby = {
  path: () => [ssr(_tmpl$307), ssr(_tmpl$308), ssr(_tmpl$309), ssr(_tmpl$310)],
  outline: true,
  mini: false,
  title: 'Baby'
};
const backpack = {
  path: () => [ssr(_tmpl$311), ssr(_tmpl$312), ssr(_tmpl$313), ssr(_tmpl$314), ssr(_tmpl$315)],
  outline: true,
  mini: false,
  title: 'Backpack'
};
const badgeAlert = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$317), ssr(_tmpl$318)],
  outline: true,
  mini: false,
  title: 'Badge Alert'
};
const badgeCent = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$319), ssr(_tmpl$320)],
  outline: true,
  mini: false,
  title: 'Badge Cent'
};
const badgeCheck = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$321)],
  outline: true,
  mini: false,
  title: 'Badge Check'
};
const badgeDollarSign = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$322), ssr(_tmpl$323)],
  outline: true,
  mini: false,
  title: 'Badge Dollar Sign'
};
const badgeEuro = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$324), ssr(_tmpl$325)],
  outline: true,
  mini: false,
  title: 'Badge Euro'
};
const badgeHelp = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$326), ssr(_tmpl$327)],
  outline: true,
  mini: false,
  title: 'Badge Help'
};
const badgeIndianRupee = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$328), ssr(_tmpl$329), ssr(_tmpl$330)],
  outline: true,
  mini: false,
  title: 'Badge Indian Rupee'
};
const badgeInfo = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$331), ssr(_tmpl$332)],
  outline: true,
  mini: false,
  title: 'Badge Info'
};
const badgeJapaneseYen = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$333), ssr(_tmpl$334), ssr(_tmpl$335), ssr(_tmpl$336)],
  outline: true,
  mini: false,
  title: 'Badge Japanese Yen'
};
const badgeMinus = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$337)],
  outline: true,
  mini: false,
  title: 'Badge Minus'
};
const badgePercent = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$338), ssr(_tmpl$339), ssr(_tmpl$340)],
  outline: true,
  mini: false,
  title: 'Badge Percent'
};
const badgePlus = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$341), ssr(_tmpl$337)],
  outline: true,
  mini: false,
  title: 'Badge Plus'
};
const badgePoundSterling = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$342), ssr(_tmpl$343), ssr(_tmpl$344)],
  outline: true,
  mini: false,
  title: 'Badge Pound Sterling'
};
const badgeRussianRuble = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$345), ssr(_tmpl$346)],
  outline: true,
  mini: false,
  title: 'Badge Russian Ruble'
};
const badgeSwissFranc = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$347), ssr(_tmpl$348), ssr(_tmpl$349)],
  outline: true,
  mini: false,
  title: 'Badge Swiss Franc'
};
const badgeX = {
  path: () => [ssr(_tmpl$316), ssr(_tmpl$350), ssr(_tmpl$351)],
  outline: true,
  mini: false,
  title: 'Badge X'
};
const badge = {
  path: () => ssr(_tmpl$316),
  outline: true,
  mini: false,
  title: 'Badge'
};
const baggageClaim = {
  path: () => [ssr(_tmpl$352), ssr(_tmpl$353), ssr(_tmpl$354), ssr(_tmpl$355), ssr(_tmpl$356)],
  outline: true,
  mini: false,
  title: 'Baggage Claim'
};
const ban = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$357)],
  outline: true,
  mini: false,
  title: 'Ban'
};
const banana = {
  path: () => [ssr(_tmpl$358), ssr(_tmpl$359)],
  outline: true,
  mini: false,
  title: 'Banana'
};
const banknote = {
  path: () => [ssr(_tmpl$360), ssr(_tmpl$361), ssr(_tmpl$362)],
  outline: true,
  mini: false,
  title: 'Banknote'
};
const barChart_2 = {
  path: () => [ssr(_tmpl$363), ssr(_tmpl$364), ssr(_tmpl$365)],
  outline: true,
  mini: false,
  title: 'Bar Chart 2'
};
const barChart_3 = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$366), ssr(_tmpl$367), ssr(_tmpl$368)],
  outline: true,
  mini: false,
  title: 'Bar Chart 3'
};
const barChart_4 = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$369), ssr(_tmpl$370), ssr(_tmpl$368)],
  outline: true,
  mini: false,
  title: 'Bar Chart 4'
};
const barChartBig = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$371), ssr(_tmpl$372)],
  outline: true,
  mini: false,
  title: 'Bar Chart Big'
};
const barChartHorizontalBig = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$373), ssr(_tmpl$374)],
  outline: true,
  mini: false,
  title: 'Bar Chart Horizontal Big'
};
const barChartHorizontal = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$375), ssr(_tmpl$376), ssr(_tmpl$377)],
  outline: true,
  mini: false,
  title: 'Bar Chart Horizontal'
};
const barChart = {
  path: () => [ssr(_tmpl$378), ssr(_tmpl$379), ssr(_tmpl$380)],
  outline: true,
  mini: false,
  title: 'Bar Chart'
};
const barcode = {
  path: () => [ssr(_tmpl$249), ssr(_tmpl$381), ssr(_tmpl$235), ssr(_tmpl$382), ssr(_tmpl$258)],
  outline: true,
  mini: false,
  title: 'Barcode'
};
const baseline = {
  path: () => [ssr(_tmpl$383), ssr(_tmpl$384), ssr(_tmpl$329)],
  outline: true,
  mini: false,
  title: 'Baseline'
};
const bath = {
  path: () => [ssr(_tmpl$385), ssr(_tmpl$386), ssr(_tmpl$387), ssr(_tmpl$388), ssr(_tmpl$389)],
  outline: true,
  mini: false,
  title: 'Bath'
};
const batteryCharging = {
  path: () => [ssr(_tmpl$390), ssr(_tmpl$391), ssr(_tmpl$392), ssr(_tmpl$393)],
  outline: true,
  mini: false,
  title: 'Battery Charging'
};
const batteryFull = {
  path: () => [ssr(_tmpl$394), ssr(_tmpl$393), ssr(_tmpl$395), ssr(_tmpl$396), ssr(_tmpl$397)],
  outline: true,
  mini: false,
  title: 'Battery Full'
};
const batteryLow = {
  path: () => [ssr(_tmpl$394), ssr(_tmpl$393), ssr(_tmpl$395)],
  outline: true,
  mini: false,
  title: 'Battery Low'
};
const batteryMedium = {
  path: () => [ssr(_tmpl$394), ssr(_tmpl$393), ssr(_tmpl$395), ssr(_tmpl$396)],
  outline: true,
  mini: false,
  title: 'Battery Medium'
};
const batteryWarning = {
  path: () => [ssr(_tmpl$398), ssr(_tmpl$399), ssr(_tmpl$393), ssr(_tmpl$400), ssr(_tmpl$401)],
  outline: true,
  mini: false,
  title: 'Battery Warning'
};
const battery = {
  path: () => [ssr(_tmpl$394), ssr(_tmpl$393)],
  outline: true,
  mini: false,
  title: 'Battery'
};
const beaker = {
  path: () => [ssr(_tmpl$402), ssr(_tmpl$403), ssr(_tmpl$404)],
  outline: true,
  mini: false,
  title: 'Beaker'
};
const beanOff = {
  path: () => [ssr(_tmpl$405), ssr(_tmpl$406), ssr(_tmpl$407), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Bean Off'
};
const bean = {
  path: () => [ssr(_tmpl$409), ssr(_tmpl$410)],
  outline: true,
  mini: false,
  title: 'Bean'
};
const bedDouble = {
  path: () => [ssr(_tmpl$411), ssr(_tmpl$412), ssr(_tmpl$413), ssr(_tmpl$414)],
  outline: true,
  mini: false,
  title: 'Bed Double'
};
const bedSingle = {
  path: () => [ssr(_tmpl$415), ssr(_tmpl$416), ssr(_tmpl$417)],
  outline: true,
  mini: false,
  title: 'Bed Single'
};
const bed = {
  path: () => [ssr(_tmpl$418), ssr(_tmpl$419), ssr(_tmpl$420), ssr(_tmpl$421)],
  outline: true,
  mini: false,
  title: 'Bed'
};
const beef = {
  path: () => [ssr(_tmpl$422), ssr(_tmpl$423), ssr(_tmpl$424)],
  outline: true,
  mini: false,
  title: 'Beef'
};
const beerOff = {
  path: () => [ssr(_tmpl$425), ssr(_tmpl$426), ssr(_tmpl$427), ssr(_tmpl$33), ssr(_tmpl$428), ssr(_tmpl$429), ssr(_tmpl$430), ssr(_tmpl$431)],
  outline: true,
  mini: false,
  title: 'Beer Off'
};
const beer = {
  path: () => [ssr(_tmpl$432), ssr(_tmpl$433), ssr(_tmpl$434), ssr(_tmpl$435), ssr(_tmpl$436)],
  outline: true,
  mini: false,
  title: 'Beer'
};
const bellDot = {
  path: () => [ssr(_tmpl$437), ssr(_tmpl$438), ssr(_tmpl$439)],
  outline: true,
  mini: false,
  title: 'Bell Dot'
};
const bellElectric = {
  path: () => [ssr(_tmpl$440), ssr(_tmpl$339), ssr(_tmpl$441), ssr(_tmpl$442), ssr(_tmpl$443), ssr(_tmpl$444)],
  outline: true,
  mini: false,
  title: 'Bell Electric'
};
const bellMinus = {
  path: () => [ssr(_tmpl$445), ssr(_tmpl$438), ssr(_tmpl$446)],
  outline: true,
  mini: false,
  title: 'Bell Minus'
};
const bellOff = {
  path: () => [ssr(_tmpl$447), ssr(_tmpl$448), ssr(_tmpl$438), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Bell Off'
};
const bellPlus = {
  path: () => [ssr(_tmpl$449), ssr(_tmpl$438), ssr(_tmpl$446), ssr(_tmpl$450)],
  outline: true,
  mini: false,
  title: 'Bell Plus'
};
const bellRing = {
  path: () => [ssr(_tmpl$451), ssr(_tmpl$438), ssr(_tmpl$452), ssr(_tmpl$453)],
  outline: true,
  mini: false,
  title: 'Bell Ring'
};
const bell = {
  path: () => [ssr(_tmpl$451), ssr(_tmpl$438)],
  outline: true,
  mini: false,
  title: 'Bell'
};
const betweenHorizontalEnd = {
  path: () => [ssr(_tmpl$454), ssr(_tmpl$455), ssr(_tmpl$456)],
  outline: true,
  mini: false,
  title: 'Between Horizontal End'
};
const betweenHorizontalStart = {
  path: () => [ssr(_tmpl$457), ssr(_tmpl$458), ssr(_tmpl$459)],
  outline: true,
  mini: false,
  title: 'Between Horizontal Start'
};
const betweenVerticalEnd = {
  path: () => [ssr(_tmpl$460), ssr(_tmpl$461), ssr(_tmpl$462)],
  outline: true,
  mini: false,
  title: 'Between Vertical End'
};
const betweenVerticalStart = {
  path: () => [ssr(_tmpl$463), ssr(_tmpl$464), ssr(_tmpl$465)],
  outline: true,
  mini: false,
  title: 'Between Vertical Start'
};
const bike = {
  path: () => [ssr(_tmpl$466), ssr(_tmpl$467), ssr(_tmpl$468), ssr(_tmpl$469)],
  outline: true,
  mini: false,
  title: 'Bike'
};
const binary = {
  path: () => [ssr(_tmpl$470), ssr(_tmpl$471), ssr(_tmpl$472), ssr(_tmpl$473), ssr(_tmpl$474), ssr(_tmpl$475)],
  outline: true,
  mini: false,
  title: 'Binary'
};
const biohazard = {
  path: () => [ssr(_tmpl$476), ssr(_tmpl$477), ssr(_tmpl$478), ssr(_tmpl$479), ssr(_tmpl$480), ssr(_tmpl$481), ssr(_tmpl$482), ssr(_tmpl$483), ssr(_tmpl$484), ssr(_tmpl$485)],
  outline: true,
  mini: false,
  title: 'Biohazard'
};
const bird = {
  path: () => [ssr(_tmpl$486), ssr(_tmpl$487), ssr(_tmpl$488), ssr(_tmpl$489), ssr(_tmpl$490), ssr(_tmpl$491)],
  outline: true,
  mini: false,
  title: 'Bird'
};
const bitcoin = {
  path: () => ssr(_tmpl$492),
  outline: true,
  mini: false,
  title: 'Bitcoin'
};
const blend = {
  path: () => [ssr(_tmpl$441), ssr(_tmpl$493)],
  outline: true,
  mini: false,
  title: 'Blend'
};
const blinds = {
  path: () => [ssr(_tmpl$494), ssr(_tmpl$495), ssr(_tmpl$496), ssr(_tmpl$497), ssr(_tmpl$498), ssr(_tmpl$499), ssr(_tmpl$500)],
  outline: true,
  mini: false,
  title: 'Blinds'
};
const blocks = {
  path: () => [ssr(_tmpl$501), ssr(_tmpl$502)],
  outline: true,
  mini: false,
  title: 'Blocks'
};
const bluetoothConnected = {
  path: () => [ssr(_tmpl$503), ssr(_tmpl$504), ssr(_tmpl$505)],
  outline: true,
  mini: false,
  title: 'Bluetooth Connected'
};
const bluetoothOff = {
  path: () => [ssr(_tmpl$506), ssr(_tmpl$33), ssr(_tmpl$507)],
  outline: true,
  mini: false,
  title: 'Bluetooth Off'
};
const bluetoothSearching = {
  path: () => [ssr(_tmpl$503), ssr(_tmpl$508), ssr(_tmpl$509)],
  outline: true,
  mini: false,
  title: 'Bluetooth Searching'
};
const bluetooth = {
  path: () => ssr(_tmpl$503),
  outline: true,
  mini: false,
  title: 'Bluetooth'
};
const bold = {
  path: () => ssr(_tmpl$510),
  outline: true,
  mini: false,
  title: 'Bold'
};
const bolt = {
  path: () => [ssr(_tmpl$511), ssr(_tmpl$289)],
  outline: true,
  mini: false,
  title: 'Bolt'
};
const bomb = {
  path: () => [ssr(_tmpl$512), ssr(_tmpl$513), ssr(_tmpl$514)],
  outline: true,
  mini: false,
  title: 'Bomb'
};
const bone = {
  path: () => ssr(_tmpl$515),
  outline: true,
  mini: false,
  title: 'Bone'
};
const bookA = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$517), ssr(_tmpl$518)],
  outline: true,
  mini: false,
  title: 'Book A'
};
const bookAudio = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$519), ssr(_tmpl$520), ssr(_tmpl$521)],
  outline: true,
  mini: false,
  title: 'Book Audio'
};
const bookCheck = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$522)],
  outline: true,
  mini: false,
  title: 'Book Check'
};
const bookCopy = {
  path: () => [ssr(_tmpl$523), ssr(_tmpl$524), ssr(_tmpl$525)],
  outline: true,
  mini: false,
  title: 'Book Copy'
};
const bookDashed = {
  path: () => [ssr(_tmpl$526), ssr(_tmpl$527), ssr(_tmpl$528), ssr(_tmpl$529), ssr(_tmpl$530), ssr(_tmpl$531), ssr(_tmpl$532), ssr(_tmpl$533), ssr(_tmpl$534), ssr(_tmpl$535), ssr(_tmpl$536)],
  outline: true,
  mini: false,
  title: 'Book Dashed'
};
const bookDown = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$537), ssr(_tmpl$538)],
  outline: true,
  mini: false,
  title: 'Book Down'
};
const bookHeadphones = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$539), ssr(_tmpl$540), ssr(_tmpl$541)],
  outline: true,
  mini: false,
  title: 'Book Headphones'
};
const bookHeart = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$542)],
  outline: true,
  mini: false,
  title: 'Book Heart'
};
const bookImage = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$543), ssr(_tmpl$544)],
  outline: true,
  mini: false,
  title: 'Book Image'
};
const bookKey = {
  path: () => [ssr(_tmpl$545), ssr(_tmpl$546), ssr(_tmpl$547), ssr(_tmpl$548), ssr(_tmpl$549)],
  outline: true,
  mini: false,
  title: 'Book Key'
};
const bookLock = {
  path: () => [ssr(_tmpl$550), ssr(_tmpl$551), ssr(_tmpl$552), ssr(_tmpl$553)],
  outline: true,
  mini: false,
  title: 'Book Lock'
};
const bookMarked = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$554)],
  outline: true,
  mini: false,
  title: 'Book Marked'
};
const bookMinus = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$555)],
  outline: true,
  mini: false,
  title: 'Book Minus'
};
const bookOpenCheck = {
  path: () => [ssr(_tmpl$556), ssr(_tmpl$557), ssr(_tmpl$558)],
  outline: true,
  mini: false,
  title: 'Book Open Check'
};
const bookOpenText = {
  path: () => [ssr(_tmpl$559), ssr(_tmpl$560), ssr(_tmpl$561), ssr(_tmpl$562), ssr(_tmpl$563), ssr(_tmpl$564)],
  outline: true,
  mini: false,
  title: 'Book Open Text'
};
const bookOpen = {
  path: () => [ssr(_tmpl$559), ssr(_tmpl$560)],
  outline: true,
  mini: false,
  title: 'Book Open'
};
const bookPlus = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$555), ssr(_tmpl$565)],
  outline: true,
  mini: false,
  title: 'Book Plus'
};
const bookText = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$566), ssr(_tmpl$567)],
  outline: true,
  mini: false,
  title: 'Book Text'
};
const bookType = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$568), ssr(_tmpl$520), ssr(_tmpl$569)],
  outline: true,
  mini: false,
  title: 'Book Type'
};
const bookUp_2 = {
  path: () => [ssr(_tmpl$570), ssr(_tmpl$571), ssr(_tmpl$537), ssr(_tmpl$572), ssr(_tmpl$573)],
  outline: true,
  mini: false,
  title: 'Book Up 2'
};
const bookUp = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$537), ssr(_tmpl$572)],
  outline: true,
  mini: false,
  title: 'Book Up'
};
const bookUser = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$574), ssr(_tmpl$575)],
  outline: true,
  mini: false,
  title: 'Book User'
};
const bookX = {
  path: () => [ssr(_tmpl$516), ssr(_tmpl$576), ssr(_tmpl$577)],
  outline: true,
  mini: false,
  title: 'Book X'
};
const book = {
  path: () => ssr(_tmpl$516),
  outline: true,
  mini: false,
  title: 'Book'
};
const bookmarkCheck = {
  path: () => [ssr(_tmpl$578), ssr(_tmpl$579)],
  outline: true,
  mini: false,
  title: 'Bookmark Check'
};
const bookmarkMinus = {
  path: () => [ssr(_tmpl$580), ssr(_tmpl$581)],
  outline: true,
  mini: false,
  title: 'Bookmark Minus'
};
const bookmarkPlus = {
  path: () => [ssr(_tmpl$580), ssr(_tmpl$582), ssr(_tmpl$581)],
  outline: true,
  mini: false,
  title: 'Bookmark Plus'
};
const bookmarkX = {
  path: () => [ssr(_tmpl$578), ssr(_tmpl$583), ssr(_tmpl$584)],
  outline: true,
  mini: false,
  title: 'Bookmark X'
};
const bookmark = {
  path: () => ssr(_tmpl$580),
  outline: true,
  mini: false,
  title: 'Bookmark'
};
const boomBox = {
  path: () => [ssr(_tmpl$585), ssr(_tmpl$586), ssr(_tmpl$587), ssr(_tmpl$588), ssr(_tmpl$589), ssr(_tmpl$590), ssr(_tmpl$591)],
  outline: true,
  mini: false,
  title: 'Boom Box'
};
const botMessageSquare = {
  path: () => [ssr(_tmpl$592), ssr(_tmpl$593), ssr(_tmpl$594), ssr(_tmpl$595), ssr(_tmpl$596), ssr(_tmpl$597)],
  outline: true,
  mini: false,
  title: 'Bot Message Square'
};
const botOff = {
  path: () => [ssr(_tmpl$598), ssr(_tmpl$599), ssr(_tmpl$600), ssr(_tmpl$601), ssr(_tmpl$602), ssr(_tmpl$603), ssr(_tmpl$604)],
  outline: true,
  mini: false,
  title: 'Bot Off'
};
const bot = {
  path: () => [ssr(_tmpl$605), ssr(_tmpl$606), ssr(_tmpl$599), ssr(_tmpl$600), ssr(_tmpl$607), ssr(_tmpl$603)],
  outline: true,
  mini: false,
  title: 'Bot'
};
const boxSelect = {
  path: () => [ssr(_tmpl$608), ssr(_tmpl$609), ssr(_tmpl$610), ssr(_tmpl$611), ssr(_tmpl$612), ssr(_tmpl$613), ssr(_tmpl$614), ssr(_tmpl$615), ssr(_tmpl$616), ssr(_tmpl$617), ssr(_tmpl$618), ssr(_tmpl$619)],
  outline: true,
  mini: false,
  title: 'Box Select'
};
const box = {
  path: () => [ssr(_tmpl$620), ssr(_tmpl$621), ssr(_tmpl$622)],
  outline: true,
  mini: false,
  title: 'Box'
};
const boxes = {
  path: () => [ssr(_tmpl$623), ssr(_tmpl$624), ssr(_tmpl$625), ssr(_tmpl$626), ssr(_tmpl$627), ssr(_tmpl$628), ssr(_tmpl$629), ssr(_tmpl$630), ssr(_tmpl$631), ssr(_tmpl$632), ssr(_tmpl$633), ssr(_tmpl$634)],
  outline: true,
  mini: false,
  title: 'Boxes'
};
const braces = {
  path: () => [ssr(_tmpl$635), ssr(_tmpl$636)],
  outline: true,
  mini: false,
  title: 'Braces'
};
const brackets = {
  path: () => [ssr(_tmpl$637), ssr(_tmpl$638)],
  outline: true,
  mini: false,
  title: 'Brackets'
};
const brainCircuit = {
  path: () => [ssr(_tmpl$639), ssr(_tmpl$640), ssr(_tmpl$641), ssr(_tmpl$642), ssr(_tmpl$643), ssr(_tmpl$644), ssr(_tmpl$645), ssr(_tmpl$646), ssr(_tmpl$647), ssr(_tmpl$648), ssr(_tmpl$649), ssr(_tmpl$650), ssr(_tmpl$651)],
  outline: true,
  mini: false,
  title: 'Brain Circuit'
};
const brainCog = {
  path: () => [ssr(_tmpl$652), ssr(_tmpl$653), ssr(_tmpl$641), ssr(_tmpl$642), ssr(_tmpl$654), ssr(_tmpl$643), ssr(_tmpl$655), ssr(_tmpl$656), ssr(_tmpl$657), ssr(_tmpl$658), ssr(_tmpl$659), ssr(_tmpl$660), ssr(_tmpl$661), ssr(_tmpl$662), ssr(_tmpl$663), ssr(_tmpl$664)],
  outline: true,
  mini: false,
  title: 'Brain Cog'
};
const brain = {
  path: () => [ssr(_tmpl$639), ssr(_tmpl$665), ssr(_tmpl$666), ssr(_tmpl$653), ssr(_tmpl$641), ssr(_tmpl$642), ssr(_tmpl$654), ssr(_tmpl$643), ssr(_tmpl$655)],
  outline: true,
  mini: false,
  title: 'Brain'
};
const brickWall = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$668), ssr(_tmpl$669), ssr(_tmpl$670), ssr(_tmpl$671), ssr(_tmpl$672), ssr(_tmpl$673), ssr(_tmpl$674)],
  outline: true,
  mini: false,
  title: 'Brick Wall'
};
const briefcaseBusiness = {
  path: () => [ssr(_tmpl$675), ssr(_tmpl$676), ssr(_tmpl$677), ssr(_tmpl$678)],
  outline: true,
  mini: false,
  title: 'Briefcase Business'
};
const briefcaseMedical = {
  path: () => [ssr(_tmpl$679), ssr(_tmpl$680), ssr(_tmpl$676), ssr(_tmpl$681), ssr(_tmpl$682), ssr(_tmpl$678)],
  outline: true,
  mini: false,
  title: 'Briefcase Medical'
};
const briefcase = {
  path: () => [ssr(_tmpl$683), ssr(_tmpl$678)],
  outline: true,
  mini: false,
  title: 'Briefcase'
};
const bringToFront = {
  path: () => [ssr(_tmpl$684), ssr(_tmpl$685), ssr(_tmpl$686)],
  outline: true,
  mini: false,
  title: 'Bring To Front'
};
const brush = {
  path: () => [ssr(_tmpl$687), ssr(_tmpl$688)],
  outline: true,
  mini: false,
  title: 'Brush'
};
const bugOff = {
  path: () => [ssr(_tmpl$689), ssr(_tmpl$690), ssr(_tmpl$691), ssr(_tmpl$692), ssr(_tmpl$33), ssr(_tmpl$693), ssr(_tmpl$694), ssr(_tmpl$695), ssr(_tmpl$696)],
  outline: true,
  mini: false,
  title: 'Bug Off'
};
const bugPlay = {
  path: () => [ssr(_tmpl$697), ssr(_tmpl$690), ssr(_tmpl$698), ssr(_tmpl$692), ssr(_tmpl$696), ssr(_tmpl$695), ssr(_tmpl$699), ssr(_tmpl$700), ssr(_tmpl$701)],
  outline: true,
  mini: false,
  title: 'Bug Play'
};
const bug = {
  path: () => [ssr(_tmpl$700), ssr(_tmpl$690), ssr(_tmpl$701), ssr(_tmpl$702), ssr(_tmpl$703), ssr(_tmpl$699), ssr(_tmpl$695), ssr(_tmpl$696), ssr(_tmpl$692), ssr(_tmpl$704), ssr(_tmpl$705)],
  outline: true,
  mini: false,
  title: 'Bug'
};
const building_2 = {
  path: () => [ssr(_tmpl$706), ssr(_tmpl$707), ssr(_tmpl$708), ssr(_tmpl$709), ssr(_tmpl$710), ssr(_tmpl$711), ssr(_tmpl$712)],
  outline: true,
  mini: false,
  title: 'Building 2'
};
const building = {
  path: () => [ssr(_tmpl$713), ssr(_tmpl$714), ssr(_tmpl$715), ssr(_tmpl$716), ssr(_tmpl$717), ssr(_tmpl$718), ssr(_tmpl$719), ssr(_tmpl$720), ssr(_tmpl$721), ssr(_tmpl$722), ssr(_tmpl$723)],
  outline: true,
  mini: false,
  title: 'Building'
};
const busFront = {
  path: () => [ssr(_tmpl$724), ssr(_tmpl$709), ssr(_tmpl$725), ssr(_tmpl$726), ssr(_tmpl$727), ssr(_tmpl$728), ssr(_tmpl$729), ssr(_tmpl$730), ssr(_tmpl$731)],
  outline: true,
  mini: false,
  title: 'Bus Front'
};
const bus = {
  path: () => [ssr(_tmpl$732), ssr(_tmpl$733), ssr(_tmpl$734), ssr(_tmpl$735), ssr(_tmpl$129), ssr(_tmpl$736), ssr(_tmpl$737)],
  outline: true,
  mini: false,
  title: 'Bus'
};
const cableCar = {
  path: () => [ssr(_tmpl$738), ssr(_tmpl$739), ssr(_tmpl$740), ssr(_tmpl$741), ssr(_tmpl$742), ssr(_tmpl$154), ssr(_tmpl$155), ssr(_tmpl$255)],
  outline: true,
  mini: false,
  title: 'Cable Car'
};
const cable = {
  path: () => [ssr(_tmpl$743), ssr(_tmpl$744), ssr(_tmpl$745), ssr(_tmpl$746), ssr(_tmpl$747)],
  outline: true,
  mini: false,
  title: 'Cable'
};
const cakeSlice = {
  path: () => [ssr(_tmpl$748), ssr(_tmpl$749), ssr(_tmpl$750), ssr(_tmpl$751)],
  outline: true,
  mini: false,
  title: 'Cake Slice'
};
const cake = {
  path: () => [ssr(_tmpl$752), ssr(_tmpl$753), ssr(_tmpl$121), ssr(_tmpl$754), ssr(_tmpl$755), ssr(_tmpl$756), ssr(_tmpl$757), ssr(_tmpl$758), ssr(_tmpl$759)],
  outline: true,
  mini: false,
  title: 'Cake'
};
const calculator = {
  path: () => [ssr(_tmpl$760), ssr(_tmpl$761), ssr(_tmpl$762), ssr(_tmpl$720), ssr(_tmpl$718), ssr(_tmpl$722), ssr(_tmpl$719), ssr(_tmpl$723), ssr(_tmpl$763), ssr(_tmpl$764)],
  outline: true,
  mini: false,
  title: 'Calculator'
};
const calendarCheck_2 = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$767), ssr(_tmpl$768), ssr(_tmpl$769)],
  outline: true,
  mini: false,
  title: 'Calendar Check 2'
};
const calendarCheck = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$770), ssr(_tmpl$768), ssr(_tmpl$771)],
  outline: true,
  mini: false,
  title: 'Calendar Check'
};
const calendarClock = {
  path: () => [ssr(_tmpl$772), ssr(_tmpl$766), ssr(_tmpl$765), ssr(_tmpl$773), ssr(_tmpl$774), ssr(_tmpl$775)],
  outline: true,
  mini: false,
  title: 'Calendar Clock'
};
const calendarDays = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$770), ssr(_tmpl$768), ssr(_tmpl$723), ssr(_tmpl$719), ssr(_tmpl$721), ssr(_tmpl$764), ssr(_tmpl$763), ssr(_tmpl$776)],
  outline: true,
  mini: false,
  title: 'Calendar Days'
};
const calendarFold = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$777), ssr(_tmpl$768), ssr(_tmpl$778)],
  outline: true,
  mini: false,
  title: 'Calendar Fold'
};
const calendarHeart = {
  path: () => [ssr(_tmpl$779), ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$780)],
  outline: true,
  mini: false,
  title: 'Calendar Heart'
};
const calendarMinus_2 = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$770), ssr(_tmpl$768), ssr(_tmpl$781)],
  outline: true,
  mini: false,
  title: 'Calendar Minus 2'
};
const calendarMinus = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$782), ssr(_tmpl$768), ssr(_tmpl$783)],
  outline: true,
  mini: false,
  title: 'Calendar Minus'
};
const calendarOff = {
  path: () => [ssr(_tmpl$784), ssr(_tmpl$785), ssr(_tmpl$766), ssr(_tmpl$786), ssr(_tmpl$787), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Calendar Off'
};
const calendarPlus_2 = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$770), ssr(_tmpl$768), ssr(_tmpl$781), ssr(_tmpl$788)],
  outline: true,
  mini: false,
  title: 'Calendar Plus 2'
};
const calendarPlus = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$782), ssr(_tmpl$768), ssr(_tmpl$783), ssr(_tmpl$789)],
  outline: true,
  mini: false,
  title: 'Calendar Plus'
};
const calendarRange = {
  path: () => [ssr(_tmpl$770), ssr(_tmpl$766), ssr(_tmpl$768), ssr(_tmpl$765), ssr(_tmpl$790), ssr(_tmpl$791), ssr(_tmpl$792), ssr(_tmpl$793)],
  outline: true,
  mini: false,
  title: 'Calendar Range'
};
const calendarSearch = {
  path: () => [ssr(_tmpl$794), ssr(_tmpl$766), ssr(_tmpl$765), ssr(_tmpl$768), ssr(_tmpl$795), ssr(_tmpl$796)],
  outline: true,
  mini: false,
  title: 'Calendar Search'
};
const calendarX_2 = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$782), ssr(_tmpl$768), ssr(_tmpl$797), ssr(_tmpl$798)],
  outline: true,
  mini: false,
  title: 'Calendar X 2'
};
const calendarX = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$770), ssr(_tmpl$768), ssr(_tmpl$799), ssr(_tmpl$800)],
  outline: true,
  mini: false,
  title: 'Calendar X'
};
const calendar = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$766), ssr(_tmpl$770), ssr(_tmpl$768)],
  outline: true,
  mini: false,
  title: 'Calendar'
};
const cameraOff = {
  path: () => [ssr(_tmpl$408), ssr(_tmpl$801), ssr(_tmpl$802), ssr(_tmpl$803)],
  outline: true,
  mini: false,
  title: 'Camera Off'
};
const camera = {
  path: () => [ssr(_tmpl$804), ssr(_tmpl$805)],
  outline: true,
  mini: false,
  title: 'Camera'
};
const candlestickChart = {
  path: () => [ssr(_tmpl$806), ssr(_tmpl$807), ssr(_tmpl$808), ssr(_tmpl$809), ssr(_tmpl$810), ssr(_tmpl$811), ssr(_tmpl$182)],
  outline: true,
  mini: false,
  title: 'Candlestick Chart'
};
const candyCane = {
  path: () => [ssr(_tmpl$812), ssr(_tmpl$813), ssr(_tmpl$814), ssr(_tmpl$815), ssr(_tmpl$816)],
  outline: true,
  mini: false,
  title: 'Candy Cane'
};
const candyOff = {
  path: () => [ssr(_tmpl$817), ssr(_tmpl$818), ssr(_tmpl$819), ssr(_tmpl$820), ssr(_tmpl$821), ssr(_tmpl$822), ssr(_tmpl$823), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Candy Off'
};
const candy = {
  path: () => [ssr(_tmpl$824), ssr(_tmpl$825), ssr(_tmpl$826), ssr(_tmpl$827), ssr(_tmpl$828)],
  outline: true,
  mini: false,
  title: 'Candy'
};
const cannabis = {
  path: () => [ssr(_tmpl$829), ssr(_tmpl$830)],
  outline: true,
  mini: false,
  title: 'Cannabis'
};
const captionsOff = {
  path: () => [ssr(_tmpl$831), ssr(_tmpl$832), ssr(_tmpl$833), ssr(_tmpl$33), ssr(_tmpl$834), ssr(_tmpl$835)],
  outline: true,
  mini: false,
  title: 'Captions Off'
};
const captions = {
  path: () => [ssr(_tmpl$836), ssr(_tmpl$837)],
  outline: true,
  mini: false,
  title: 'Captions'
};
const carFront = {
  path: () => [ssr(_tmpl$838), ssr(_tmpl$792), ssr(_tmpl$839), ssr(_tmpl$840), ssr(_tmpl$186), ssr(_tmpl$187)],
  outline: true,
  mini: false,
  title: 'Car Front'
};
const carTaxiFront = {
  path: () => [ssr(_tmpl$841), ssr(_tmpl$838), ssr(_tmpl$792), ssr(_tmpl$839), ssr(_tmpl$840), ssr(_tmpl$186), ssr(_tmpl$187)],
  outline: true,
  mini: false,
  title: 'Car Taxi Front'
};
const car = {
  path: () => [ssr(_tmpl$842), ssr(_tmpl$843), ssr(_tmpl$844), ssr(_tmpl$845)],
  outline: true,
  mini: false,
  title: 'Car'
};
const caravan = {
  path: () => [ssr(_tmpl$846), ssr(_tmpl$847), ssr(_tmpl$848), ssr(_tmpl$849), ssr(_tmpl$850)],
  outline: true,
  mini: false,
  title: 'Caravan'
};
const carrot = {
  path: () => [ssr(_tmpl$851), ssr(_tmpl$852), ssr(_tmpl$853)],
  outline: true,
  mini: false,
  title: 'Carrot'
};
const caseLower = {
  path: () => [ssr(_tmpl$854), ssr(_tmpl$855), ssr(_tmpl$856), ssr(_tmpl$857)],
  outline: true,
  mini: false,
  title: 'Case Lower'
};
const caseSensitive = {
  path: () => [ssr(_tmpl$858), ssr(_tmpl$859), ssr(_tmpl$860), ssr(_tmpl$861)],
  outline: true,
  mini: false,
  title: 'Case Sensitive'
};
const caseUpper = {
  path: () => [ssr(_tmpl$858), ssr(_tmpl$859), ssr(_tmpl$862)],
  outline: true,
  mini: false,
  title: 'Case Upper'
};
const cassetteTape = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$863), ssr(_tmpl$329), ssr(_tmpl$864), ssr(_tmpl$865)],
  outline: true,
  mini: false,
  title: 'Cassette Tape'
};
const cast = {
  path: () => [ssr(_tmpl$866), ssr(_tmpl$867), ssr(_tmpl$868), ssr(_tmpl$869)],
  outline: true,
  mini: false,
  title: 'Cast'
};
const castle = {
  path: () => [ssr(_tmpl$870), ssr(_tmpl$871), ssr(_tmpl$872), ssr(_tmpl$873), ssr(_tmpl$874), ssr(_tmpl$875), ssr(_tmpl$876), ssr(_tmpl$877), ssr(_tmpl$878)],
  outline: true,
  mini: false,
  title: 'Castle'
};
const cat = {
  path: () => [ssr(_tmpl$879), ssr(_tmpl$880), ssr(_tmpl$881), ssr(_tmpl$882)],
  outline: true,
  mini: false,
  title: 'Cat'
};
const cctv = {
  path: () => [ssr(_tmpl$883), ssr(_tmpl$884), ssr(_tmpl$885), ssr(_tmpl$886), ssr(_tmpl$887)],
  outline: true,
  mini: false,
  title: 'Cctv'
};
const checkCheck = {
  path: () => [ssr(_tmpl$888), ssr(_tmpl$889)],
  outline: true,
  mini: false,
  title: 'Check Check'
};
const check = {
  path: () => ssr(_tmpl$890),
  outline: true,
  mini: false,
  title: 'Check'
};
const chefHat = {
  path: () => [ssr(_tmpl$891), ssr(_tmpl$892)],
  outline: true,
  mini: false,
  title: 'Chef Hat'
};
const cherry = {
  path: () => [ssr(_tmpl$893), ssr(_tmpl$894), ssr(_tmpl$895), ssr(_tmpl$896)],
  outline: true,
  mini: false,
  title: 'Cherry'
};
const chevronDown = {
  path: () => ssr(_tmpl$897),
  outline: true,
  mini: false,
  title: 'Chevron Down'
};
const chevronFirst = {
  path: () => [ssr(_tmpl$898), ssr(_tmpl$899)],
  outline: true,
  mini: false,
  title: 'Chevron First'
};
const chevronLast = {
  path: () => [ssr(_tmpl$900), ssr(_tmpl$901)],
  outline: true,
  mini: false,
  title: 'Chevron Last'
};
const chevronLeft = {
  path: () => ssr(_tmpl$902),
  outline: true,
  mini: false,
  title: 'Chevron Left'
};
const chevronRight = {
  path: () => ssr(_tmpl$903),
  outline: true,
  mini: false,
  title: 'Chevron Right'
};
const chevronUp = {
  path: () => ssr(_tmpl$904),
  outline: true,
  mini: false,
  title: 'Chevron Up'
};
const chevronsDownUp = {
  path: () => [ssr(_tmpl$905), ssr(_tmpl$906)],
  outline: true,
  mini: false,
  title: 'Chevrons Down Up'
};
const chevronsDown = {
  path: () => [ssr(_tmpl$907), ssr(_tmpl$908)],
  outline: true,
  mini: false,
  title: 'Chevrons Down'
};
const chevronsLeftRight = {
  path: () => [ssr(_tmpl$909), ssr(_tmpl$910)],
  outline: true,
  mini: false,
  title: 'Chevrons Left Right'
};
const chevronsLeft = {
  path: () => [ssr(_tmpl$911), ssr(_tmpl$912)],
  outline: true,
  mini: false,
  title: 'Chevrons Left'
};
const chevronsRightLeft = {
  path: () => [ssr(_tmpl$913), ssr(_tmpl$914)],
  outline: true,
  mini: false,
  title: 'Chevrons Right Left'
};
const chevronsRight = {
  path: () => [ssr(_tmpl$915), ssr(_tmpl$916)],
  outline: true,
  mini: false,
  title: 'Chevrons Right'
};
const chevronsUpDown = {
  path: () => [ssr(_tmpl$917), ssr(_tmpl$918)],
  outline: true,
  mini: false,
  title: 'Chevrons Up Down'
};
const chevronsUp = {
  path: () => [ssr(_tmpl$919), ssr(_tmpl$920)],
  outline: true,
  mini: false,
  title: 'Chevrons Up'
};
const chrome = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$289), ssr(_tmpl$921), ssr(_tmpl$922), ssr(_tmpl$923)],
  outline: true,
  mini: false,
  title: 'Chrome'
};
const church = {
  path: () => [ssr(_tmpl$924), ssr(_tmpl$925), ssr(_tmpl$926), ssr(_tmpl$927), ssr(_tmpl$928)],
  outline: true,
  mini: false,
  title: 'Church'
};
const cigaretteOff = {
  path: () => [ssr(_tmpl$408), ssr(_tmpl$929), ssr(_tmpl$930), ssr(_tmpl$931), ssr(_tmpl$932), ssr(_tmpl$933), ssr(_tmpl$934)],
  outline: true,
  mini: false,
  title: 'Cigarette Off'
};
const cigarette = {
  path: () => [ssr(_tmpl$935), ssr(_tmpl$930), ssr(_tmpl$932), ssr(_tmpl$933), ssr(_tmpl$934)],
  outline: true,
  mini: false,
  title: 'Cigarette'
};
const circleAlert = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$317), ssr(_tmpl$318)],
  outline: true,
  mini: false,
  title: 'Circle Alert'
};
const circleArrowDown = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$936), ssr(_tmpl$937)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Down'
};
const circleArrowLeft = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$938), ssr(_tmpl$939)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Left'
};
const circleArrowOutDownLeft = {
  path: () => [ssr(_tmpl$940), ssr(_tmpl$941), ssr(_tmpl$942)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Out Down Left'
};
const circleArrowOutDownRight = {
  path: () => [ssr(_tmpl$943), ssr(_tmpl$944), ssr(_tmpl$945)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Out Down Right'
};
const circleArrowOutUpLeft = {
  path: () => [ssr(_tmpl$946), ssr(_tmpl$947), ssr(_tmpl$948)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Out Up Left'
};
const circleArrowOutUpRight = {
  path: () => [ssr(_tmpl$949), ssr(_tmpl$950), ssr(_tmpl$951)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Out Up Right'
};
const circleArrowRight = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$329), ssr(_tmpl$952)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Right'
};
const circleArrowUp = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$953), ssr(_tmpl$954)],
  outline: true,
  mini: false,
  title: 'Circle Arrow Up'
};
const circleCheckBig = {
  path: () => [ssr(_tmpl$955), ssr(_tmpl$956)],
  outline: true,
  mini: false,
  title: 'Circle Check Big'
};
const circleCheck = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$321)],
  outline: true,
  mini: false,
  title: 'Circle Check'
};
const circleChevronDown = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$957)],
  outline: true,
  mini: false,
  title: 'Circle Chevron Down'
};
const circleChevronLeft = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$958)],
  outline: true,
  mini: false,
  title: 'Circle Chevron Left'
};
const circleChevronRight = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$959)],
  outline: true,
  mini: false,
  title: 'Circle Chevron Right'
};
const circleChevronUp = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$960)],
  outline: true,
  mini: false,
  title: 'Circle Chevron Up'
};
const circleDashed = {
  path: () => [ssr(_tmpl$961), ssr(_tmpl$962), ssr(_tmpl$963), ssr(_tmpl$964), ssr(_tmpl$965), ssr(_tmpl$966), ssr(_tmpl$967), ssr(_tmpl$968)],
  outline: true,
  mini: false,
  title: 'Circle Dashed'
};
const circleDivide = {
  path: () => [ssr(_tmpl$337), ssr(_tmpl$969), ssr(_tmpl$970), ssr(_tmpl$137)],
  outline: true,
  mini: false,
  title: 'Circle Divide'
};
const circleDollarSign = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$322), ssr(_tmpl$323)],
  outline: true,
  mini: false,
  title: 'Circle Dollar Sign'
};
const circleDotDashed = {
  path: () => [ssr(_tmpl$971), ssr(_tmpl$972), ssr(_tmpl$973), ssr(_tmpl$974), ssr(_tmpl$975), ssr(_tmpl$976), ssr(_tmpl$977), ssr(_tmpl$978), ssr(_tmpl$291)],
  outline: true,
  mini: false,
  title: 'Circle Dot Dashed'
};
const circleDot = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$291)],
  outline: true,
  mini: false,
  title: 'Circle Dot'
};
const circleEllipsis = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$979), ssr(_tmpl$675), ssr(_tmpl$980)],
  outline: true,
  mini: false,
  title: 'Circle Ellipsis'
};
const circleEqual = {
  path: () => [ssr(_tmpl$981), ssr(_tmpl$982), ssr(_tmpl$137)],
  outline: true,
  mini: false,
  title: 'Circle Equal'
};
const circleFadingPlus = {
  path: () => [ssr(_tmpl$983), ssr(_tmpl$936), ssr(_tmpl$938), ssr(_tmpl$984), ssr(_tmpl$985), ssr(_tmpl$986), ssr(_tmpl$987)],
  outline: true,
  mini: false,
  title: 'Circle Fading Plus'
};
const circleGauge = {
  path: () => [ssr(_tmpl$988), ssr(_tmpl$361), ssr(_tmpl$989)],
  outline: true,
  mini: false,
  title: 'Circle Gauge'
};
const circleHelp = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$326), ssr(_tmpl$990)],
  outline: true,
  mini: false,
  title: 'Circle Help'
};
const circleMinus = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$329)],
  outline: true,
  mini: false,
  title: 'Circle Minus'
};
const circleOff = {
  path: () => [ssr(_tmpl$33), ssr(_tmpl$991), ssr(_tmpl$992)],
  outline: true,
  mini: false,
  title: 'Circle Off'
};
const circleParkingOff = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$993), ssr(_tmpl$994), ssr(_tmpl$995)],
  outline: true,
  mini: false,
  title: 'Circle Parking Off'
};
const circleParking = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$996)],
  outline: true,
  mini: false,
  title: 'Circle Parking'
};
const circlePause = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$997), ssr(_tmpl$998)],
  outline: true,
  mini: false,
  title: 'Circle Pause'
};
const circlePercent = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$338), ssr(_tmpl$339), ssr(_tmpl$340)],
  outline: true,
  mini: false,
  title: 'Circle Percent'
};
const circlePlay = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$999)],
  outline: true,
  mini: false,
  title: 'Circle Play'
};
const circlePlus = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$329), ssr(_tmpl$936)],
  outline: true,
  mini: false,
  title: 'Circle Plus'
};
const circlePower = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1000), ssr(_tmpl$1001)],
  outline: true,
  mini: false,
  title: 'Circle Power'
};
const circleSlash_2 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1002)],
  outline: true,
  mini: false,
  title: 'Circle Slash 2'
};
const circleSlash = {
  path: () => [ssr(_tmpl$1003), ssr(_tmpl$137)],
  outline: true,
  mini: false,
  title: 'Circle Slash'
};
const circleStop = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1004)],
  outline: true,
  mini: false,
  title: 'Circle Stop'
};
const circleUserRound = {
  path: () => [ssr(_tmpl$1005), ssr(_tmpl$1006), ssr(_tmpl$137)],
  outline: true,
  mini: false,
  title: 'Circle User Round'
};
const circleUser = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1007), ssr(_tmpl$1008)],
  outline: true,
  mini: false,
  title: 'Circle User'
};
const circleX = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$338), ssr(_tmpl$1009)],
  outline: true,
  mini: false,
  title: 'Circle X'
};
const circle = {
  path: () => ssr(_tmpl$137),
  outline: true,
  mini: false,
  title: 'Circle'
};
const circuitBoard = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1010), ssr(_tmpl$1011), ssr(_tmpl$1012), ssr(_tmpl$1013)],
  outline: true,
  mini: false,
  title: 'Circuit Board'
};
const citrus = {
  path: () => [ssr(_tmpl$1014), ssr(_tmpl$1015), ssr(_tmpl$1016), ssr(_tmpl$1017)],
  outline: true,
  mini: false,
  title: 'Citrus'
};
const clapperboard = {
  path: () => [ssr(_tmpl$1018), ssr(_tmpl$1019), ssr(_tmpl$1020), ssr(_tmpl$1021)],
  outline: true,
  mini: false,
  title: 'Clapperboard'
};
const clipboardCheck = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023), ssr(_tmpl$1024)],
  outline: true,
  mini: false,
  title: 'Clipboard Check'
};
const clipboardCopy = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1025), ssr(_tmpl$1026), ssr(_tmpl$1027), ssr(_tmpl$1028)],
  outline: true,
  mini: false,
  title: 'Clipboard Copy'
};
const clipboardList = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023), ssr(_tmpl$1029), ssr(_tmpl$1030), ssr(_tmpl$1031), ssr(_tmpl$1032)],
  outline: true,
  mini: false,
  title: 'Clipboard List'
};
const clipboardMinus = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023), ssr(_tmpl$1033)],
  outline: true,
  mini: false,
  title: 'Clipboard Minus'
};
const clipboardPaste = {
  path: () => [ssr(_tmpl$1034), ssr(_tmpl$1035), ssr(_tmpl$1036)],
  outline: true,
  mini: false,
  title: 'Clipboard Paste'
};
const clipboardPenLine = {
  path: () => [ssr(_tmpl$1037), ssr(_tmpl$1038), ssr(_tmpl$1039), ssr(_tmpl$1040), ssr(_tmpl$1041)],
  outline: true,
  mini: false,
  title: 'Clipboard Pen Line'
};
const clipboardPen = {
  path: () => [ssr(_tmpl$1037), ssr(_tmpl$1042), ssr(_tmpl$1043), ssr(_tmpl$1044)],
  outline: true,
  mini: false,
  title: 'Clipboard Pen'
};
const clipboardPlus = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023), ssr(_tmpl$1033), ssr(_tmpl$1045)],
  outline: true,
  mini: false,
  title: 'Clipboard Plus'
};
const clipboardType = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023), ssr(_tmpl$1046), ssr(_tmpl$1047), ssr(_tmpl$1048)],
  outline: true,
  mini: false,
  title: 'Clipboard Type'
};
const clipboardX = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023), ssr(_tmpl$1049), ssr(_tmpl$1050)],
  outline: true,
  mini: false,
  title: 'Clipboard X'
};
const clipboard = {
  path: () => [ssr(_tmpl$1022), ssr(_tmpl$1023)],
  outline: true,
  mini: false,
  title: 'Clipboard'
};
const clock_1 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1051)],
  outline: true,
  mini: false,
  title: 'Clock 1'
};
const clock_10 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1052)],
  outline: true,
  mini: false,
  title: 'Clock 10'
};
const clock_11 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1053)],
  outline: true,
  mini: false,
  title: 'Clock 11'
};
const clock_12 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1054)],
  outline: true,
  mini: false,
  title: 'Clock 12'
};
const clock_2 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1055)],
  outline: true,
  mini: false,
  title: 'Clock 2'
};
const clock_3 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1056)],
  outline: true,
  mini: false,
  title: 'Clock 3'
};
const clock_4 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1057)],
  outline: true,
  mini: false,
  title: 'Clock 4'
};
const clock_5 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1058)],
  outline: true,
  mini: false,
  title: 'Clock 5'
};
const clock_6 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1059)],
  outline: true,
  mini: false,
  title: 'Clock 6'
};
const clock_7 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1060)],
  outline: true,
  mini: false,
  title: 'Clock 7'
};
const clock_8 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1061)],
  outline: true,
  mini: false,
  title: 'Clock 8'
};
const clock_9 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1062)],
  outline: true,
  mini: false,
  title: 'Clock 9'
};
const clock = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1057)],
  outline: true,
  mini: false,
  title: 'Clock'
};
const cloudCog = {
  path: () => [ssr(_tmpl$1063), ssr(_tmpl$1064), ssr(_tmpl$1065), ssr(_tmpl$1066), ssr(_tmpl$1067), ssr(_tmpl$1068), ssr(_tmpl$1069), ssr(_tmpl$1070), ssr(_tmpl$1071), ssr(_tmpl$1072)],
  outline: true,
  mini: false,
  title: 'Cloud Cog'
};
const cloudDownload = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$177), ssr(_tmpl$1074)],
  outline: true,
  mini: false,
  title: 'Cloud Download'
};
const cloudDrizzle = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$1075), ssr(_tmpl$1076), ssr(_tmpl$1077), ssr(_tmpl$1078), ssr(_tmpl$1079), ssr(_tmpl$1080)],
  outline: true,
  mini: false,
  title: 'Cloud Drizzle'
};
const cloudFog = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$1081), ssr(_tmpl$1082)],
  outline: true,
  mini: false,
  title: 'Cloud Fog'
};
const cloudHail = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$1083), ssr(_tmpl$1084), ssr(_tmpl$1085), ssr(_tmpl$1086), ssr(_tmpl$1087), ssr(_tmpl$1088)],
  outline: true,
  mini: false,
  title: 'Cloud Hail'
};
const cloudLightning = {
  path: () => [ssr(_tmpl$1089), ssr(_tmpl$1090)],
  outline: true,
  mini: false,
  title: 'Cloud Lightning'
};
const cloudMoonRain = {
  path: () => [ssr(_tmpl$1091), ssr(_tmpl$1092), ssr(_tmpl$1093), ssr(_tmpl$1094)],
  outline: true,
  mini: false,
  title: 'Cloud Moon Rain'
};
const cloudMoon = {
  path: () => [ssr(_tmpl$1095), ssr(_tmpl$1096)],
  outline: true,
  mini: false,
  title: 'Cloud Moon'
};
const cloudOff = {
  path: () => [ssr(_tmpl$33), ssr(_tmpl$1097), ssr(_tmpl$1098)],
  outline: true,
  mini: false,
  title: 'Cloud Off'
};
const cloudRainWind = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$1099), ssr(_tmpl$1100), ssr(_tmpl$1101)],
  outline: true,
  mini: false,
  title: 'Cloud Rain Wind'
};
const cloudRain = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$1102), ssr(_tmpl$1103), ssr(_tmpl$151)],
  outline: true,
  mini: false,
  title: 'Cloud Rain'
};
const cloudSnow = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$728), ssr(_tmpl$1104), ssr(_tmpl$990), ssr(_tmpl$1105), ssr(_tmpl$729), ssr(_tmpl$1106)],
  outline: true,
  mini: false,
  title: 'Cloud Snow'
};
const cloudSunRain = {
  path: () => [ssr(_tmpl$1107), ssr(_tmpl$1108), ssr(_tmpl$597), ssr(_tmpl$1109), ssr(_tmpl$1110), ssr(_tmpl$1092), ssr(_tmpl$1093), ssr(_tmpl$1094)],
  outline: true,
  mini: false,
  title: 'Cloud Sun Rain'
};
const cloudSun = {
  path: () => [ssr(_tmpl$1107), ssr(_tmpl$1108), ssr(_tmpl$597), ssr(_tmpl$1109), ssr(_tmpl$1110), ssr(_tmpl$1111)],
  outline: true,
  mini: false,
  title: 'Cloud Sun'
};
const cloudUpload = {
  path: () => [ssr(_tmpl$1073), ssr(_tmpl$177), ssr(_tmpl$1112)],
  outline: true,
  mini: false,
  title: 'Cloud Upload'
};
const cloud = {
  path: () => ssr(_tmpl$1113),
  outline: true,
  mini: false,
  title: 'Cloud'
};
const cloudy = {
  path: () => [ssr(_tmpl$1114), ssr(_tmpl$1115)],
  outline: true,
  mini: false,
  title: 'Cloudy'
};
const clover = {
  path: () => [ssr(_tmpl$1116), ssr(_tmpl$1117), ssr(_tmpl$1118)],
  outline: true,
  mini: false,
  title: 'Clover'
};
const club = {
  path: () => [ssr(_tmpl$1119), ssr(_tmpl$1120)],
  outline: true,
  mini: false,
  title: 'Club'
};
const codeXml = {
  path: () => [ssr(_tmpl$1121), ssr(_tmpl$1122), ssr(_tmpl$1123)],
  outline: true,
  mini: false,
  title: 'Code Xml'
};
const code = {
  path: () => [ssr(_tmpl$1124), ssr(_tmpl$1125)],
  outline: true,
  mini: false,
  title: 'Code'
};
const codepen = {
  path: () => [ssr(_tmpl$1126), ssr(_tmpl$1127), ssr(_tmpl$1128), ssr(_tmpl$1129), ssr(_tmpl$1130)],
  outline: true,
  mini: false,
  title: 'Codepen'
};
const codesandbox = {
  path: () => [ssr(_tmpl$511), ssr(_tmpl$1131), ssr(_tmpl$1132), ssr(_tmpl$1133), ssr(_tmpl$1134), ssr(_tmpl$1135)],
  outline: true,
  mini: false,
  title: 'Codesandbox'
};
const coffee = {
  path: () => [ssr(_tmpl$1136), ssr(_tmpl$1137), ssr(_tmpl$1138), ssr(_tmpl$1139)],
  outline: true,
  mini: false,
  title: 'Coffee'
};
const cog = {
  path: () => [ssr(_tmpl$1140), ssr(_tmpl$1141), ssr(_tmpl$1107), ssr(_tmpl$1142), ssr(_tmpl$1143), ssr(_tmpl$1144), ssr(_tmpl$1145), ssr(_tmpl$1146), ssr(_tmpl$1147), ssr(_tmpl$594), ssr(_tmpl$1148), ssr(_tmpl$1149), ssr(_tmpl$1150), ssr(_tmpl$1151)],
  outline: true,
  mini: false,
  title: 'Cog'
};
const coins = {
  path: () => [ssr(_tmpl$1152), ssr(_tmpl$1153), ssr(_tmpl$1154), ssr(_tmpl$1155)],
  outline: true,
  mini: false,
  title: 'Coins'
};
const columns_2 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1156)],
  outline: true,
  mini: false,
  title: 'Columns 2'
};
const columns_3 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1157), ssr(_tmpl$1158)],
  outline: true,
  mini: false,
  title: 'Columns 3'
};
const columns_4 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1159), ssr(_tmpl$1156), ssr(_tmpl$1160)],
  outline: true,
  mini: false,
  title: 'Columns 4'
};
const combine = {
  path: () => [ssr(_tmpl$1161), ssr(_tmpl$1162), ssr(_tmpl$1163), ssr(_tmpl$1164), ssr(_tmpl$1165), ssr(_tmpl$1166)],
  outline: true,
  mini: false,
  title: 'Combine'
};
const command = {
  path: () => ssr(_tmpl$1167),
  outline: true,
  mini: false,
  title: 'Command'
};
const compass = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1168)],
  outline: true,
  mini: false,
  title: 'Compass'
};
const component = {
  path: () => [ssr(_tmpl$1169), ssr(_tmpl$1170), ssr(_tmpl$1171), ssr(_tmpl$1172)],
  outline: true,
  mini: false,
  title: 'Component'
};
const computer = {
  path: () => [ssr(_tmpl$1173), ssr(_tmpl$1174), ssr(_tmpl$1175), ssr(_tmpl$1176)],
  outline: true,
  mini: false,
  title: 'Computer'
};
const conciergeBell = {
  path: () => [ssr(_tmpl$1177), ssr(_tmpl$1178), ssr(_tmpl$1179), ssr(_tmpl$1180)],
  outline: true,
  mini: false,
  title: 'Concierge Bell'
};
const cone = {
  path: () => [ssr(_tmpl$1181), ssr(_tmpl$1182)],
  outline: true,
  mini: false,
  title: 'Cone'
};
const construction = {
  path: () => [ssr(_tmpl$1183), ssr(_tmpl$1184), ssr(_tmpl$1185), ssr(_tmpl$1186), ssr(_tmpl$1187), ssr(_tmpl$1188), ssr(_tmpl$1189), ssr(_tmpl$1190)],
  outline: true,
  mini: false,
  title: 'Construction'
};
const contactRound = {
  path: () => [ssr(_tmpl$1191), ssr(_tmpl$1192), ssr(_tmpl$770), ssr(_tmpl$1193), ssr(_tmpl$1194)],
  outline: true,
  mini: false,
  title: 'Contact Round'
};
const contact = {
  path: () => [ssr(_tmpl$1195), ssr(_tmpl$770), ssr(_tmpl$1196), ssr(_tmpl$1193), ssr(_tmpl$1194)],
  outline: true,
  mini: false,
  title: 'Contact'
};
const container = {
  path: () => [ssr(_tmpl$1197), ssr(_tmpl$1198), ssr(_tmpl$1199), ssr(_tmpl$1200), ssr(_tmpl$1201)],
  outline: true,
  mini: false,
  title: 'Container'
};
const contrast = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1202)],
  outline: true,
  mini: false,
  title: 'Contrast'
};
const cookie = {
  path: () => [ssr(_tmpl$1203), ssr(_tmpl$1204), ssr(_tmpl$1205), ssr(_tmpl$1206), ssr(_tmpl$1207), ssr(_tmpl$1208)],
  outline: true,
  mini: false,
  title: 'Cookie'
};
const cookingPot = {
  path: () => [ssr(_tmpl$44), ssr(_tmpl$1209), ssr(_tmpl$1210), ssr(_tmpl$1211)],
  outline: true,
  mini: false,
  title: 'Cooking Pot'
};
const copyCheck = {
  path: () => [ssr(_tmpl$1212), ssr(_tmpl$1213), ssr(_tmpl$1214)],
  outline: true,
  mini: false,
  title: 'Copy Check'
};
const copyMinus = {
  path: () => [ssr(_tmpl$1215), ssr(_tmpl$1213), ssr(_tmpl$1214)],
  outline: true,
  mini: false,
  title: 'Copy Minus'
};
const copyPlus = {
  path: () => [ssr(_tmpl$1216), ssr(_tmpl$1215), ssr(_tmpl$1213), ssr(_tmpl$1214)],
  outline: true,
  mini: false,
  title: 'Copy Plus'
};
const copySlash = {
  path: () => [ssr(_tmpl$1217), ssr(_tmpl$1213), ssr(_tmpl$1214)],
  outline: true,
  mini: false,
  title: 'Copy Slash'
};
const copyX = {
  path: () => [ssr(_tmpl$1218), ssr(_tmpl$1217), ssr(_tmpl$1213), ssr(_tmpl$1214)],
  outline: true,
  mini: false,
  title: 'Copy X'
};
const copy = {
  path: () => [ssr(_tmpl$1213), ssr(_tmpl$1214)],
  outline: true,
  mini: false,
  title: 'Copy'
};
const copyleft = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1219)],
  outline: true,
  mini: false,
  title: 'Copyleft'
};
const copyright = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1220)],
  outline: true,
  mini: false,
  title: 'Copyright'
};
const cornerDownLeft = {
  path: () => [ssr(_tmpl$1221), ssr(_tmpl$1222)],
  outline: true,
  mini: false,
  title: 'Corner Down Left'
};
const cornerDownRight = {
  path: () => [ssr(_tmpl$1223), ssr(_tmpl$1224)],
  outline: true,
  mini: false,
  title: 'Corner Down Right'
};
const cornerLeftDown = {
  path: () => [ssr(_tmpl$1225), ssr(_tmpl$1226)],
  outline: true,
  mini: false,
  title: 'Corner Left Down'
};
const cornerLeftUp = {
  path: () => [ssr(_tmpl$1227), ssr(_tmpl$1228)],
  outline: true,
  mini: false,
  title: 'Corner Left Up'
};
const cornerRightDown = {
  path: () => [ssr(_tmpl$1229), ssr(_tmpl$1230)],
  outline: true,
  mini: false,
  title: 'Corner Right Down'
};
const cornerRightUp = {
  path: () => [ssr(_tmpl$1231), ssr(_tmpl$1232)],
  outline: true,
  mini: false,
  title: 'Corner Right Up'
};
const cornerUpLeft = {
  path: () => [ssr(_tmpl$1233), ssr(_tmpl$1234)],
  outline: true,
  mini: false,
  title: 'Corner Up Left'
};
const cornerUpRight = {
  path: () => [ssr(_tmpl$1235), ssr(_tmpl$1236)],
  outline: true,
  mini: false,
  title: 'Corner Up Right'
};
const cpu = {
  path: () => [ssr(_tmpl$1237), ssr(_tmpl$1238), ssr(_tmpl$1239), ssr(_tmpl$1240), ssr(_tmpl$1241), ssr(_tmpl$1242), ssr(_tmpl$1243), ssr(_tmpl$1244), ssr(_tmpl$1245), ssr(_tmpl$1246)],
  outline: true,
  mini: false,
  title: 'Cpu'
};
const creativeCommons = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1247), ssr(_tmpl$1248)],
  outline: true,
  mini: false,
  title: 'Creative Commons'
};
const creditCard = {
  path: () => [ssr(_tmpl$1249), ssr(_tmpl$1250)],
  outline: true,
  mini: false,
  title: 'Credit Card'
};
const croissant = {
  path: () => [ssr(_tmpl$1251), ssr(_tmpl$1252), ssr(_tmpl$1253), ssr(_tmpl$1254), ssr(_tmpl$1255)],
  outline: true,
  mini: false,
  title: 'Croissant'
};
const crop = {
  path: () => [ssr(_tmpl$1256), ssr(_tmpl$1257)],
  outline: true,
  mini: false,
  title: 'Crop'
};
const cross = {
  path: () => ssr(_tmpl$1258),
  outline: true,
  mini: false,
  title: 'Cross'
};
const crosshair = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1259), ssr(_tmpl$1260), ssr(_tmpl$1261), ssr(_tmpl$1262)],
  outline: true,
  mini: false,
  title: 'Crosshair'
};
const crown = {
  path: () => [ssr(_tmpl$1263), ssr(_tmpl$268)],
  outline: true,
  mini: false,
  title: 'Crown'
};
const cuboid = {
  path: () => [ssr(_tmpl$1264), ssr(_tmpl$1265), ssr(_tmpl$1266)],
  outline: true,
  mini: false,
  title: 'Cuboid'
};
const cupSoda = {
  path: () => [ssr(_tmpl$1267), ssr(_tmpl$1268), ssr(_tmpl$1269), ssr(_tmpl$1270)],
  outline: true,
  mini: false,
  title: 'Cup Soda'
};
const currency = {
  path: () => [ssr(_tmpl$1271), ssr(_tmpl$1272), ssr(_tmpl$1273), ssr(_tmpl$1274), ssr(_tmpl$1275)],
  outline: true,
  mini: false,
  title: 'Currency'
};
const cylinder = {
  path: () => [ssr(_tmpl$1276), ssr(_tmpl$1277)],
  outline: true,
  mini: false,
  title: 'Cylinder'
};
const databaseBackup = {
  path: () => [ssr(_tmpl$1276), ssr(_tmpl$1278), ssr(_tmpl$1279), ssr(_tmpl$1280), ssr(_tmpl$1281), ssr(_tmpl$1282)],
  outline: true,
  mini: false,
  title: 'Database Backup'
};
const databaseZap = {
  path: () => [ssr(_tmpl$1276), ssr(_tmpl$1283), ssr(_tmpl$1284), ssr(_tmpl$1285), ssr(_tmpl$1286)],
  outline: true,
  mini: false,
  title: 'Database Zap'
};
const database = {
  path: () => [ssr(_tmpl$1276), ssr(_tmpl$1287), ssr(_tmpl$1288)],
  outline: true,
  mini: false,
  title: 'Database'
};
const deleteIcon = {
  path: () => [ssr(_tmpl$1289), ssr(_tmpl$1290), ssr(_tmpl$1291)],
  outline: true,
  mini: false,
  title: 'Delete'
};
const dessert = {
  path: () => [ssr(_tmpl$1292), ssr(_tmpl$1293), ssr(_tmpl$1294)],
  outline: true,
  mini: false,
  title: 'Dessert'
};
const diameter = {
  path: () => [ssr(_tmpl$1295), ssr(_tmpl$1296), ssr(_tmpl$1297), ssr(_tmpl$1298), ssr(_tmpl$1299)],
  outline: true,
  mini: false,
  title: 'Diameter'
};
const diamondMinus = {
  path: () => [ssr(_tmpl$1300), ssr(_tmpl$329)],
  outline: true,
  mini: false,
  title: 'Diamond Minus'
};
const diamondPercent = {
  path: () => [ssr(_tmpl$1301), ssr(_tmpl$1302), ssr(_tmpl$1303), ssr(_tmpl$1304)],
  outline: true,
  mini: false,
  title: 'Diamond Percent'
};
const diamondPlus = {
  path: () => [ssr(_tmpl$936), ssr(_tmpl$1300), ssr(_tmpl$329)],
  outline: true,
  mini: false,
  title: 'Diamond Plus'
};
const diamond = {
  path: () => ssr(_tmpl$1305),
  outline: true,
  mini: false,
  title: 'Diamond'
};
const dice_1 = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$675)],
  outline: true,
  mini: false,
  title: 'Dice 1'
};
const dice_2 = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$1306), ssr(_tmpl$1307)],
  outline: true,
  mini: false,
  title: 'Dice 2'
};
const dice_3 = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$1308), ssr(_tmpl$675), ssr(_tmpl$1032)],
  outline: true,
  mini: false,
  title: 'Dice 3'
};
const dice_4 = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$1308), ssr(_tmpl$1309), ssr(_tmpl$1032), ssr(_tmpl$1310)],
  outline: true,
  mini: false,
  title: 'Dice 4'
};
const dice_5 = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$1308), ssr(_tmpl$1309), ssr(_tmpl$1032), ssr(_tmpl$1310), ssr(_tmpl$675)],
  outline: true,
  mini: false,
  title: 'Dice 5'
};
const dice_6 = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$1308), ssr(_tmpl$1311), ssr(_tmpl$1310), ssr(_tmpl$1309), ssr(_tmpl$1312), ssr(_tmpl$1032)],
  outline: true,
  mini: false,
  title: 'Dice 6'
};
const dices = {
  path: () => [ssr(_tmpl$1313), ssr(_tmpl$1314), ssr(_tmpl$1315), ssr(_tmpl$1316), ssr(_tmpl$1317), ssr(_tmpl$1318)],
  outline: true,
  mini: false,
  title: 'Dices'
};
const diff = {
  path: () => [ssr(_tmpl$267), ssr(_tmpl$1319), ssr(_tmpl$268)],
  outline: true,
  mini: false,
  title: 'Diff'
};
const disc_2 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$289), ssr(_tmpl$675)],
  outline: true,
  mini: false,
  title: 'Disc 2'
};
const disc_3 = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1320), ssr(_tmpl$361), ssr(_tmpl$1321)],
  outline: true,
  mini: false,
  title: 'Disc 3'
};
const discAlbum = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1322), ssr(_tmpl$675)],
  outline: true,
  mini: false,
  title: 'Disc Album'
};
const disc = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$361)],
  outline: true,
  mini: false,
  title: 'Disc'
};
const divide = {
  path: () => [ssr(_tmpl$1323), ssr(_tmpl$1324), ssr(_tmpl$1325)],
  outline: true,
  mini: false,
  title: 'Divide'
};
const dnaOff = {
  path: () => [ssr(_tmpl$1326), ssr(_tmpl$1327), ssr(_tmpl$1328), ssr(_tmpl$1329), ssr(_tmpl$1330), ssr(_tmpl$1331), ssr(_tmpl$1332), ssr(_tmpl$1333), ssr(_tmpl$1334), ssr(_tmpl$1335), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Dna Off'
};
const dna = {
  path: () => [ssr(_tmpl$1336), ssr(_tmpl$1337), ssr(_tmpl$1338), ssr(_tmpl$1328), ssr(_tmpl$1339), ssr(_tmpl$1330), ssr(_tmpl$1331), ssr(_tmpl$1332), ssr(_tmpl$1333), ssr(_tmpl$1334), ssr(_tmpl$1335)],
  outline: true,
  mini: false,
  title: 'Dna'
};
const dock = {
  path: () => [ssr(_tmpl$169), ssr(_tmpl$163), ssr(_tmpl$1340)],
  outline: true,
  mini: false,
  title: 'Dock'
};
const dog = {
  path: () => [ssr(_tmpl$1341), ssr(_tmpl$1342), ssr(_tmpl$880), ssr(_tmpl$881), ssr(_tmpl$882), ssr(_tmpl$1343)],
  outline: true,
  mini: false,
  title: 'Dog'
};
const dollarSign = {
  path: () => [ssr(_tmpl$1344), ssr(_tmpl$1345)],
  outline: true,
  mini: false,
  title: 'Dollar Sign'
};
const donut = {
  path: () => [ssr(_tmpl$1346), ssr(_tmpl$656)],
  outline: true,
  mini: false,
  title: 'Donut'
};
const doorClosed = {
  path: () => [ssr(_tmpl$1347), ssr(_tmpl$106), ssr(_tmpl$1348)],
  outline: true,
  mini: false,
  title: 'Door Closed'
};
const doorOpen = {
  path: () => [ssr(_tmpl$1349), ssr(_tmpl$1350), ssr(_tmpl$1351), ssr(_tmpl$1352), ssr(_tmpl$1353)],
  outline: true,
  mini: false,
  title: 'Door Open'
};
const dot = {
  path: () => ssr(_tmpl$1354),
  outline: true,
  mini: false,
  title: 'Dot'
};
const download = {
  path: () => [ssr(_tmpl$1355), ssr(_tmpl$1356), ssr(_tmpl$1357)],
  outline: true,
  mini: false,
  title: 'Download'
};
const draftingCompass = {
  path: () => [ssr(_tmpl$1358), ssr(_tmpl$1359), ssr(_tmpl$1360), ssr(_tmpl$1361), ssr(_tmpl$1362)],
  outline: true,
  mini: false,
  title: 'Drafting Compass'
};
const drama = {
  path: () => [ssr(_tmpl$1363), ssr(_tmpl$1364), ssr(_tmpl$1365), ssr(_tmpl$1366), ssr(_tmpl$1367), ssr(_tmpl$1368), ssr(_tmpl$1369), ssr(_tmpl$1370)],
  outline: true,
  mini: false,
  title: 'Drama'
};
const dribbble = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1371), ssr(_tmpl$1372), ssr(_tmpl$1373)],
  outline: true,
  mini: false,
  title: 'Dribbble'
};
const drill = {
  path: () => [ssr(_tmpl$1374), ssr(_tmpl$1375), ssr(_tmpl$1376), ssr(_tmpl$1377), ssr(_tmpl$1378), ssr(_tmpl$1379), ssr(_tmpl$1380)],
  outline: true,
  mini: false,
  title: 'Drill'
};
const droplet = {
  path: () => ssr(_tmpl$1381),
  outline: true,
  mini: false,
  title: 'Droplet'
};
const droplets = {
  path: () => [ssr(_tmpl$1382), ssr(_tmpl$1383)],
  outline: true,
  mini: false,
  title: 'Droplets'
};
const drum = {
  path: () => [ssr(_tmpl$1384), ssr(_tmpl$1385), ssr(_tmpl$1386), ssr(_tmpl$1387), ssr(_tmpl$1388), ssr(_tmpl$1389), ssr(_tmpl$1390)],
  outline: true,
  mini: false,
  title: 'Drum'
};
const drumstick = {
  path: () => [ssr(_tmpl$1391), ssr(_tmpl$1392)],
  outline: true,
  mini: false,
  title: 'Drumstick'
};
const dumbbell = {
  path: () => [ssr(_tmpl$1393), ssr(_tmpl$1394), ssr(_tmpl$1395), ssr(_tmpl$1396), ssr(_tmpl$1397)],
  outline: true,
  mini: false,
  title: 'Dumbbell'
};
const earOff = {
  path: () => [ssr(_tmpl$1398), ssr(_tmpl$1399), ssr(_tmpl$1400), ssr(_tmpl$1401), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Ear Off'
};
const ear = {
  path: () => [ssr(_tmpl$1402), ssr(_tmpl$1403)],
  outline: true,
  mini: false,
  title: 'Ear'
};
const earthLock = {
  path: () => [ssr(_tmpl$1404), ssr(_tmpl$1405), ssr(_tmpl$1406), ssr(_tmpl$1407), ssr(_tmpl$1408), ssr(_tmpl$1409)],
  outline: true,
  mini: false,
  title: 'Earth Lock'
};
const earth = {
  path: () => [ssr(_tmpl$1406), ssr(_tmpl$1410), ssr(_tmpl$1411), ssr(_tmpl$137)],
  outline: true,
  mini: false,
  title: 'Earth'
};
const eclipse = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1412)],
  outline: true,
  mini: false,
  title: 'Eclipse'
};
const eggFried = {
  path: () => [ssr(_tmpl$1413), ssr(_tmpl$1414)],
  outline: true,
  mini: false,
  title: 'Egg Fried'
};
const eggOff = {
  path: () => [ssr(_tmpl$1415), ssr(_tmpl$1416), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Egg Off'
};
const egg = {
  path: () => ssr(_tmpl$1417),
  outline: true,
  mini: false,
  title: 'Egg'
};
const ellipsisVertical = {
  path: () => [ssr(_tmpl$291), ssr(_tmpl$1418), ssr(_tmpl$1419)],
  outline: true,
  mini: false,
  title: 'Ellipsis Vertical'
};
const ellipsis = {
  path: () => [ssr(_tmpl$291), ssr(_tmpl$1420), ssr(_tmpl$1421)],
  outline: true,
  mini: false,
  title: 'Ellipsis'
};
const equalNot = {
  path: () => [ssr(_tmpl$1422), ssr(_tmpl$1423), ssr(_tmpl$1424)],
  outline: true,
  mini: false,
  title: 'Equal Not'
};
const equal = {
  path: () => [ssr(_tmpl$1422), ssr(_tmpl$1423)],
  outline: true,
  mini: false,
  title: 'Equal'
};
const eraser = {
  path: () => [ssr(_tmpl$1425), ssr(_tmpl$1426), ssr(_tmpl$1427)],
  outline: true,
  mini: false,
  title: 'Eraser'
};
const euro = {
  path: () => [ssr(_tmpl$1428), ssr(_tmpl$1429), ssr(_tmpl$1430)],
  outline: true,
  mini: false,
  title: 'Euro'
};
const expand = {
  path: () => [ssr(_tmpl$1431), ssr(_tmpl$1432), ssr(_tmpl$1433), ssr(_tmpl$1434)],
  outline: true,
  mini: false,
  title: 'Expand'
};
const externalLink = {
  path: () => [ssr(_tmpl$1435), ssr(_tmpl$1436), ssr(_tmpl$1437)],
  outline: true,
  mini: false,
  title: 'External Link'
};
const eyeOff = {
  path: () => [ssr(_tmpl$1438), ssr(_tmpl$1439), ssr(_tmpl$1440), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Eye Off'
};
const eye = {
  path: () => [ssr(_tmpl$1441), ssr(_tmpl$656)],
  outline: true,
  mini: false,
  title: 'Eye'
};
const facebook = {
  path: () => ssr(_tmpl$1442),
  outline: true,
  mini: false,
  title: 'Facebook'
};
const factory = {
  path: () => [ssr(_tmpl$1443), ssr(_tmpl$1444), ssr(_tmpl$1445), ssr(_tmpl$1446)],
  outline: true,
  mini: false,
  title: 'Factory'
};
const fan = {
  path: () => [ssr(_tmpl$1447), ssr(_tmpl$1206)],
  outline: true,
  mini: false,
  title: 'Fan'
};
const fastForward = {
  path: () => [ssr(_tmpl$1448), ssr(_tmpl$1449)],
  outline: true,
  mini: false,
  title: 'Fast Forward'
};
const feather = {
  path: () => [ssr(_tmpl$1450), ssr(_tmpl$1451), ssr(_tmpl$1452)],
  outline: true,
  mini: false,
  title: 'Feather'
};
const fence = {
  path: () => [ssr(_tmpl$1453), ssr(_tmpl$1454), ssr(_tmpl$1455), ssr(_tmpl$1456), ssr(_tmpl$1457), ssr(_tmpl$1458), ssr(_tmpl$1459)],
  outline: true,
  mini: false,
  title: 'Fence'
};
const ferrisWheel = {
  path: () => [ssr(_tmpl$361), ssr(_tmpl$1460), ssr(_tmpl$1461), ssr(_tmpl$1462), ssr(_tmpl$1463), ssr(_tmpl$1464), ssr(_tmpl$1465), ssr(_tmpl$1466), ssr(_tmpl$1467)],
  outline: true,
  mini: false,
  title: 'Ferris Wheel'
};
const figma = {
  path: () => [ssr(_tmpl$1468), ssr(_tmpl$1469), ssr(_tmpl$1470), ssr(_tmpl$1471), ssr(_tmpl$1472)],
  outline: true,
  mini: false,
  title: 'Figma'
};
const fileArchive = {
  path: () => [ssr(_tmpl$1473), ssr(_tmpl$1474), ssr(_tmpl$1475), ssr(_tmpl$1476), ssr(_tmpl$1477), ssr(_tmpl$1478)],
  outline: true,
  mini: false,
  title: 'File Archive'
};
const fileAudio_2 = {
  path: () => [ssr(_tmpl$1479), ssr(_tmpl$1474), ssr(_tmpl$1480), ssr(_tmpl$1481), ssr(_tmpl$1482)],
  outline: true,
  mini: false,
  title: 'File Audio 2'
};
const fileAudio = {
  path: () => [ssr(_tmpl$1483), ssr(_tmpl$1474), ssr(_tmpl$1484)],
  outline: true,
  mini: false,
  title: 'File Audio'
};
const fileAxis_3d = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1486), ssr(_tmpl$1487)],
  outline: true,
  mini: false,
  title: 'File Axis 3d'
};
const fileBadge_2 = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1007), ssr(_tmpl$1474), ssr(_tmpl$1488)],
  outline: true,
  mini: false,
  title: 'File Badge 2'
};
const fileBadge = {
  path: () => [ssr(_tmpl$1489), ssr(_tmpl$1474), ssr(_tmpl$1490), ssr(_tmpl$1491)],
  outline: true,
  mini: false,
  title: 'File Badge'
};
const fileBarChart_2 = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1492), ssr(_tmpl$1493), ssr(_tmpl$1494)],
  outline: true,
  mini: false,
  title: 'File Bar Chart 2'
};
const fileBarChart = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1495), ssr(_tmpl$1496), ssr(_tmpl$1497)],
  outline: true,
  mini: false,
  title: 'File Bar Chart'
};
const fileBox = {
  path: () => [ssr(_tmpl$1498), ssr(_tmpl$1474), ssr(_tmpl$1499), ssr(_tmpl$1500), ssr(_tmpl$1501)],
  outline: true,
  mini: false,
  title: 'File Box'
};
const fileCheck_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1503)],
  outline: true,
  mini: false,
  title: 'File Check 2'
};
const fileCheck = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1504)],
  outline: true,
  mini: false,
  title: 'File Check'
};
const fileClock = {
  path: () => [ssr(_tmpl$1505), ssr(_tmpl$1474), ssr(_tmpl$1506), ssr(_tmpl$1507)],
  outline: true,
  mini: false,
  title: 'File Clock'
};
const fileCode_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1508), ssr(_tmpl$1509)],
  outline: true,
  mini: false,
  title: 'File Code 2'
};
const fileCode = {
  path: () => [ssr(_tmpl$1510), ssr(_tmpl$1511), ssr(_tmpl$1474), ssr(_tmpl$1512)],
  outline: true,
  mini: false,
  title: 'File Code'
};
const fileCog = {
  path: () => [ssr(_tmpl$1479), ssr(_tmpl$1474), ssr(_tmpl$1513), ssr(_tmpl$1514), ssr(_tmpl$1515), ssr(_tmpl$1516), ssr(_tmpl$1517), ssr(_tmpl$1518), ssr(_tmpl$1519), ssr(_tmpl$1520), ssr(_tmpl$1521)],
  outline: true,
  mini: false,
  title: 'File Cog'
};
const fileDiff = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$555), ssr(_tmpl$537), ssr(_tmpl$844)],
  outline: true,
  mini: false,
  title: 'File Diff'
};
const fileDigit = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1522), ssr(_tmpl$1523), ssr(_tmpl$712)],
  outline: true,
  mini: false,
  title: 'File Digit'
};
const fileDown = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1493), ssr(_tmpl$1524)],
  outline: true,
  mini: false,
  title: 'File Down'
};
const fileHeart = {
  path: () => [ssr(_tmpl$1479), ssr(_tmpl$1474), ssr(_tmpl$1525)],
  outline: true,
  mini: false,
  title: 'File Heart'
};
const fileImage = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1526), ssr(_tmpl$1527)],
  outline: true,
  mini: false,
  title: 'File Image'
};
const fileInput = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1528), ssr(_tmpl$1509)],
  outline: true,
  mini: false,
  title: 'File Input'
};
const fileJson_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1529), ssr(_tmpl$1530)],
  outline: true,
  mini: false,
  title: 'File Json 2'
};
const fileJson = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1531), ssr(_tmpl$1532)],
  outline: true,
  mini: false,
  title: 'File Json'
};
const fileKey_2 = {
  path: () => [ssr(_tmpl$1533), ssr(_tmpl$1474), ssr(_tmpl$1534), ssr(_tmpl$1535), ssr(_tmpl$1536)],
  outline: true,
  mini: false,
  title: 'File Key 2'
};
const fileKey = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1537), ssr(_tmpl$1538), ssr(_tmpl$1539)],
  outline: true,
  mini: false,
  title: 'File Key'
};
const fileLineChart = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1540)],
  outline: true,
  mini: false,
  title: 'File Line Chart'
};
const fileLock_2 = {
  path: () => [ssr(_tmpl$1541), ssr(_tmpl$1474), ssr(_tmpl$1542), ssr(_tmpl$1543)],
  outline: true,
  mini: false,
  title: 'File Lock 2'
};
const fileLock = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1544), ssr(_tmpl$1545)],
  outline: true,
  mini: false,
  title: 'File Lock'
};
const fileMinus_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1546)],
  outline: true,
  mini: false,
  title: 'File Minus 2'
};
const fileMinus = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1547)],
  outline: true,
  mini: false,
  title: 'File Minus'
};
const fileMusic = {
  path: () => [ssr(_tmpl$1548), ssr(_tmpl$1549), ssr(_tmpl$1550), ssr(_tmpl$1551)],
  outline: true,
  mini: false,
  title: 'File Music'
};
const fileOutput = {
  path: () => [ssr(_tmpl$1474), ssr(_tmpl$1552), ssr(_tmpl$1553), ssr(_tmpl$1554), ssr(_tmpl$1555)],
  outline: true,
  mini: false,
  title: 'File Output'
};
const filePenLine = {
  path: () => [ssr(_tmpl$1556), ssr(_tmpl$1040), ssr(_tmpl$1557)],
  outline: true,
  mini: false,
  title: 'File Pen Line'
};
const filePen = {
  path: () => [ssr(_tmpl$1558), ssr(_tmpl$1474), ssr(_tmpl$1559)],
  outline: true,
  mini: false,
  title: 'File Pen'
};
const filePieChart = {
  path: () => [ssr(_tmpl$1474), ssr(_tmpl$1560), ssr(_tmpl$1561), ssr(_tmpl$1562)],
  outline: true,
  mini: false,
  title: 'File Pie Chart'
};
const filePlus_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1546), ssr(_tmpl$1563)],
  outline: true,
  mini: false,
  title: 'File Plus 2'
};
const filePlus = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1547), ssr(_tmpl$1493)],
  outline: true,
  mini: false,
  title: 'File Plus'
};
const fileQuestion = {
  path: () => [ssr(_tmpl$990), ssr(_tmpl$1512), ssr(_tmpl$1564)],
  outline: true,
  mini: false,
  title: 'File Question'
};
const fileScan = {
  path: () => [ssr(_tmpl$1565), ssr(_tmpl$1474), ssr(_tmpl$1566), ssr(_tmpl$1567), ssr(_tmpl$1568), ssr(_tmpl$1569)],
  outline: true,
  mini: false,
  title: 'File Scan'
};
const fileSearch_2 = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1570), ssr(_tmpl$1571)],
  outline: true,
  mini: false,
  title: 'File Search 2'
};
const fileSearch = {
  path: () => [ssr(_tmpl$1474), ssr(_tmpl$1572), ssr(_tmpl$1573), ssr(_tmpl$1574)],
  outline: true,
  mini: false,
  title: 'File Search'
};
const fileSliders = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$329), ssr(_tmpl$1575), ssr(_tmpl$1576), ssr(_tmpl$1577)],
  outline: true,
  mini: false,
  title: 'File Sliders'
};
const fileSpreadsheet = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1578), ssr(_tmpl$1579), ssr(_tmpl$1580), ssr(_tmpl$1581)],
  outline: true,
  mini: false,
  title: 'File Spreadsheet'
};
const fileStack = {
  path: () => [ssr(_tmpl$1582), ssr(_tmpl$1583), ssr(_tmpl$1584), ssr(_tmpl$1585)],
  outline: true,
  mini: false,
  title: 'File Stack'
};
const fileSymlink = {
  path: () => [ssr(_tmpl$1586), ssr(_tmpl$1474), ssr(_tmpl$1587)],
  outline: true,
  mini: false,
  title: 'File Symlink'
};
const fileTerminal = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1588), ssr(_tmpl$1589)],
  outline: true,
  mini: false,
  title: 'File Terminal'
};
const fileText = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1590), ssr(_tmpl$1591), ssr(_tmpl$1592)],
  outline: true,
  mini: false,
  title: 'File Text'
};
const fileType_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1593), ssr(_tmpl$1594), ssr(_tmpl$1595)],
  outline: true,
  mini: false,
  title: 'File Type 2'
};
const fileType = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1596), ssr(_tmpl$1597), ssr(_tmpl$1598)],
  outline: true,
  mini: false,
  title: 'File Type'
};
const fileUp = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1597), ssr(_tmpl$1599)],
  outline: true,
  mini: false,
  title: 'File Up'
};
const fileVideo_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1600), ssr(_tmpl$1601)],
  outline: true,
  mini: false,
  title: 'File Video 2'
};
const fileVideo = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1602)],
  outline: true,
  mini: false,
  title: 'File Video'
};
const fileVolume_2 = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$728), ssr(_tmpl$1603), ssr(_tmpl$1604)],
  outline: true,
  mini: false,
  title: 'File Volume 2'
};
const fileVolume = {
  path: () => [ssr(_tmpl$1605), ssr(_tmpl$1474), ssr(_tmpl$1606), ssr(_tmpl$1607)],
  outline: true,
  mini: false,
  title: 'File Volume'
};
const fileWarning = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1608), ssr(_tmpl$990)],
  outline: true,
  mini: false,
  title: 'File Warning'
};
const fileX_2 = {
  path: () => [ssr(_tmpl$1502), ssr(_tmpl$1474), ssr(_tmpl$1609), ssr(_tmpl$1610)],
  outline: true,
  mini: false,
  title: 'File X 2'
};
const fileX = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474), ssr(_tmpl$1611), ssr(_tmpl$1612)],
  outline: true,
  mini: false,
  title: 'File X'
};
const file = {
  path: () => [ssr(_tmpl$1485), ssr(_tmpl$1474)],
  outline: true,
  mini: false,
  title: 'File'
};
const files = {
  path: () => [ssr(_tmpl$1613), ssr(_tmpl$1614), ssr(_tmpl$1615)],
  outline: true,
  mini: false,
  title: 'Files'
};
const film = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1616), ssr(_tmpl$1617), ssr(_tmpl$1618), ssr(_tmpl$1619), ssr(_tmpl$1620), ssr(_tmpl$1621), ssr(_tmpl$1622)],
  outline: true,
  mini: false,
  title: 'Film'
};
const filterX = {
  path: () => [ssr(_tmpl$1623), ssr(_tmpl$1624), ssr(_tmpl$1625)],
  outline: true,
  mini: false,
  title: 'Filter X'
};
const filter = {
  path: () => ssr(_tmpl$1626),
  outline: true,
  mini: false,
  title: 'Filter'
};
const fingerprint = {
  path: () => [ssr(_tmpl$1627), ssr(_tmpl$1628), ssr(_tmpl$1629), ssr(_tmpl$1630), ssr(_tmpl$1631), ssr(_tmpl$1632), ssr(_tmpl$1633), ssr(_tmpl$1634), ssr(_tmpl$1635)],
  outline: true,
  mini: false,
  title: 'Fingerprint'
};
const fireExtinguisher = {
  path: () => [ssr(_tmpl$1636), ssr(_tmpl$1637), ssr(_tmpl$1638), ssr(_tmpl$1639), ssr(_tmpl$1640), ssr(_tmpl$1641)],
  outline: true,
  mini: false,
  title: 'Fire Extinguisher'
};
const fishOff = {
  path: () => [ssr(_tmpl$1642), ssr(_tmpl$1643), ssr(_tmpl$1644)],
  outline: true,
  mini: false,
  title: 'Fish Off'
};
const fishSymbol = {
  path: () => ssr(_tmpl$1645),
  outline: true,
  mini: false,
  title: 'Fish Symbol'
};
const fish = {
  path: () => [ssr(_tmpl$1646), ssr(_tmpl$1647), ssr(_tmpl$1648), ssr(_tmpl$1649), ssr(_tmpl$1650), ssr(_tmpl$1651)],
  outline: true,
  mini: false,
  title: 'Fish'
};
const flagOff = {
  path: () => [ssr(_tmpl$1652), ssr(_tmpl$1653), ssr(_tmpl$1654), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Flag Off'
};
const flagTriangleLeft = {
  path: () => ssr(_tmpl$1655),
  outline: true,
  mini: false,
  title: 'Flag Triangle Left'
};
const flagTriangleRight = {
  path: () => ssr(_tmpl$1656),
  outline: true,
  mini: false,
  title: 'Flag Triangle Right'
};
const flag = {
  path: () => [ssr(_tmpl$1657), ssr(_tmpl$1658)],
  outline: true,
  mini: false,
  title: 'Flag'
};
const flameKindling = {
  path: () => [ssr(_tmpl$1659), ssr(_tmpl$1660), ssr(_tmpl$1661)],
  outline: true,
  mini: false,
  title: 'Flame Kindling'
};
const flame = {
  path: () => ssr(_tmpl$1662),
  outline: true,
  mini: false,
  title: 'Flame'
};
const flashlightOff = {
  path: () => [ssr(_tmpl$1663), ssr(_tmpl$1664), ssr(_tmpl$1665), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Flashlight Off'
};
const flashlight = {
  path: () => [ssr(_tmpl$1666), ssr(_tmpl$1667), ssr(_tmpl$1668)],
  outline: true,
  mini: false,
  title: 'Flashlight'
};
const flaskConicalOff = {
  path: () => [ssr(_tmpl$1669), ssr(_tmpl$1670), ssr(_tmpl$1671), ssr(_tmpl$1672), ssr(_tmpl$1673), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Flask Conical Off'
};
const flaskConical = {
  path: () => [ssr(_tmpl$1674), ssr(_tmpl$1672), ssr(_tmpl$1675)],
  outline: true,
  mini: false,
  title: 'Flask Conical'
};
const flaskRound = {
  path: () => [ssr(_tmpl$1676), ssr(_tmpl$1677), ssr(_tmpl$1672), ssr(_tmpl$1678), ssr(_tmpl$1679)],
  outline: true,
  mini: false,
  title: 'Flask Round'
};
const flipHorizontal_2 = {
  path: () => [ssr(_tmpl$1680), ssr(_tmpl$1681), ssr(_tmpl$1682), ssr(_tmpl$1683), ssr(_tmpl$1684), ssr(_tmpl$1107)],
  outline: true,
  mini: false,
  title: 'Flip Horizontal 2'
};
const flipHorizontal = {
  path: () => [ssr(_tmpl$1685), ssr(_tmpl$1686), ssr(_tmpl$1682), ssr(_tmpl$1683), ssr(_tmpl$1684), ssr(_tmpl$1107)],
  outline: true,
  mini: false,
  title: 'Flip Horizontal'
};
const flipVertical_2 = {
  path: () => [ssr(_tmpl$1687), ssr(_tmpl$1688), ssr(_tmpl$1689), ssr(_tmpl$1690), ssr(_tmpl$1691), ssr(_tmpl$1692)],
  outline: true,
  mini: false,
  title: 'Flip Vertical 2'
};
const flipVertical = {
  path: () => [ssr(_tmpl$1693), ssr(_tmpl$1694), ssr(_tmpl$1689), ssr(_tmpl$1690), ssr(_tmpl$1691), ssr(_tmpl$1692)],
  outline: true,
  mini: false,
  title: 'Flip Vertical'
};
const flower_2 = {
  path: () => [ssr(_tmpl$1695), ssr(_tmpl$574), ssr(_tmpl$1696), ssr(_tmpl$1697), ssr(_tmpl$1698)],
  outline: true,
  mini: false,
  title: 'Flower 2'
};
const flower = {
  path: () => [ssr(_tmpl$656), ssr(_tmpl$1699), ssr(_tmpl$1700), ssr(_tmpl$1701), ssr(_tmpl$1702), ssr(_tmpl$1703), ssr(_tmpl$1704), ssr(_tmpl$1705), ssr(_tmpl$1706), ssr(_tmpl$1707)],
  outline: true,
  mini: false,
  title: 'Flower'
};
const focus = {
  path: () => [ssr(_tmpl$656), ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711)],
  outline: true,
  mini: false,
  title: 'Focus'
};
const foldHorizontal = {
  path: () => [ssr(_tmpl$1712), ssr(_tmpl$1713), ssr(_tmpl$1107), ssr(_tmpl$1684), ssr(_tmpl$1683), ssr(_tmpl$1682), ssr(_tmpl$1714), ssr(_tmpl$1715)],
  outline: true,
  mini: false,
  title: 'Fold Horizontal'
};
const foldVertical = {
  path: () => [ssr(_tmpl$1716), ssr(_tmpl$1717), ssr(_tmpl$1689), ssr(_tmpl$1690), ssr(_tmpl$1691), ssr(_tmpl$1692), ssr(_tmpl$1718), ssr(_tmpl$1719)],
  outline: true,
  mini: false,
  title: 'Fold Vertical'
};
const folderArchive = {
  path: () => [ssr(_tmpl$1720), ssr(_tmpl$1721), ssr(_tmpl$1722), ssr(_tmpl$1723)],
  outline: true,
  mini: false,
  title: 'Folder Archive'
};
const folderCheck = {
  path: () => [ssr(_tmpl$1724), ssr(_tmpl$28)],
  outline: true,
  mini: false,
  title: 'Folder Check'
};
const folderClock = {
  path: () => [ssr(_tmpl$775), ssr(_tmpl$1725), ssr(_tmpl$1726)],
  outline: true,
  mini: false,
  title: 'Folder Clock'
};
const folderClosed = {
  path: () => [ssr(_tmpl$1724), ssr(_tmpl$107)],
  outline: true,
  mini: false,
  title: 'Folder Closed'
};
const folderCog = {
  path: () => [ssr(_tmpl$795), ssr(_tmpl$1727), ssr(_tmpl$1728), ssr(_tmpl$1729), ssr(_tmpl$1730), ssr(_tmpl$1731), ssr(_tmpl$1732), ssr(_tmpl$1733), ssr(_tmpl$1734), ssr(_tmpl$1735)],
  outline: true,
  mini: false,
  title: 'Folder Cog'
};
const folderDot = {
  path: () => [ssr(_tmpl$1736), ssr(_tmpl$1737)],
  outline: true,
  mini: false,
  title: 'Folder Dot'
};
const folderDown = {
  path: () => [ssr(_tmpl$1724), ssr(_tmpl$35), ssr(_tmpl$1738)],
  outline: true,
  mini: false,
  title: 'Folder Down'
};
const folderGit_2 = {
  path: () => [ssr(_tmpl$1739), ssr(_tmpl$1740), ssr(_tmpl$1741), ssr(_tmpl$1742)],
  outline: true,
  mini: false,
  title: 'Folder Git 2'
};
const folderGit = {
  path: () => [ssr(_tmpl$1743), ssr(_tmpl$1724), ssr(_tmpl$1744), ssr(_tmpl$1745)],
  outline: true,
  mini: false,
  title: 'Folder Git'
};
const folderHeart = {
  path: () => [ssr(_tmpl$1746), ssr(_tmpl$1747)],
  outline: true,
  mini: false,
  title: 'Folder Heart'
};
const folderInput = {
  path: () => [ssr(_tmpl$1748), ssr(_tmpl$1749), ssr(_tmpl$1750)],
  outline: true,
  mini: false,
  title: 'Folder Input'
};
const folderKanban = {
  path: () => [ssr(_tmpl$1736), ssr(_tmpl$1751), ssr(_tmpl$1752), ssr(_tmpl$1753)],
  outline: true,
  mini: false,
  title: 'Folder Kanban'
};
const folderKey = {
  path: () => [ssr(_tmpl$1754), ssr(_tmpl$1755), ssr(_tmpl$1756), ssr(_tmpl$1757)],
  outline: true,
  mini: false,
  title: 'Folder Key'
};
const folderLock = {
  path: () => [ssr(_tmpl$1758), ssr(_tmpl$1759), ssr(_tmpl$1760)],
  outline: true,
  mini: false,
  title: 'Folder Lock'
};
const folderMinus = {
  path: () => [ssr(_tmpl$29), ssr(_tmpl$1724)],
  outline: true,
  mini: false,
  title: 'Folder Minus'
};
const folderOpenDot = {
  path: () => [ssr(_tmpl$1761), ssr(_tmpl$1762)],
  outline: true,
  mini: false,
  title: 'Folder Open Dot'
};
const folderOpen = {
  path: () => ssr(_tmpl$1763),
  outline: true,
  mini: false,
  title: 'Folder Open'
};
const folderOutput = {
  path: () => [ssr(_tmpl$1764), ssr(_tmpl$1749), ssr(_tmpl$1765)],
  outline: true,
  mini: false,
  title: 'Folder Output'
};
const folderPen = {
  path: () => [ssr(_tmpl$1766), ssr(_tmpl$1767)],
  outline: true,
  mini: false,
  title: 'Folder Pen'
};
const folderPlus = {
  path: () => [ssr(_tmpl$35), ssr(_tmpl$29), ssr(_tmpl$1724)],
  outline: true,
  mini: false,
  title: 'Folder Plus'
};
const folderRoot = {
  path: () => [ssr(_tmpl$1736), ssr(_tmpl$1743), ssr(_tmpl$1768)],
  outline: true,
  mini: false,
  title: 'Folder Root'
};
const folderSearch_2 = {
  path: () => [ssr(_tmpl$1769), ssr(_tmpl$1724), ssr(_tmpl$1770)],
  outline: true,
  mini: false,
  title: 'Folder Search 2'
};
const folderSearch = {
  path: () => [ssr(_tmpl$1771), ssr(_tmpl$1772), ssr(_tmpl$1773)],
  outline: true,
  mini: false,
  title: 'Folder Search'
};
const folderSymlink = {
  path: () => [ssr(_tmpl$1774), ssr(_tmpl$1775)],
  outline: true,
  mini: false,
  title: 'Folder Symlink'
};
const folderSync = {
  path: () => [ssr(_tmpl$1776), ssr(_tmpl$1777), ssr(_tmpl$1778), ssr(_tmpl$1779), ssr(_tmpl$1780)],
  outline: true,
  mini: false,
  title: 'Folder Sync'
};
const folderTree = {
  path: () => [ssr(_tmpl$1781), ssr(_tmpl$1782), ssr(_tmpl$1783), ssr(_tmpl$1784)],
  outline: true,
  mini: false,
  title: 'Folder Tree'
};
const folderUp = {
  path: () => [ssr(_tmpl$1724), ssr(_tmpl$35), ssr(_tmpl$1785)],
  outline: true,
  mini: false,
  title: 'Folder Up'
};
const folderX = {
  path: () => [ssr(_tmpl$1724), ssr(_tmpl$1786), ssr(_tmpl$1787)],
  outline: true,
  mini: false,
  title: 'Folder X'
};
const folder = {
  path: () => ssr(_tmpl$1724),
  outline: true,
  mini: false,
  title: 'Folder'
};
const folders = {
  path: () => [ssr(_tmpl$1788), ssr(_tmpl$1789)],
  outline: true,
  mini: false,
  title: 'Folders'
};
const footprints = {
  path: () => [ssr(_tmpl$1790), ssr(_tmpl$1791), ssr(_tmpl$1792), ssr(_tmpl$1793)],
  outline: true,
  mini: false,
  title: 'Footprints'
};
const forklift = {
  path: () => [ssr(_tmpl$1794), ssr(_tmpl$1795), ssr(_tmpl$1796), ssr(_tmpl$1797)],
  outline: true,
  mini: false,
  title: 'Forklift'
};
const forward = {
  path: () => [ssr(_tmpl$1798), ssr(_tmpl$1799)],
  outline: true,
  mini: false,
  title: 'Forward'
};
const frame = {
  path: () => [ssr(_tmpl$1800), ssr(_tmpl$1801), ssr(_tmpl$1802), ssr(_tmpl$1803)],
  outline: true,
  mini: false,
  title: 'Frame'
};
const framer = {
  path: () => ssr(_tmpl$1804),
  outline: true,
  mini: false,
  title: 'Framer'
};
const frown = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$138), ssr(_tmpl$1805), ssr(_tmpl$1806)],
  outline: true,
  mini: false,
  title: 'Frown'
};
const fuel = {
  path: () => [ssr(_tmpl$1807), ssr(_tmpl$1808), ssr(_tmpl$1809), ssr(_tmpl$1810)],
  outline: true,
  mini: false,
  title: 'Fuel'
};
const fullscreen = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$1811)],
  outline: true,
  mini: false,
  title: 'Fullscreen'
};
const galleryHorizontalEnd = {
  path: () => [ssr(_tmpl$1812), ssr(_tmpl$1813), ssr(_tmpl$1814)],
  outline: true,
  mini: false,
  title: 'Gallery Horizontal End'
};
const galleryHorizontal = {
  path: () => [ssr(_tmpl$1815), ssr(_tmpl$1816), ssr(_tmpl$1817)],
  outline: true,
  mini: false,
  title: 'Gallery Horizontal'
};
const galleryThumbnails = {
  path: () => [ssr(_tmpl$1818), ssr(_tmpl$1819), ssr(_tmpl$613), ssr(_tmpl$615), ssr(_tmpl$1820)],
  outline: true,
  mini: false,
  title: 'Gallery Thumbnails'
};
const galleryVerticalEnd = {
  path: () => [ssr(_tmpl$1821), ssr(_tmpl$1822), ssr(_tmpl$1823)],
  outline: true,
  mini: false,
  title: 'Gallery Vertical End'
};
const galleryVertical = {
  path: () => [ssr(_tmpl$1824), ssr(_tmpl$1825), ssr(_tmpl$1826)],
  outline: true,
  mini: false,
  title: 'Gallery Vertical'
};
const gamepad_2 = {
  path: () => [ssr(_tmpl$1827), ssr(_tmpl$1828), ssr(_tmpl$1829), ssr(_tmpl$1830), ssr(_tmpl$1831)],
  outline: true,
  mini: false,
  title: 'Gamepad 2'
};
const gamepad = {
  path: () => [ssr(_tmpl$1832), ssr(_tmpl$1833), ssr(_tmpl$1834), ssr(_tmpl$1835), ssr(_tmpl$360)],
  outline: true,
  mini: false,
  title: 'Gamepad'
};
const ganttChart = {
  path: () => [ssr(_tmpl$1836), ssr(_tmpl$1837), ssr(_tmpl$1838)],
  outline: true,
  mini: false,
  title: 'Gantt Chart'
};
const gauge = {
  path: () => [ssr(_tmpl$1839), ssr(_tmpl$1840)],
  outline: true,
  mini: false,
  title: 'Gauge'
};
const gavel = {
  path: () => [ssr(_tmpl$1841), ssr(_tmpl$1842), ssr(_tmpl$1843), ssr(_tmpl$1844), ssr(_tmpl$1845)],
  outline: true,
  mini: false,
  title: 'Gavel'
};
const gem = {
  path: () => [ssr(_tmpl$1846), ssr(_tmpl$1847), ssr(_tmpl$1848)],
  outline: true,
  mini: false,
  title: 'Gem'
};
const ghost = {
  path: () => [ssr(_tmpl$1849), ssr(_tmpl$1850), ssr(_tmpl$1851)],
  outline: true,
  mini: false,
  title: 'Ghost'
};
const gift = {
  path: () => [ssr(_tmpl$1852), ssr(_tmpl$1853), ssr(_tmpl$1854), ssr(_tmpl$1855)],
  outline: true,
  mini: false,
  title: 'Gift'
};
const gitBranchPlus = {
  path: () => [ssr(_tmpl$1856), ssr(_tmpl$1857), ssr(_tmpl$1858), ssr(_tmpl$1859), ssr(_tmpl$1860), ssr(_tmpl$1861)],
  outline: true,
  mini: false,
  title: 'Git Branch Plus'
};
const gitBranch = {
  path: () => [ssr(_tmpl$1862), ssr(_tmpl$1863), ssr(_tmpl$1864), ssr(_tmpl$1865)],
  outline: true,
  mini: false,
  title: 'Git Branch'
};
const gitCommitHorizontal = {
  path: () => [ssr(_tmpl$656), ssr(_tmpl$1866), ssr(_tmpl$1867)],
  outline: true,
  mini: false,
  title: 'Git Commit Horizontal'
};
const gitCommitVertical = {
  path: () => [ssr(_tmpl$1868), ssr(_tmpl$656), ssr(_tmpl$1869)],
  outline: true,
  mini: false,
  title: 'Git Commit Vertical'
};
const gitCompareArrows = {
  path: () => [ssr(_tmpl$1870), ssr(_tmpl$1871), ssr(_tmpl$1872), ssr(_tmpl$1873), ssr(_tmpl$1874), ssr(_tmpl$1875)],
  outline: true,
  mini: false,
  title: 'Git Compare Arrows'
};
const gitCompare = {
  path: () => [ssr(_tmpl$795), ssr(_tmpl$1876), ssr(_tmpl$1877), ssr(_tmpl$1878)],
  outline: true,
  mini: false,
  title: 'Git Compare'
};
const gitFork = {
  path: () => [ssr(_tmpl$1879), ssr(_tmpl$1876), ssr(_tmpl$1863), ssr(_tmpl$1880), ssr(_tmpl$1881)],
  outline: true,
  mini: false,
  title: 'Git Fork'
};
const gitGraph = {
  path: () => [ssr(_tmpl$1870), ssr(_tmpl$194), ssr(_tmpl$1882), ssr(_tmpl$1156), ssr(_tmpl$1883), ssr(_tmpl$1884)],
  outline: true,
  mini: false,
  title: 'Git Graph'
};
const gitMerge = {
  path: () => [ssr(_tmpl$795), ssr(_tmpl$1876), ssr(_tmpl$1885)],
  outline: true,
  mini: false,
  title: 'Git Merge'
};
const gitPullRequestArrow = {
  path: () => [ssr(_tmpl$1870), ssr(_tmpl$1886), ssr(_tmpl$1873), ssr(_tmpl$1872), ssr(_tmpl$1871)],
  outline: true,
  mini: false,
  title: 'Git Pull Request Arrow'
};
const gitPullRequestClosed = {
  path: () => [ssr(_tmpl$1876), ssr(_tmpl$1887), ssr(_tmpl$1888), ssr(_tmpl$1889), ssr(_tmpl$1890), ssr(_tmpl$795)],
  outline: true,
  mini: false,
  title: 'Git Pull Request Closed'
};
const gitPullRequestCreateArrow = {
  path: () => [ssr(_tmpl$1870), ssr(_tmpl$1886), ssr(_tmpl$1872), ssr(_tmpl$1891), ssr(_tmpl$1892), ssr(_tmpl$1893)],
  outline: true,
  mini: false,
  title: 'Git Pull Request Create Arrow'
};
const gitPullRequestCreate = {
  path: () => [ssr(_tmpl$1876), ssr(_tmpl$1887), ssr(_tmpl$1894), ssr(_tmpl$1860), ssr(_tmpl$1861)],
  outline: true,
  mini: false,
  title: 'Git Pull Request Create'
};
const gitPullRequestDraft = {
  path: () => [ssr(_tmpl$795), ssr(_tmpl$1876), ssr(_tmpl$1895), ssr(_tmpl$1896), ssr(_tmpl$1897)],
  outline: true,
  mini: false,
  title: 'Git Pull Request Draft'
};
const gitPullRequest = {
  path: () => [ssr(_tmpl$795), ssr(_tmpl$1876), ssr(_tmpl$1877), ssr(_tmpl$1897)],
  outline: true,
  mini: false,
  title: 'Git Pull Request'
};
const github = {
  path: () => [ssr(_tmpl$1898), ssr(_tmpl$1899)],
  outline: true,
  mini: false,
  title: 'Github'
};
const gitlab = {
  path: () => ssr(_tmpl$1900),
  outline: true,
  mini: false,
  title: 'Gitlab'
};
const glassWater = {
  path: () => [ssr(_tmpl$1901), ssr(_tmpl$1902)],
  outline: true,
  mini: false,
  title: 'Glass Water'
};
const glasses = {
  path: () => [ssr(_tmpl$1903), ssr(_tmpl$1904), ssr(_tmpl$1905), ssr(_tmpl$1906), ssr(_tmpl$1907)],
  outline: true,
  mini: false,
  title: 'Glasses'
};
const globeLock = {
  path: () => [ssr(_tmpl$1908), ssr(_tmpl$1909), ssr(_tmpl$1408), ssr(_tmpl$1409)],
  outline: true,
  mini: false,
  title: 'Globe Lock'
};
const globe = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$1910), ssr(_tmpl$44)],
  outline: true,
  mini: false,
  title: 'Globe'
};
const goal = {
  path: () => [ssr(_tmpl$1911), ssr(_tmpl$1912), ssr(_tmpl$1913)],
  outline: true,
  mini: false,
  title: 'Goal'
};
const grab = {
  path: () => [ssr(_tmpl$1914), ssr(_tmpl$1915), ssr(_tmpl$1916), ssr(_tmpl$1917), ssr(_tmpl$1918)],
  outline: true,
  mini: false,
  title: 'Grab'
};
const graduationCap = {
  path: () => [ssr(_tmpl$1919), ssr(_tmpl$1920), ssr(_tmpl$1921)],
  outline: true,
  mini: false,
  title: 'Graduation Cap'
};
const grape = {
  path: () => [ssr(_tmpl$1922), ssr(_tmpl$1923), ssr(_tmpl$1924), ssr(_tmpl$1925), ssr(_tmpl$1926), ssr(_tmpl$1927), ssr(_tmpl$1928), ssr(_tmpl$1929), ssr(_tmpl$1930)],
  outline: true,
  mini: false,
  title: 'Grape'
};
const grid_2x2Check = {
  path: () => [ssr(_tmpl$1931), ssr(_tmpl$1932)],
  outline: true,
  mini: false,
  title: 'Grid 2x2 Check'
};
const grid_2x2X = {
  path: () => [ssr(_tmpl$1931), ssr(_tmpl$1933), ssr(_tmpl$1934)],
  outline: true,
  mini: false,
  title: 'Grid 2x2 X'
};
const grid_2x2 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1618), ssr(_tmpl$1156)],
  outline: true,
  mini: false,
  title: 'Grid 2x2'
};
const grid_3x3 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$672), ssr(_tmpl$671), ssr(_tmpl$1157), ssr(_tmpl$1158)],
  outline: true,
  mini: false,
  title: 'Grid 3x3'
};
const gripHorizontal = {
  path: () => [ssr(_tmpl$1935), ssr(_tmpl$1936), ssr(_tmpl$1937), ssr(_tmpl$1938), ssr(_tmpl$1939), ssr(_tmpl$1940)],
  outline: true,
  mini: false,
  title: 'Grip Horizontal'
};
const gripVertical = {
  path: () => [ssr(_tmpl$539), ssr(_tmpl$1941), ssr(_tmpl$1942), ssr(_tmpl$541), ssr(_tmpl$468), ssr(_tmpl$1943)],
  outline: true,
  mini: false,
  title: 'Grip Vertical'
};
const grip = {
  path: () => [ssr(_tmpl$1418), ssr(_tmpl$1944), ssr(_tmpl$1945), ssr(_tmpl$291), ssr(_tmpl$1420), ssr(_tmpl$1421), ssr(_tmpl$1419), ssr(_tmpl$1946), ssr(_tmpl$1947)],
  outline: true,
  mini: false,
  title: 'Grip'
};
const group = {
  path: () => [ssr(_tmpl$1948), ssr(_tmpl$1949), ssr(_tmpl$1950), ssr(_tmpl$1951), ssr(_tmpl$1952), ssr(_tmpl$1953)],
  outline: true,
  mini: false,
  title: 'Group'
};
const guitar = {
  path: () => [ssr(_tmpl$1954), ssr(_tmpl$1955), ssr(_tmpl$1956), ssr(_tmpl$1957), ssr(_tmpl$1958)],
  outline: true,
  mini: false,
  title: 'Guitar'
};
const ham = {
  path: () => [ssr(_tmpl$1959), ssr(_tmpl$1960), ssr(_tmpl$1961), ssr(_tmpl$1962)],
  outline: true,
  mini: false,
  title: 'Ham'
};
const hammer = {
  path: () => [ssr(_tmpl$1963), ssr(_tmpl$1964), ssr(_tmpl$1965)],
  outline: true,
  mini: false,
  title: 'Hammer'
};
const handCoins = {
  path: () => [ssr(_tmpl$1966), ssr(_tmpl$1967), ssr(_tmpl$1968), ssr(_tmpl$1969), ssr(_tmpl$1970)],
  outline: true,
  mini: false,
  title: 'Hand Coins'
};
const handHeart = {
  path: () => [ssr(_tmpl$1971), ssr(_tmpl$1972), ssr(_tmpl$1973), ssr(_tmpl$1974)],
  outline: true,
  mini: false,
  title: 'Hand Heart'
};
const handHelping = {
  path: () => [ssr(_tmpl$1975), ssr(_tmpl$1976), ssr(_tmpl$1977)],
  outline: true,
  mini: false,
  title: 'Hand Helping'
};
const handMetal = {
  path: () => [ssr(_tmpl$1978), ssr(_tmpl$1979), ssr(_tmpl$1980), ssr(_tmpl$1981)],
  outline: true,
  mini: false,
  title: 'Hand Metal'
};
const handPlatter = {
  path: () => [ssr(_tmpl$1982), ssr(_tmpl$1983), ssr(_tmpl$1984), ssr(_tmpl$1985), ssr(_tmpl$1986), ssr(_tmpl$1987)],
  outline: true,
  mini: false,
  title: 'Hand Platter'
};
const hand = {
  path: () => [ssr(_tmpl$1988), ssr(_tmpl$1989), ssr(_tmpl$1990), ssr(_tmpl$1991)],
  outline: true,
  mini: false,
  title: 'Hand'
};
const handshake = {
  path: () => [ssr(_tmpl$1992), ssr(_tmpl$1993), ssr(_tmpl$1994), ssr(_tmpl$1995), ssr(_tmpl$1996)],
  outline: true,
  mini: false,
  title: 'Handshake'
};
const hardDriveDownload = {
  path: () => [ssr(_tmpl$1997), ssr(_tmpl$1998), ssr(_tmpl$1174), ssr(_tmpl$1315), ssr(_tmpl$1999)],
  outline: true,
  mini: false,
  title: 'Hard Drive Download'
};
const hardDriveUpload = {
  path: () => [ssr(_tmpl$2000), ssr(_tmpl$1997), ssr(_tmpl$1174), ssr(_tmpl$1315), ssr(_tmpl$1999)],
  outline: true,
  mini: false,
  title: 'Hard Drive Upload'
};
const hardDrive = {
  path: () => [ssr(_tmpl$2001), ssr(_tmpl$2002), ssr(_tmpl$2003), ssr(_tmpl$2004)],
  outline: true,
  mini: false,
  title: 'Hard Drive'
};
const hardHat = {
  path: () => [ssr(_tmpl$2005), ssr(_tmpl$2006), ssr(_tmpl$2007), ssr(_tmpl$2008)],
  outline: true,
  mini: false,
  title: 'Hard Hat'
};
const hash = {
  path: () => [ssr(_tmpl$2009), ssr(_tmpl$2010), ssr(_tmpl$2011), ssr(_tmpl$2012)],
  outline: true,
  mini: false,
  title: 'Hash'
};
const haze = {
  path: () => [ssr(_tmpl$2013), ssr(_tmpl$2014), ssr(_tmpl$2015), ssr(_tmpl$2016), ssr(_tmpl$2017), ssr(_tmpl$2018), ssr(_tmpl$2019), ssr(_tmpl$2020)],
  outline: true,
  mini: false,
  title: 'Haze'
};
const hdmiPort = {
  path: () => [ssr(_tmpl$2021), ssr(_tmpl$2022)],
  outline: true,
  mini: false,
  title: 'Hdmi Port'
};
const heading_1 = {
  path: () => [ssr(_tmpl$2023), ssr(_tmpl$2024), ssr(_tmpl$323), ssr(_tmpl$2025)],
  outline: true,
  mini: false,
  title: 'Heading 1'
};
const heading_2 = {
  path: () => [ssr(_tmpl$2023), ssr(_tmpl$2024), ssr(_tmpl$323), ssr(_tmpl$2026)],
  outline: true,
  mini: false,
  title: 'Heading 2'
};
const heading_3 = {
  path: () => [ssr(_tmpl$2023), ssr(_tmpl$2024), ssr(_tmpl$323), ssr(_tmpl$2027), ssr(_tmpl$2028)],
  outline: true,
  mini: false,
  title: 'Heading 3'
};
const heading_4 = {
  path: () => [ssr(_tmpl$2023), ssr(_tmpl$2024), ssr(_tmpl$323), ssr(_tmpl$2029), ssr(_tmpl$2030)],
  outline: true,
  mini: false,
  title: 'Heading 4'
};
const heading_5 = {
  path: () => [ssr(_tmpl$2023), ssr(_tmpl$2024), ssr(_tmpl$323), ssr(_tmpl$2031), ssr(_tmpl$2032)],
  outline: true,
  mini: false,
  title: 'Heading 5'
};
const heading_6 = {
  path: () => [ssr(_tmpl$2023), ssr(_tmpl$2024), ssr(_tmpl$323), ssr(_tmpl$2033), ssr(_tmpl$2034)],
  outline: true,
  mini: false,
  title: 'Heading 6'
};
const heading = {
  path: () => [ssr(_tmpl$2035), ssr(_tmpl$2036), ssr(_tmpl$2037)],
  outline: true,
  mini: false,
  title: 'Heading'
};
const headphones = {
  path: () => ssr(_tmpl$2038),
  outline: true,
  mini: false,
  title: 'Headphones'
};
const headset = {
  path: () => [ssr(_tmpl$2039), ssr(_tmpl$2040)],
  outline: true,
  mini: false,
  title: 'Headset'
};
const heartCrack = {
  path: () => [ssr(_tmpl$2041), ssr(_tmpl$2042)],
  outline: true,
  mini: false,
  title: 'Heart Crack'
};
const heartHandshake = {
  path: () => [ssr(_tmpl$2041), ssr(_tmpl$2043), ssr(_tmpl$2044), ssr(_tmpl$2045)],
  outline: true,
  mini: false,
  title: 'Heart Handshake'
};
const heartOff = {
  path: () => [ssr(_tmpl$2046), ssr(_tmpl$2047), ssr(_tmpl$2048)],
  outline: true,
  mini: false,
  title: 'Heart Off'
};
const heartPulse = {
  path: () => [ssr(_tmpl$2041), ssr(_tmpl$2049)],
  outline: true,
  mini: false,
  title: 'Heart Pulse'
};
const heart = {
  path: () => ssr(_tmpl$2041),
  outline: true,
  mini: false,
  title: 'Heart'
};
const heater = {
  path: () => [ssr(_tmpl$2050), ssr(_tmpl$2051), ssr(_tmpl$2052), ssr(_tmpl$2053), ssr(_tmpl$2054), ssr(_tmpl$2055), ssr(_tmpl$2056), ssr(_tmpl$2057), ssr(_tmpl$2058), ssr(_tmpl$2059)],
  outline: true,
  mini: false,
  title: 'Heater'
};
const hexagon = {
  path: () => ssr(_tmpl$511),
  outline: true,
  mini: false,
  title: 'Hexagon'
};
const highlighter = {
  path: () => [ssr(_tmpl$2060), ssr(_tmpl$2061)],
  outline: true,
  mini: false,
  title: 'Highlighter'
};
const history = {
  path: () => [ssr(_tmpl$2062), ssr(_tmpl$2063), ssr(_tmpl$2064)],
  outline: true,
  mini: false,
  title: 'History'
};
const home = {
  path: () => [ssr(_tmpl$2065), ssr(_tmpl$2066)],
  outline: true,
  mini: false,
  title: 'Home'
};
const hopOff = {
  path: () => [ssr(_tmpl$2067), ssr(_tmpl$2068), ssr(_tmpl$2069), ssr(_tmpl$2070), ssr(_tmpl$2071), ssr(_tmpl$2072), ssr(_tmpl$2073), ssr(_tmpl$2074), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Hop Off'
};
const hop = {
  path: () => [ssr(_tmpl$2075), ssr(_tmpl$2076), ssr(_tmpl$2077), ssr(_tmpl$2078), ssr(_tmpl$2079), ssr(_tmpl$2080), ssr(_tmpl$2081), ssr(_tmpl$2082)],
  outline: true,
  mini: false,
  title: 'Hop'
};
const hospital = {
  path: () => [ssr(_tmpl$2083), ssr(_tmpl$2084), ssr(_tmpl$2085), ssr(_tmpl$2086), ssr(_tmpl$2087), ssr(_tmpl$2088)],
  outline: true,
  mini: false,
  title: 'Hospital'
};
const hotel = {
  path: () => [ssr(_tmpl$2089), ssr(_tmpl$2090), ssr(_tmpl$2091), ssr(_tmpl$2092), ssr(_tmpl$2093), ssr(_tmpl$2094), ssr(_tmpl$486), ssr(_tmpl$1031), ssr(_tmpl$2095), ssr(_tmpl$2096)],
  outline: true,
  mini: false,
  title: 'Hotel'
};
const hourglass = {
  path: () => [ssr(_tmpl$2097), ssr(_tmpl$2098), ssr(_tmpl$2099), ssr(_tmpl$2100)],
  outline: true,
  mini: false,
  title: 'Hourglass'
};
const iceCreamBowl = {
  path: () => [ssr(_tmpl$2101), ssr(_tmpl$2102), ssr(_tmpl$2103)],
  outline: true,
  mini: false,
  title: 'Ice Cream Bowl'
};
const iceCreamCone = {
  path: () => [ssr(_tmpl$2104), ssr(_tmpl$2105), ssr(_tmpl$2106)],
  outline: true,
  mini: false,
  title: 'Ice Cream Cone'
};
const imageDown = {
  path: () => [ssr(_tmpl$2107), ssr(_tmpl$2108), ssr(_tmpl$2109), ssr(_tmpl$1011)],
  outline: true,
  mini: false,
  title: 'Image Down'
};
const imageMinus = {
  path: () => [ssr(_tmpl$2110), ssr(_tmpl$2111), ssr(_tmpl$1011), ssr(_tmpl$2112)],
  outline: true,
  mini: false,
  title: 'Image Minus'
};
const imageOff = {
  path: () => [ssr(_tmpl$408), ssr(_tmpl$2113), ssr(_tmpl$2114), ssr(_tmpl$2115), ssr(_tmpl$2116), ssr(_tmpl$2117)],
  outline: true,
  mini: false,
  title: 'Image Off'
};
const imagePlay = {
  path: () => [ssr(_tmpl$2118), ssr(_tmpl$2119), ssr(_tmpl$2120), ssr(_tmpl$1011)],
  outline: true,
  mini: false,
  title: 'Image Play'
};
const imagePlus = {
  path: () => [ssr(_tmpl$2121), ssr(_tmpl$2111), ssr(_tmpl$2122), ssr(_tmpl$1011), ssr(_tmpl$2112)],
  outline: true,
  mini: false,
  title: 'Image Plus'
};
const imageUp = {
  path: () => [ssr(_tmpl$2107), ssr(_tmpl$2123), ssr(_tmpl$2124), ssr(_tmpl$1011)],
  outline: true,
  mini: false,
  title: 'Image Up'
};
const image = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$1011), ssr(_tmpl$2112)],
  outline: true,
  mini: false,
  title: 'Image'
};
const images = {
  path: () => [ssr(_tmpl$2125), ssr(_tmpl$2126), ssr(_tmpl$574), ssr(_tmpl$2127)],
  outline: true,
  mini: false,
  title: 'Images'
};
const importIcon = {
  path: () => [ssr(_tmpl$2128), ssr(_tmpl$2129), ssr(_tmpl$2130)],
  outline: true,
  mini: false,
  title: 'Import'
};
const inbox = {
  path: () => [ssr(_tmpl$2131), ssr(_tmpl$2002)],
  outline: true,
  mini: false,
  title: 'Inbox'
};
const indentDecrease = {
  path: () => [ssr(_tmpl$2132), ssr(_tmpl$2133), ssr(_tmpl$2134), ssr(_tmpl$2135)],
  outline: true,
  mini: false,
  title: 'Indent Decrease'
};
const indentIncrease = {
  path: () => [ssr(_tmpl$2136), ssr(_tmpl$2133), ssr(_tmpl$2134), ssr(_tmpl$2135)],
  outline: true,
  mini: false,
  title: 'Indent Increase'
};
const indianRupee = {
  path: () => [ssr(_tmpl$2137), ssr(_tmpl$18), ssr(_tmpl$2138), ssr(_tmpl$2139), ssr(_tmpl$2140)],
  outline: true,
  mini: false,
  title: 'Indian Rupee'
};
const infinity = {
  path: () => ssr(_tmpl$2141),
  outline: true,
  mini: false,
  title: 'Infinity'
};
const info = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$2142), ssr(_tmpl$2143)],
  outline: true,
  mini: false,
  title: 'Info'
};
const inspectionPanel = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$2144), ssr(_tmpl$2145), ssr(_tmpl$2146), ssr(_tmpl$2147)],
  outline: true,
  mini: false,
  title: 'Inspection Panel'
};
const instagram = {
  path: () => [ssr(_tmpl$2148), ssr(_tmpl$2149), ssr(_tmpl$2150)],
  outline: true,
  mini: false,
  title: 'Instagram'
};
const italic = {
  path: () => [ssr(_tmpl$2151), ssr(_tmpl$2152), ssr(_tmpl$2153)],
  outline: true,
  mini: false,
  title: 'Italic'
};
const iterationCcw = {
  path: () => [ssr(_tmpl$2154), ssr(_tmpl$2155)],
  outline: true,
  mini: false,
  title: 'Iteration Ccw'
};
const iterationCw = {
  path: () => [ssr(_tmpl$2156), ssr(_tmpl$2157)],
  outline: true,
  mini: false,
  title: 'Iteration Cw'
};
const japaneseYen = {
  path: () => [ssr(_tmpl$2158), ssr(_tmpl$2159), ssr(_tmpl$2160)],
  outline: true,
  mini: false,
  title: 'Japanese Yen'
};
const joystick = {
  path: () => [ssr(_tmpl$2161), ssr(_tmpl$2162), ssr(_tmpl$2163), ssr(_tmpl$2164)],
  outline: true,
  mini: false,
  title: 'Joystick'
};
const kanban = {
  path: () => [ssr(_tmpl$2165), ssr(_tmpl$2166), ssr(_tmpl$2167)],
  outline: true,
  mini: false,
  title: 'Kanban'
};
const keyRound = {
  path: () => [ssr(_tmpl$2168), ssr(_tmpl$2169)],
  outline: true,
  mini: false,
  title: 'Key Round'
};
const keySquare = {
  path: () => [ssr(_tmpl$2170), ssr(_tmpl$2171), ssr(_tmpl$2172)],
  outline: true,
  mini: false,
  title: 'Key Square'
};
const key = {
  path: () => [ssr(_tmpl$2173), ssr(_tmpl$2174), ssr(_tmpl$2175)],
  outline: true,
  mini: false,
  title: 'Key'
};
const keyboardMusic = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$1454), ssr(_tmpl$166), ssr(_tmpl$2176), ssr(_tmpl$44), ssr(_tmpl$2177), ssr(_tmpl$2178), ssr(_tmpl$2179), ssr(_tmpl$2180)],
  outline: true,
  mini: false,
  title: 'Keyboard Music'
};
const keyboardOff = {
  path: () => [ssr(_tmpl$2181), ssr(_tmpl$2182), ssr(_tmpl$2183), ssr(_tmpl$2184), ssr(_tmpl$166), ssr(_tmpl$2176), ssr(_tmpl$33), ssr(_tmpl$2185), ssr(_tmpl$164), ssr(_tmpl$1312)],
  outline: true,
  mini: false,
  title: 'Keyboard Off'
};
const keyboard = {
  path: () => [ssr(_tmpl$165), ssr(_tmpl$675), ssr(_tmpl$166), ssr(_tmpl$1311), ssr(_tmpl$2176), ssr(_tmpl$164), ssr(_tmpl$1675), ssr(_tmpl$1312), ssr(_tmpl$163)],
  outline: true,
  mini: false,
  title: 'Keyboard'
};
const lampCeiling = {
  path: () => [ssr(_tmpl$2186), ssr(_tmpl$2187), ssr(_tmpl$2188)],
  outline: true,
  mini: false,
  title: 'Lamp Ceiling'
};
const lampDesk = {
  path: () => [ssr(_tmpl$2189), ssr(_tmpl$2190), ssr(_tmpl$2191), ssr(_tmpl$2192)],
  outline: true,
  mini: false,
  title: 'Lamp Desk'
};
const lampFloor = {
  path: () => [ssr(_tmpl$2193), ssr(_tmpl$2194), ssr(_tmpl$2195)],
  outline: true,
  mini: false,
  title: 'Lamp Floor'
};
const lampWallDown = {
  path: () => [ssr(_tmpl$2196), ssr(_tmpl$2197), ssr(_tmpl$2198)],
  outline: true,
  mini: false,
  title: 'Lamp Wall Down'
};
const lampWallUp = {
  path: () => [ssr(_tmpl$2199), ssr(_tmpl$2200), ssr(_tmpl$2201)],
  outline: true,
  mini: false,
  title: 'Lamp Wall Up'
};
const lamp = {
  path: () => [ssr(_tmpl$2202), ssr(_tmpl$1597), ssr(_tmpl$2203)],
  outline: true,
  mini: false,
  title: 'Lamp'
};
const landPlot = {
  path: () => [ssr(_tmpl$2204), ssr(_tmpl$2205), ssr(_tmpl$2206), ssr(_tmpl$2207)],
  outline: true,
  mini: false,
  title: 'Land Plot'
};
const landmark = {
  path: () => [ssr(_tmpl$2208), ssr(_tmpl$2209), ssr(_tmpl$2210), ssr(_tmpl$2211), ssr(_tmpl$2212), ssr(_tmpl$2213)],
  outline: true,
  mini: false,
  title: 'Landmark'
};
const languages = {
  path: () => [ssr(_tmpl$2214), ssr(_tmpl$2215), ssr(_tmpl$2216), ssr(_tmpl$2217), ssr(_tmpl$2218), ssr(_tmpl$2219)],
  outline: true,
  mini: false,
  title: 'Languages'
};
const laptopMinimal = {
  path: () => [ssr(_tmpl$2220), ssr(_tmpl$2221)],
  outline: true,
  mini: false,
  title: 'Laptop Minimal'
};
const laptop = {
  path: () => ssr(_tmpl$2222),
  outline: true,
  mini: false,
  title: 'Laptop'
};
const lassoSelect = {
  path: () => [ssr(_tmpl$2223), ssr(_tmpl$2224), ssr(_tmpl$2225), ssr(_tmpl$2226), ssr(_tmpl$2227)],
  outline: true,
  mini: false,
  title: 'Lasso Select'
};
const lasso = {
  path: () => [ssr(_tmpl$2223), ssr(_tmpl$2228), ssr(_tmpl$2226)],
  outline: true,
  mini: false,
  title: 'Lasso'
};
const laugh = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$2229), ssr(_tmpl$1805), ssr(_tmpl$1806)],
  outline: true,
  mini: false,
  title: 'Laugh'
};
const layers_2 = {
  path: () => [ssr(_tmpl$2230), ssr(_tmpl$2231)],
  outline: true,
  mini: false,
  title: 'Layers 2'
};
const layers_3 = {
  path: () => [ssr(_tmpl$2232), ssr(_tmpl$2233), ssr(_tmpl$2234)],
  outline: true,
  mini: false,
  title: 'Layers 3'
};
const layers = {
  path: () => [ssr(_tmpl$2232), ssr(_tmpl$2235), ssr(_tmpl$2236)],
  outline: true,
  mini: false,
  title: 'Layers'
};
const layoutDashboard = {
  path: () => [ssr(_tmpl$2237), ssr(_tmpl$2238), ssr(_tmpl$2239), ssr(_tmpl$2240)],
  outline: true,
  mini: false,
  title: 'Layout Dashboard'
};
const layoutGrid = {
  path: () => [ssr(_tmpl$2241), ssr(_tmpl$501), ssr(_tmpl$2242), ssr(_tmpl$2243)],
  outline: true,
  mini: false,
  title: 'Layout Grid'
};
const layoutList = {
  path: () => [ssr(_tmpl$2241), ssr(_tmpl$2243), ssr(_tmpl$2244), ssr(_tmpl$2245), ssr(_tmpl$2246), ssr(_tmpl$2247)],
  outline: true,
  mini: false,
  title: 'Layout List'
};
const layoutPanelLeft = {
  path: () => [ssr(_tmpl$2248), ssr(_tmpl$501), ssr(_tmpl$2242)],
  outline: true,
  mini: false,
  title: 'Layout Panel Left'
};
const layoutPanelTop = {
  path: () => [ssr(_tmpl$2249), ssr(_tmpl$2243), ssr(_tmpl$2242)],
  outline: true,
  mini: false,
  title: 'Layout Panel Top'
};
const layoutTemplate = {
  path: () => [ssr(_tmpl$2249), ssr(_tmpl$2250), ssr(_tmpl$2251)],
  outline: true,
  mini: false,
  title: 'Layout Template'
};
const leaf = {
  path: () => [ssr(_tmpl$2252), ssr(_tmpl$2253)],
  outline: true,
  mini: false,
  title: 'Leaf'
};
const leafyGreen = {
  path: () => [ssr(_tmpl$2254), ssr(_tmpl$2255)],
  outline: true,
  mini: false,
  title: 'Leafy Green'
};
const libraryBig = {
  path: () => [ssr(_tmpl$2256), ssr(_tmpl$1616), ssr(_tmpl$2257)],
  outline: true,
  mini: false,
  title: 'Library Big'
};
const library = {
  path: () => [ssr(_tmpl$2258), ssr(_tmpl$2259), ssr(_tmpl$2260), ssr(_tmpl$2261)],
  outline: true,
  mini: false,
  title: 'Library'
};
const lifeBuoy = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$2262), ssr(_tmpl$2263), ssr(_tmpl$2264), ssr(_tmpl$2265), ssr(_tmpl$289)],
  outline: true,
  mini: false,
  title: 'Life Buoy'
};
const ligature = {
  path: () => [ssr(_tmpl$2266), ssr(_tmpl$2267), ssr(_tmpl$2268), ssr(_tmpl$472), ssr(_tmpl$2269)],
  outline: true,
  mini: false,
  title: 'Ligature'
};
const lightbulbOff = {
  path: () => [ssr(_tmpl$2270), ssr(_tmpl$33), ssr(_tmpl$2271), ssr(_tmpl$127), ssr(_tmpl$2272)],
  outline: true,
  mini: false,
  title: 'Lightbulb Off'
};
const lightbulb = {
  path: () => [ssr(_tmpl$2273), ssr(_tmpl$127), ssr(_tmpl$2272)],
  outline: true,
  mini: false,
  title: 'Lightbulb'
};
const lineChart = {
  path: () => [ssr(_tmpl$182), ssr(_tmpl$2274)],
  outline: true,
  mini: false,
  title: 'Line Chart'
};
const link_2Off = {
  path: () => [ssr(_tmpl$2275), ssr(_tmpl$2276), ssr(_tmpl$2277), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Link 2 Off'
};
const link_2 = {
  path: () => [ssr(_tmpl$2278), ssr(_tmpl$2279), ssr(_tmpl$337)],
  outline: true,
  mini: false,
  title: 'Link 2'
};
const link = {
  path: () => [ssr(_tmpl$2280), ssr(_tmpl$2281)],
  outline: true,
  mini: false,
  title: 'Link'
};
const linkedin = {
  path: () => [ssr(_tmpl$2282), ssr(_tmpl$2283), ssr(_tmpl$2284)],
  outline: true,
  mini: false,
  title: 'Linkedin'
};
const listChecks = {
  path: () => [ssr(_tmpl$2285), ssr(_tmpl$2286), ssr(_tmpl$2287), ssr(_tmpl$2288), ssr(_tmpl$2289)],
  outline: true,
  mini: false,
  title: 'List Checks'
};
const listCollapse = {
  path: () => [ssr(_tmpl$2290), ssr(_tmpl$2291), ssr(_tmpl$2292), ssr(_tmpl$2293), ssr(_tmpl$2294)],
  outline: true,
  mini: false,
  title: 'List Collapse'
};
const listEnd = {
  path: () => [ssr(_tmpl$2295), ssr(_tmpl$2296), ssr(_tmpl$2297), ssr(_tmpl$2298), ssr(_tmpl$2299)],
  outline: true,
  mini: false,
  title: 'List End'
};
const listFilter = {
  path: () => [ssr(_tmpl$2300), ssr(_tmpl$2301), ssr(_tmpl$712)],
  outline: true,
  mini: false,
  title: 'List Filter'
};
const listMinus = {
  path: () => [ssr(_tmpl$2302), ssr(_tmpl$2296), ssr(_tmpl$2303), ssr(_tmpl$2304)],
  outline: true,
  mini: false,
  title: 'List Minus'
};
const listMusic = {
  path: () => [ssr(_tmpl$2305), ssr(_tmpl$2306), ssr(_tmpl$2307), ssr(_tmpl$2296), ssr(_tmpl$2308)],
  outline: true,
  mini: false,
  title: 'List Music'
};
const listOrdered = {
  path: () => [ssr(_tmpl$2309), ssr(_tmpl$2310), ssr(_tmpl$2311), ssr(_tmpl$2312), ssr(_tmpl$2313), ssr(_tmpl$2314)],
  outline: true,
  mini: false,
  title: 'List Ordered'
};
const listPlus = {
  path: () => [ssr(_tmpl$2302), ssr(_tmpl$2296), ssr(_tmpl$2303), ssr(_tmpl$2315), ssr(_tmpl$2304)],
  outline: true,
  mini: false,
  title: 'List Plus'
};
const listRestart = {
  path: () => [ssr(_tmpl$2316), ssr(_tmpl$2317), ssr(_tmpl$2318), ssr(_tmpl$2319), ssr(_tmpl$2320)],
  outline: true,
  mini: false,
  title: 'List Restart'
};
const listStart = {
  path: () => [ssr(_tmpl$2295), ssr(_tmpl$2303), ssr(_tmpl$2321), ssr(_tmpl$2322), ssr(_tmpl$2323)],
  outline: true,
  mini: false,
  title: 'List Start'
};
const listTodo = {
  path: () => [ssr(_tmpl$2324), ssr(_tmpl$2285), ssr(_tmpl$2287), ssr(_tmpl$2288), ssr(_tmpl$2289)],
  outline: true,
  mini: false,
  title: 'List Todo'
};
const listTree = {
  path: () => [ssr(_tmpl$2325), ssr(_tmpl$2326), ssr(_tmpl$2327), ssr(_tmpl$2328), ssr(_tmpl$2329)],
  outline: true,
  mini: false,
  title: 'List Tree'
};
const listVideo = {
  path: () => [ssr(_tmpl$2307), ssr(_tmpl$2296), ssr(_tmpl$2308), ssr(_tmpl$2330)],
  outline: true,
  mini: false,
  title: 'List Video'
};
const listX = {
  path: () => [ssr(_tmpl$2302), ssr(_tmpl$2296), ssr(_tmpl$2303), ssr(_tmpl$2331), ssr(_tmpl$2332)],
  outline: true,
  mini: false,
  title: 'List X'
};
const list = {
  path: () => [ssr(_tmpl$2333), ssr(_tmpl$2334), ssr(_tmpl$2335), ssr(_tmpl$2336), ssr(_tmpl$2337), ssr(_tmpl$2338)],
  outline: true,
  mini: false,
  title: 'List'
};
const loaderCircle = {
  path: () => ssr(_tmpl$2339),
  outline: true,
  mini: false,
  title: 'Loader Circle'
};
const loaderPinwheel = {
  path: () => [ssr(_tmpl$2340), ssr(_tmpl$2341), ssr(_tmpl$2342), ssr(_tmpl$137)],
  outline: true,
  mini: false,
  title: 'Loader Pinwheel'
};
const loader = {
  path: () => [ssr(_tmpl$1460), ssr(_tmpl$2343), ssr(_tmpl$2344), ssr(_tmpl$2345), ssr(_tmpl$2346), ssr(_tmpl$2347), ssr(_tmpl$2348), ssr(_tmpl$2349)],
  outline: true,
  mini: false,
  title: 'Loader'
};
const locateFixed = {
  path: () => [ssr(_tmpl$2350), ssr(_tmpl$2351), ssr(_tmpl$2352), ssr(_tmpl$2353), ssr(_tmpl$2354), ssr(_tmpl$656)],
  outline: true,
  mini: false,
  title: 'Locate Fixed'
};
const locateOff = {
  path: () => [ssr(_tmpl$2350), ssr(_tmpl$2351), ssr(_tmpl$2352), ssr(_tmpl$2353), ssr(_tmpl$2355), ssr(_tmpl$2356), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Locate Off'
};
const locate = {
  path: () => [ssr(_tmpl$2350), ssr(_tmpl$2351), ssr(_tmpl$2352), ssr(_tmpl$2353), ssr(_tmpl$2354)],
  outline: true,
  mini: false,
  title: 'Locate'
};
const lockKeyholeOpen = {
  path: () => [ssr(_tmpl$2357), ssr(_tmpl$1823), ssr(_tmpl$2358)],
  outline: true,
  mini: false,
  title: 'Lock Keyhole Open'
};
const lockKeyhole = {
  path: () => [ssr(_tmpl$2357), ssr(_tmpl$2359), ssr(_tmpl$2360)],
  outline: true,
  mini: false,
  title: 'Lock Keyhole'
};
const lockOpen = {
  path: () => [ssr(_tmpl$2361), ssr(_tmpl$2362)],
  outline: true,
  mini: false,
  title: 'Lock Open'
};
const lock = {
  path: () => [ssr(_tmpl$2361), ssr(_tmpl$2363)],
  outline: true,
  mini: false,
  title: 'Lock'
};
const logIn = {
  path: () => [ssr(_tmpl$2364), ssr(_tmpl$2365), ssr(_tmpl$89)],
  outline: true,
  mini: false,
  title: 'Log In'
};
const logOut = {
  path: () => [ssr(_tmpl$2366), ssr(_tmpl$2367), ssr(_tmpl$91)],
  outline: true,
  mini: false,
  title: 'Log Out'
};
const lollipop = {
  path: () => [ssr(_tmpl$2368), ssr(_tmpl$2369), ssr(_tmpl$2370)],
  outline: true,
  mini: false,
  title: 'Lollipop'
};
const luggage = {
  path: () => [ssr(_tmpl$2371), ssr(_tmpl$2372), ssr(_tmpl$2373), ssr(_tmpl$1754), ssr(_tmpl$2374)],
  outline: true,
  mini: false,
  title: 'Luggage'
};
const magnet = {
  path: () => [ssr(_tmpl$2375), ssr(_tmpl$2376), ssr(_tmpl$2377)],
  outline: true,
  mini: false,
  title: 'Magnet'
};
const mailCheck = {
  path: () => [ssr(_tmpl$2378), ssr(_tmpl$2379), ssr(_tmpl$1932)],
  outline: true,
  mini: false,
  title: 'Mail Check'
};
const mailMinus = {
  path: () => [ssr(_tmpl$2380), ssr(_tmpl$2379), ssr(_tmpl$783)],
  outline: true,
  mini: false,
  title: 'Mail Minus'
};
const mailOpen = {
  path: () => [ssr(_tmpl$2381), ssr(_tmpl$2382)],
  outline: true,
  mini: false,
  title: 'Mail Open'
};
const mailPlus = {
  path: () => [ssr(_tmpl$2378), ssr(_tmpl$2379), ssr(_tmpl$789), ssr(_tmpl$783)],
  outline: true,
  mini: false,
  title: 'Mail Plus'
};
const mailQuestion = {
  path: () => [ssr(_tmpl$2383), ssr(_tmpl$2379), ssr(_tmpl$2384), ssr(_tmpl$2385)],
  outline: true,
  mini: false,
  title: 'Mail Question'
};
const mailSearch = {
  path: () => [ssr(_tmpl$2386), ssr(_tmpl$2379), ssr(_tmpl$2387), ssr(_tmpl$795), ssr(_tmpl$796)],
  outline: true,
  mini: false,
  title: 'Mail Search'
};
const mailWarning = {
  path: () => [ssr(_tmpl$2383), ssr(_tmpl$2379), ssr(_tmpl$2388), ssr(_tmpl$2385)],
  outline: true,
  mini: false,
  title: 'Mail Warning'
};
const mailX = {
  path: () => [ssr(_tmpl$2389), ssr(_tmpl$2379), ssr(_tmpl$2390), ssr(_tmpl$2391)],
  outline: true,
  mini: false,
  title: 'Mail X'
};
const mail = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$2379)],
  outline: true,
  mini: false,
  title: 'Mail'
};
const mailbox = {
  path: () => [ssr(_tmpl$2392), ssr(_tmpl$2393), ssr(_tmpl$2394), ssr(_tmpl$2395)],
  outline: true,
  mini: false,
  title: 'Mailbox'
};
const mails = {
  path: () => [ssr(_tmpl$2396), ssr(_tmpl$2397), ssr(_tmpl$2398)],
  outline: true,
  mini: false,
  title: 'Mails'
};
const mapPinOff = {
  path: () => [ssr(_tmpl$2399), ssr(_tmpl$2400), ssr(_tmpl$2401), ssr(_tmpl$2402), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Map Pin Off'
};
const mapPin = {
  path: () => [ssr(_tmpl$2403), ssr(_tmpl$1007)],
  outline: true,
  mini: false,
  title: 'Map Pin'
};
const mapPinned = {
  path: () => [ssr(_tmpl$2404), ssr(_tmpl$574), ssr(_tmpl$2405)],
  outline: true,
  mini: false,
  title: 'Map Pinned'
};
const map = {
  path: () => [ssr(_tmpl$2406), ssr(_tmpl$2407), ssr(_tmpl$2408)],
  outline: true,
  mini: false,
  title: 'Map'
};
const martini = {
  path: () => [ssr(_tmpl$1466), ssr(_tmpl$2409), ssr(_tmpl$2410)],
  outline: true,
  mini: false,
  title: 'Martini'
};
const maximize_2 = {
  path: () => [ssr(_tmpl$2411), ssr(_tmpl$2412), ssr(_tmpl$2413), ssr(_tmpl$2414)],
  outline: true,
  mini: false,
  title: 'Maximize 2'
};
const maximize = {
  path: () => [ssr(_tmpl$2415), ssr(_tmpl$2416), ssr(_tmpl$2417), ssr(_tmpl$2418)],
  outline: true,
  mini: false,
  title: 'Maximize'
};
const medal = {
  path: () => [ssr(_tmpl$2419), ssr(_tmpl$2420), ssr(_tmpl$2421), ssr(_tmpl$2422), ssr(_tmpl$2423), ssr(_tmpl$2424)],
  outline: true,
  mini: false,
  title: 'Medal'
};
const megaphoneOff = {
  path: () => [ssr(_tmpl$2425), ssr(_tmpl$2426), ssr(_tmpl$2427), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Megaphone Off'
};
const megaphone = {
  path: () => [ssr(_tmpl$2428), ssr(_tmpl$2427)],
  outline: true,
  mini: false,
  title: 'Megaphone'
};
const meh = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$2429), ssr(_tmpl$1805), ssr(_tmpl$1806)],
  outline: true,
  mini: false,
  title: 'Meh'
};
const memoryStick = {
  path: () => [ssr(_tmpl$2430), ssr(_tmpl$2431), ssr(_tmpl$2432), ssr(_tmpl$2433), ssr(_tmpl$2434), ssr(_tmpl$2435), ssr(_tmpl$2436), ssr(_tmpl$2437), ssr(_tmpl$2438)],
  outline: true,
  mini: false,
  title: 'Memory Stick'
};
const menu = {
  path: () => [ssr(_tmpl$2439), ssr(_tmpl$2440), ssr(_tmpl$2441)],
  outline: true,
  mini: false,
  title: 'Menu'
};
const merge = {
  path: () => [ssr(_tmpl$2442), ssr(_tmpl$2443), ssr(_tmpl$2444)],
  outline: true,
  mini: false,
  title: 'Merge'
};
const messageCircleCode = {
  path: () => [ssr(_tmpl$2445), ssr(_tmpl$2446), ssr(_tmpl$2447)],
  outline: true,
  mini: false,
  title: 'Message Circle Code'
};
const messageCircleDashed = {
  path: () => [ssr(_tmpl$2448), ssr(_tmpl$2449), ssr(_tmpl$2450), ssr(_tmpl$2451), ssr(_tmpl$2452), ssr(_tmpl$2453), ssr(_tmpl$2454), ssr(_tmpl$2455)],
  outline: true,
  mini: false,
  title: 'Message Circle Dashed'
};
const messageCircleHeart = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$2457)],
  outline: true,
  mini: false,
  title: 'Message Circle Heart'
};
const messageCircleMore = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$1312), ssr(_tmpl$675), ssr(_tmpl$1311)],
  outline: true,
  mini: false,
  title: 'Message Circle More'
};
const messageCircleOff = {
  path: () => [ssr(_tmpl$2458), ssr(_tmpl$33), ssr(_tmpl$2459)],
  outline: true,
  mini: false,
  title: 'Message Circle Off'
};
const messageCirclePlus = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$329), ssr(_tmpl$936)],
  outline: true,
  mini: false,
  title: 'Message Circle Plus'
};
const messageCircleQuestion = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$326), ssr(_tmpl$990)],
  outline: true,
  mini: false,
  title: 'Message Circle Question'
};
const messageCircleReply = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$2460), ssr(_tmpl$2461)],
  outline: true,
  mini: false,
  title: 'Message Circle Reply'
};
const messageCircleWarning = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$2462), ssr(_tmpl$2463)],
  outline: true,
  mini: false,
  title: 'Message Circle Warning'
};
const messageCircleX = {
  path: () => [ssr(_tmpl$2456), ssr(_tmpl$338), ssr(_tmpl$1009)],
  outline: true,
  mini: false,
  title: 'Message Circle X'
};
const messageCircle = {
  path: () => ssr(_tmpl$2456),
  outline: true,
  mini: false,
  title: 'Message Circle'
};
const messageSquareCode = {
  path: () => [ssr(_tmpl$2464), ssr(_tmpl$2465), ssr(_tmpl$2466)],
  outline: true,
  mini: false,
  title: 'Message Square Code'
};
const messageSquareDashed = {
  path: () => [ssr(_tmpl$2467), ssr(_tmpl$2468), ssr(_tmpl$2469), ssr(_tmpl$2470), ssr(_tmpl$2471), ssr(_tmpl$2472), ssr(_tmpl$2473), ssr(_tmpl$2474)],
  outline: true,
  mini: false,
  title: 'Message Square Dashed'
};
const messageSquareDiff = {
  path: () => [ssr(_tmpl$2475), ssr(_tmpl$555), ssr(_tmpl$565), ssr(_tmpl$844)],
  outline: true,
  mini: false,
  title: 'Message Square Diff'
};
const messageSquareDot = {
  path: () => [ssr(_tmpl$2476), ssr(_tmpl$1863)],
  outline: true,
  mini: false,
  title: 'Message Square Dot'
};
const messageSquareHeart = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$2477)],
  outline: true,
  mini: false,
  title: 'Message Square Heart'
};
const messageSquareMore = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$722), ssr(_tmpl$718), ssr(_tmpl$720)],
  outline: true,
  mini: false,
  title: 'Message Square More'
};
const messageSquareOff = {
  path: () => [ssr(_tmpl$2117), ssr(_tmpl$33), ssr(_tmpl$2478)],
  outline: true,
  mini: false,
  title: 'Message Square Off'
};
const messageSquarePlus = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$565), ssr(_tmpl$555)],
  outline: true,
  mini: false,
  title: 'Message Square Plus'
};
const messageSquareQuote = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$2479), ssr(_tmpl$2480)],
  outline: true,
  mini: false,
  title: 'Message Square Quote'
};
const messageSquareReply = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$2481), ssr(_tmpl$2482)],
  outline: true,
  mini: false,
  title: 'Message Square Reply'
};
const messageSquareShare = {
  path: () => [ssr(_tmpl$2483), ssr(_tmpl$2484), ssr(_tmpl$2485)],
  outline: true,
  mini: false,
  title: 'Message Square Share'
};
const messageSquareText = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$2486), ssr(_tmpl$2487)],
  outline: true,
  mini: false,
  title: 'Message Square Text'
};
const messageSquareWarning = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$2488), ssr(_tmpl$2489)],
  outline: true,
  mini: false,
  title: 'Message Square Warning'
};
const messageSquareX = {
  path: () => [ssr(_tmpl$2466), ssr(_tmpl$583), ssr(_tmpl$584)],
  outline: true,
  mini: false,
  title: 'Message Square X'
};
const messageSquare = {
  path: () => ssr(_tmpl$2466),
  outline: true,
  mini: false,
  title: 'Message Square'
};
const messagesSquare = {
  path: () => [ssr(_tmpl$2490), ssr(_tmpl$2491)],
  outline: true,
  mini: false,
  title: 'Messages Square'
};
const micOff = {
  path: () => [ssr(_tmpl$408), ssr(_tmpl$2492), ssr(_tmpl$2493), ssr(_tmpl$2494), ssr(_tmpl$2495), ssr(_tmpl$2353)],
  outline: true,
  mini: false,
  title: 'Mic Off'
};
const micVocal = {
  path: () => [ssr(_tmpl$2496), ssr(_tmpl$2497)],
  outline: true,
  mini: false,
  title: 'Mic Vocal'
};
const mic = {
  path: () => [ssr(_tmpl$2498), ssr(_tmpl$2499), ssr(_tmpl$2353)],
  outline: true,
  mini: false,
  title: 'Mic'
};
const microscope = {
  path: () => [ssr(_tmpl$2500), ssr(_tmpl$1826), ssr(_tmpl$2501), ssr(_tmpl$2502), ssr(_tmpl$2503), ssr(_tmpl$2504)],
  outline: true,
  mini: false,
  title: 'Microscope'
};
const microwave = {
  path: () => [ssr(_tmpl$2505), ssr(_tmpl$2506), ssr(_tmpl$2507), ssr(_tmpl$730), ssr(_tmpl$2508)],
  outline: true,
  mini: false,
  title: 'Microwave'
};
const milestone = {
  path: () => [ssr(_tmpl$2509), ssr(_tmpl$2510), ssr(_tmpl$2511)],
  outline: true,
  mini: false,
  title: 'Milestone'
};
const milkOff = {
  path: () => [ssr(_tmpl$2512), ssr(_tmpl$2513), ssr(_tmpl$2514), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Milk Off'
};
const milk = {
  path: () => [ssr(_tmpl$2512), ssr(_tmpl$2515), ssr(_tmpl$2516)],
  outline: true,
  mini: false,
  title: 'Milk'
};
const minimize_2 = {
  path: () => [ssr(_tmpl$2517), ssr(_tmpl$2518), ssr(_tmpl$2519), ssr(_tmpl$2414)],
  outline: true,
  mini: false,
  title: 'Minimize 2'
};
const minimize = {
  path: () => [ssr(_tmpl$2520), ssr(_tmpl$2521), ssr(_tmpl$2522), ssr(_tmpl$2523)],
  outline: true,
  mini: false,
  title: 'Minimize'
};
const minus = {
  path: () => ssr(_tmpl$259),
  outline: true,
  mini: false,
  title: 'Minus'
};
const monitorCheck = {
  path: () => [ssr(_tmpl$579), ssr(_tmpl$2524), ssr(_tmpl$2525), ssr(_tmpl$2526)],
  outline: true,
  mini: false,
  title: 'Monitor Check'
};
const monitorDot = {
  path: () => [ssr(_tmpl$1883), ssr(_tmpl$2527), ssr(_tmpl$2525), ssr(_tmpl$2526)],
  outline: true,
  mini: false,
  title: 'Monitor Dot'
};
const monitorDown = {
  path: () => [ssr(_tmpl$537), ssr(_tmpl$2528), ssr(_tmpl$2524), ssr(_tmpl$2525), ssr(_tmpl$2526)],
  outline: true,
  mini: false,
  title: 'Monitor Down'
};
const monitorOff = {
  path: () => [ssr(_tmpl$2529), ssr(_tmpl$2530), ssr(_tmpl$2526), ssr(_tmpl$2525), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Monitor Off'
};
const monitorPause = {
  path: () => [ssr(_tmpl$2531), ssr(_tmpl$2532), ssr(_tmpl$2524), ssr(_tmpl$2525), ssr(_tmpl$2526)],
  outline: true,
  mini: false,
  title: 'Monitor Pause'
};
const monitorPlay = {
  path: () => [ssr(_tmpl$2533), ssr(_tmpl$2525), ssr(_tmpl$2526), ssr(_tmpl$2534)],
  outline: true,
  mini: false,
  title: 'Monitor Play'
};
const monitorSmartphone = {
  path: () => [ssr(_tmpl$2535), ssr(_tmpl$2536), ssr(_tmpl$2537), ssr(_tmpl$2538)],
  outline: true,
  mini: false,
  title: 'Monitor Smartphone'
};
const monitorSpeaker = {
  path: () => [ssr(_tmpl$2539), ssr(_tmpl$2540), ssr(_tmpl$2541), ssr(_tmpl$2542), ssr(_tmpl$2543)],
  outline: true,
  mini: false,
  title: 'Monitor Speaker'
};
const monitorStop = {
  path: () => [ssr(_tmpl$2525), ssr(_tmpl$2526), ssr(_tmpl$2534), ssr(_tmpl$2544)],
  outline: true,
  mini: false,
  title: 'Monitor Stop'
};
const monitorUp = {
  path: () => [ssr(_tmpl$572), ssr(_tmpl$537), ssr(_tmpl$2524), ssr(_tmpl$2525), ssr(_tmpl$2526)],
  outline: true,
  mini: false,
  title: 'Monitor Up'
};
const monitorX = {
  path: () => [ssr(_tmpl$2545), ssr(_tmpl$2546), ssr(_tmpl$2524), ssr(_tmpl$2525), ssr(_tmpl$2526)],
  outline: true,
  mini: false,
  title: 'Monitor X'
};
const monitor = {
  path: () => [ssr(_tmpl$2524), ssr(_tmpl$2547), ssr(_tmpl$2548)],
  outline: true,
  mini: false,
  title: 'Monitor'
};
const moonStar = {
  path: () => [ssr(_tmpl$2549), ssr(_tmpl$2550), ssr(_tmpl$2551)],
  outline: true,
  mini: false,
  title: 'Moon Star'
};
const moon = {
  path: () => ssr(_tmpl$2552),
  outline: true,
  mini: false,
  title: 'Moon'
};
const mountainSnow = {
  path: () => [ssr(_tmpl$2553), ssr(_tmpl$2554)],
  outline: true,
  mini: false,
  title: 'Mountain Snow'
};
const mountain = {
  path: () => ssr(_tmpl$2553),
  outline: true,
  mini: false,
  title: 'Mountain'
};
const mouseOff = {
  path: () => [ssr(_tmpl$2555), ssr(_tmpl$2556), ssr(_tmpl$2557), ssr(_tmpl$601)],
  outline: true,
  mini: false,
  title: 'Mouse Off'
};
const mousePointer_2 = {
  path: () => ssr(_tmpl$2558),
  outline: true,
  mini: false,
  title: 'Mouse Pointer 2'
};
const mousePointerBan = {
  path: () => [ssr(_tmpl$2559), ssr(_tmpl$775), ssr(_tmpl$2560)],
  outline: true,
  mini: false,
  title: 'Mouse Pointer Ban'
};
const mousePointerClick = {
  path: () => [ssr(_tmpl$2561), ssr(_tmpl$2562), ssr(_tmpl$2563), ssr(_tmpl$2564), ssr(_tmpl$2565)],
  outline: true,
  mini: false,
  title: 'Mouse Pointer Click'
};
const mousePointer = {
  path: () => [ssr(_tmpl$2566), ssr(_tmpl$2567)],
  outline: true,
  mini: false,
  title: 'Mouse Pointer'
};
const mouse = {
  path: () => [ssr(_tmpl$2568), ssr(_tmpl$2083)],
  outline: true,
  mini: false,
  title: 'Mouse'
};
const move_3d = {
  path: () => [ssr(_tmpl$2569), ssr(_tmpl$2570), ssr(_tmpl$2571), ssr(_tmpl$2572)],
  outline: true,
  mini: false,
  title: 'Move 3d'
};
const moveDiagonal_2 = {
  path: () => [ssr(_tmpl$2573), ssr(_tmpl$2574), ssr(_tmpl$2575)],
  outline: true,
  mini: false,
  title: 'Move Diagonal 2'
};
const moveDiagonal = {
  path: () => [ssr(_tmpl$2576), ssr(_tmpl$2577), ssr(_tmpl$1424)],
  outline: true,
  mini: false,
  title: 'Move Diagonal'
};
const moveDownLeft = {
  path: () => [ssr(_tmpl$2578), ssr(_tmpl$2579)],
  outline: true,
  mini: false,
  title: 'Move Down Left'
};
const moveDownRight = {
  path: () => [ssr(_tmpl$2580), ssr(_tmpl$2581)],
  outline: true,
  mini: false,
  title: 'Move Down Right'
};
const moveDown = {
  path: () => [ssr(_tmpl$2582), ssr(_tmpl$2583)],
  outline: true,
  mini: false,
  title: 'Move Down'
};
const moveHorizontal = {
  path: () => [ssr(_tmpl$2584), ssr(_tmpl$2585), ssr(_tmpl$387)],
  outline: true,
  mini: false,
  title: 'Move Horizontal'
};
const moveLeft = {
  path: () => [ssr(_tmpl$2586), ssr(_tmpl$2587)],
  outline: true,
  mini: false,
  title: 'Move Left'
};
const moveRight = {
  path: () => [ssr(_tmpl$2588), ssr(_tmpl$2587)],
  outline: true,
  mini: false,
  title: 'Move Right'
};
const moveUpLeft = {
  path: () => [ssr(_tmpl$2589), ssr(_tmpl$2581)],
  outline: true,
  mini: false,
  title: 'Move Up Left'
};
const moveUpRight = {
  path: () => [ssr(_tmpl$2590), ssr(_tmpl$2579)],
  outline: true,
  mini: false,
  title: 'Move Up Right'
};
const moveUp = {
  path: () => [ssr(_tmpl$2591), ssr(_tmpl$2583)],
  outline: true,
  mini: false,
  title: 'Move Up'
};
const moveVertical = {
  path: () => [ssr(_tmpl$2592), ssr(_tmpl$2593), ssr(_tmpl$1344)],
  outline: true,
  mini: false,
  title: 'Move Vertical'
};
const move = {
  path: () => [ssr(_tmpl$2594), ssr(_tmpl$2595), ssr(_tmpl$2596), ssr(_tmpl$2597), ssr(_tmpl$387), ssr(_tmpl$1344)],
  outline: true,
  mini: false,
  title: 'Move'
};
const music_2 = {
  path: () => [ssr(_tmpl$2598), ssr(_tmpl$2599)],
  outline: true,
  mini: false,
  title: 'Music 2'
};
const music_3 = {
  path: () => [ssr(_tmpl$2600), ssr(_tmpl$2601)],
  outline: true,
  mini: false,
  title: 'Music 3'
};
const music_4 = {
  path: () => [ssr(_tmpl$2602), ssr(_tmpl$2603), ssr(_tmpl$1864), ssr(_tmpl$2604)],
  outline: true,
  mini: false,
  title: 'Music 4'
};
const music = {
  path: () => [ssr(_tmpl$2602), ssr(_tmpl$1864), ssr(_tmpl$2604)],
  outline: true,
  mini: false,
  title: 'Music'
};
const navigation_2Off = {
  path: () => [ssr(_tmpl$2605), ssr(_tmpl$2606), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Navigation 2 Off'
};
const navigation_2 = {
  path: () => ssr(_tmpl$2607),
  outline: true,
  mini: false,
  title: 'Navigation 2'
};
const navigationOff = {
  path: () => [ssr(_tmpl$2608), ssr(_tmpl$2609), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Navigation Off'
};
const navigation = {
  path: () => ssr(_tmpl$2610),
  outline: true,
  mini: false,
  title: 'Navigation'
};
const network = {
  path: () => [ssr(_tmpl$2611), ssr(_tmpl$2612), ssr(_tmpl$2613), ssr(_tmpl$2614), ssr(_tmpl$2615)],
  outline: true,
  mini: false,
  title: 'Network'
};
const newspaper = {
  path: () => [ssr(_tmpl$2616), ssr(_tmpl$2617), ssr(_tmpl$2618), ssr(_tmpl$2619)],
  outline: true,
  mini: false,
  title: 'Newspaper'
};
const nfc = {
  path: () => [ssr(_tmpl$2620), ssr(_tmpl$2621), ssr(_tmpl$2622), ssr(_tmpl$2623)],
  outline: true,
  mini: false,
  title: 'Nfc'
};
const notebookPen = {
  path: () => [ssr(_tmpl$2624), ssr(_tmpl$2625), ssr(_tmpl$2626), ssr(_tmpl$2627), ssr(_tmpl$2628), ssr(_tmpl$2629)],
  outline: true,
  mini: false,
  title: 'Notebook Pen'
};
const notebookTabs = {
  path: () => [ssr(_tmpl$2625), ssr(_tmpl$2626), ssr(_tmpl$2627), ssr(_tmpl$2628), ssr(_tmpl$760), ssr(_tmpl$2630), ssr(_tmpl$2631), ssr(_tmpl$2632), ssr(_tmpl$2633)],
  outline: true,
  mini: false,
  title: 'Notebook Tabs'
};
const notebookText = {
  path: () => [ssr(_tmpl$2625), ssr(_tmpl$2626), ssr(_tmpl$2627), ssr(_tmpl$2628), ssr(_tmpl$760), ssr(_tmpl$2634), ssr(_tmpl$2635), ssr(_tmpl$2636)],
  outline: true,
  mini: false,
  title: 'Notebook Text'
};
const notebook = {
  path: () => [ssr(_tmpl$2625), ssr(_tmpl$2626), ssr(_tmpl$2627), ssr(_tmpl$2628), ssr(_tmpl$760), ssr(_tmpl$2637)],
  outline: true,
  mini: false,
  title: 'Notebook'
};
const notepadTextDashed = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$1460), ssr(_tmpl$766), ssr(_tmpl$2638), ssr(_tmpl$2639), ssr(_tmpl$2640), ssr(_tmpl$2641), ssr(_tmpl$2642), ssr(_tmpl$2643), ssr(_tmpl$2644), ssr(_tmpl$2645), ssr(_tmpl$2646), ssr(_tmpl$2647)],
  outline: true,
  mini: false,
  title: 'Notepad Text Dashed'
};
const notepadText = {
  path: () => [ssr(_tmpl$765), ssr(_tmpl$1460), ssr(_tmpl$766), ssr(_tmpl$2648), ssr(_tmpl$2645), ssr(_tmpl$2646), ssr(_tmpl$2647)],
  outline: true,
  mini: false,
  title: 'Notepad Text'
};
const nutOff = {
  path: () => [ssr(_tmpl$2649), ssr(_tmpl$2650), ssr(_tmpl$2651), ssr(_tmpl$2652), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Nut Off'
};
const nut = {
  path: () => [ssr(_tmpl$2649), ssr(_tmpl$2653), ssr(_tmpl$2654)],
  outline: true,
  mini: false,
  title: 'Nut'
};
const octagonAlert = {
  path: () => [ssr(_tmpl$2655), ssr(_tmpl$317), ssr(_tmpl$318)],
  outline: true,
  mini: false,
  title: 'Octagon Alert'
};
const octagonPause = {
  path: () => [ssr(_tmpl$2656), ssr(_tmpl$2657), ssr(_tmpl$2658)],
  outline: true,
  mini: false,
  title: 'Octagon Pause'
};
const octagonX = {
  path: () => [ssr(_tmpl$2655), ssr(_tmpl$338), ssr(_tmpl$1009)],
  outline: true,
  mini: false,
  title: 'Octagon X'
};
const octagon = {
  path: () => ssr(_tmpl$2655),
  outline: true,
  mini: false,
  title: 'Octagon'
};
const option = {
  path: () => [ssr(_tmpl$2659), ssr(_tmpl$2660)],
  outline: true,
  mini: false,
  title: 'Option'
};
const orbit = {
  path: () => [ssr(_tmpl$656), ssr(_tmpl$2661), ssr(_tmpl$1796), ssr(_tmpl$2662), ssr(_tmpl$2663)],
  outline: true,
  mini: false,
  title: 'Orbit'
};
const origami = {
  path: () => [ssr(_tmpl$2664), ssr(_tmpl$2665), ssr(_tmpl$2666)],
  outline: true,
  mini: false,
  title: 'Origami'
};
const package_2 = {
  path: () => [ssr(_tmpl$2667), ssr(_tmpl$2668), ssr(_tmpl$1868)],
  outline: true,
  mini: false,
  title: 'Package 2'
};
const packageCheck = {
  path: () => [ssr(_tmpl$2669), ssr(_tmpl$2670), ssr(_tmpl$2671), ssr(_tmpl$2672), ssr(_tmpl$2673)],
  outline: true,
  mini: false,
  title: 'Package Check'
};
const packageMinus = {
  path: () => [ssr(_tmpl$2674), ssr(_tmpl$2670), ssr(_tmpl$2671), ssr(_tmpl$2672), ssr(_tmpl$2673)],
  outline: true,
  mini: false,
  title: 'Package Minus'
};
const packageOpen = {
  path: () => [ssr(_tmpl$2675), ssr(_tmpl$2676), ssr(_tmpl$2677), ssr(_tmpl$2678)],
  outline: true,
  mini: false,
  title: 'Package Open'
};
const packagePlus = {
  path: () => [ssr(_tmpl$2674), ssr(_tmpl$2679), ssr(_tmpl$2670), ssr(_tmpl$2671), ssr(_tmpl$2672), ssr(_tmpl$2673)],
  outline: true,
  mini: false,
  title: 'Package Plus'
};
const packageSearch = {
  path: () => [ssr(_tmpl$2670), ssr(_tmpl$2671), ssr(_tmpl$2672), ssr(_tmpl$2673), ssr(_tmpl$2680), ssr(_tmpl$2681)],
  outline: true,
  mini: false,
  title: 'Package Search'
};
const packageX = {
  path: () => [ssr(_tmpl$2670), ssr(_tmpl$2671), ssr(_tmpl$2672), ssr(_tmpl$2673), ssr(_tmpl$2682)],
  outline: true,
  mini: false,
  title: 'Package X'
};
const packageIcon = {
  path: () => [ssr(_tmpl$2671), ssr(_tmpl$620), ssr(_tmpl$621), ssr(_tmpl$622)],
  outline: true,
  mini: false,
  title: 'Package'
};
const paintBucket = {
  path: () => [ssr(_tmpl$2683), ssr(_tmpl$2684), ssr(_tmpl$2685), ssr(_tmpl$2686)],
  outline: true,
  mini: false,
  title: 'Paint Bucket'
};
const paintRoller = {
  path: () => [ssr(_tmpl$2687), ssr(_tmpl$2688), ssr(_tmpl$2689)],
  outline: true,
  mini: false,
  title: 'Paint Roller'
};
const paintbrush_2 = {
  path: () => [ssr(_tmpl$2690), ssr(_tmpl$2691), ssr(_tmpl$2692), ssr(_tmpl$1136)],
  outline: true,
  mini: false,
  title: 'Paintbrush 2'
};
const paintbrush = {
  path: () => [ssr(_tmpl$2693), ssr(_tmpl$2694), ssr(_tmpl$2695)],
  outline: true,
  mini: false,
  title: 'Paintbrush'
};
const palette = {
  path: () => [ssr(_tmpl$2696), ssr(_tmpl$2697), ssr(_tmpl$2698), ssr(_tmpl$2699), ssr(_tmpl$2700)],
  outline: true,
  mini: false,
  title: 'Palette'
};
const panelBottomClose = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$671), ssr(_tmpl$2701)],
  outline: true,
  mini: false,
  title: 'Panel Bottom Close'
};
const panelBottomDashed = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$2702), ssr(_tmpl$2703), ssr(_tmpl$2704), ssr(_tmpl$2705)],
  outline: true,
  mini: false,
  title: 'Panel Bottom Dashed'
};
const panelBottomOpen = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$671), ssr(_tmpl$572)],
  outline: true,
  mini: false,
  title: 'Panel Bottom Open'
};
const panelBottom = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$671)],
  outline: true,
  mini: false,
  title: 'Panel Bottom'
};
const panelLeftClose = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1157), ssr(_tmpl$2706)],
  outline: true,
  mini: false,
  title: 'Panel Left Close'
};
const panelLeftDashed = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$2707), ssr(_tmpl$2708), ssr(_tmpl$2709), ssr(_tmpl$2710)],
  outline: true,
  mini: false,
  title: 'Panel Left Dashed'
};
const panelLeftOpen = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1157), ssr(_tmpl$2711)],
  outline: true,
  mini: false,
  title: 'Panel Left Open'
};
const panelLeft = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1157)],
  outline: true,
  mini: false,
  title: 'Panel Left'
};
const panelRightClose = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1158), ssr(_tmpl$2712)],
  outline: true,
  mini: false,
  title: 'Panel Right Close'
};
const panelRightDashed = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$2713), ssr(_tmpl$2714), ssr(_tmpl$2715), ssr(_tmpl$2716)],
  outline: true,
  mini: false,
  title: 'Panel Right Dashed'
};
const panelRightOpen = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1158), ssr(_tmpl$2460)],
  outline: true,
  mini: false,
  title: 'Panel Right Open'
};
const panelRight = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1158)],
  outline: true,
  mini: false,
  title: 'Panel Right'
};
const panelTopClose = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$672), ssr(_tmpl$2717)],
  outline: true,
  mini: false,
  title: 'Panel Top Close'
};
const panelTopDashed = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$2718), ssr(_tmpl$2719), ssr(_tmpl$2720), ssr(_tmpl$2721)],
  outline: true,
  mini: false,
  title: 'Panel Top Dashed'
};
const panelTopOpen = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$672), ssr(_tmpl$2722)],
  outline: true,
  mini: false,
  title: 'Panel Top Open'
};
const panelTop = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$672)],
  outline: true,
  mini: false,
  title: 'Panel Top'
};
const panelsLeftBottom = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1157), ssr(_tmpl$2723)],
  outline: true,
  mini: false,
  title: 'Panels Left Bottom'
};
const panelsRightBottom = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$2724), ssr(_tmpl$1158)],
  outline: true,
  mini: false,
  title: 'Panels Right Bottom'
};
const panelsTopLeft = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$672), ssr(_tmpl$2725)],
  outline: true,
  mini: false,
  title: 'Panels Top Left'
};
const paperclip = {
  path: () => ssr(_tmpl$2726),
  outline: true,
  mini: false,
  title: 'Paperclip'
};
const parentheses = {
  path: () => [ssr(_tmpl$2727), ssr(_tmpl$2728)],
  outline: true,
  mini: false,
  title: 'Parentheses'
};
const parkingMeter = {
  path: () => [ssr(_tmpl$2729), ssr(_tmpl$1881), ssr(_tmpl$2730), ssr(_tmpl$2731), ssr(_tmpl$2732)],
  outline: true,
  mini: false,
  title: 'Parking Meter'
};
const partyPopper = {
  path: () => [ssr(_tmpl$2733), ssr(_tmpl$2734), ssr(_tmpl$2735), ssr(_tmpl$2736), ssr(_tmpl$2737), ssr(_tmpl$2738), ssr(_tmpl$2739), ssr(_tmpl$2740), ssr(_tmpl$2741)],
  outline: true,
  mini: false,
  title: 'Party Popper'
};
const pause = {
  path: () => [ssr(_tmpl$2742), ssr(_tmpl$2743)],
  outline: true,
  mini: false,
  title: 'Pause'
};
const pawPrint = {
  path: () => [ssr(_tmpl$2744), ssr(_tmpl$2745), ssr(_tmpl$444), ssr(_tmpl$2746)],
  outline: true,
  mini: false,
  title: 'Paw Print'
};
const pcCase = {
  path: () => [ssr(_tmpl$2747), ssr(_tmpl$2748), ssr(_tmpl$2749), ssr(_tmpl$555)],
  outline: true,
  mini: false,
  title: 'Pc Case'
};
const penLine = {
  path: () => [ssr(_tmpl$2750), ssr(_tmpl$2751)],
  outline: true,
  mini: false,
  title: 'Pen Line'
};
const penTool = {
  path: () => [ssr(_tmpl$2752), ssr(_tmpl$2753), ssr(_tmpl$2754), ssr(_tmpl$2755)],
  outline: true,
  mini: false,
  title: 'Pen Tool'
};
const pen = {
  path: () => ssr(_tmpl$2756),
  outline: true,
  mini: false,
  title: 'Pen'
};
const pencilLine = {
  path: () => [ssr(_tmpl$2750), ssr(_tmpl$2751), ssr(_tmpl$2757)],
  outline: true,
  mini: false,
  title: 'Pencil Line'
};
const pencilRuler = {
  path: () => [ssr(_tmpl$2758), ssr(_tmpl$2759), ssr(_tmpl$2760), ssr(_tmpl$2761), ssr(_tmpl$2762), ssr(_tmpl$2763)],
  outline: true,
  mini: false,
  title: 'Pencil Ruler'
};
const pencil = {
  path: () => [ssr(_tmpl$2756), ssr(_tmpl$2758)],
  outline: true,
  mini: false,
  title: 'Pencil'
};
const pentagon = {
  path: () => ssr(_tmpl$2764),
  outline: true,
  mini: false,
  title: 'Pentagon'
};
const percent = {
  path: () => [ssr(_tmpl$1424), ssr(_tmpl$2765), ssr(_tmpl$2766)],
  outline: true,
  mini: false,
  title: 'Percent'
};
const personStanding = {
  path: () => [ssr(_tmpl$1418), ssr(_tmpl$2767), ssr(_tmpl$2768), ssr(_tmpl$2769)],
  outline: true,
  mini: false,
  title: 'Person Standing'
};
const phoneCall = {
  path: () => [ssr(_tmpl$2770), ssr(_tmpl$2771), ssr(_tmpl$2772)],
  outline: true,
  mini: false,
  title: 'Phone Call'
};
const phoneForwarded = {
  path: () => [ssr(_tmpl$2773), ssr(_tmpl$2774), ssr(_tmpl$2770)],
  outline: true,
  mini: false,
  title: 'Phone Forwarded'
};
const phoneIncoming = {
  path: () => [ssr(_tmpl$2775), ssr(_tmpl$2776), ssr(_tmpl$2770)],
  outline: true,
  mini: false,
  title: 'Phone Incoming'
};
const phoneMissed = {
  path: () => [ssr(_tmpl$2776), ssr(_tmpl$2777), ssr(_tmpl$2770)],
  outline: true,
  mini: false,
  title: 'Phone Missed'
};
const phoneOff = {
  path: () => [ssr(_tmpl$2778), ssr(_tmpl$2779)],
  outline: true,
  mini: false,
  title: 'Phone Off'
};
const phoneOutgoing = {
  path: () => [ssr(_tmpl$2780), ssr(_tmpl$2781), ssr(_tmpl$2770)],
  outline: true,
  mini: false,
  title: 'Phone Outgoing'
};
const phone = {
  path: () => ssr(_tmpl$2770),
  outline: true,
  mini: false,
  title: 'Phone'
};
const pi = {
  path: () => [ssr(_tmpl$2782), ssr(_tmpl$2783), ssr(_tmpl$2784)],
  outline: true,
  mini: false,
  title: 'Pi'
};
const piano = {
  path: () => [ssr(_tmpl$2785), ssr(_tmpl$108), ssr(_tmpl$2786), ssr(_tmpl$2787), ssr(_tmpl$2788), ssr(_tmpl$2789)],
  outline: true,
  mini: false,
  title: 'Piano'
};
const pickaxe = {
  path: () => [ssr(_tmpl$2790), ssr(_tmpl$2791), ssr(_tmpl$2792), ssr(_tmpl$2793)],
  outline: true,
  mini: false,
  title: 'Pickaxe'
};
const pictureInPicture_2 = {
  path: () => [ssr(_tmpl$2794), ssr(_tmpl$2795)],
  outline: true,
  mini: false,
  title: 'Picture In Picture 2'
};
const pictureInPicture = {
  path: () => [ssr(_tmpl$2796), ssr(_tmpl$2797)],
  outline: true,
  mini: false,
  title: 'Picture In Picture'
};
const pieChart = {
  path: () => [ssr(_tmpl$2798), ssr(_tmpl$2799)],
  outline: true,
  mini: false,
  title: 'Pie Chart'
};
const piggyBank = {
  path: () => [ssr(_tmpl$2800), ssr(_tmpl$2801), ssr(_tmpl$2802)],
  outline: true,
  mini: false,
  title: 'Piggy Bank'
};
const pilcrowLeft = {
  path: () => [ssr(_tmpl$2803), ssr(_tmpl$2804), ssr(_tmpl$2805), ssr(_tmpl$2806), ssr(_tmpl$2807)],
  outline: true,
  mini: false,
  title: 'Pilcrow Left'
};
const pilcrowRight = {
  path: () => [ssr(_tmpl$2808), ssr(_tmpl$2809), ssr(_tmpl$2803), ssr(_tmpl$2810), ssr(_tmpl$2811)],
  outline: true,
  mini: false,
  title: 'Pilcrow Right'
};
const pilcrow = {
  path: () => [ssr(_tmpl$2812), ssr(_tmpl$228), ssr(_tmpl$2813)],
  outline: true,
  mini: false,
  title: 'Pilcrow'
};
const pill = {
  path: () => [ssr(_tmpl$2814), ssr(_tmpl$2815)],
  outline: true,
  mini: false,
  title: 'Pill'
};
const pinOff = {
  path: () => [ssr(_tmpl$408), ssr(_tmpl$2816), ssr(_tmpl$2817), ssr(_tmpl$2818)],
  outline: true,
  mini: false,
  title: 'Pin Off'
};
const pin = {
  path: () => [ssr(_tmpl$2816), ssr(_tmpl$2819)],
  outline: true,
  mini: false,
  title: 'Pin'
};
const pipette = {
  path: () => [ssr(_tmpl$2820), ssr(_tmpl$2821), ssr(_tmpl$2822)],
  outline: true,
  mini: false,
  title: 'Pipette'
};
const pizza = {
  path: () => [ssr(_tmpl$2823), ssr(_tmpl$2824), ssr(_tmpl$1310), ssr(_tmpl$2825), ssr(_tmpl$2826)],
  outline: true,
  mini: false,
  title: 'Pizza'
};
const planeLanding = {
  path: () => [ssr(_tmpl$113), ssr(_tmpl$2827)],
  outline: true,
  mini: false,
  title: 'Plane Landing'
};
const planeTakeoff = {
  path: () => [ssr(_tmpl$113), ssr(_tmpl$2828)],
  outline: true,
  mini: false,
  title: 'Plane Takeoff'
};
const plane = {
  path: () => ssr(_tmpl$2829),
  outline: true,
  mini: false,
  title: 'Plane'
};
const play = {
  path: () => ssr(_tmpl$2830),
  outline: true,
  mini: false,
  title: 'Play'
};
const plug_2 = {
  path: () => [ssr(_tmpl$2831), ssr(_tmpl$2832), ssr(_tmpl$2833), ssr(_tmpl$1268), ssr(_tmpl$2834)],
  outline: true,
  mini: false,
  title: 'Plug 2'
};
const plugZap_2 = {
  path: () => [ssr(_tmpl$2835), ssr(_tmpl$2836), ssr(_tmpl$2837), ssr(_tmpl$2838), ssr(_tmpl$2839)],
  outline: true,
  mini: false,
  title: 'Plug Zap 2'
};
const plugZap = {
  path: () => [ssr(_tmpl$2840), ssr(_tmpl$2841), ssr(_tmpl$2842), ssr(_tmpl$2843), ssr(_tmpl$2844)],
  outline: true,
  mini: false,
  title: 'Plug Zap'
};
const plug = {
  path: () => [ssr(_tmpl$2845), ssr(_tmpl$2846), ssr(_tmpl$2847), ssr(_tmpl$2848)],
  outline: true,
  mini: false,
  title: 'Plug'
};
const plus = {
  path: () => [ssr(_tmpl$259), ssr(_tmpl$235)],
  outline: true,
  mini: false,
  title: 'Plus'
};
const pocketKnife = {
  path: () => [ssr(_tmpl$2849), ssr(_tmpl$1365), ssr(_tmpl$1315), ssr(_tmpl$2850), ssr(_tmpl$2851)],
  outline: true,
  mini: false,
  title: 'Pocket Knife'
};
const pocket = {
  path: () => [ssr(_tmpl$2852), ssr(_tmpl$2853)],
  outline: true,
  mini: false,
  title: 'Pocket'
};
const podcast = {
  path: () => [ssr(_tmpl$2854), ssr(_tmpl$2855), ssr(_tmpl$2856), ssr(_tmpl$2857)],
  outline: true,
  mini: false,
  title: 'Podcast'
};
const pointerOff = {
  path: () => [ssr(_tmpl$2858), ssr(_tmpl$2859), ssr(_tmpl$2860), ssr(_tmpl$2861), ssr(_tmpl$2862), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Pointer Off'
};
const pointer = {
  path: () => [ssr(_tmpl$2863), ssr(_tmpl$2864), ssr(_tmpl$2865), ssr(_tmpl$2866), ssr(_tmpl$2867)],
  outline: true,
  mini: false,
  title: 'Pointer'
};
const popcorn = {
  path: () => [ssr(_tmpl$2868), ssr(_tmpl$2869), ssr(_tmpl$2870), ssr(_tmpl$2871)],
  outline: true,
  mini: false,
  title: 'Popcorn'
};
const popsicle = {
  path: () => [ssr(_tmpl$2872), ssr(_tmpl$2873)],
  outline: true,
  mini: false,
  title: 'Popsicle'
};
const poundSterling = {
  path: () => [ssr(_tmpl$2874), ssr(_tmpl$2875), ssr(_tmpl$2876), ssr(_tmpl$2877)],
  outline: true,
  mini: false,
  title: 'Pound Sterling'
};
const powerOff = {
  path: () => [ssr(_tmpl$2878), ssr(_tmpl$2879), ssr(_tmpl$1460), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Power Off'
};
const power = {
  path: () => [ssr(_tmpl$2880), ssr(_tmpl$2881)],
  outline: true,
  mini: false,
  title: 'Power'
};
const presentation = {
  path: () => [ssr(_tmpl$122), ssr(_tmpl$2882), ssr(_tmpl$2883)],
  outline: true,
  mini: false,
  title: 'Presentation'
};
const printer = {
  path: () => [ssr(_tmpl$2884), ssr(_tmpl$2885), ssr(_tmpl$2886)],
  outline: true,
  mini: false,
  title: 'Printer'
};
const projector = {
  path: () => [ssr(_tmpl$2887), ssr(_tmpl$2888), ssr(_tmpl$2889), ssr(_tmpl$2890), ssr(_tmpl$2891), ssr(_tmpl$2892)],
  outline: true,
  mini: false,
  title: 'Projector'
};
const proportions = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$2893), ssr(_tmpl$2894)],
  outline: true,
  mini: false,
  title: 'Proportions'
};
const puzzle = {
  path: () => ssr(_tmpl$2895),
  outline: true,
  mini: false,
  title: 'Puzzle'
};
const pyramid = {
  path: () => [ssr(_tmpl$2896), ssr(_tmpl$49)],
  outline: true,
  mini: false,
  title: 'Pyramid'
};
const qrCode = {
  path: () => [ssr(_tmpl$2897), ssr(_tmpl$2898), ssr(_tmpl$2899), ssr(_tmpl$2900), ssr(_tmpl$2901), ssr(_tmpl$2902), ssr(_tmpl$2903), ssr(_tmpl$2904), ssr(_tmpl$2905), ssr(_tmpl$2906), ssr(_tmpl$2907), ssr(_tmpl$2908)],
  outline: true,
  mini: false,
  title: 'Qr Code'
};
const quote = {
  path: () => [ssr(_tmpl$2909), ssr(_tmpl$2910)],
  outline: true,
  mini: false,
  title: 'Quote'
};
const rabbit = {
  path: () => [ssr(_tmpl$2911), ssr(_tmpl$509), ssr(_tmpl$2912), ssr(_tmpl$2913), ssr(_tmpl$2914)],
  outline: true,
  mini: false,
  title: 'Rabbit'
};
const radar = {
  path: () => [ssr(_tmpl$2915), ssr(_tmpl$2916), ssr(_tmpl$2917), ssr(_tmpl$2918), ssr(_tmpl$763), ssr(_tmpl$2919), ssr(_tmpl$361), ssr(_tmpl$2920)],
  outline: true,
  mini: false,
  title: 'Radar'
};
const radiation = {
  path: () => [ssr(_tmpl$2921), ssr(_tmpl$2922), ssr(_tmpl$2923), ssr(_tmpl$2924)],
  outline: true,
  mini: false,
  title: 'Radiation'
};
const radical = {
  path: () => ssr(_tmpl$2925),
  outline: true,
  mini: false,
  title: 'Radical'
};
const radioReceiver = {
  path: () => [ssr(_tmpl$2926), ssr(_tmpl$2927), ssr(_tmpl$2928), ssr(_tmpl$2929)],
  outline: true,
  mini: false,
  title: 'Radio Receiver'
};
const radioTower = {
  path: () => [ssr(_tmpl$2930), ssr(_tmpl$2931), ssr(_tmpl$2932), ssr(_tmpl$2933), ssr(_tmpl$2934), ssr(_tmpl$2935), ssr(_tmpl$2936)],
  outline: true,
  mini: false,
  title: 'Radio Tower'
};
const radio = {
  path: () => [ssr(_tmpl$2937), ssr(_tmpl$2938), ssr(_tmpl$361), ssr(_tmpl$2939), ssr(_tmpl$2940)],
  outline: true,
  mini: false,
  title: 'Radio'
};
const radius = {
  path: () => [ssr(_tmpl$2941), ssr(_tmpl$1295), ssr(_tmpl$2942), ssr(_tmpl$361)],
  outline: true,
  mini: false,
  title: 'Radius'
};
const railSymbol = {
  path: () => [ssr(_tmpl$2943), ssr(_tmpl$2944), ssr(_tmpl$2945)],
  outline: true,
  mini: false,
  title: 'Rail Symbol'
};
const rainbow = {
  path: () => [ssr(_tmpl$2946), ssr(_tmpl$2947), ssr(_tmpl$2948)],
  outline: true,
  mini: false,
  title: 'Rainbow'
};
const rat = {
  path: () => [ssr(_tmpl$2949), ssr(_tmpl$2950), ssr(_tmpl$2951), ssr(_tmpl$2952), ssr(_tmpl$2953)],
  outline: true,
  mini: false,
  title: 'Rat'
};
const ratio = {
  path: () => [ssr(_tmpl$2954), ssr(_tmpl$360)],
  outline: true,
  mini: false,
  title: 'Ratio'
};
const receiptCent = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2956), ssr(_tmpl$325)],
  outline: true,
  mini: false,
  title: 'Receipt Cent'
};
const receiptEuro = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2957), ssr(_tmpl$2958)],
  outline: true,
  mini: false,
  title: 'Receipt Euro'
};
const receiptIndianRupee = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2422), ssr(_tmpl$2959), ssr(_tmpl$567)],
  outline: true,
  mini: false,
  title: 'Receipt Indian Rupee'
};
const receiptJapaneseYen = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2960), ssr(_tmpl$2961), ssr(_tmpl$2962), ssr(_tmpl$1547)],
  outline: true,
  mini: false,
  title: 'Receipt Japanese Yen'
};
const receiptPoundSterling = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2963), ssr(_tmpl$2964), ssr(_tmpl$2965)],
  outline: true,
  mini: false,
  title: 'Receipt Pound Sterling'
};
const receiptRussianRuble = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2966), ssr(_tmpl$2967)],
  outline: true,
  mini: false,
  title: 'Receipt Russian Ruble'
};
const receiptSwissFranc = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2968), ssr(_tmpl$2969), ssr(_tmpl$2966)],
  outline: true,
  mini: false,
  title: 'Receipt Swiss Franc'
};
const receiptText = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$2970), ssr(_tmpl$938), ssr(_tmpl$2971)],
  outline: true,
  mini: false,
  title: 'Receipt Text'
};
const receipt = {
  path: () => [ssr(_tmpl$2955), ssr(_tmpl$322), ssr(_tmpl$2972)],
  outline: true,
  mini: false,
  title: 'Receipt'
};
const rectangleEllipsis = {
  path: () => [ssr(_tmpl$360), ssr(_tmpl$675), ssr(_tmpl$979), ssr(_tmpl$980)],
  outline: true,
  mini: false,
  title: 'Rectangle Ellipsis'
};
const rectangleHorizontal = {
  path: () => ssr(_tmpl$360),
  outline: true,
  mini: false,
  title: 'Rectangle Horizontal'
};
const rectangleVertical = {
  path: () => ssr(_tmpl$2954),
  outline: true,
  mini: false,
  title: 'Rectangle Vertical'
};
const recycle = {
  path: () => [ssr(_tmpl$2973), ssr(_tmpl$2974), ssr(_tmpl$2975), ssr(_tmpl$2976), ssr(_tmpl$2977), ssr(_tmpl$2978)],
  outline: true,
  mini: false,
  title: 'Recycle'
};
const redo_2 = {
  path: () => [ssr(_tmpl$2979), ssr(_tmpl$2980)],
  outline: true,
  mini: false,
  title: 'Redo 2'
};
const redoDot = {
  path: () => [ssr(_tmpl$2981), ssr(_tmpl$2982), ssr(_tmpl$2983)],
  outline: true,
  mini: false,
  title: 'Redo Dot'
};
const redo = {
  path: () => [ssr(_tmpl$2982), ssr(_tmpl$2983)],
  outline: true,
  mini: false,
  title: 'Redo'
};
const refreshCcwDot = {
  path: () => [ssr(_tmpl$2984), ssr(_tmpl$2985), ssr(_tmpl$2986), ssr(_tmpl$2987), ssr(_tmpl$291)],
  outline: true,
  mini: false,
  title: 'Refresh Ccw Dot'
};
const refreshCcw = {
  path: () => [ssr(_tmpl$2988), ssr(_tmpl$2063), ssr(_tmpl$2989), ssr(_tmpl$2990)],
  outline: true,
  mini: false,
  title: 'Refresh Ccw'
};
const refreshCwOff = {
  path: () => [ssr(_tmpl$2991), ssr(_tmpl$2992), ssr(_tmpl$2993), ssr(_tmpl$2994), ssr(_tmpl$2995), ssr(_tmpl$2996), ssr(_tmpl$601)],
  outline: true,
  mini: false,
  title: 'Refresh Cw Off'
};
const refreshCw = {
  path: () => [ssr(_tmpl$2997), ssr(_tmpl$2996), ssr(_tmpl$2998), ssr(_tmpl$2992)],
  outline: true,
  mini: false,
  title: 'Refresh Cw'
};
const refrigerator = {
  path: () => [ssr(_tmpl$2999), ssr(_tmpl$1319), ssr(_tmpl$3000)],
  outline: true,
  mini: false,
  title: 'Refrigerator'
};
const regex = {
  path: () => [ssr(_tmpl$3001), ssr(_tmpl$3002), ssr(_tmpl$3003), ssr(_tmpl$3004)],
  outline: true,
  mini: false,
  title: 'Regex'
};
const removeFormatting = {
  path: () => [ssr(_tmpl$3005), ssr(_tmpl$3006), ssr(_tmpl$3007), ssr(_tmpl$3008), ssr(_tmpl$3009)],
  outline: true,
  mini: false,
  title: 'Remove Formatting'
};
const repeat_1 = {
  path: () => [ssr(_tmpl$3010), ssr(_tmpl$3011), ssr(_tmpl$3012), ssr(_tmpl$3013), ssr(_tmpl$3014)],
  outline: true,
  mini: false,
  title: 'Repeat 1'
};
const repeat_2 = {
  path: () => [ssr(_tmpl$3015), ssr(_tmpl$3016), ssr(_tmpl$3017), ssr(_tmpl$3018)],
  outline: true,
  mini: false,
  title: 'Repeat 2'
};
const repeat = {
  path: () => [ssr(_tmpl$3010), ssr(_tmpl$3011), ssr(_tmpl$3012), ssr(_tmpl$3013)],
  outline: true,
  mini: false,
  title: 'Repeat'
};
const replaceAll = {
  path: () => [ssr(_tmpl$3019), ssr(_tmpl$3020), ssr(_tmpl$3021), ssr(_tmpl$3022), ssr(_tmpl$3023), ssr(_tmpl$3024), ssr(_tmpl$3025), ssr(_tmpl$3026), ssr(_tmpl$3027)],
  outline: true,
  mini: false,
  title: 'Replace All'
};
const replace = {
  path: () => [ssr(_tmpl$3019), ssr(_tmpl$3020), ssr(_tmpl$3021), ssr(_tmpl$3022), ssr(_tmpl$3023), ssr(_tmpl$3024), ssr(_tmpl$3025)],
  outline: true,
  mini: false,
  title: 'Replace'
};
const replyAll = {
  path: () => [ssr(_tmpl$3028), ssr(_tmpl$3029), ssr(_tmpl$3030)],
  outline: true,
  mini: false,
  title: 'Reply All'
};
const reply = {
  path: () => [ssr(_tmpl$3031), ssr(_tmpl$3032)],
  outline: true,
  mini: false,
  title: 'Reply'
};
const rewind = {
  path: () => [ssr(_tmpl$3033), ssr(_tmpl$3034)],
  outline: true,
  mini: false,
  title: 'Rewind'
};
const ribbon = {
  path: () => [ssr(_tmpl$3035), ssr(_tmpl$3036), ssr(_tmpl$3037), ssr(_tmpl$3038), ssr(_tmpl$3039)],
  outline: true,
  mini: false,
  title: 'Ribbon'
};
const rocket = {
  path: () => [ssr(_tmpl$3040), ssr(_tmpl$3041), ssr(_tmpl$3042), ssr(_tmpl$3043)],
  outline: true,
  mini: false,
  title: 'Rocket'
};
const rockingChair = {
  path: () => [ssr(_tmpl$3044), ssr(_tmpl$3045), ssr(_tmpl$3046), ssr(_tmpl$3047)],
  outline: true,
  mini: false,
  title: 'Rocking Chair'
};
const rollerCoaster = {
  path: () => [ssr(_tmpl$3048), ssr(_tmpl$3049), ssr(_tmpl$3050), ssr(_tmpl$3051), ssr(_tmpl$3052), ssr(_tmpl$3053), ssr(_tmpl$3054)],
  outline: true,
  mini: false,
  title: 'Roller Coaster'
};
const rotate_3d = {
  path: () => [ssr(_tmpl$3055), ssr(_tmpl$3056), ssr(_tmpl$3057)],
  outline: true,
  mini: false,
  title: 'Rotate 3d'
};
const rotateCcwSquare = {
  path: () => [ssr(_tmpl$3058), ssr(_tmpl$3059), ssr(_tmpl$3060)],
  outline: true,
  mini: false,
  title: 'Rotate Ccw Square'
};
const rotateCcw = {
  path: () => [ssr(_tmpl$2062), ssr(_tmpl$2063)],
  outline: true,
  mini: false,
  title: 'Rotate Ccw'
};
const rotateCwSquare = {
  path: () => [ssr(_tmpl$3061), ssr(_tmpl$3062), ssr(_tmpl$3063)],
  outline: true,
  mini: false,
  title: 'Rotate Cw Square'
};
const rotateCw = {
  path: () => [ssr(_tmpl$3064), ssr(_tmpl$2996)],
  outline: true,
  mini: false,
  title: 'Rotate Cw'
};
const routeOff = {
  path: () => [ssr(_tmpl$3065), ssr(_tmpl$3066), ssr(_tmpl$3067), ssr(_tmpl$33), ssr(_tmpl$3068), ssr(_tmpl$3069), ssr(_tmpl$3070)],
  outline: true,
  mini: false,
  title: 'Route Off'
};
const route = {
  path: () => [ssr(_tmpl$3065), ssr(_tmpl$3071), ssr(_tmpl$3070)],
  outline: true,
  mini: false,
  title: 'Route'
};
const router = {
  path: () => [ssr(_tmpl$1174), ssr(_tmpl$3072), ssr(_tmpl$3073), ssr(_tmpl$3074), ssr(_tmpl$3075), ssr(_tmpl$3076)],
  outline: true,
  mini: false,
  title: 'Router'
};
const rows_2 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1618)],
  outline: true,
  mini: false,
  title: 'Rows 2'
};
const rows_3 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3077), ssr(_tmpl$3078)],
  outline: true,
  mini: false,
  title: 'Rows 3'
};
const rows_4 = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3079), ssr(_tmpl$3080), ssr(_tmpl$3081)],
  outline: true,
  mini: false,
  title: 'Rows 4'
};
const rss = {
  path: () => [ssr(_tmpl$3082), ssr(_tmpl$3083), ssr(_tmpl$1947)],
  outline: true,
  mini: false,
  title: 'Rss'
};
const ruler = {
  path: () => [ssr(_tmpl$3084), ssr(_tmpl$3085), ssr(_tmpl$3086), ssr(_tmpl$3087), ssr(_tmpl$3088)],
  outline: true,
  mini: false,
  title: 'Ruler'
};
const russianRuble = {
  path: () => [ssr(_tmpl$3089), ssr(_tmpl$3090)],
  outline: true,
  mini: false,
  title: 'Russian Ruble'
};
const sailboat = {
  path: () => [ssr(_tmpl$3091), ssr(_tmpl$3092), ssr(_tmpl$3093)],
  outline: true,
  mini: false,
  title: 'Sailboat'
};
const salad = {
  path: () => [ssr(_tmpl$3094), ssr(_tmpl$3095), ssr(_tmpl$3096), ssr(_tmpl$3097), ssr(_tmpl$3098)],
  outline: true,
  mini: false,
  title: 'Salad'
};
const sandwich = {
  path: () => [ssr(_tmpl$3099), ssr(_tmpl$3100), ssr(_tmpl$3101), ssr(_tmpl$3102)],
  outline: true,
  mini: false,
  title: 'Sandwich'
};
const satelliteDish = {
  path: () => [ssr(_tmpl$3103), ssr(_tmpl$3104), ssr(_tmpl$3105), ssr(_tmpl$3106)],
  outline: true,
  mini: false,
  title: 'Satellite Dish'
};
const satellite = {
  path: () => [ssr(_tmpl$3107), ssr(_tmpl$3108), ssr(_tmpl$3109), ssr(_tmpl$3110), ssr(_tmpl$3111)],
  outline: true,
  mini: false,
  title: 'Satellite'
};
const saveAll = {
  path: () => [ssr(_tmpl$3112), ssr(_tmpl$3113), ssr(_tmpl$2125), ssr(_tmpl$3114)],
  outline: true,
  mini: false,
  title: 'Save All'
};
const save = {
  path: () => [ssr(_tmpl$3115), ssr(_tmpl$3116), ssr(_tmpl$3117)],
  outline: true,
  mini: false,
  title: 'Save'
};
const scale_3d = {
  path: () => [ssr(_tmpl$1295), ssr(_tmpl$1296), ssr(_tmpl$3118), ssr(_tmpl$2570)],
  outline: true,
  mini: false,
  title: 'Scale 3d'
};
const scale = {
  path: () => [ssr(_tmpl$3119), ssr(_tmpl$3120), ssr(_tmpl$3094), ssr(_tmpl$1156), ssr(_tmpl$3121)],
  outline: true,
  mini: false,
  title: 'Scale'
};
const scaling = {
  path: () => [ssr(_tmpl$3122), ssr(_tmpl$3123), ssr(_tmpl$2484), ssr(_tmpl$3124)],
  outline: true,
  mini: false,
  title: 'Scaling'
};
const scanBarcode = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$3125), ssr(_tmpl$319), ssr(_tmpl$3126)],
  outline: true,
  mini: false,
  title: 'Scan Barcode'
};
const scanEye = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$291), ssr(_tmpl$3127)],
  outline: true,
  mini: false,
  title: 'Scan Eye'
};
const scanFace = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$3128), ssr(_tmpl$339), ssr(_tmpl$1306)],
  outline: true,
  mini: false,
  title: 'Scan Face'
};
const scanLine = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$2301)],
  outline: true,
  mini: false,
  title: 'Scan Line'
};
const scanSearch = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$656), ssr(_tmpl$3129)],
  outline: true,
  mini: false,
  title: 'Scan Search'
};
const scanText = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711), ssr(_tmpl$3130), ssr(_tmpl$2301), ssr(_tmpl$3131)],
  outline: true,
  mini: false,
  title: 'Scan Text'
};
const scan = {
  path: () => [ssr(_tmpl$1708), ssr(_tmpl$1709), ssr(_tmpl$1710), ssr(_tmpl$1711)],
  outline: true,
  mini: false,
  title: 'Scan'
};
const scatterChart = {
  path: () => [ssr(_tmpl$3132), ssr(_tmpl$3133), ssr(_tmpl$3134), ssr(_tmpl$3135), ssr(_tmpl$3136), ssr(_tmpl$182)],
  outline: true,
  mini: false,
  title: 'Scatter Chart'
};
const school = {
  path: () => [ssr(_tmpl$3137), ssr(_tmpl$3138), ssr(_tmpl$3139), ssr(_tmpl$3140), ssr(_tmpl$3141), ssr(_tmpl$2932)],
  outline: true,
  mini: false,
  title: 'School'
};
const scissorsLineDashed = {
  path: () => [ssr(_tmpl$3142), ssr(_tmpl$3143), ssr(_tmpl$3144), ssr(_tmpl$1534), ssr(_tmpl$3145), ssr(_tmpl$1691), ssr(_tmpl$1692)],
  outline: true,
  mini: false,
  title: 'Scissors Line Dashed'
};
const scissors = {
  path: () => [ssr(_tmpl$1876), ssr(_tmpl$3146), ssr(_tmpl$3147), ssr(_tmpl$1864), ssr(_tmpl$3148)],
  outline: true,
  mini: false,
  title: 'Scissors'
};
const screenShareOff = {
  path: () => [ssr(_tmpl$3149), ssr(_tmpl$2526), ssr(_tmpl$2525), ssr(_tmpl$1624), ssr(_tmpl$1625)],
  outline: true,
  mini: false,
  title: 'Screen Share Off'
};
const screenShare = {
  path: () => [ssr(_tmpl$3149), ssr(_tmpl$2526), ssr(_tmpl$2525), ssr(_tmpl$3150), ssr(_tmpl$3151)],
  outline: true,
  mini: false,
  title: 'Screen Share'
};
const scrollText = {
  path: () => [ssr(_tmpl$3152), ssr(_tmpl$3153), ssr(_tmpl$3154), ssr(_tmpl$3155)],
  outline: true,
  mini: false,
  title: 'Scroll Text'
};
const scroll = {
  path: () => [ssr(_tmpl$3154), ssr(_tmpl$3155)],
  outline: true,
  mini: false,
  title: 'Scroll'
};
const searchCheck = {
  path: () => [ssr(_tmpl$3156), ssr(_tmpl$2368), ssr(_tmpl$2369)],
  outline: true,
  mini: false,
  title: 'Search Check'
};
const searchCode = {
  path: () => [ssr(_tmpl$3157), ssr(_tmpl$2369), ssr(_tmpl$3158), ssr(_tmpl$2368)],
  outline: true,
  mini: false,
  title: 'Search Code'
};
const searchSlash = {
  path: () => [ssr(_tmpl$3159), ssr(_tmpl$2368), ssr(_tmpl$2369)],
  outline: true,
  mini: false,
  title: 'Search Slash'
};
const searchX = {
  path: () => [ssr(_tmpl$3159), ssr(_tmpl$3160), ssr(_tmpl$2368), ssr(_tmpl$2369)],
  outline: true,
  mini: false,
  title: 'Search X'
};
const search = {
  path: () => [ssr(_tmpl$2368), ssr(_tmpl$2369)],
  outline: true,
  mini: false,
  title: 'Search'
};
const sendHorizontal = {
  path: () => [ssr(_tmpl$3161), ssr(_tmpl$3162)],
  outline: true,
  mini: false,
  title: 'Send Horizontal'
};
const sendToBack = {
  path: () => [ssr(_tmpl$3163), ssr(_tmpl$3164), ssr(_tmpl$3165), ssr(_tmpl$3166)],
  outline: true,
  mini: false,
  title: 'Send To Back'
};
const send = {
  path: () => [ssr(_tmpl$3167), ssr(_tmpl$3168)],
  outline: true,
  mini: false,
  title: 'Send'
};
const separatorHorizontal = {
  path: () => [ssr(_tmpl$87), ssr(_tmpl$3169), ssr(_tmpl$3170)],
  outline: true,
  mini: false,
  title: 'Separator Horizontal'
};
const separatorVertical = {
  path: () => [ssr(_tmpl$3171), ssr(_tmpl$3172), ssr(_tmpl$3173)],
  outline: true,
  mini: false,
  title: 'Separator Vertical'
};
const serverCog = {
  path: () => [ssr(_tmpl$656), ssr(_tmpl$3174), ssr(_tmpl$3175), ssr(_tmpl$3176), ssr(_tmpl$1315), ssr(_tmpl$3177), ssr(_tmpl$3178), ssr(_tmpl$3179), ssr(_tmpl$3180), ssr(_tmpl$3181), ssr(_tmpl$3182), ssr(_tmpl$3183), ssr(_tmpl$3184)],
  outline: true,
  mini: false,
  title: 'Server Cog'
};
const serverCrash = {
  path: () => [ssr(_tmpl$3185), ssr(_tmpl$3186), ssr(_tmpl$3176), ssr(_tmpl$1315), ssr(_tmpl$3187)],
  outline: true,
  mini: false,
  title: 'Server Crash'
};
const serverOff = {
  path: () => [ssr(_tmpl$3188), ssr(_tmpl$3189), ssr(_tmpl$3190), ssr(_tmpl$3191), ssr(_tmpl$1315), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Server Off'
};
const server = {
  path: () => [ssr(_tmpl$3192), ssr(_tmpl$3193), ssr(_tmpl$3194), ssr(_tmpl$3195)],
  outline: true,
  mini: false,
  title: 'Server'
};
const settings_2 = {
  path: () => [ssr(_tmpl$3196), ssr(_tmpl$3197), ssr(_tmpl$1771), ssr(_tmpl$3198)],
  outline: true,
  mini: false,
  title: 'Settings 2'
};
const settings = {
  path: () => [ssr(_tmpl$3199), ssr(_tmpl$656)],
  outline: true,
  mini: false,
  title: 'Settings'
};
const shapes = {
  path: () => [ssr(_tmpl$3200), ssr(_tmpl$3201), ssr(_tmpl$3202)],
  outline: true,
  mini: false,
  title: 'Shapes'
};
const share_2 = {
  path: () => [ssr(_tmpl$3070), ssr(_tmpl$3203), ssr(_tmpl$3204), ssr(_tmpl$3205), ssr(_tmpl$3206)],
  outline: true,
  mini: false,
  title: 'Share 2'
};
const share = {
  path: () => [ssr(_tmpl$3207), ssr(_tmpl$3208), ssr(_tmpl$3209)],
  outline: true,
  mini: false,
  title: 'Share'
};
const sheet = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$3210), ssr(_tmpl$3211), ssr(_tmpl$3212), ssr(_tmpl$3213)],
  outline: true,
  mini: false,
  title: 'Sheet'
};
const shell = {
  path: () => ssr(_tmpl$3214),
  outline: true,
  mini: false,
  title: 'Shell'
};
const shieldAlert = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$2462), ssr(_tmpl$2463)],
  outline: true,
  mini: false,
  title: 'Shield Alert'
};
const shieldBan = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$3216)],
  outline: true,
  mini: false,
  title: 'Shield Ban'
};
const shieldCheck = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$321)],
  outline: true,
  mini: false,
  title: 'Shield Check'
};
const shieldEllipsis = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$1312), ssr(_tmpl$675), ssr(_tmpl$1311)],
  outline: true,
  mini: false,
  title: 'Shield Ellipsis'
};
const shieldHalf = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$3217)],
  outline: true,
  mini: false,
  title: 'Shield Half'
};
const shieldMinus = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$335)],
  outline: true,
  mini: false,
  title: 'Shield Minus'
};
const shieldOff = {
  path: () => [ssr(_tmpl$33), ssr(_tmpl$3218), ssr(_tmpl$3219)],
  outline: true,
  mini: false,
  title: 'Shield Off'
};
const shieldPlus = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$335), ssr(_tmpl$668)],
  outline: true,
  mini: false,
  title: 'Shield Plus'
};
const shieldQuestion = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$1564), ssr(_tmpl$990)],
  outline: true,
  mini: false,
  title: 'Shield Question'
};
const shieldX = {
  path: () => [ssr(_tmpl$3215), ssr(_tmpl$1303), ssr(_tmpl$3220)],
  outline: true,
  mini: false,
  title: 'Shield X'
};
const shield = {
  path: () => ssr(_tmpl$3215),
  outline: true,
  mini: false,
  title: 'Shield'
};
const shipWheel = {
  path: () => [ssr(_tmpl$1271), ssr(_tmpl$3221), ssr(_tmpl$3222), ssr(_tmpl$3223), ssr(_tmpl$3224), ssr(_tmpl$3225), ssr(_tmpl$3226), ssr(_tmpl$3227), ssr(_tmpl$3228), ssr(_tmpl$3229)],
  outline: true,
  mini: false,
  title: 'Ship Wheel'
};
const ship = {
  path: () => [ssr(_tmpl$3230), ssr(_tmpl$3231), ssr(_tmpl$3232), ssr(_tmpl$2769), ssr(_tmpl$3233)],
  outline: true,
  mini: false,
  title: 'Ship'
};
const shirt = {
  path: () => ssr(_tmpl$3234),
  outline: true,
  mini: false,
  title: 'Shirt'
};
const shoppingBag = {
  path: () => [ssr(_tmpl$3235), ssr(_tmpl$2300), ssr(_tmpl$3236)],
  outline: true,
  mini: false,
  title: 'Shopping Bag'
};
const shoppingBasket = {
  path: () => [ssr(_tmpl$3237), ssr(_tmpl$3238), ssr(_tmpl$3239), ssr(_tmpl$3240), ssr(_tmpl$3241), ssr(_tmpl$3242), ssr(_tmpl$3243)],
  outline: true,
  mini: false,
  title: 'Shopping Basket'
};
const shoppingCart = {
  path: () => [ssr(_tmpl$3244), ssr(_tmpl$3245), ssr(_tmpl$3246)],
  outline: true,
  mini: false,
  title: 'Shopping Cart'
};
const shovel = {
  path: () => [ssr(_tmpl$3247), ssr(_tmpl$3248), ssr(_tmpl$3249)],
  outline: true,
  mini: false,
  title: 'Shovel'
};
const showerHead = {
  path: () => [ssr(_tmpl$3250), ssr(_tmpl$3251), ssr(_tmpl$3252), ssr(_tmpl$3253), ssr(_tmpl$3254), ssr(_tmpl$3255), ssr(_tmpl$3256), ssr(_tmpl$3257), ssr(_tmpl$3258), ssr(_tmpl$3259)],
  outline: true,
  mini: false,
  title: 'Shower Head'
};
const shrink = {
  path: () => [ssr(_tmpl$3260), ssr(_tmpl$3261), ssr(_tmpl$3262), ssr(_tmpl$3263)],
  outline: true,
  mini: false,
  title: 'Shrink'
};
const shrub = {
  path: () => [ssr(_tmpl$3264), ssr(_tmpl$3265), ssr(_tmpl$3266)],
  outline: true,
  mini: false,
  title: 'Shrub'
};
const shuffle = {
  path: () => [ssr(_tmpl$3267), ssr(_tmpl$3268), ssr(_tmpl$3269), ssr(_tmpl$3270), ssr(_tmpl$3271)],
  outline: true,
  mini: false,
  title: 'Shuffle'
};
const sigma = {
  path: () => ssr(_tmpl$3272),
  outline: true,
  mini: false,
  title: 'Sigma'
};
const signalHigh = {
  path: () => [ssr(_tmpl$3273), ssr(_tmpl$3274), ssr(_tmpl$694), ssr(_tmpl$3275)],
  outline: true,
  mini: false,
  title: 'Signal High'
};
const signalLow = {
  path: () => [ssr(_tmpl$3273), ssr(_tmpl$3274)],
  outline: true,
  mini: false,
  title: 'Signal Low'
};
const signalMedium = {
  path: () => [ssr(_tmpl$3273), ssr(_tmpl$3274), ssr(_tmpl$694)],
  outline: true,
  mini: false,
  title: 'Signal Medium'
};
const signalZero = {
  path: () => ssr(_tmpl$3273),
  outline: true,
  mini: false,
  title: 'Signal Zero'
};
const signal = {
  path: () => [ssr(_tmpl$3273), ssr(_tmpl$3274), ssr(_tmpl$694), ssr(_tmpl$3275), ssr(_tmpl$3276)],
  outline: true,
  mini: false,
  title: 'Signal'
};
const signpostBig = {
  path: () => [ssr(_tmpl$3277), ssr(_tmpl$3278), ssr(_tmpl$3279), ssr(_tmpl$1466)],
  outline: true,
  mini: false,
  title: 'Signpost Big'
};
const signpost = {
  path: () => [ssr(_tmpl$2511), ssr(_tmpl$3280), ssr(_tmpl$2510)],
  outline: true,
  mini: false,
  title: 'Signpost'
};
const siren = {
  path: () => [ssr(_tmpl$3281), ssr(_tmpl$3282), ssr(_tmpl$3283), ssr(_tmpl$3284), ssr(_tmpl$3285), ssr(_tmpl$3286), ssr(_tmpl$3287), ssr(_tmpl$1597)],
  outline: true,
  mini: false,
  title: 'Siren'
};
const skipBack = {
  path: () => [ssr(_tmpl$3288), ssr(_tmpl$3289)],
  outline: true,
  mini: false,
  title: 'Skip Back'
};
const skipForward = {
  path: () => [ssr(_tmpl$3290), ssr(_tmpl$3291)],
  outline: true,
  mini: false,
  title: 'Skip Forward'
};
const skull = {
  path: () => [ssr(_tmpl$539), ssr(_tmpl$541), ssr(_tmpl$3292), ssr(_tmpl$3293), ssr(_tmpl$3294)],
  outline: true,
  mini: false,
  title: 'Skull'
};
const slack = {
  path: () => [ssr(_tmpl$3295), ssr(_tmpl$3296), ssr(_tmpl$3297), ssr(_tmpl$3298), ssr(_tmpl$3299), ssr(_tmpl$3300), ssr(_tmpl$3301), ssr(_tmpl$3302)],
  outline: true,
  mini: false,
  title: 'Slack'
};
const slash = {
  path: () => ssr(_tmpl$1002),
  outline: true,
  mini: false,
  title: 'Slash'
};
const slice = {
  path: () => [ssr(_tmpl$3303), ssr(_tmpl$3304)],
  outline: true,
  mini: false,
  title: 'Slice'
};
const slidersHorizontal = {
  path: () => [ssr(_tmpl$3305), ssr(_tmpl$3306), ssr(_tmpl$3307), ssr(_tmpl$3308), ssr(_tmpl$3309), ssr(_tmpl$3310), ssr(_tmpl$3311), ssr(_tmpl$1833), ssr(_tmpl$3312)],
  outline: true,
  mini: false,
  title: 'Sliders Horizontal'
};
const slidersVertical = {
  path: () => [ssr(_tmpl$3313), ssr(_tmpl$3314), ssr(_tmpl$3315), ssr(_tmpl$3316), ssr(_tmpl$3317), ssr(_tmpl$3318), ssr(_tmpl$3319), ssr(_tmpl$3320), ssr(_tmpl$3321)],
  outline: true,
  mini: false,
  title: 'Sliders Vertical'
};
const smartphoneCharging = {
  path: () => [ssr(_tmpl$3322), ssr(_tmpl$3323)],
  outline: true,
  mini: false,
  title: 'Smartphone Charging'
};
const smartphoneNfc = {
  path: () => [ssr(_tmpl$3324), ssr(_tmpl$3325), ssr(_tmpl$3326), ssr(_tmpl$3327)],
  outline: true,
  mini: false,
  title: 'Smartphone Nfc'
};
const smartphone = {
  path: () => [ssr(_tmpl$3322), ssr(_tmpl$763)],
  outline: true,
  mini: false,
  title: 'Smartphone'
};
const smilePlus = {
  path: () => [ssr(_tmpl$3328), ssr(_tmpl$3128), ssr(_tmpl$1805), ssr(_tmpl$1806), ssr(_tmpl$3329), ssr(_tmpl$3330)],
  outline: true,
  mini: false,
  title: 'Smile Plus'
};
const smile = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$3128), ssr(_tmpl$1805), ssr(_tmpl$1806)],
  outline: true,
  mini: false,
  title: 'Smile'
};
const snail = {
  path: () => [ssr(_tmpl$3331), ssr(_tmpl$3332), ssr(_tmpl$3333), ssr(_tmpl$3334), ssr(_tmpl$3335)],
  outline: true,
  mini: false,
  title: 'Snail'
};
const snowflake = {
  path: () => [ssr(_tmpl$387), ssr(_tmpl$1344), ssr(_tmpl$3336), ssr(_tmpl$3337), ssr(_tmpl$3338), ssr(_tmpl$3339)],
  outline: true,
  mini: false,
  title: 'Snowflake'
};
const sofa = {
  path: () => [ssr(_tmpl$3340), ssr(_tmpl$3341), ssr(_tmpl$3342), ssr(_tmpl$3343), ssr(_tmpl$3344)],
  outline: true,
  mini: false,
  title: 'Sofa'
};
const soup = {
  path: () => [ssr(_tmpl$3095), ssr(_tmpl$3094), ssr(_tmpl$3345), ssr(_tmpl$3346), ssr(_tmpl$3347), ssr(_tmpl$3348)],
  outline: true,
  mini: false,
  title: 'Soup'
};
const space = {
  path: () => ssr(_tmpl$3349),
  outline: true,
  mini: false,
  title: 'Space'
};
const spade = {
  path: () => [ssr(_tmpl$3350), ssr(_tmpl$2346)],
  outline: true,
  mini: false,
  title: 'Spade'
};
const sparkle = {
  path: () => ssr(_tmpl$3351),
  outline: true,
  mini: false,
  title: 'Sparkle'
};
const sparkles = {
  path: () => [ssr(_tmpl$3351), ssr(_tmpl$2550), ssr(_tmpl$2551), ssr(_tmpl$3352), ssr(_tmpl$3353)],
  outline: true,
  mini: false,
  title: 'Sparkles'
};
const speaker = {
  path: () => [ssr(_tmpl$760), ssr(_tmpl$717), ssr(_tmpl$3354), ssr(_tmpl$719)],
  outline: true,
  mini: false,
  title: 'Speaker'
};
const speech = {
  path: () => [ssr(_tmpl$3355), ssr(_tmpl$3356), ssr(_tmpl$3357)],
  outline: true,
  mini: false,
  title: 'Speech'
};
const spellCheck_2 = {
  path: () => [ssr(_tmpl$384), ssr(_tmpl$329), ssr(_tmpl$3358)],
  outline: true,
  mini: false,
  title: 'Spell Check 2'
};
const spellCheck = {
  path: () => [ssr(_tmpl$384), ssr(_tmpl$329), ssr(_tmpl$769)],
  outline: true,
  mini: false,
  title: 'Spell Check'
};
const spline = {
  path: () => [ssr(_tmpl$2661), ssr(_tmpl$1796), ssr(_tmpl$3359)],
  outline: true,
  mini: false,
  title: 'Spline'
};
const split = {
  path: () => [ssr(_tmpl$2484), ssr(_tmpl$3360), ssr(_tmpl$3361), ssr(_tmpl$3362)],
  outline: true,
  mini: false,
  title: 'Split'
};
const sprayCan = {
  path: () => [ssr(_tmpl$3363), ssr(_tmpl$3364), ssr(_tmpl$3365), ssr(_tmpl$3366), ssr(_tmpl$887), ssr(_tmpl$3367), ssr(_tmpl$3368), ssr(_tmpl$3369), ssr(_tmpl$3370), ssr(_tmpl$3371)],
  outline: true,
  mini: false,
  title: 'Spray Can'
};
const sprout = {
  path: () => [ssr(_tmpl$3372), ssr(_tmpl$3373), ssr(_tmpl$3374), ssr(_tmpl$3375)],
  outline: true,
  mini: false,
  title: 'Sprout'
};
const squareActivity = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3376)],
  outline: true,
  mini: false,
  title: 'Square Activity'
};
const squareArrowDownLeft = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3377), ssr(_tmpl$3378)],
  outline: true,
  mini: false,
  title: 'Square Arrow Down Left'
};
const squareArrowDownRight = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3379), ssr(_tmpl$3380)],
  outline: true,
  mini: false,
  title: 'Square Arrow Down Right'
};
const squareArrowDown = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$936), ssr(_tmpl$937)],
  outline: true,
  mini: false,
  title: 'Square Arrow Down'
};
const squareArrowLeft = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$939), ssr(_tmpl$938)],
  outline: true,
  mini: false,
  title: 'Square Arrow Left'
};
const squareArrowOutDownLeft = {
  path: () => [ssr(_tmpl$3381), ssr(_tmpl$3382), ssr(_tmpl$3383)],
  outline: true,
  mini: false,
  title: 'Square Arrow Out Down Left'
};
const squareArrowOutDownRight = {
  path: () => [ssr(_tmpl$3384), ssr(_tmpl$3385), ssr(_tmpl$3386)],
  outline: true,
  mini: false,
  title: 'Square Arrow Out Down Right'
};
const squareArrowOutUpLeft = {
  path: () => [ssr(_tmpl$3387), ssr(_tmpl$3388), ssr(_tmpl$3389)],
  outline: true,
  mini: false,
  title: 'Square Arrow Out Up Left'
};
const squareArrowOutUpRight = {
  path: () => [ssr(_tmpl$3390), ssr(_tmpl$3391), ssr(_tmpl$1435)],
  outline: true,
  mini: false,
  title: 'Square Arrow Out Up Right'
};
const squareArrowRight = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$329), ssr(_tmpl$952)],
  outline: true,
  mini: false,
  title: 'Square Arrow Right'
};
const squareArrowUpLeft = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3392), ssr(_tmpl$3393)],
  outline: true,
  mini: false,
  title: 'Square Arrow Up Left'
};
const squareArrowUpRight = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3394), ssr(_tmpl$3395)],
  outline: true,
  mini: false,
  title: 'Square Arrow Up Right'
};
const squareArrowUp = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$953), ssr(_tmpl$954)],
  outline: true,
  mini: false,
  title: 'Square Arrow Up'
};
const squareAsterisk = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$936), ssr(_tmpl$3396), ssr(_tmpl$3397)],
  outline: true,
  mini: false,
  title: 'Square Asterisk'
};
const squareBottomDashedScissors = {
  path: () => [ssr(_tmpl$3398), ssr(_tmpl$3399), ssr(_tmpl$3400), ssr(_tmpl$3401), ssr(_tmpl$3402), ssr(_tmpl$3403), ssr(_tmpl$3404), ssr(_tmpl$3405)],
  outline: true,
  mini: false,
  title: 'Square Bottom Dashed Scissors'
};
const squareCheckBig = {
  path: () => [ssr(_tmpl$956), ssr(_tmpl$3406)],
  outline: true,
  mini: false,
  title: 'Square Check Big'
};
const squareCheck = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$321)],
  outline: true,
  mini: false,
  title: 'Square Check'
};
const squareChevronDown = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$957)],
  outline: true,
  mini: false,
  title: 'Square Chevron Down'
};
const squareChevronLeft = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$958)],
  outline: true,
  mini: false,
  title: 'Square Chevron Left'
};
const squareChevronRight = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$959)],
  outline: true,
  mini: false,
  title: 'Square Chevron Right'
};
const squareChevronUp = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$960)],
  outline: true,
  mini: false,
  title: 'Square Chevron Up'
};
const squareCode = {
  path: () => [ssr(_tmpl$2445), ssr(_tmpl$2446), ssr(_tmpl$667)],
  outline: true,
  mini: false,
  title: 'Square Code'
};
const squareDashedBottomCode = {
  path: () => [ssr(_tmpl$2445), ssr(_tmpl$615), ssr(_tmpl$2446), ssr(_tmpl$3407), ssr(_tmpl$613)],
  outline: true,
  mini: false,
  title: 'Square Dashed Bottom Code'
};
const squareDashedBottom = {
  path: () => [ssr(_tmpl$3407), ssr(_tmpl$613), ssr(_tmpl$615)],
  outline: true,
  mini: false,
  title: 'Square Dashed Bottom'
};
const squareDashedKanban = {
  path: () => [ssr(_tmpl$3408), ssr(_tmpl$3409), ssr(_tmpl$3410), ssr(_tmpl$608), ssr(_tmpl$612), ssr(_tmpl$614), ssr(_tmpl$609), ssr(_tmpl$617), ssr(_tmpl$619), ssr(_tmpl$610), ssr(_tmpl$615), ssr(_tmpl$613), ssr(_tmpl$611), ssr(_tmpl$618), ssr(_tmpl$616)],
  outline: true,
  mini: false,
  title: 'Square Dashed Kanban'
};
const squareDashedMousePointer = {
  path: () => [ssr(_tmpl$608), ssr(_tmpl$609), ssr(_tmpl$3411), ssr(_tmpl$611), ssr(_tmpl$612), ssr(_tmpl$3412), ssr(_tmpl$614), ssr(_tmpl$616), ssr(_tmpl$2470), ssr(_tmpl$618)],
  outline: true,
  mini: false,
  title: 'Square Dashed Mouse Pointer'
};
const squareDivide = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$337), ssr(_tmpl$969), ssr(_tmpl$970)],
  outline: true,
  mini: false,
  title: 'Square Divide'
};
const squareDot = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$291)],
  outline: true,
  mini: false,
  title: 'Square Dot'
};
const squareEqual = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$981), ssr(_tmpl$982)],
  outline: true,
  mini: false,
  title: 'Square Equal'
};
const squareFunction = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$3413), ssr(_tmpl$3414)],
  outline: true,
  mini: false,
  title: 'Square Function'
};
const squareGanttChart = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3415), ssr(_tmpl$3416), ssr(_tmpl$3417)],
  outline: true,
  mini: false,
  title: 'Square Gantt Chart'
};
const squareKanban = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3408), ssr(_tmpl$3409), ssr(_tmpl$3410)],
  outline: true,
  mini: false,
  title: 'Square Kanban'
};
const squareLibrary = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3418), ssr(_tmpl$3419), ssr(_tmpl$3420)],
  outline: true,
  mini: false,
  title: 'Square Library'
};
const squareM = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3421)],
  outline: true,
  mini: false,
  title: 'Square M'
};
const squareMenu = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3422), ssr(_tmpl$2301), ssr(_tmpl$1675)],
  outline: true,
  mini: false,
  title: 'Square Menu'
};
const squareMinus = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$329)],
  outline: true,
  mini: false,
  title: 'Square Minus'
};
const squareMousePointer = {
  path: () => [ssr(_tmpl$3384), ssr(_tmpl$3411)],
  outline: true,
  mini: false,
  title: 'Square Mouse Pointer'
};
const squareParkingOff = {
  path: () => [ssr(_tmpl$3423), ssr(_tmpl$3424), ssr(_tmpl$33), ssr(_tmpl$994), ssr(_tmpl$3425)],
  outline: true,
  mini: false,
  title: 'Square Parking Off'
};
const squareParking = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$996)],
  outline: true,
  mini: false,
  title: 'Square Parking'
};
const squarePen = {
  path: () => [ssr(_tmpl$3122), ssr(_tmpl$3426)],
  outline: true,
  mini: false,
  title: 'Square Pen'
};
const squarePercent = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$338), ssr(_tmpl$339), ssr(_tmpl$340)],
  outline: true,
  mini: false,
  title: 'Square Percent'
};
const squarePi = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3427), ssr(_tmpl$3428), ssr(_tmpl$3429)],
  outline: true,
  mini: false,
  title: 'Square Pi'
};
const squarePilcrow = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3430), ssr(_tmpl$319), ssr(_tmpl$3431)],
  outline: true,
  mini: false,
  title: 'Square Pilcrow'
};
const squarePlay = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3432)],
  outline: true,
  mini: false,
  title: 'Square Play'
};
const squarePlus = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$329), ssr(_tmpl$936)],
  outline: true,
  mini: false,
  title: 'Square Plus'
};
const squarePower = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$927), ssr(_tmpl$3433)],
  outline: true,
  mini: false,
  title: 'Square Power'
};
const squareRadical = {
  path: () => [ssr(_tmpl$3434), ssr(_tmpl$3435)],
  outline: true,
  mini: false,
  title: 'Square Radical'
};
const squareScissors = {
  path: () => [ssr(_tmpl$3436), ssr(_tmpl$3401), ssr(_tmpl$3402), ssr(_tmpl$3403), ssr(_tmpl$3404), ssr(_tmpl$3405)],
  outline: true,
  mini: false,
  title: 'Square Scissors'
};
const squareSigma = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3437)],
  outline: true,
  mini: false,
  title: 'Square Sigma'
};
const squareSlash = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1003)],
  outline: true,
  mini: false,
  title: 'Square Slash'
};
const squareSplitHorizontal = {
  path: () => [ssr(_tmpl$3438), ssr(_tmpl$3439), ssr(_tmpl$3440)],
  outline: true,
  mini: false,
  title: 'Square Split Horizontal'
};
const squareSplitVertical = {
  path: () => [ssr(_tmpl$3441), ssr(_tmpl$3442), ssr(_tmpl$2439)],
  outline: true,
  mini: false,
  title: 'Square Split Vertical'
};
const squareStack = {
  path: () => [ssr(_tmpl$3443), ssr(_tmpl$3444), ssr(_tmpl$1166)],
  outline: true,
  mini: false,
  title: 'Square Stack'
};
const squareTerminal = {
  path: () => [ssr(_tmpl$3445), ssr(_tmpl$3446), ssr(_tmpl$42)],
  outline: true,
  mini: false,
  title: 'Square Terminal'
};
const squareUserRound = {
  path: () => [ssr(_tmpl$3447), ssr(_tmpl$3448), ssr(_tmpl$667)],
  outline: true,
  mini: false,
  title: 'Square User Round'
};
const squareUser = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$1007), ssr(_tmpl$3449)],
  outline: true,
  mini: false,
  title: 'Square User'
};
const squareX = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$338), ssr(_tmpl$1009)],
  outline: true,
  mini: false,
  title: 'Square X'
};
const square = {
  path: () => ssr(_tmpl$667),
  outline: true,
  mini: false,
  title: 'Square'
};
const squircle = {
  path: () => ssr(_tmpl$3450),
  outline: true,
  mini: false,
  title: 'Squircle'
};
const squirrel = {
  path: () => [ssr(_tmpl$3451), ssr(_tmpl$3452), ssr(_tmpl$3453), ssr(_tmpl$3454)],
  outline: true,
  mini: false,
  title: 'Squirrel'
};
const stamp = {
  path: () => [ssr(_tmpl$2097), ssr(_tmpl$3455), ssr(_tmpl$3456)],
  outline: true,
  mini: false,
  title: 'Stamp'
};
const starHalf = {
  path: () => ssr(_tmpl$3457),
  outline: true,
  mini: false,
  title: 'Star Half'
};
const starOff = {
  path: () => [ssr(_tmpl$3458), ssr(_tmpl$3459), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Star Off'
};
const star = {
  path: () => ssr(_tmpl$3460),
  outline: true,
  mini: false,
  title: 'Star'
};
const stepBack = {
  path: () => [ssr(_tmpl$379), ssr(_tmpl$3461)],
  outline: true,
  mini: false,
  title: 'Step Back'
};
const stepForward = {
  path: () => [ssr(_tmpl$3462), ssr(_tmpl$3463)],
  outline: true,
  mini: false,
  title: 'Step Forward'
};
const stethoscope = {
  path: () => [ssr(_tmpl$3464), ssr(_tmpl$3465), ssr(_tmpl$3466)],
  outline: true,
  mini: false,
  title: 'Stethoscope'
};
const sticker = {
  path: () => [ssr(_tmpl$3467), ssr(_tmpl$3468), ssr(_tmpl$3469), ssr(_tmpl$3470), ssr(_tmpl$3471)],
  outline: true,
  mini: false,
  title: 'Sticker'
};
const stickyNote = {
  path: () => [ssr(_tmpl$3472), ssr(_tmpl$3473)],
  outline: true,
  mini: false,
  title: 'Sticky Note'
};
const store = {
  path: () => [ssr(_tmpl$3474), ssr(_tmpl$3207), ssr(_tmpl$3475), ssr(_tmpl$3476), ssr(_tmpl$3477)],
  outline: true,
  mini: false,
  title: 'Store'
};
const stretchHorizontal = {
  path: () => [ssr(_tmpl$3478), ssr(_tmpl$3479)],
  outline: true,
  mini: false,
  title: 'Stretch Horizontal'
};
const stretchVertical = {
  path: () => [ssr(_tmpl$3480), ssr(_tmpl$3481)],
  outline: true,
  mini: false,
  title: 'Stretch Vertical'
};
const strikethrough = {
  path: () => [ssr(_tmpl$3482), ssr(_tmpl$3483), ssr(_tmpl$2439)],
  outline: true,
  mini: false,
  title: 'Strikethrough'
};
const subscript = {
  path: () => [ssr(_tmpl$3484), ssr(_tmpl$3485), ssr(_tmpl$3486)],
  outline: true,
  mini: false,
  title: 'Subscript'
};
const sunDim = {
  path: () => [ssr(_tmpl$289), ssr(_tmpl$3487), ssr(_tmpl$3488), ssr(_tmpl$3489), ssr(_tmpl$3490), ssr(_tmpl$3491), ssr(_tmpl$3492), ssr(_tmpl$3493), ssr(_tmpl$3494)],
  outline: true,
  mini: false,
  title: 'Sun Dim'
};
const sunMedium = {
  path: () => [ssr(_tmpl$289), ssr(_tmpl$3495), ssr(_tmpl$3496), ssr(_tmpl$3497), ssr(_tmpl$3498), ssr(_tmpl$3499), ssr(_tmpl$3500), ssr(_tmpl$3501), ssr(_tmpl$3502)],
  outline: true,
  mini: false,
  title: 'Sun Medium'
};
const sunMoon = {
  path: () => [ssr(_tmpl$3503), ssr(_tmpl$1107), ssr(_tmpl$1682), ssr(_tmpl$3504), ssr(_tmpl$3505), ssr(_tmpl$594), ssr(_tmpl$597), ssr(_tmpl$3506), ssr(_tmpl$3507)],
  outline: true,
  mini: false,
  title: 'Sun Moon'
};
const sunSnow = {
  path: () => [ssr(_tmpl$3508), ssr(_tmpl$3285), ssr(_tmpl$3509), ssr(_tmpl$3510), ssr(_tmpl$3511), ssr(_tmpl$3512), ssr(_tmpl$3513), ssr(_tmpl$1147), ssr(_tmpl$3514), ssr(_tmpl$3515), ssr(_tmpl$3516)],
  outline: true,
  mini: false,
  title: 'Sun Snow'
};
const sun = {
  path: () => [ssr(_tmpl$289), ssr(_tmpl$1107), ssr(_tmpl$1682), ssr(_tmpl$1108), ssr(_tmpl$3517), ssr(_tmpl$594), ssr(_tmpl$597), ssr(_tmpl$3518), ssr(_tmpl$1109)],
  outline: true,
  mini: false,
  title: 'Sun'
};
const sunrise = {
  path: () => [ssr(_tmpl$1997), ssr(_tmpl$3519), ssr(_tmpl$3520), ssr(_tmpl$3521), ssr(_tmpl$3522), ssr(_tmpl$59), ssr(_tmpl$2442), ssr(_tmpl$1191)],
  outline: true,
  mini: false,
  title: 'Sunrise'
};
const sunset = {
  path: () => [ssr(_tmpl$3523), ssr(_tmpl$3519), ssr(_tmpl$3520), ssr(_tmpl$3521), ssr(_tmpl$3522), ssr(_tmpl$59), ssr(_tmpl$1998), ssr(_tmpl$1191)],
  outline: true,
  mini: false,
  title: 'Sunset'
};
const superscript = {
  path: () => [ssr(_tmpl$3524), ssr(_tmpl$3525), ssr(_tmpl$3526)],
  outline: true,
  mini: false,
  title: 'Superscript'
};
const swatchBook = {
  path: () => [ssr(_tmpl$3527), ssr(_tmpl$3528), ssr(_tmpl$3529), ssr(_tmpl$3530)],
  outline: true,
  mini: false,
  title: 'Swatch Book'
};
const swissFranc = {
  path: () => [ssr(_tmpl$3531), ssr(_tmpl$3532), ssr(_tmpl$3533)],
  outline: true,
  mini: false,
  title: 'Swiss Franc'
};
const switchCamera = {
  path: () => [ssr(_tmpl$3534), ssr(_tmpl$3535), ssr(_tmpl$656), ssr(_tmpl$3536), ssr(_tmpl$3537)],
  outline: true,
  mini: false,
  title: 'Switch Camera'
};
const sword = {
  path: () => [ssr(_tmpl$3538), ssr(_tmpl$3539), ssr(_tmpl$3540), ssr(_tmpl$3541)],
  outline: true,
  mini: false,
  title: 'Sword'
};
const swords = {
  path: () => [ssr(_tmpl$3538), ssr(_tmpl$3539), ssr(_tmpl$3540), ssr(_tmpl$3541), ssr(_tmpl$3542), ssr(_tmpl$3543), ssr(_tmpl$3544), ssr(_tmpl$3545)],
  outline: true,
  mini: false,
  title: 'Swords'
};
const syringe = {
  path: () => [ssr(_tmpl$3546), ssr(_tmpl$3547), ssr(_tmpl$3548), ssr(_tmpl$3549), ssr(_tmpl$3550), ssr(_tmpl$3551)],
  outline: true,
  mini: false,
  title: 'Syringe'
};
const table_2 = {
  path: () => ssr(_tmpl$3552),
  outline: true,
  mini: false,
  title: 'Table 2'
};
const tableCellsMerge = {
  path: () => [ssr(_tmpl$3553), ssr(_tmpl$3554), ssr(_tmpl$671), ssr(_tmpl$672), ssr(_tmpl$667)],
  outline: true,
  mini: false,
  title: 'Table Cells Merge'
};
const tableCellsSplit = {
  path: () => [ssr(_tmpl$2163), ssr(_tmpl$671), ssr(_tmpl$672), ssr(_tmpl$667)],
  outline: true,
  mini: false,
  title: 'Table Cells Split'
};
const tableColumnsSplit = {
  path: () => [ssr(_tmpl$3555), ssr(_tmpl$3556), ssr(_tmpl$1137), ssr(_tmpl$3557), ssr(_tmpl$3558), ssr(_tmpl$3559), ssr(_tmpl$3560), ssr(_tmpl$3561), ssr(_tmpl$3562), ssr(_tmpl$3563), ssr(_tmpl$3564)],
  outline: true,
  mini: false,
  title: 'Table Columns Split'
};
const tableProperties = {
  path: () => [ssr(_tmpl$1158), ssr(_tmpl$667), ssr(_tmpl$3077), ssr(_tmpl$3078)],
  outline: true,
  mini: false,
  title: 'Table Properties'
};
const tableRowsSplit = {
  path: () => [ssr(_tmpl$3565), ssr(_tmpl$3566), ssr(_tmpl$3567), ssr(_tmpl$3568), ssr(_tmpl$3569), ssr(_tmpl$3570), ssr(_tmpl$3571), ssr(_tmpl$3572), ssr(_tmpl$3573), ssr(_tmpl$3574), ssr(_tmpl$3575)],
  outline: true,
  mini: false,
  title: 'Table Rows Split'
};
const table = {
  path: () => [ssr(_tmpl$1156), ssr(_tmpl$667), ssr(_tmpl$672), ssr(_tmpl$671)],
  outline: true,
  mini: false,
  title: 'Table'
};
const tabletSmartphone = {
  path: () => [ssr(_tmpl$3576), ssr(_tmpl$3577), ssr(_tmpl$764)],
  outline: true,
  mini: false,
  title: 'Tablet Smartphone'
};
const tablet = {
  path: () => [ssr(_tmpl$713), ssr(_tmpl$3578)],
  outline: true,
  mini: false,
  title: 'Tablet'
};
const tablets = {
  path: () => [ssr(_tmpl$3579), ssr(_tmpl$3580), ssr(_tmpl$3581), ssr(_tmpl$3582)],
  outline: true,
  mini: false,
  title: 'Tablets'
};
const tag = {
  path: () => [ssr(_tmpl$3583), ssr(_tmpl$3132)],
  outline: true,
  mini: false,
  title: 'Tag'
};
const tags = {
  path: () => [ssr(_tmpl$3584), ssr(_tmpl$3585), ssr(_tmpl$3586)],
  outline: true,
  mini: false,
  title: 'Tags'
};
const tally_1 = {
  path: () => ssr(_tmpl$2261),
  outline: true,
  mini: false,
  title: 'Tally 1'
};
const tally_2 = {
  path: () => [ssr(_tmpl$2261), ssr(_tmpl$3587)],
  outline: true,
  mini: false,
  title: 'Tally 2'
};
const tally_3 = {
  path: () => [ssr(_tmpl$2261), ssr(_tmpl$3587), ssr(_tmpl$3588)],
  outline: true,
  mini: false,
  title: 'Tally 3'
};
const tally_4 = {
  path: () => [ssr(_tmpl$2261), ssr(_tmpl$3587), ssr(_tmpl$3588), ssr(_tmpl$3589)],
  outline: true,
  mini: false,
  title: 'Tally 4'
};
const tally_5 = {
  path: () => [ssr(_tmpl$2261), ssr(_tmpl$3587), ssr(_tmpl$3588), ssr(_tmpl$3589), ssr(_tmpl$3590)],
  outline: true,
  mini: false,
  title: 'Tally 5'
};
const tangent = {
  path: () => [ssr(_tmpl$3591), ssr(_tmpl$3592), ssr(_tmpl$3593), ssr(_tmpl$3594)],
  outline: true,
  mini: false,
  title: 'Tangent'
};
const target = {
  path: () => [ssr(_tmpl$137), ssr(_tmpl$3595), ssr(_tmpl$361)],
  outline: true,
  mini: false,
  title: 'Target'
};
const telescope = {
  path: () => [ssr(_tmpl$3596), ssr(_tmpl$3597), ssr(_tmpl$3598), ssr(_tmpl$3599), ssr(_tmpl$3600), ssr(_tmpl$3601), ssr(_tmpl$1743)],
  outline: true,
  mini: false,
  title: 'Telescope'
};
const tentTree = {
  path: () => [ssr(_tmpl$2284), ssr(_tmpl$3602), ssr(_tmpl$3603), ssr(_tmpl$3604), ssr(_tmpl$3605), ssr(_tmpl$3606), ssr(_tmpl$3607)],
  outline: true,
  mini: false,
  title: 'Tent Tree'
};
const tent = {
  path: () => [ssr(_tmpl$3608), ssr(_tmpl$3609), ssr(_tmpl$3610), ssr(_tmpl$121)],
  outline: true,
  mini: false,
  title: 'Tent'
};
const terminal = {
  path: () => [ssr(_tmpl$3611), ssr(_tmpl$3612)],
  outline: true,
  mini: false,
  title: 'Terminal'
};
const testTubeDiagonal = {
  path: () => [ssr(_tmpl$3613), ssr(_tmpl$3614), ssr(_tmpl$3615)],
  outline: true,
  mini: false,
  title: 'Test Tube Diagonal'
};
const testTube = {
  path: () => [ssr(_tmpl$3616), ssr(_tmpl$1672), ssr(_tmpl$3617)],
  outline: true,
  mini: false,
  title: 'Test Tube'
};
const testTubes = {
  path: () => [ssr(_tmpl$3618), ssr(_tmpl$3619), ssr(_tmpl$3620), ssr(_tmpl$3621), ssr(_tmpl$3622), ssr(_tmpl$3623)],
  outline: true,
  mini: false,
  title: 'Test Tubes'
};
const textCursorInput = {
  path: () => [ssr(_tmpl$3624), ssr(_tmpl$3625), ssr(_tmpl$3626), ssr(_tmpl$3627), ssr(_tmpl$3628)],
  outline: true,
  mini: false,
  title: 'Text Cursor Input'
};
const textCursor = {
  path: () => [ssr(_tmpl$3629), ssr(_tmpl$3630), ssr(_tmpl$3631)],
  outline: true,
  mini: false,
  title: 'Text Cursor'
};
const textQuote = {
  path: () => [ssr(_tmpl$3632), ssr(_tmpl$3633), ssr(_tmpl$3634), ssr(_tmpl$3635)],
  outline: true,
  mini: false,
  title: 'Text Quote'
};
const textSearch = {
  path: () => [ssr(_tmpl$2316), ssr(_tmpl$3636), ssr(_tmpl$2297), ssr(_tmpl$3637), ssr(_tmpl$3638)],
  outline: true,
  mini: false,
  title: 'Text Search'
};
const textSelect = {
  path: () => [ssr(_tmpl$608), ssr(_tmpl$609), ssr(_tmpl$610), ssr(_tmpl$611), ssr(_tmpl$612), ssr(_tmpl$613), ssr(_tmpl$614), ssr(_tmpl$615), ssr(_tmpl$616), ssr(_tmpl$617), ssr(_tmpl$618), ssr(_tmpl$619), ssr(_tmpl$3639), ssr(_tmpl$3640), ssr(_tmpl$3641)],
  outline: true,
  mini: false,
  title: 'Text Select'
};
const text = {
  path: () => [ssr(_tmpl$3642), ssr(_tmpl$3643), ssr(_tmpl$3644)],
  outline: true,
  mini: false,
  title: 'Text'
};
const theater = {
  path: () => [ssr(_tmpl$3645), ssr(_tmpl$3646), ssr(_tmpl$3647), ssr(_tmpl$3648), ssr(_tmpl$3649), ssr(_tmpl$3650), ssr(_tmpl$143), ssr(_tmpl$3651), ssr(_tmpl$3652)],
  outline: true,
  mini: false,
  title: 'Theater'
};
const thermometerSnowflake = {
  path: () => [ssr(_tmpl$3653), ssr(_tmpl$3587), ssr(_tmpl$3654), ssr(_tmpl$3655), ssr(_tmpl$3656), ssr(_tmpl$3657)],
  outline: true,
  mini: false,
  title: 'Thermometer Snowflake'
};
const thermometerSun = {
  path: () => [ssr(_tmpl$3658), ssr(_tmpl$3659), ssr(_tmpl$3660), ssr(_tmpl$3657), ssr(_tmpl$3661), ssr(_tmpl$3662)],
  outline: true,
  mini: false,
  title: 'Thermometer Sun'
};
const thermometer = {
  path: () => ssr(_tmpl$3663),
  outline: true,
  mini: false,
  title: 'Thermometer'
};
const thumbsDown = {
  path: () => [ssr(_tmpl$3604), ssr(_tmpl$3664)],
  outline: true,
  mini: false,
  title: 'Thumbs Down'
};
const thumbsUp = {
  path: () => [ssr(_tmpl$3665), ssr(_tmpl$3666)],
  outline: true,
  mini: false,
  title: 'Thumbs Up'
};
const ticketCheck = {
  path: () => [ssr(_tmpl$3667), ssr(_tmpl$321)],
  outline: true,
  mini: false,
  title: 'Ticket Check'
};
const ticketMinus = {
  path: () => [ssr(_tmpl$3667), ssr(_tmpl$335)],
  outline: true,
  mini: false,
  title: 'Ticket Minus'
};
const ticketPercent = {
  path: () => [ssr(_tmpl$3668), ssr(_tmpl$339), ssr(_tmpl$338), ssr(_tmpl$340)],
  outline: true,
  mini: false,
  title: 'Ticket Percent'
};
const ticketPlus = {
  path: () => [ssr(_tmpl$3667), ssr(_tmpl$335), ssr(_tmpl$668)],
  outline: true,
  mini: false,
  title: 'Ticket Plus'
};
const ticketSlash = {
  path: () => [ssr(_tmpl$3667), ssr(_tmpl$3669)],
  outline: true,
  mini: false,
  title: 'Ticket Slash'
};
const ticketX = {
  path: () => [ssr(_tmpl$3667), ssr(_tmpl$3669), ssr(_tmpl$3220)],
  outline: true,
  mini: false,
  title: 'Ticket X'
};
const ticket = {
  path: () => [ssr(_tmpl$3667), ssr(_tmpl$3670), ssr(_tmpl$3671), ssr(_tmpl$3672)],
  outline: true,
  mini: false,
  title: 'Ticket'
};
const timerOff = {
  path: () => [ssr(_tmpl$841), ssr(_tmpl$3673), ssr(_tmpl$3674), ssr(_tmpl$33), ssr(_tmpl$3675)],
  outline: true,
  mini: false,
  title: 'Timer Off'
};
const timerReset = {
  path: () => [ssr(_tmpl$841), ssr(_tmpl$3676), ssr(_tmpl$3677), ssr(_tmpl$3678)],
  outline: true,
  mini: false,
  title: 'Timer Reset'
};
const timer = {
  path: () => [ssr(_tmpl$3679), ssr(_tmpl$3680), ssr(_tmpl$3681)],
  outline: true,
  mini: false,
  title: 'Timer'
};
const toggleLeft = {
  path: () => [ssr(_tmpl$3682), ssr(_tmpl$3683)],
  outline: true,
  mini: false,
  title: 'Toggle Left'
};
const toggleRight = {
  path: () => [ssr(_tmpl$3682), ssr(_tmpl$3684)],
  outline: true,
  mini: false,
  title: 'Toggle Right'
};
const tornado = {
  path: () => [ssr(_tmpl$3685), ssr(_tmpl$3686), ssr(_tmpl$3687), ssr(_tmpl$3688), ssr(_tmpl$3689)],
  outline: true,
  mini: false,
  title: 'Tornado'
};
const torus = {
  path: () => [ssr(_tmpl$3690), ssr(_tmpl$3691)],
  outline: true,
  mini: false,
  title: 'Torus'
};
const touchpadOff = {
  path: () => [ssr(_tmpl$3692), ssr(_tmpl$3693), ssr(_tmpl$3694), ssr(_tmpl$3695), ssr(_tmpl$33), ssr(_tmpl$3696)],
  outline: true,
  mini: false,
  title: 'Touchpad Off'
};
const touchpad = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$108), ssr(_tmpl$3695)],
  outline: true,
  mini: false,
  title: 'Touchpad'
};
const towerControl = {
  path: () => [ssr(_tmpl$3697), ssr(_tmpl$3698), ssr(_tmpl$3699), ssr(_tmpl$3700), ssr(_tmpl$3701), ssr(_tmpl$3702), ssr(_tmpl$3703)],
  outline: true,
  mini: false,
  title: 'Tower Control'
};
const toyBrick = {
  path: () => [ssr(_tmpl$3704), ssr(_tmpl$3705), ssr(_tmpl$3706)],
  outline: true,
  mini: false,
  title: 'Toy Brick'
};
const tractor = {
  path: () => [ssr(_tmpl$3707), ssr(_tmpl$3708), ssr(_tmpl$3709), ssr(_tmpl$3710), ssr(_tmpl$3711), ssr(_tmpl$3712), ssr(_tmpl$3713), ssr(_tmpl$3714), ssr(_tmpl$3715)],
  outline: true,
  mini: false,
  title: 'Tractor'
};
const trafficCone = {
  path: () => [ssr(_tmpl$3716), ssr(_tmpl$3717), ssr(_tmpl$3718), ssr(_tmpl$3719)],
  outline: true,
  mini: false,
  title: 'Traffic Cone'
};
const trainFrontTunnel = {
  path: () => [ssr(_tmpl$3720), ssr(_tmpl$3721), ssr(_tmpl$3722), ssr(_tmpl$3723), ssr(_tmpl$3724), ssr(_tmpl$3725), ssr(_tmpl$3726)],
  outline: true,
  mini: false,
  title: 'Train Front Tunnel'
};
const trainFront = {
  path: () => [ssr(_tmpl$3727), ssr(_tmpl$3728), ssr(_tmpl$3729), ssr(_tmpl$3730), ssr(_tmpl$3731), ssr(_tmpl$3732)],
  outline: true,
  mini: false,
  title: 'Train Front'
};
const trainTrack = {
  path: () => [ssr(_tmpl$3733), ssr(_tmpl$3734), ssr(_tmpl$3735), ssr(_tmpl$3379), ssr(_tmpl$3736), ssr(_tmpl$3737), ssr(_tmpl$3738)],
  outline: true,
  mini: false,
  title: 'Train Track'
};
const tramFront = {
  path: () => [ssr(_tmpl$726), ssr(_tmpl$727), ssr(_tmpl$3739), ssr(_tmpl$3731), ssr(_tmpl$3740), ssr(_tmpl$728), ssr(_tmpl$729)],
  outline: true,
  mini: false,
  title: 'Tram Front'
};
const trash_2 = {
  path: () => [ssr(_tmpl$2300), ssr(_tmpl$3741), ssr(_tmpl$3742), ssr(_tmpl$3743), ssr(_tmpl$3744)],
  outline: true,
  mini: false,
  title: 'Trash 2'
};
const trash = {
  path: () => [ssr(_tmpl$2300), ssr(_tmpl$3741), ssr(_tmpl$3742)],
  outline: true,
  mini: false,
  title: 'Trash'
};
const treeDeciduous = {
  path: () => [ssr(_tmpl$3745), ssr(_tmpl$2732)],
  outline: true,
  mini: false,
  title: 'Tree Deciduous'
};
const treePalm = {
  path: () => [ssr(_tmpl$3746), ssr(_tmpl$3747), ssr(_tmpl$3748), ssr(_tmpl$3749)],
  outline: true,
  mini: false,
  title: 'Tree Palm'
};
const treePine = {
  path: () => [ssr(_tmpl$3750), ssr(_tmpl$2839)],
  outline: true,
  mini: false,
  title: 'Tree Pine'
};
const trees = {
  path: () => [ssr(_tmpl$3751), ssr(_tmpl$3752), ssr(_tmpl$3753), ssr(_tmpl$3754)],
  outline: true,
  mini: false,
  title: 'Trees'
};
const trello = {
  path: () => [ssr(_tmpl$42), ssr(_tmpl$3755), ssr(_tmpl$3756)],
  outline: true,
  mini: false,
  title: 'Trello'
};
const trendingDown = {
  path: () => [ssr(_tmpl$3757), ssr(_tmpl$3758)],
  outline: true,
  mini: false,
  title: 'Trending Down'
};
const trendingUp = {
  path: () => [ssr(_tmpl$3759), ssr(_tmpl$3760)],
  outline: true,
  mini: false,
  title: 'Trending Up'
};
const triangleAlert = {
  path: () => [ssr(_tmpl$3761), ssr(_tmpl$1608), ssr(_tmpl$990)],
  outline: true,
  mini: false,
  title: 'Triangle Alert'
};
const triangleRight = {
  path: () => ssr(_tmpl$3762),
  outline: true,
  mini: false,
  title: 'Triangle Right'
};
const triangle = {
  path: () => ssr(_tmpl$3763),
  outline: true,
  mini: false,
  title: 'Triangle'
};
const trophy = {
  path: () => [ssr(_tmpl$3764), ssr(_tmpl$3765), ssr(_tmpl$3766), ssr(_tmpl$3767), ssr(_tmpl$3768), ssr(_tmpl$3769)],
  outline: true,
  mini: false,
  title: 'Trophy'
};
const truck = {
  path: () => [ssr(_tmpl$124), ssr(_tmpl$3770), ssr(_tmpl$3771), ssr(_tmpl$128), ssr(_tmpl$129)],
  outline: true,
  mini: false,
  title: 'Truck'
};
const turtle = {
  path: () => [ssr(_tmpl$3772), ssr(_tmpl$3773), ssr(_tmpl$3774), ssr(_tmpl$3775)],
  outline: true,
  mini: false,
  title: 'Turtle'
};
const tv_2 = {
  path: () => [ssr(_tmpl$3094), ssr(_tmpl$2524)],
  outline: true,
  mini: false,
  title: 'Tv 2'
};
const tv = {
  path: () => [ssr(_tmpl$3776), ssr(_tmpl$3777)],
  outline: true,
  mini: false,
  title: 'Tv'
};
const twitch = {
  path: () => ssr(_tmpl$3778),
  outline: true,
  mini: false,
  title: 'Twitch'
};
const twitter = {
  path: () => ssr(_tmpl$3779),
  outline: true,
  mini: false,
  title: 'Twitter'
};
const type = {
  path: () => [ssr(_tmpl$3780), ssr(_tmpl$3781), ssr(_tmpl$3440)],
  outline: true,
  mini: false,
  title: 'Type'
};
const umbrellaOff = {
  path: () => [ssr(_tmpl$3286), ssr(_tmpl$3782), ssr(_tmpl$3783), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Umbrella Off'
};
const umbrella = {
  path: () => [ssr(_tmpl$3784), ssr(_tmpl$3785), ssr(_tmpl$3286)],
  outline: true,
  mini: false,
  title: 'Umbrella'
};
const underline = {
  path: () => [ssr(_tmpl$3786), ssr(_tmpl$3787)],
  outline: true,
  mini: false,
  title: 'Underline'
};
const undo_2 = {
  path: () => [ssr(_tmpl$3788), ssr(_tmpl$3789)],
  outline: true,
  mini: false,
  title: 'Undo 2'
};
const undoDot = {
  path: () => [ssr(_tmpl$2981), ssr(_tmpl$3790), ssr(_tmpl$3791)],
  outline: true,
  mini: false,
  title: 'Undo Dot'
};
const undo = {
  path: () => [ssr(_tmpl$3790), ssr(_tmpl$3791)],
  outline: true,
  mini: false,
  title: 'Undo'
};
const unfoldHorizontal = {
  path: () => [ssr(_tmpl$3792), ssr(_tmpl$3793), ssr(_tmpl$1107), ssr(_tmpl$1684), ssr(_tmpl$1683), ssr(_tmpl$1682), ssr(_tmpl$3794), ssr(_tmpl$3795)],
  outline: true,
  mini: false,
  title: 'Unfold Horizontal'
};
const unfoldVertical = {
  path: () => [ssr(_tmpl$1716), ssr(_tmpl$1717), ssr(_tmpl$1689), ssr(_tmpl$1690), ssr(_tmpl$1691), ssr(_tmpl$1692), ssr(_tmpl$3796), ssr(_tmpl$3797)],
  outline: true,
  mini: false,
  title: 'Unfold Vertical'
};
const ungroup = {
  path: () => [ssr(_tmpl$3798), ssr(_tmpl$3799)],
  outline: true,
  mini: false,
  title: 'Ungroup'
};
const university = {
  path: () => [ssr(_tmpl$3800), ssr(_tmpl$3801), ssr(_tmpl$3802), ssr(_tmpl$3803), ssr(_tmpl$3804), ssr(_tmpl$3805), ssr(_tmpl$3806)],
  outline: true,
  mini: false,
  title: 'University'
};
const unlink_2 = {
  path: () => ssr(_tmpl$3807),
  outline: true,
  mini: false,
  title: 'Unlink 2'
};
const unlink = {
  path: () => [ssr(_tmpl$3808), ssr(_tmpl$3809), ssr(_tmpl$3810), ssr(_tmpl$3811), ssr(_tmpl$3812), ssr(_tmpl$3813)],
  outline: true,
  mini: false,
  title: 'Unlink'
};
const unplug = {
  path: () => [ssr(_tmpl$3814), ssr(_tmpl$2841), ssr(_tmpl$2840), ssr(_tmpl$2842), ssr(_tmpl$2843), ssr(_tmpl$3815)],
  outline: true,
  mini: false,
  title: 'Unplug'
};
const upload = {
  path: () => [ssr(_tmpl$1355), ssr(_tmpl$3816), ssr(_tmpl$3817)],
  outline: true,
  mini: false,
  title: 'Upload'
};
const usb = {
  path: () => [ssr(_tmpl$3818), ssr(_tmpl$3819), ssr(_tmpl$3820), ssr(_tmpl$3821), ssr(_tmpl$3822), ssr(_tmpl$3823), ssr(_tmpl$3824)],
  outline: true,
  mini: false,
  title: 'Usb'
};
const userCheck = {
  path: () => [ssr(_tmpl$3825), ssr(_tmpl$3826), ssr(_tmpl$3827)],
  outline: true,
  mini: false,
  title: 'User Check'
};
const userCog = {
  path: () => [ssr(_tmpl$3828), ssr(_tmpl$3826), ssr(_tmpl$3829), ssr(_tmpl$3830), ssr(_tmpl$3831), ssr(_tmpl$3832), ssr(_tmpl$3833), ssr(_tmpl$3834), ssr(_tmpl$3835), ssr(_tmpl$3836), ssr(_tmpl$3837)],
  outline: true,
  mini: false,
  title: 'User Cog'
};
const userMinus = {
  path: () => [ssr(_tmpl$3825), ssr(_tmpl$3826), ssr(_tmpl$3838)],
  outline: true,
  mini: false,
  title: 'User Minus'
};
const userPlus = {
  path: () => [ssr(_tmpl$3825), ssr(_tmpl$3826), ssr(_tmpl$3839), ssr(_tmpl$3838)],
  outline: true,
  mini: false,
  title: 'User Plus'
};
const userRoundCheck = {
  path: () => [ssr(_tmpl$3840), ssr(_tmpl$3841), ssr(_tmpl$1932)],
  outline: true,
  mini: false,
  title: 'User Round Check'
};
const userRoundCog = {
  path: () => [ssr(_tmpl$3842), ssr(_tmpl$3841), ssr(_tmpl$795), ssr(_tmpl$3843), ssr(_tmpl$3844), ssr(_tmpl$3845), ssr(_tmpl$3846), ssr(_tmpl$3847), ssr(_tmpl$3848), ssr(_tmpl$3849), ssr(_tmpl$3850)],
  outline: true,
  mini: false,
  title: 'User Round Cog'
};
const userRoundMinus = {
  path: () => [ssr(_tmpl$3840), ssr(_tmpl$3841), ssr(_tmpl$3851)],
  outline: true,
  mini: false,
  title: 'User Round Minus'
};
const userRoundPlus = {
  path: () => [ssr(_tmpl$3840), ssr(_tmpl$3841), ssr(_tmpl$789), ssr(_tmpl$3851)],
  outline: true,
  mini: false,
  title: 'User Round Plus'
};
const userRoundSearch = {
  path: () => [ssr(_tmpl$3841), ssr(_tmpl$3842), ssr(_tmpl$795), ssr(_tmpl$3852)],
  outline: true,
  mini: false,
  title: 'User Round Search'
};
const userRoundX = {
  path: () => [ssr(_tmpl$3853), ssr(_tmpl$3841), ssr(_tmpl$798), ssr(_tmpl$3854)],
  outline: true,
  mini: false,
  title: 'User Round X'
};
const userRound = {
  path: () => [ssr(_tmpl$3855), ssr(_tmpl$3856)],
  outline: true,
  mini: false,
  title: 'User Round'
};
const userSearch = {
  path: () => [ssr(_tmpl$3857), ssr(_tmpl$3858), ssr(_tmpl$1771), ssr(_tmpl$3859)],
  outline: true,
  mini: false,
  title: 'User Search'
};
const userX = {
  path: () => [ssr(_tmpl$3825), ssr(_tmpl$3826), ssr(_tmpl$3860), ssr(_tmpl$3861)],
  outline: true,
  mini: false,
  title: 'User X'
};
const user = {
  path: () => [ssr(_tmpl$3862), ssr(_tmpl$3863)],
  outline: true,
  mini: false,
  title: 'User'
};
const usersRound = {
  path: () => [ssr(_tmpl$3864), ssr(_tmpl$3841), ssr(_tmpl$3865)],
  outline: true,
  mini: false,
  title: 'Users Round'
};
const users = {
  path: () => [ssr(_tmpl$3825), ssr(_tmpl$3826), ssr(_tmpl$3866), ssr(_tmpl$3867)],
  outline: true,
  mini: false,
  title: 'Users'
};
const utensilsCrossed = {
  path: () => [ssr(_tmpl$3868), ssr(_tmpl$3869), ssr(_tmpl$3870), ssr(_tmpl$3871)],
  outline: true,
  mini: false,
  title: 'Utensils Crossed'
};
const utensils = {
  path: () => [ssr(_tmpl$3872), ssr(_tmpl$3873), ssr(_tmpl$3874)],
  outline: true,
  mini: false,
  title: 'Utensils'
};
const utilityPole = {
  path: () => [ssr(_tmpl$49), ssr(_tmpl$3875), ssr(_tmpl$3876), ssr(_tmpl$3877), ssr(_tmpl$809), ssr(_tmpl$3878), ssr(_tmpl$3879)],
  outline: true,
  mini: false,
  title: 'Utility Pole'
};
const variable = {
  path: () => [ssr(_tmpl$2727), ssr(_tmpl$2728), ssr(_tmpl$350), ssr(_tmpl$351)],
  outline: true,
  mini: false,
  title: 'Variable'
};
const vault = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3132), ssr(_tmpl$3880), ssr(_tmpl$2169), ssr(_tmpl$3881), ssr(_tmpl$3135), ssr(_tmpl$3882), ssr(_tmpl$3883), ssr(_tmpl$3884), ssr(_tmpl$361)],
  outline: true,
  mini: false,
  title: 'Vault'
};
const vegan = {
  path: () => [ssr(_tmpl$3885), ssr(_tmpl$3886), ssr(_tmpl$3887)],
  outline: true,
  mini: false,
  title: 'Vegan'
};
const venetianMask = {
  path: () => [ssr(_tmpl$3888), ssr(_tmpl$3889), ssr(_tmpl$3890)],
  outline: true,
  mini: false,
  title: 'Venetian Mask'
};
const vibrateOff = {
  path: () => [ssr(_tmpl$3891), ssr(_tmpl$3892), ssr(_tmpl$3893), ssr(_tmpl$3894), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Vibrate Off'
};
const vibrate = {
  path: () => [ssr(_tmpl$3891), ssr(_tmpl$3892), ssr(_tmpl$3895)],
  outline: true,
  mini: false,
  title: 'Vibrate'
};
const videoOff = {
  path: () => [ssr(_tmpl$3896), ssr(_tmpl$3897), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Video Off'
};
const video = {
  path: () => [ssr(_tmpl$3898), ssr(_tmpl$3899)],
  outline: true,
  mini: false,
  title: 'Video'
};
const videotape = {
  path: () => [ssr(_tmpl$163), ssr(_tmpl$169), ssr(_tmpl$3900), ssr(_tmpl$329), ssr(_tmpl$3901)],
  outline: true,
  mini: false,
  title: 'Videotape'
};
const view = {
  path: () => [ssr(_tmpl$3902), ssr(_tmpl$3903), ssr(_tmpl$3904), ssr(_tmpl$3905)],
  outline: true,
  mini: false,
  title: 'View'
};
const voicemail = {
  path: () => [ssr(_tmpl$3906), ssr(_tmpl$3907), ssr(_tmpl$3908)],
  outline: true,
  mini: false,
  title: 'Voicemail'
};
const volume_1 = {
  path: () => [ssr(_tmpl$3909), ssr(_tmpl$3910)],
  outline: true,
  mini: false,
  title: 'Volume 1'
};
const volume_2 = {
  path: () => [ssr(_tmpl$3909), ssr(_tmpl$3910), ssr(_tmpl$3911)],
  outline: true,
  mini: false,
  title: 'Volume 2'
};
const volumeX = {
  path: () => [ssr(_tmpl$3909), ssr(_tmpl$3912), ssr(_tmpl$3913)],
  outline: true,
  mini: false,
  title: 'Volume X'
};
const volume = {
  path: () => ssr(_tmpl$3909),
  outline: true,
  mini: false,
  title: 'Volume'
};
const vote = {
  path: () => [ssr(_tmpl$321), ssr(_tmpl$3914), ssr(_tmpl$3915)],
  outline: true,
  mini: false,
  title: 'Vote'
};
const walletCards = {
  path: () => [ssr(_tmpl$667), ssr(_tmpl$3916), ssr(_tmpl$3917)],
  outline: true,
  mini: false,
  title: 'Wallet Cards'
};
const walletMinimal = {
  path: () => [ssr(_tmpl$839), ssr(_tmpl$3918)],
  outline: true,
  mini: false,
  title: 'Wallet Minimal'
};
const wallet = {
  path: () => [ssr(_tmpl$3919), ssr(_tmpl$3920)],
  outline: true,
  mini: false,
  title: 'Wallet'
};
const wallpaper = {
  path: () => [ssr(_tmpl$3921), ssr(_tmpl$3922), ssr(_tmpl$2526), ssr(_tmpl$2525)],
  outline: true,
  mini: false,
  title: 'Wallpaper'
};
const wandSparkles = {
  path: () => [ssr(_tmpl$3923), ssr(_tmpl$2171), ssr(_tmpl$3924), ssr(_tmpl$3925), ssr(_tmpl$1136), ssr(_tmpl$3926), ssr(_tmpl$3927), ssr(_tmpl$3928)],
  outline: true,
  mini: false,
  title: 'Wand Sparkles'
};
const wand = {
  path: () => [ssr(_tmpl$3929), ssr(_tmpl$3930), ssr(_tmpl$144), ssr(_tmpl$1244), ssr(_tmpl$3931), ssr(_tmpl$3932), ssr(_tmpl$3933), ssr(_tmpl$3382), ssr(_tmpl$3934)],
  outline: true,
  mini: false,
  title: 'Wand'
};
const warehouse = {
  path: () => [ssr(_tmpl$3935), ssr(_tmpl$3936), ssr(_tmpl$404), ssr(_tmpl$3937)],
  outline: true,
  mini: false,
  title: 'Warehouse'
};
const washingMachine = {
  path: () => [ssr(_tmpl$3938), ssr(_tmpl$3939), ssr(_tmpl$3940), ssr(_tmpl$3941), ssr(_tmpl$3942)],
  outline: true,
  mini: false,
  title: 'Washing Machine'
};
const watch = {
  path: () => [ssr(_tmpl$3595), ssr(_tmpl$3943), ssr(_tmpl$3944), ssr(_tmpl$3945)],
  outline: true,
  mini: false,
  title: 'Watch'
};
const waves = {
  path: () => [ssr(_tmpl$3946), ssr(_tmpl$3947), ssr(_tmpl$3948)],
  outline: true,
  mini: false,
  title: 'Waves'
};
const waypoints = {
  path: () => [ssr(_tmpl$3949), ssr(_tmpl$3950), ssr(_tmpl$3951), ssr(_tmpl$2301), ssr(_tmpl$3952), ssr(_tmpl$3953), ssr(_tmpl$3954)],
  outline: true,
  mini: false,
  title: 'Waypoints'
};
const webcam = {
  path: () => [ssr(_tmpl$3955), ssr(_tmpl$1007), ssr(_tmpl$3956), ssr(_tmpl$829)],
  outline: true,
  mini: false,
  title: 'Webcam'
};
const webhookOff = {
  path: () => [ssr(_tmpl$3957), ssr(_tmpl$3958), ssr(_tmpl$3959), ssr(_tmpl$3960), ssr(_tmpl$3961), ssr(_tmpl$3962), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Webhook Off'
};
const webhook = {
  path: () => [ssr(_tmpl$3963), ssr(_tmpl$3964), ssr(_tmpl$3965)],
  outline: true,
  mini: false,
  title: 'Webhook'
};
const weight = {
  path: () => [ssr(_tmpl$136), ssr(_tmpl$3966)],
  outline: true,
  mini: false,
  title: 'Weight'
};
const wheatOff = {
  path: () => [ssr(_tmpl$941), ssr(_tmpl$3967), ssr(_tmpl$3968), ssr(_tmpl$3969), ssr(_tmpl$3970), ssr(_tmpl$3971), ssr(_tmpl$3972), ssr(_tmpl$3973), ssr(_tmpl$3974), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Wheat Off'
};
const wheat = {
  path: () => [ssr(_tmpl$3975), ssr(_tmpl$3968), ssr(_tmpl$3976), ssr(_tmpl$3977), ssr(_tmpl$3971), ssr(_tmpl$3972), ssr(_tmpl$3978), ssr(_tmpl$3979)],
  outline: true,
  mini: false,
  title: 'Wheat'
};
const wholeWord = {
  path: () => [ssr(_tmpl$854), ssr(_tmpl$855), ssr(_tmpl$856), ssr(_tmpl$857), ssr(_tmpl$3349)],
  outline: true,
  mini: false,
  title: 'Whole Word'
};
const wifiOff = {
  path: () => [ssr(_tmpl$3489), ssr(_tmpl$3980), ssr(_tmpl$3981), ssr(_tmpl$3982), ssr(_tmpl$3983), ssr(_tmpl$3984), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Wifi Off'
};
const wifi = {
  path: () => [ssr(_tmpl$3489), ssr(_tmpl$3985), ssr(_tmpl$3986), ssr(_tmpl$3980)],
  outline: true,
  mini: false,
  title: 'Wifi'
};
const wind = {
  path: () => [ssr(_tmpl$3987), ssr(_tmpl$3988), ssr(_tmpl$3989)],
  outline: true,
  mini: false,
  title: 'Wind'
};
const wineOff = {
  path: () => [ssr(_tmpl$1466), ssr(_tmpl$3990), ssr(_tmpl$3991), ssr(_tmpl$3992), ssr(_tmpl$408)],
  outline: true,
  mini: false,
  title: 'Wine Off'
};
const wine = {
  path: () => [ssr(_tmpl$1466), ssr(_tmpl$981), ssr(_tmpl$3991), ssr(_tmpl$3993)],
  outline: true,
  mini: false,
  title: 'Wine'
};
const workflow = {
  path: () => [ssr(_tmpl$3994), ssr(_tmpl$3995), ssr(_tmpl$3996)],
  outline: true,
  mini: false,
  title: 'Workflow'
};
const worm = {
  path: () => [ssr(_tmpl$3997), ssr(_tmpl$3998), ssr(_tmpl$3999)],
  outline: true,
  mini: false,
  title: 'Worm'
};
const wrapText = {
  path: () => [ssr(_tmpl$86), ssr(_tmpl$4000), ssr(_tmpl$4001), ssr(_tmpl$4002)],
  outline: true,
  mini: false,
  title: 'Wrap Text'
};
const wrench = {
  path: () => ssr(_tmpl$4003),
  outline: true,
  mini: false,
  title: 'Wrench'
};
const x = {
  path: () => [ssr(_tmpl$4004), ssr(_tmpl$4005)],
  outline: true,
  mini: false,
  title: 'X'
};
const youtube = {
  path: () => [ssr(_tmpl$4006), ssr(_tmpl$4007)],
  outline: true,
  mini: false,
  title: 'Youtube'
};
const zapOff = {
  path: () => [ssr(_tmpl$4008), ssr(_tmpl$4009), ssr(_tmpl$4010), ssr(_tmpl$33)],
  outline: true,
  mini: false,
  title: 'Zap Off'
};
const zap = {
  path: () => ssr(_tmpl$4011),
  outline: true,
  mini: false,
  title: 'Zap'
};
const zoomIn = {
  path: () => [ssr(_tmpl$2368), ssr(_tmpl$4012), ssr(_tmpl$4013), ssr(_tmpl$4014)],
  outline: true,
  mini: false,
  title: 'Zoom In'
};
const zoomOut = {
  path: () => [ssr(_tmpl$2368), ssr(_tmpl$4012), ssr(_tmpl$4014)],
  outline: true,
  mini: false,
  title: 'Zoom Out'
};

export { aArrowDown, aArrowUp, aLargeSmall, accessibility, activity, airVent, airplay, alarmClock, alarmClockCheck, alarmClockMinus, alarmClockOff, alarmClockPlus, alarmSmoke, album, alignCenter, alignCenterHorizontal, alignCenterVertical, alignEndHorizontal, alignEndVertical, alignHorizontalDistributeCenter, alignHorizontalDistributeEnd, alignHorizontalDistributeStart, alignHorizontalJustifyCenter, alignHorizontalJustifyEnd, alignHorizontalJustifyStart, alignHorizontalSpaceAround, alignHorizontalSpaceBetween, alignJustify, alignLeft, alignRight, alignStartHorizontal, alignStartVertical, alignVerticalDistributeCenter, alignVerticalDistributeEnd, alignVerticalDistributeStart, alignVerticalJustifyCenter, alignVerticalJustifyEnd, alignVerticalJustifyStart, alignVerticalSpaceAround, alignVerticalSpaceBetween, ambulance, ampersand, ampersands, anchor, angry, annoyed, antenna, anvil, aperture, appWindow, appWindowMac, apple, archive, archiveRestore, archiveX, areaChart, armchair, arrowBigDown, arrowBigDownDash, arrowBigLeft, arrowBigLeftDash, arrowBigRight, arrowBigRightDash, arrowBigUp, arrowBigUpDash, arrowDown, arrowDownAZ, arrowDownFromLine, arrowDownLeft, arrowDownNarrowWide, arrowDownRight, arrowDownToDot, arrowDownToLine, arrowDownUp, arrowDownWideNarrow, arrowDownZA, arrowDown_0_1, arrowDown_1_0, arrowLeft, arrowLeftFromLine, arrowLeftRight, arrowLeftToLine, arrowRight, arrowRightFromLine, arrowRightLeft, arrowRightToLine, arrowUp, arrowUpAZ, arrowUpDown, arrowUpFromDot, arrowUpFromLine, arrowUpLeft, arrowUpNarrowWide, arrowUpRight, arrowUpToLine, arrowUpWideNarrow, arrowUpZA, arrowUp_0_1, arrowUp_1_0, arrowsUpFromLine, asterisk, atSign, atom, audioLines, audioWaveform, award, axe, axis_3d, baby, backpack, badge, badgeAlert, badgeCent, badgeCheck, badgeDollarSign, badgeEuro, badgeHelp, badgeIndianRupee, badgeInfo, badgeJapaneseYen, badgeMinus, badgePercent, badgePlus, badgePoundSterling, badgeRussianRuble, badgeSwissFranc, badgeX, baggageClaim, ban, banana, banknote, barChart, barChartBig, barChartHorizontal, barChartHorizontalBig, barChart_2, barChart_3, barChart_4, barcode, baseline, bath, battery, batteryCharging, batteryFull, batteryLow, batteryMedium, batteryWarning, beaker, bean, beanOff, bed, bedDouble, bedSingle, beef, beer, beerOff, bell, bellDot, bellElectric, bellMinus, bellOff, bellPlus, bellRing, betweenHorizontalEnd, betweenHorizontalStart, betweenVerticalEnd, betweenVerticalStart, bike, binary, biohazard, bird, bitcoin, blend, blinds, blocks, bluetooth, bluetoothConnected, bluetoothOff, bluetoothSearching, bold, bolt, bomb, bone, book, bookA, bookAudio, bookCheck, bookCopy, bookDashed, bookDown, bookHeadphones, bookHeart, bookImage, bookKey, bookLock, bookMarked, bookMinus, bookOpen, bookOpenCheck, bookOpenText, bookPlus, bookText, bookType, bookUp, bookUp_2, bookUser, bookX, bookmark, bookmarkCheck, bookmarkMinus, bookmarkPlus, bookmarkX, boomBox, bot, botMessageSquare, botOff, box, boxSelect, boxes, braces, brackets, brain, brainCircuit, brainCog, brickWall, briefcase, briefcaseBusiness, briefcaseMedical, bringToFront, brush, bug, bugOff, bugPlay, building, building_2, bus, busFront, cable, cableCar, cake, cakeSlice, calculator, calendar, calendarCheck, calendarCheck_2, calendarClock, calendarDays, calendarFold, calendarHeart, calendarMinus, calendarMinus_2, calendarOff, calendarPlus, calendarPlus_2, calendarRange, calendarSearch, calendarX, calendarX_2, camera, cameraOff, candlestickChart, candy, candyCane, candyOff, cannabis, captions, captionsOff, car, carFront, carTaxiFront, caravan, carrot, caseLower, caseSensitive, caseUpper, cassetteTape, cast, castle, cat, cctv, check, checkCheck, chefHat, cherry, chevronDown, chevronFirst, chevronLast, chevronLeft, chevronRight, chevronUp, chevronsDown, chevronsDownUp, chevronsLeft, chevronsLeftRight, chevronsRight, chevronsRightLeft, chevronsUp, chevronsUpDown, chrome, church, cigarette, cigaretteOff, circle, circleAlert, circleArrowDown, circleArrowLeft, circleArrowOutDownLeft, circleArrowOutDownRight, circleArrowOutUpLeft, circleArrowOutUpRight, circleArrowRight, circleArrowUp, circleCheck, circleCheckBig, circleChevronDown, circleChevronLeft, circleChevronRight, circleChevronUp, circleDashed, circleDivide, circleDollarSign, circleDot, circleDotDashed, circleEllipsis, circleEqual, circleFadingPlus, circleGauge, circleHelp, circleMinus, circleOff, circleParking, circleParkingOff, circlePause, circlePercent, circlePlay, circlePlus, circlePower, circleSlash, circleSlash_2, circleStop, circleUser, circleUserRound, circleX, circuitBoard, citrus, clapperboard, clipboard, clipboardCheck, clipboardCopy, clipboardList, clipboardMinus, clipboardPaste, clipboardPen, clipboardPenLine, clipboardPlus, clipboardType, clipboardX, clock, clock_1, clock_10, clock_11, clock_12, clock_2, clock_3, clock_4, clock_5, clock_6, clock_7, clock_8, clock_9, cloud, cloudCog, cloudDownload, cloudDrizzle, cloudFog, cloudHail, cloudLightning, cloudMoon, cloudMoonRain, cloudOff, cloudRain, cloudRainWind, cloudSnow, cloudSun, cloudSunRain, cloudUpload, cloudy, clover, club, code, codeXml, codepen, codesandbox, coffee, cog, coins, columns_2, columns_3, columns_4, combine, command, compass, component, computer, conciergeBell, cone, construction, contact, contactRound, container, contrast, cookie, cookingPot, copy, copyCheck, copyMinus, copyPlus, copySlash, copyX, copyleft, copyright, cornerDownLeft, cornerDownRight, cornerLeftDown, cornerLeftUp, cornerRightDown, cornerRightUp, cornerUpLeft, cornerUpRight, cpu, creativeCommons, creditCard, croissant, crop, cross, crosshair, crown, cuboid, cupSoda, currency, cylinder, database, databaseBackup, databaseZap, deleteIcon, dessert, diameter, diamond, diamondMinus, diamondPercent, diamondPlus, dice_1, dice_2, dice_3, dice_4, dice_5, dice_6, dices, diff, disc, discAlbum, disc_2, disc_3, divide, dna, dnaOff, dock, dog, dollarSign, donut, doorClosed, doorOpen, dot, download, draftingCompass, drama, dribbble, drill, droplet, droplets, drum, drumstick, dumbbell, ear, earOff, earth, earthLock, eclipse, egg, eggFried, eggOff, ellipsis, ellipsisVertical, equal, equalNot, eraser, euro, expand, externalLink, eye, eyeOff, facebook, factory, fan, fastForward, feather, fence, ferrisWheel, figma, file, fileArchive, fileAudio, fileAudio_2, fileAxis_3d, fileBadge, fileBadge_2, fileBarChart, fileBarChart_2, fileBox, fileCheck, fileCheck_2, fileClock, fileCode, fileCode_2, fileCog, fileDiff, fileDigit, fileDown, fileHeart, fileImage, fileInput, fileJson, fileJson_2, fileKey, fileKey_2, fileLineChart, fileLock, fileLock_2, fileMinus, fileMinus_2, fileMusic, fileOutput, filePen, filePenLine, filePieChart, filePlus, filePlus_2, fileQuestion, fileScan, fileSearch, fileSearch_2, fileSliders, fileSpreadsheet, fileStack, fileSymlink, fileTerminal, fileText, fileType, fileType_2, fileUp, fileVideo, fileVideo_2, fileVolume, fileVolume_2, fileWarning, fileX, fileX_2, files, film, filter, filterX, fingerprint, fireExtinguisher, fish, fishOff, fishSymbol, flag, flagOff, flagTriangleLeft, flagTriangleRight, flame, flameKindling, flashlight, flashlightOff, flaskConical, flaskConicalOff, flaskRound, flipHorizontal, flipHorizontal_2, flipVertical, flipVertical_2, flower, flower_2, focus, foldHorizontal, foldVertical, folder, folderArchive, folderCheck, folderClock, folderClosed, folderCog, folderDot, folderDown, folderGit, folderGit_2, folderHeart, folderInput, folderKanban, folderKey, folderLock, folderMinus, folderOpen, folderOpenDot, folderOutput, folderPen, folderPlus, folderRoot, folderSearch, folderSearch_2, folderSymlink, folderSync, folderTree, folderUp, folderX, folders, footprints, forklift, forward, frame, framer, frown, fuel, fullscreen, galleryHorizontal, galleryHorizontalEnd, galleryThumbnails, galleryVertical, galleryVerticalEnd, gamepad, gamepad_2, ganttChart, gauge, gavel, gem, ghost, gift, gitBranch, gitBranchPlus, gitCommitHorizontal, gitCommitVertical, gitCompare, gitCompareArrows, gitFork, gitGraph, gitMerge, gitPullRequest, gitPullRequestArrow, gitPullRequestClosed, gitPullRequestCreate, gitPullRequestCreateArrow, gitPullRequestDraft, github, gitlab, glassWater, glasses, globe, globeLock, goal, grab, graduationCap, grape, grid_2x2, grid_2x2Check, grid_2x2X, grid_3x3, grip, gripHorizontal, gripVertical, group, guitar, ham, hammer, hand, handCoins, handHeart, handHelping, handMetal, handPlatter, handshake, hardDrive, hardDriveDownload, hardDriveUpload, hardHat, hash, haze, hdmiPort, heading, heading_1, heading_2, heading_3, heading_4, heading_5, heading_6, headphones, headset, heart, heartCrack, heartHandshake, heartOff, heartPulse, heater, hexagon, highlighter, history, home, hop, hopOff, hospital, hotel, hourglass, iceCreamBowl, iceCreamCone, image, imageDown, imageMinus, imageOff, imagePlay, imagePlus, imageUp, images, importIcon, inbox, indentDecrease, indentIncrease, indianRupee, infinity, info, inspectionPanel, instagram, italic, iterationCcw, iterationCw, japaneseYen, joystick, kanban, key, keyRound, keySquare, keyboard, keyboardMusic, keyboardOff, lamp, lampCeiling, lampDesk, lampFloor, lampWallDown, lampWallUp, landPlot, landmark, languages, laptop, laptopMinimal, lasso, lassoSelect, laugh, layers, layers_2, layers_3, layoutDashboard, layoutGrid, layoutList, layoutPanelLeft, layoutPanelTop, layoutTemplate, leaf, leafyGreen, library, libraryBig, lifeBuoy, ligature, lightbulb, lightbulbOff, lineChart, link, link_2, link_2Off, linkedin, list, listChecks, listCollapse, listEnd, listFilter, listMinus, listMusic, listOrdered, listPlus, listRestart, listStart, listTodo, listTree, listVideo, listX, loader, loaderCircle, loaderPinwheel, locate, locateFixed, locateOff, lock, lockKeyhole, lockKeyholeOpen, lockOpen, logIn, logOut, lollipop, luggage, magnet, mail, mailCheck, mailMinus, mailOpen, mailPlus, mailQuestion, mailSearch, mailWarning, mailX, mailbox, mails, map, mapPin, mapPinOff, mapPinned, martini, maximize, maximize_2, medal, megaphone, megaphoneOff, meh, memoryStick, menu, merge, messageCircle, messageCircleCode, messageCircleDashed, messageCircleHeart, messageCircleMore, messageCircleOff, messageCirclePlus, messageCircleQuestion, messageCircleReply, messageCircleWarning, messageCircleX, messageSquare, messageSquareCode, messageSquareDashed, messageSquareDiff, messageSquareDot, messageSquareHeart, messageSquareMore, messageSquareOff, messageSquarePlus, messageSquareQuote, messageSquareReply, messageSquareShare, messageSquareText, messageSquareWarning, messageSquareX, messagesSquare, mic, micOff, micVocal, microscope, microwave, milestone, milk, milkOff, minimize, minimize_2, minus, monitor, monitorCheck, monitorDot, monitorDown, monitorOff, monitorPause, monitorPlay, monitorSmartphone, monitorSpeaker, monitorStop, monitorUp, monitorX, moon, moonStar, mountain, mountainSnow, mouse, mouseOff, mousePointer, mousePointerBan, mousePointerClick, mousePointer_2, move, moveDiagonal, moveDiagonal_2, moveDown, moveDownLeft, moveDownRight, moveHorizontal, moveLeft, moveRight, moveUp, moveUpLeft, moveUpRight, moveVertical, move_3d, music, music_2, music_3, music_4, navigation, navigationOff, navigation_2, navigation_2Off, network, newspaper, nfc, notebook, notebookPen, notebookTabs, notebookText, notepadText, notepadTextDashed, nut, nutOff, octagon, octagonAlert, octagonPause, octagonX, option, orbit, origami, packageCheck, packageIcon, packageMinus, packageOpen, packagePlus, packageSearch, packageX, package_2, paintBucket, paintRoller, paintbrush, paintbrush_2, palette, panelBottom, panelBottomClose, panelBottomDashed, panelBottomOpen, panelLeft, panelLeftClose, panelLeftDashed, panelLeftOpen, panelRight, panelRightClose, panelRightDashed, panelRightOpen, panelTop, panelTopClose, panelTopDashed, panelTopOpen, panelsLeftBottom, panelsRightBottom, panelsTopLeft, paperclip, parentheses, parkingMeter, partyPopper, pause, pawPrint, pcCase, pen, penLine, penTool, pencil, pencilLine, pencilRuler, pentagon, percent, personStanding, phone, phoneCall, phoneForwarded, phoneIncoming, phoneMissed, phoneOff, phoneOutgoing, pi, piano, pickaxe, pictureInPicture, pictureInPicture_2, pieChart, piggyBank, pilcrow, pilcrowLeft, pilcrowRight, pill, pin, pinOff, pipette, pizza, plane, planeLanding, planeTakeoff, play, plug, plugZap, plugZap_2, plug_2, plus, pocket, pocketKnife, podcast, pointer, pointerOff, popcorn, popsicle, poundSterling, power, powerOff, presentation, printer, projector, proportions, puzzle, pyramid, qrCode, quote, rabbit, radar, radiation, radical, radio, radioReceiver, radioTower, radius, railSymbol, rainbow, rat, ratio, receipt, receiptCent, receiptEuro, receiptIndianRupee, receiptJapaneseYen, receiptPoundSterling, receiptRussianRuble, receiptSwissFranc, receiptText, rectangleEllipsis, rectangleHorizontal, rectangleVertical, recycle, redo, redoDot, redo_2, refreshCcw, refreshCcwDot, refreshCw, refreshCwOff, refrigerator, regex, removeFormatting, repeat, repeat_1, repeat_2, replace, replaceAll, reply, replyAll, rewind, ribbon, rocket, rockingChair, rollerCoaster, rotateCcw, rotateCcwSquare, rotateCw, rotateCwSquare, rotate_3d, route, routeOff, router, rows_2, rows_3, rows_4, rss, ruler, russianRuble, sailboat, salad, sandwich, satellite, satelliteDish, save, saveAll, scale, scale_3d, scaling, scan, scanBarcode, scanEye, scanFace, scanLine, scanSearch, scanText, scatterChart, school, scissors, scissorsLineDashed, screenShare, screenShareOff, scroll, scrollText, search, searchCheck, searchCode, searchSlash, searchX, send, sendHorizontal, sendToBack, separatorHorizontal, separatorVertical, server, serverCog, serverCrash, serverOff, settings, settings_2, shapes, share, share_2, sheet, shell, shield, shieldAlert, shieldBan, shieldCheck, shieldEllipsis, shieldHalf, shieldMinus, shieldOff, shieldPlus, shieldQuestion, shieldX, ship, shipWheel, shirt, shoppingBag, shoppingBasket, shoppingCart, shovel, showerHead, shrink, shrub, shuffle, sigma, signal, signalHigh, signalLow, signalMedium, signalZero, signpost, signpostBig, siren, skipBack, skipForward, skull, slack, slash, slice, slidersHorizontal, slidersVertical, smartphone, smartphoneCharging, smartphoneNfc, smile, smilePlus, snail, snowflake, sofa, soup, space, spade, sparkle, sparkles, speaker, speech, spellCheck, spellCheck_2, spline, split, sprayCan, sprout, square, squareActivity, squareArrowDown, squareArrowDownLeft, squareArrowDownRight, squareArrowLeft, squareArrowOutDownLeft, squareArrowOutDownRight, squareArrowOutUpLeft, squareArrowOutUpRight, squareArrowRight, squareArrowUp, squareArrowUpLeft, squareArrowUpRight, squareAsterisk, squareBottomDashedScissors, squareCheck, squareCheckBig, squareChevronDown, squareChevronLeft, squareChevronRight, squareChevronUp, squareCode, squareDashedBottom, squareDashedBottomCode, squareDashedKanban, squareDashedMousePointer, squareDivide, squareDot, squareEqual, squareFunction, squareGanttChart, squareKanban, squareLibrary, squareM, squareMenu, squareMinus, squareMousePointer, squareParking, squareParkingOff, squarePen, squarePercent, squarePi, squarePilcrow, squarePlay, squarePlus, squarePower, squareRadical, squareScissors, squareSigma, squareSlash, squareSplitHorizontal, squareSplitVertical, squareStack, squareTerminal, squareUser, squareUserRound, squareX, squircle, squirrel, stamp, star, starHalf, starOff, stepBack, stepForward, stethoscope, sticker, stickyNote, store, stretchHorizontal, stretchVertical, strikethrough, subscript, sun, sunDim, sunMedium, sunMoon, sunSnow, sunrise, sunset, superscript, swatchBook, swissFranc, switchCamera, sword, swords, syringe, table, tableCellsMerge, tableCellsSplit, tableColumnsSplit, tableProperties, tableRowsSplit, table_2, tablet, tabletSmartphone, tablets, tag, tags, tally_1, tally_2, tally_3, tally_4, tally_5, tangent, target, telescope, tent, tentTree, terminal, testTube, testTubeDiagonal, testTubes, text, textCursor, textCursorInput, textQuote, textSearch, textSelect, theater, thermometer, thermometerSnowflake, thermometerSun, thumbsDown, thumbsUp, ticket, ticketCheck, ticketMinus, ticketPercent, ticketPlus, ticketSlash, ticketX, timer, timerOff, timerReset, toggleLeft, toggleRight, tornado, torus, touchpad, touchpadOff, towerControl, toyBrick, tractor, trafficCone, trainFront, trainFrontTunnel, trainTrack, tramFront, trash, trash_2, treeDeciduous, treePalm, treePine, trees, trello, trendingDown, trendingUp, triangle, triangleAlert, triangleRight, trophy, truck, turtle, tv, tv_2, twitch, twitter, type, umbrella, umbrellaOff, underline, undo, undoDot, undo_2, unfoldHorizontal, unfoldVertical, ungroup, university, unlink, unlink_2, unplug, upload, usb, user, userCheck, userCog, userMinus, userPlus, userRound, userRoundCheck, userRoundCog, userRoundMinus, userRoundPlus, userRoundSearch, userRoundX, userSearch, userX, users, usersRound, utensils, utensilsCrossed, utilityPole, variable, vault, vegan, venetianMask, vibrate, vibrateOff, video, videoOff, videotape, view, voicemail, volume, volumeX, volume_1, volume_2, vote, wallet, walletCards, walletMinimal, wallpaper, wand, wandSparkles, warehouse, washingMachine, watch, waves, waypoints, webcam, webhook, webhookOff, weight, wheat, wheatOff, wholeWord, wifi, wifiOff, wind, wine, wineOff, workflow, worm, wrapText, wrench, x, youtube, zap, zapOff, zoomIn, zoomOut };
