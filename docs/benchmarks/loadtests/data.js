window.BENCHMARK_DATA = {
  "lastUpdate": 1696432250682,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.10 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "c7a90adfd87d6e690f703a35715c25ed82ae13d6",
          "message": "Add more Python and OS versions",
          "timestamp": "2023-09-28T07:53:14Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/c7a90adfd87d6e690f703a35715c25ed82ae13d6"
        },
        "date": 1696432144526,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 605093.8411843592,
            "unit": "iter/sec",
            "range": "stddev: 2.1181554472456258e-7",
            "extra": "mean: 1.6526362225777824 usec\nrounds: 28821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 582767.2413103161,
            "unit": "iter/sec",
            "range": "stddev: 1.514188507753703e-7",
            "extra": "mean: 1.7159509476743438 usec\nrounds: 87482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 534858.2511499429,
            "unit": "iter/sec",
            "range": "stddev: 2.6207200703616867e-7",
            "extra": "mean: 1.8696542454940246 usec\nrounds: 100463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 492567.01806863374,
            "unit": "iter/sec",
            "range": "stddev: 2.667442502250537e-7",
            "extra": "mean: 2.0301805913051636 usec\nrounds: 92405"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 428496.6430616007,
            "unit": "iter/sec",
            "range": "stddev: 2.920710804593138e-7",
            "extra": "mean: 2.3337405699494362 usec\nrounds: 93785"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 616323.6364132061,
            "unit": "iter/sec",
            "range": "stddev: 2.402067638026349e-7",
            "extra": "mean: 1.6225241754797202 usec\nrounds: 61717"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 590773.1924726429,
            "unit": "iter/sec",
            "range": "stddev: 2.3593008861511313e-7",
            "extra": "mean: 1.6926969820931868 usec\nrounds: 100051"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 539695.8679210909,
            "unit": "iter/sec",
            "range": "stddev: 2.411414362976996e-7",
            "extra": "mean: 1.8528954165463616 usec\nrounds: 100242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 493945.86226364755,
            "unit": "iter/sec",
            "range": "stddev: 2.457830847992475e-7",
            "extra": "mean: 2.0245133655279854 usec\nrounds: 94762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 434170.55573856796,
            "unit": "iter/sec",
            "range": "stddev: 2.4388365942657127e-7",
            "extra": "mean: 2.303242324433768 usec\nrounds: 93626"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 617890.791155599,
            "unit": "iter/sec",
            "range": "stddev: 1.7729248870606937e-7",
            "extra": "mean: 1.6184089718019072 usec\nrounds: 294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 598492.2081495466,
            "unit": "iter/sec",
            "range": "stddev: 2.2424764199031503e-7",
            "extra": "mean: 1.6708655290464995 usec\nrounds: 91297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 548260.2883661126,
            "unit": "iter/sec",
            "range": "stddev: 2.443530113588245e-7",
            "extra": "mean: 1.8239511801595751 usec\nrounds: 93867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 500171.43971669616,
            "unit": "iter/sec",
            "range": "stddev: 2.658337141157473e-7",
            "extra": "mean: 1.9993144761852326 usec\nrounds: 95465"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 438767.81236510974,
            "unit": "iter/sec",
            "range": "stddev: 2.3743690392785106e-7",
            "extra": "mean: 2.2791097519429586 usec\nrounds: 94234"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 511621.3299255927,
            "unit": "iter/sec",
            "range": "stddev: 1.1431999298609999e-7",
            "extra": "mean: 1.9545705808345288 usec\nrounds: 2990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 514740.49653445854,
            "unit": "iter/sec",
            "range": "stddev: 2.508384889959743e-7",
            "extra": "mean: 1.9427264937043018 usec\nrounds: 159641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 511128.7977949058,
            "unit": "iter/sec",
            "range": "stddev: 2.9489601901214215e-7",
            "extra": "mean: 1.9564540372488606 usec\nrounds: 162886"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 512336.5968086149,
            "unit": "iter/sec",
            "range": "stddev: 2.6048720278600606e-7",
            "extra": "mean: 1.9518418286514745 usec\nrounds: 148790"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 513754.1946368798,
            "unit": "iter/sec",
            "range": "stddev: 2.8036215233675317e-7",
            "extra": "mean: 1.9464561271500618 usec\nrounds: 163743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 516354.85971619247,
            "unit": "iter/sec",
            "range": "stddev: 1.8282114609215323e-7",
            "extra": "mean: 1.9366526356499028 usec\nrounds: 16155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 514385.2399361058,
            "unit": "iter/sec",
            "range": "stddev: 2.811123478649722e-7",
            "extra": "mean: 1.9440682242830583 usec\nrounds: 163831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 514560.35458491876,
            "unit": "iter/sec",
            "range": "stddev: 1.8840928300412142e-7",
            "extra": "mean: 1.9434066209913734 usec\nrounds: 52528"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 517376.43097121594,
            "unit": "iter/sec",
            "range": "stddev: 2.472450355964715e-7",
            "extra": "mean: 1.9328286720034886 usec\nrounds: 170530"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511658.7471402323,
            "unit": "iter/sec",
            "range": "stddev: 2.647384418715304e-7",
            "extra": "mean: 1.954427644576017 usec\nrounds: 150363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 505337.37854032917,
            "unit": "iter/sec",
            "range": "stddev: 1.6182199770472391e-7",
            "extra": "mean: 1.978875979624756 usec\nrounds: 20485"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 504737.8676021577,
            "unit": "iter/sec",
            "range": "stddev: 2.7113905464019866e-7",
            "extra": "mean: 1.9812264230355225 usec\nrounds: 152326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 503154.76062561735,
            "unit": "iter/sec",
            "range": "stddev: 2.7745501612828645e-7",
            "extra": "mean: 1.9874600783993586 usec\nrounds: 170071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 484208.36120215635,
            "unit": "iter/sec",
            "range": "stddev: 0.000026821146645091977",
            "extra": "mean: 2.0652266258213197 usec\nrounds: 163481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 504833.6631049331,
            "unit": "iter/sec",
            "range": "stddev: 2.421464994974719e-7",
            "extra": "mean: 1.9808504723112001 usec\nrounds: 53211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 503916.7369285395,
            "unit": "iter/sec",
            "range": "stddev: 4.24865924953968e-7",
            "extra": "mean: 1.9844548250077476 usec\nrounds: 24120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 505287.81670043524,
            "unit": "iter/sec",
            "range": "stddev: 2.908148109185242e-7",
            "extra": "mean: 1.9790700803555286 usec\nrounds: 153568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 502800.0020419159,
            "unit": "iter/sec",
            "range": "stddev: 2.408047372161534e-7",
            "extra": "mean: 1.9888623626469975 usec\nrounds: 158253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 502693.5885223241,
            "unit": "iter/sec",
            "range": "stddev: 2.71796361358201e-7",
            "extra": "mean: 1.9892833782493946 usec\nrounds: 161187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 505405.90119348484,
            "unit": "iter/sec",
            "range": "stddev: 2.6248400433835046e-7",
            "extra": "mean: 1.9786076847115588 usec\nrounds: 158850"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 493609.95062164136,
            "unit": "iter/sec",
            "range": "stddev: 2.2102741110516385e-7",
            "extra": "mean: 2.025891088177259 usec\nrounds: 23726"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 479042.5035381317,
            "unit": "iter/sec",
            "range": "stddev: 4.463153896199195e-7",
            "extra": "mean: 2.0874974404445514 usec\nrounds: 151168"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 489540.7005480414,
            "unit": "iter/sec",
            "range": "stddev: 2.4166817239635425e-7",
            "extra": "mean: 2.042731071962962 usec\nrounds: 139357"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 486518.10250673816,
            "unit": "iter/sec",
            "range": "stddev: 3.2719312231278995e-7",
            "extra": "mean: 2.055421976793043 usec\nrounds: 146697"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 485827.40305386944,
            "unit": "iter/sec",
            "range": "stddev: 2.8317052540920036e-7",
            "extra": "mean: 2.0583441644379996 usec\nrounds: 157210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 53636.887662564186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027843938342951404",
            "extra": "mean: 18.64388564622009 usec\nrounds: 91"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 39892.69038490947,
            "unit": "iter/sec",
            "range": "stddev: 0.000001030601026874297",
            "extra": "mean: 25.067248920826813 usec\nrounds: 17184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "c7a90adfd87d6e690f703a35715c25ed82ae13d6",
          "message": "Add more Python and OS versions",
          "timestamp": "2023-09-28T07:53:14Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/c7a90adfd87d6e690f703a35715c25ed82ae13d6"
        },
        "date": 1696432249871,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 610195.7259825063,
            "unit": "iter/sec",
            "range": "stddev: 1.5704869737409565e-7",
            "extra": "mean: 1.6388184273002742 usec\nrounds: 27444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 582114.3093341966,
            "unit": "iter/sec",
            "range": "stddev: 2.4602290638779506e-7",
            "extra": "mean: 1.7178756542572668 usec\nrounds: 81828"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 536282.8358376479,
            "unit": "iter/sec",
            "range": "stddev: 2.4216768461555654e-7",
            "extra": "mean: 1.864687685627768 usec\nrounds: 94312"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 489089.56105245114,
            "unit": "iter/sec",
            "range": "stddev: 2.730839904862696e-7",
            "extra": "mean: 2.044615300821678 usec\nrounds: 86813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 421581.5442992554,
            "unit": "iter/sec",
            "range": "stddev: 2.6484867297118574e-7",
            "extra": "mean: 2.3720203446338726 usec\nrounds: 92616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 601689.381815578,
            "unit": "iter/sec",
            "range": "stddev: 1.903481271141596e-7",
            "extra": "mean: 1.6619871153161003 usec\nrounds: 56415"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 573291.0897619034,
            "unit": "iter/sec",
            "range": "stddev: 2.2302090190441867e-7",
            "extra": "mean: 1.7443145687390944 usec\nrounds: 104384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 529025.2062040134,
            "unit": "iter/sec",
            "range": "stddev: 2.373178170454648e-7",
            "extra": "mean: 1.8902690992276834 usec\nrounds: 90524"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 482709.3482481776,
            "unit": "iter/sec",
            "range": "stddev: 2.2391118681862668e-7",
            "extra": "mean: 2.071640012005455 usec\nrounds: 96534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 416619.49474850245,
            "unit": "iter/sec",
            "range": "stddev: 2.7087602424169183e-7",
            "extra": "mean: 2.4002717410131336 usec\nrounds: 91550"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 606256.6889268003,
            "unit": "iter/sec",
            "range": "stddev: 1.7843461551576623e-7",
            "extra": "mean: 1.6494663370563496 usec\nrounds: 302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 588732.1987409414,
            "unit": "iter/sec",
            "range": "stddev: 2.377350518308347e-7",
            "extra": "mean: 1.6985651577042893 usec\nrounds: 89655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 542452.5071616158,
            "unit": "iter/sec",
            "range": "stddev: 2.892865252543775e-7",
            "extra": "mean: 1.8434793586492995 usec\nrounds: 92187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 493135.3835352974,
            "unit": "iter/sec",
            "range": "stddev: 2.23209489581639e-7",
            "extra": "mean: 2.0278406972766385 usec\nrounds: 90911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 429278.89991612243,
            "unit": "iter/sec",
            "range": "stddev: 2.987681070808514e-7",
            "extra": "mean: 2.3294878928253677 usec\nrounds: 87222"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 506903.25793915155,
            "unit": "iter/sec",
            "range": "stddev: 1.2370024540229167e-7",
            "extra": "mean: 1.972763016094167 usec\nrounds: 2977"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 508332.98673651216,
            "unit": "iter/sec",
            "range": "stddev: 2.770155158432251e-7",
            "extra": "mean: 1.9672144560595612 usec\nrounds: 154296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 505388.39994486974,
            "unit": "iter/sec",
            "range": "stddev: 2.5389000394826394e-7",
            "extra": "mean: 1.9786762025188644 usec\nrounds: 152326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 505920.90340056637,
            "unit": "iter/sec",
            "range": "stddev: 2.6920344164557367e-7",
            "extra": "mean: 1.976593560927138 usec\nrounds: 167983"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 500514.1880284054,
            "unit": "iter/sec",
            "range": "stddev: 2.7420517168956425e-7",
            "extra": "mean: 1.9979453608281084 usec\nrounds: 170734"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 509915.7729367477,
            "unit": "iter/sec",
            "range": "stddev: 1.577318096405615e-7",
            "extra": "mean: 1.961108192909429 usec\nrounds: 20843"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 506091.1920413217,
            "unit": "iter/sec",
            "range": "stddev: 2.5728702066952913e-7",
            "extra": "mean: 1.9759284803327526 usec\nrounds: 165625"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 503738.7235063653,
            "unit": "iter/sec",
            "range": "stddev: 2.5027505734999995e-7",
            "extra": "mean: 1.9851561004469092 usec\nrounds: 161891"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 510674.25200096716,
            "unit": "iter/sec",
            "range": "stddev: 2.4614672338506376e-7",
            "extra": "mean: 1.9581954564611694 usec\nrounds: 159914"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511315.8589904967,
            "unit": "iter/sec",
            "range": "stddev: 2.3124908112905133e-7",
            "extra": "mean: 1.955738282740387 usec\nrounds: 172213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 502651.28426113393,
            "unit": "iter/sec",
            "range": "stddev: 4.207894107737877e-7",
            "extra": "mean: 1.98945080080704 usec\nrounds: 26410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 498520.4141201363,
            "unit": "iter/sec",
            "range": "stddev: 2.9447181863474266e-7",
            "extra": "mean: 2.0059359088934205 usec\nrounds: 152857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 497192.4470277923,
            "unit": "iter/sec",
            "range": "stddev: 2.8057241302556763e-7",
            "extra": "mean: 2.0112936267998083 usec\nrounds: 163084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 481456.0495691548,
            "unit": "iter/sec",
            "range": "stddev: 0.00002771118797814761",
            "extra": "mean: 2.0770327860557147 usec\nrounds: 169001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 501785.8703415973,
            "unit": "iter/sec",
            "range": "stddev: 2.608558516588963e-7",
            "extra": "mean: 1.9928819424892072 usec\nrounds: 159926"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 503814.48141198856,
            "unit": "iter/sec",
            "range": "stddev: 2.0767667766976383e-7",
            "extra": "mean: 1.984857595195366 usec\nrounds: 27053"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 491024.9567162926,
            "unit": "iter/sec",
            "range": "stddev: 3.094971765360312e-7",
            "extra": "mean: 2.0365563630155483 usec\nrounds: 160861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 495983.25942539645,
            "unit": "iter/sec",
            "range": "stddev: 2.7482412338472204e-7",
            "extra": "mean: 2.0161970812452705 usec\nrounds: 123518"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 493428.75191092084,
            "unit": "iter/sec",
            "range": "stddev: 3.3122709108722646e-7",
            "extra": "mean: 2.0266350433112397 usec\nrounds: 161005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 494961.3247776022,
            "unit": "iter/sec",
            "range": "stddev: 2.414678288803127e-7",
            "extra": "mean: 2.0203598744797353 usec\nrounds: 149797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 485452.7833471326,
            "unit": "iter/sec",
            "range": "stddev: 3.243546024479434e-7",
            "extra": "mean: 2.059932570795315 usec\nrounds: 21121"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 488974.05697029026,
            "unit": "iter/sec",
            "range": "stddev: 2.684921046768266e-7",
            "extra": "mean: 2.045098274121237 usec\nrounds: 154507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 480995.4584718904,
            "unit": "iter/sec",
            "range": "stddev: 2.825873701905258e-7",
            "extra": "mean: 2.0790217088056777 usec\nrounds: 152716"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 480819.3812675944,
            "unit": "iter/sec",
            "range": "stddev: 2.8028746560311313e-7",
            "extra": "mean: 2.079783051514435 usec\nrounds: 149183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 481451.1584994554,
            "unit": "iter/sec",
            "range": "stddev: 3.0051939606939945e-7",
            "extra": "mean: 2.0770538866636272 usec\nrounds: 157279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54073.243320760994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012820597298564552",
            "extra": "mean: 18.493434804123503 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40582.69275428129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011226695959867171",
            "extra": "mean: 24.64104602557465 usec\nrounds: 18853"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.11 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "c7a90adfd87d6e690f703a35715c25ed82ae13d6",
          "message": "Add more Python and OS versions",
          "timestamp": "2023-09-28T07:53:14Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/c7a90adfd87d6e690f703a35715c25ed82ae13d6"
        },
        "date": 1696432200140,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 929198.4124606259,
            "unit": "iter/sec",
            "range": "stddev: 1.915724676824186e-7",
            "extra": "mean: 1.0761964146622713 usec\nrounds: 24728"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 875777.324434704,
            "unit": "iter/sec",
            "range": "stddev: 1.9805393150306872e-7",
            "extra": "mean: 1.1418427631081667 usec\nrounds: 91527"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 770809.0282171104,
            "unit": "iter/sec",
            "range": "stddev: 1.9098980232308657e-7",
            "extra": "mean: 1.29733820361836 usec\nrounds: 119731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682218.8348968416,
            "unit": "iter/sec",
            "range": "stddev: 2.602660751826783e-7",
            "extra": "mean: 1.4658053235238078 usec\nrounds: 89390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569491.387419647,
            "unit": "iter/sec",
            "range": "stddev: 2.5286996255567673e-7",
            "extra": "mean: 1.7559528064699594 usec\nrounds: 115874"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 911367.1788023921,
            "unit": "iter/sec",
            "range": "stddev: 1.4120665439427514e-7",
            "extra": "mean: 1.0972525928726975 usec\nrounds: 56539"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 882680.5090166925,
            "unit": "iter/sec",
            "range": "stddev: 2.0901717738641342e-7",
            "extra": "mean: 1.1329127467808275 usec\nrounds: 142124"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 784110.107212703,
            "unit": "iter/sec",
            "range": "stddev: 2.013653870725066e-7",
            "extra": "mean: 1.2753310929184762 usec\nrounds: 120510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 667835.4047529879,
            "unit": "iter/sec",
            "range": "stddev: 3.5277812333608635e-7",
            "extra": "mean: 1.4973749413148734 usec\nrounds: 114539"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 565480.4419060125,
            "unit": "iter/sec",
            "range": "stddev: 2.821686440941649e-7",
            "extra": "mean: 1.768407757179705 usec\nrounds: 108094"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 941220.6164980457,
            "unit": "iter/sec",
            "range": "stddev: 1.371621601645456e-7",
            "extra": "mean: 1.0624501657439804 usec\nrounds: 34348"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 890936.4010008525,
            "unit": "iter/sec",
            "range": "stddev: 1.7876178524521213e-7",
            "extra": "mean: 1.1224145728882877 usec\nrounds: 133509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 795869.2501934234,
            "unit": "iter/sec",
            "range": "stddev: 2.548249760337896e-7",
            "extra": "mean: 1.2564877958998488 usec\nrounds: 49391"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 686439.0039078004,
            "unit": "iter/sec",
            "range": "stddev: 1.9394984130511378e-7",
            "extra": "mean: 1.456793676214698 usec\nrounds: 128523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 573887.8898952757,
            "unit": "iter/sec",
            "range": "stddev: 2.9404887461797613e-7",
            "extra": "mean: 1.7425006131118783 usec\nrounds: 121637"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 743350.3809917589,
            "unit": "iter/sec",
            "range": "stddev: 1.1645072551715118e-7",
            "extra": "mean: 1.3452606275197247 usec\nrounds: 3877"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 795634.8759444696,
            "unit": "iter/sec",
            "range": "stddev: 1.0889244854836119e-7",
            "extra": "mean: 1.2568579259587331 usec\nrounds: 189440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 736857.3370016441,
            "unit": "iter/sec",
            "range": "stddev: 2.331762234597951e-7",
            "extra": "mean: 1.3571148033472982 usec\nrounds: 156363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 786862.4627281455,
            "unit": "iter/sec",
            "range": "stddev: 1.138011371881089e-7",
            "extra": "mean: 1.2708701296194527 usec\nrounds: 87010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 793228.2657636267,
            "unit": "iter/sec",
            "range": "stddev: 1.0290516025045485e-7",
            "extra": "mean: 1.2606711625906548 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 754919.6323676772,
            "unit": "iter/sec",
            "range": "stddev: 8.474017619998991e-8",
            "extra": "mean: 1.3246443159302534 usec\nrounds: 16759"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 800404.8215421445,
            "unit": "iter/sec",
            "range": "stddev: 1.0906381581219424e-7",
            "extra": "mean: 1.249367786257577 usec\nrounds: 190837"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 753987.1148593919,
            "unit": "iter/sec",
            "range": "stddev: 2.749549133593105e-7",
            "extra": "mean: 1.3262826118540316 usec\nrounds: 195457"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 800133.3884189667,
            "unit": "iter/sec",
            "range": "stddev: 1.4714188854229294e-7",
            "extra": "mean: 1.24979161534049 usec\nrounds: 198566"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 803393.28338606,
            "unit": "iter/sec",
            "range": "stddev: 1.1142917390733918e-7",
            "extra": "mean: 1.244720388730787 usec\nrounds: 193572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 729842.9066992388,
            "unit": "iter/sec",
            "range": "stddev: 4.788964902631121e-7",
            "extra": "mean: 1.3701578666052452 usec\nrounds: 26281"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 788465.3912630905,
            "unit": "iter/sec",
            "range": "stddev: 1.3045451524970799e-7",
            "extra": "mean: 1.2682864854702618 usec\nrounds: 55477"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 782343.45549363,
            "unit": "iter/sec",
            "range": "stddev: 1.6018964551384477e-7",
            "extra": "mean: 1.278210986463786 usec\nrounds: 183719"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 784787.1135500827,
            "unit": "iter/sec",
            "range": "stddev: 1.1981417416270842e-7",
            "extra": "mean: 1.2742309127329765 usec\nrounds: 184366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 785123.8605041036,
            "unit": "iter/sec",
            "range": "stddev: 1.0542607184928211e-7",
            "extra": "mean: 1.273684383197743 usec\nrounds: 193154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 739510.5870607184,
            "unit": "iter/sec",
            "range": "stddev: 1.6093802948366943e-7",
            "extra": "mean: 1.352245684506872 usec\nrounds: 27797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 780004.9376139637,
            "unit": "iter/sec",
            "range": "stddev: 1.1666899504317775e-7",
            "extra": "mean: 1.2820431663663585 usec\nrounds: 190448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 785813.9769223435,
            "unit": "iter/sec",
            "range": "stddev: 1.026252044632221e-7",
            "extra": "mean: 1.2725658099344586 usec\nrounds: 187800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 782617.6649339838,
            "unit": "iter/sec",
            "range": "stddev: 1.0863104576482604e-7",
            "extra": "mean: 1.2777631336552477 usec\nrounds: 192117"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 784642.656479694,
            "unit": "iter/sec",
            "range": "stddev: 1.1850830810432485e-7",
            "extra": "mean: 1.2744655057201562 usec\nrounds: 191826"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 692495.6047184311,
            "unit": "iter/sec",
            "range": "stddev: 2.9537667360960415e-7",
            "extra": "mean: 1.444052486667551 usec\nrounds: 23830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 707469.0298099272,
            "unit": "iter/sec",
            "range": "stddev: 3.473981892252881e-7",
            "extra": "mean: 1.4134894360939954 usec\nrounds: 176574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 741586.2526011707,
            "unit": "iter/sec",
            "range": "stddev: 1.1117578775430723e-7",
            "extra": "mean: 1.3484608115272139 usec\nrounds: 185144"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 694654.3008757026,
            "unit": "iter/sec",
            "range": "stddev: 2.987474468045983e-7",
            "extra": "mean: 1.4395649731663205 usec\nrounds: 189223"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 694578.642656847,
            "unit": "iter/sec",
            "range": "stddev: 2.759111781262647e-7",
            "extra": "mean: 1.4397217803514364 usec\nrounds: 185432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67249.667992359,
            "unit": "iter/sec",
            "range": "stddev: 0.000004952892707946476",
            "extra": "mean: 14.869961887598038 usec\nrounds: 38"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57610.920584317086,
            "unit": "iter/sec",
            "range": "stddev: 8.92000277299496e-7",
            "extra": "mean: 17.357820181617114 usec\nrounds: 19203"
          }
        ]
      }
    ]
  }
}