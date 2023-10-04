window.BENCHMARK_DATA = {
  "lastUpdate": 1696451001642,
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433255419,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 609624.0008416838,
            "unit": "iter/sec",
            "range": "stddev: 1.7932045780755307e-7",
            "extra": "mean: 1.6403553643218436 usec\nrounds: 28242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 583273.2293985104,
            "unit": "iter/sec",
            "range": "stddev: 2.483356395261072e-7",
            "extra": "mean: 1.7144623644586454 usec\nrounds: 75177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 541757.2666911058,
            "unit": "iter/sec",
            "range": "stddev: 2.7825588479185034e-7",
            "extra": "mean: 1.845845107178176 usec\nrounds: 103424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 494709.1863975548,
            "unit": "iter/sec",
            "range": "stddev: 2.031531298470811e-7",
            "extra": "mean: 2.021389591088747 usec\nrounds: 90934"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 423918.9350224791,
            "unit": "iter/sec",
            "range": "stddev: 2.969751746140035e-7",
            "extra": "mean: 2.3589415744002404 usec\nrounds: 97952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 619435.6158017394,
            "unit": "iter/sec",
            "range": "stddev: 2.5970475254547086e-7",
            "extra": "mean: 1.6143727846609106 usec\nrounds: 57640"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 584671.3883602361,
            "unit": "iter/sec",
            "range": "stddev: 2.6118413952998697e-7",
            "extra": "mean: 1.7103624701126399 usec\nrounds: 99091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 542181.4324532121,
            "unit": "iter/sec",
            "range": "stddev: 2.0949303145318596e-7",
            "extra": "mean: 1.8444010439001812 usec\nrounds: 97419"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 483829.73930240417,
            "unit": "iter/sec",
            "range": "stddev: 3.2272789973990767e-7",
            "extra": "mean: 2.066842772918054 usec\nrounds: 98844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 425359.773793083,
            "unit": "iter/sec",
            "range": "stddev: 3.5067038348786945e-7",
            "extra": "mean: 2.3509510339509716 usec\nrounds: 100060"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 605387.2627770752,
            "unit": "iter/sec",
            "range": "stddev: 1.638847469559118e-7",
            "extra": "mean: 1.6518352160445686 usec\nrounds: 294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 592896.5969046861,
            "unit": "iter/sec",
            "range": "stddev: 3.0052266284889516e-7",
            "extra": "mean: 1.6866347441032112 usec\nrounds: 93264"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 544773.3451610652,
            "unit": "iter/sec",
            "range": "stddev: 2.2378850517782485e-7",
            "extra": "mean: 1.8356257861778178 usec\nrounds: 94288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 495313.60258450574,
            "unit": "iter/sec",
            "range": "stddev: 2.3268364703059092e-7",
            "extra": "mean: 2.0189229505955057 usec\nrounds: 90182"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 430144.9962234223,
            "unit": "iter/sec",
            "range": "stddev: 2.8411579764234816e-7",
            "extra": "mean: 2.324797472433199 usec\nrounds: 88480"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 497124.3715299595,
            "unit": "iter/sec",
            "range": "stddev: 5.702321962926494e-7",
            "extra": "mean: 2.0115690504619215 usec\nrounds: 2989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 511821.22267712984,
            "unit": "iter/sec",
            "range": "stddev: 2.699353496435747e-7",
            "extra": "mean: 1.9538072195783602 usec\nrounds: 159653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 521335.1117349679,
            "unit": "iter/sec",
            "range": "stddev: 2.938799492782178e-7",
            "extra": "mean: 1.9181520244666963 usec\nrounds: 162738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 519066.7653220078,
            "unit": "iter/sec",
            "range": "stddev: 2.4058781680884074e-7",
            "extra": "mean: 1.9265344398993467 usec\nrounds: 152445"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 517580.84745802864,
            "unit": "iter/sec",
            "range": "stddev: 2.798815319373957e-7",
            "extra": "mean: 1.9320653090454463 usec\nrounds: 164357"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 514594.6639728175,
            "unit": "iter/sec",
            "range": "stddev: 2.1822232559538485e-7",
            "extra": "mean: 1.943277048929569 usec\nrounds: 21447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 513194.86805851286,
            "unit": "iter/sec",
            "range": "stddev: 3.0795843301769234e-7",
            "extra": "mean: 1.948577552583755 usec\nrounds: 153821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 511514.9309580872,
            "unit": "iter/sec",
            "range": "stddev: 2.934317928976184e-7",
            "extra": "mean: 1.9549771462720773 usec\nrounds: 161284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 513034.2441322137,
            "unit": "iter/sec",
            "range": "stddev: 3.2040152186483376e-7",
            "extra": "mean: 1.9491876252655966 usec\nrounds: 158510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511221.34233972087,
            "unit": "iter/sec",
            "range": "stddev: 3.007861776573064e-7",
            "extra": "mean: 1.9560998674728098 usec\nrounds: 181591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 508766.8336455761,
            "unit": "iter/sec",
            "range": "stddev: 1.1816466463783615e-7",
            "extra": "mean: 1.9655369294308862 usec\nrounds: 28400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 499551.09335981123,
            "unit": "iter/sec",
            "range": "stddev: 2.5242896865241146e-7",
            "extra": "mean: 2.001797240146827 usec\nrounds: 158697"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 502611.752308138,
            "unit": "iter/sec",
            "range": "stddev: 2.7011413926412584e-7",
            "extra": "mean: 1.9896072772029543 usec\nrounds: 155694"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 489118.3015899382,
            "unit": "iter/sec",
            "range": "stddev: 0.000027302213963031602",
            "extra": "mean: 2.0444951594519756 usec\nrounds: 172185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 502730.1723780139,
            "unit": "iter/sec",
            "range": "stddev: 2.404657327447214e-7",
            "extra": "mean: 1.9891386173815684 usec\nrounds: 152575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 498150.40909139306,
            "unit": "iter/sec",
            "range": "stddev: 3.00975165806362e-7",
            "extra": "mean: 2.007425833141362 usec\nrounds: 28259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 505322.00087874976,
            "unit": "iter/sec",
            "range": "stddev: 2.711135057778829e-7",
            "extra": "mean: 1.978936199613336 usec\nrounds: 170071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 501655.5589830926,
            "unit": "iter/sec",
            "range": "stddev: 2.650427426927151e-7",
            "extra": "mean: 1.9933996187087069 usec\nrounds: 169200"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 498802.0587045016,
            "unit": "iter/sec",
            "range": "stddev: 5.959345132689278e-7",
            "extra": "mean: 2.004803273260779 usec\nrounds: 168009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 502963.7177492047,
            "unit": "iter/sec",
            "range": "stddev: 3.7304221915101815e-7",
            "extra": "mean: 1.9882149839258088 usec\nrounds: 110667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 492089.33473304124,
            "unit": "iter/sec",
            "range": "stddev: 2.3525279935885e-7",
            "extra": "mean: 2.032151338013657 usec\nrounds: 20903"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 491495.4044776525,
            "unit": "iter/sec",
            "range": "stddev: 3.331436641689828e-7",
            "extra": "mean: 2.0346070194954757 usec\nrounds: 145711"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 487766.08989820373,
            "unit": "iter/sec",
            "range": "stddev: 2.906707039942577e-7",
            "extra": "mean: 2.0501630201654626 usec\nrounds: 151959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 480620.6574744595,
            "unit": "iter/sec",
            "range": "stddev: 2.8333619969633035e-7",
            "extra": "mean: 2.080642986206103 usec\nrounds: 158873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 482293.0940945124,
            "unit": "iter/sec",
            "range": "stddev: 2.3680373835389098e-7",
            "extra": "mean: 2.0734279885915914 usec\nrounds: 138218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54587.19275069703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034551305193729317",
            "extra": "mean: 18.319315385333326 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41291.63544604051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010622647964967734",
            "extra": "mean: 24.21797996610693 usec\nrounds: 14889"
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433355098,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 625067.4940907882,
            "unit": "iter/sec",
            "range": "stddev: 1.9890104810377043e-7",
            "extra": "mean: 1.5998272337847002 usec\nrounds: 29035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 594455.9269676271,
            "unit": "iter/sec",
            "range": "stddev: 2.2602089940141615e-7",
            "extra": "mean: 1.6822104964132318 usec\nrounds: 85238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 546494.1423273046,
            "unit": "iter/sec",
            "range": "stddev: 5.24119686303105e-7",
            "extra": "mean: 1.8298457797578425 usec\nrounds: 94263"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 498322.5472323096,
            "unit": "iter/sec",
            "range": "stddev: 2.6463663805921925e-7",
            "extra": "mean: 2.006732397628833 usec\nrounds: 91652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 429831.16597817396,
            "unit": "iter/sec",
            "range": "stddev: 2.458518336216902e-7",
            "extra": "mean: 2.3264948639177505 usec\nrounds: 88505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 619746.0139858995,
            "unit": "iter/sec",
            "range": "stddev: 1.8618917443671118e-7",
            "extra": "mean: 1.613564230237634 usec\nrounds: 56440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 595909.6509396298,
            "unit": "iter/sec",
            "range": "stddev: 5.989679542751689e-7",
            "extra": "mean: 1.6781067371927958 usec\nrounds: 92568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 551564.7016848666,
            "unit": "iter/sec",
            "range": "stddev: 2.535451629617569e-7",
            "extra": "mean: 1.8130239243832984 usec\nrounds: 100084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 502852.38773717824,
            "unit": "iter/sec",
            "range": "stddev: 2.447462566956173e-7",
            "extra": "mean: 1.9886551687662697 usec\nrounds: 100439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 432801.9855624403,
            "unit": "iter/sec",
            "range": "stddev: 2.654747381308311e-7",
            "extra": "mean: 2.310525444333319 usec\nrounds: 86214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 605680.223226709,
            "unit": "iter/sec",
            "range": "stddev: 4.748746776153867e-7",
            "extra": "mean: 1.6510362426439922 usec\nrounds: 300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 595433.6287091452,
            "unit": "iter/sec",
            "range": "stddev: 5.76670174862972e-7",
            "extra": "mean: 1.6794483075601958 usec\nrounds: 90330"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 555730.4782669919,
            "unit": "iter/sec",
            "range": "stddev: 2.1931395904361816e-7",
            "extra": "mean: 1.7994334288060514 usec\nrounds: 91679"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 503829.96225782594,
            "unit": "iter/sec",
            "range": "stddev: 2.616850811779356e-7",
            "extra": "mean: 1.9847966078052897 usec\nrounds: 90269"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 435204.86867369077,
            "unit": "iter/sec",
            "range": "stddev: 2.561687927946697e-7",
            "extra": "mean: 2.297768412029837 usec\nrounds: 91142"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 513044.05935510196,
            "unit": "iter/sec",
            "range": "stddev: 1.1967356368100334e-7",
            "extra": "mean: 1.9491503346847117 usec\nrounds: 2937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 523738.8501357467,
            "unit": "iter/sec",
            "range": "stddev: 4.7218907523942596e-7",
            "extra": "mean: 1.9093485231061476 usec\nrounds: 149536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 524847.188815661,
            "unit": "iter/sec",
            "range": "stddev: 2.5781750200254703e-7",
            "extra": "mean: 1.905316483177781 usec\nrounds: 147950"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 525427.2271132157,
            "unit": "iter/sec",
            "range": "stddev: 2.618480650461936e-7",
            "extra": "mean: 1.9032131347554369 usec\nrounds: 148154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 525155.3457578985,
            "unit": "iter/sec",
            "range": "stddev: 4.640455781054429e-7",
            "extra": "mean: 1.9041984587566385 usec\nrounds: 144993"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 520374.4256715174,
            "unit": "iter/sec",
            "range": "stddev: 3.11373086759657e-7",
            "extra": "mean: 1.9216932090956422 usec\nrounds: 20409"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 521038.17667539493,
            "unit": "iter/sec",
            "range": "stddev: 2.465101299767142e-7",
            "extra": "mean: 1.9192451623808686 usec\nrounds: 158909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 519872.6178639811,
            "unit": "iter/sec",
            "range": "stddev: 4.672484252159503e-7",
            "extra": "mean: 1.923548126286657 usec\nrounds: 157973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 520343.952710579,
            "unit": "iter/sec",
            "range": "stddev: 2.9040884500380864e-7",
            "extra": "mean: 1.92180574942938 usec\nrounds: 161843"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 522356.25808872766,
            "unit": "iter/sec",
            "range": "stddev: 2.858749431897769e-7",
            "extra": "mean: 1.914402258066064 usec\nrounds: 163618"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 509358.72335776745,
            "unit": "iter/sec",
            "range": "stddev: 2.429831335345914e-7",
            "extra": "mean: 1.9632529181160447 usec\nrounds: 22806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 511089.55530954996,
            "unit": "iter/sec",
            "range": "stddev: 4.74023477447095e-7",
            "extra": "mean: 1.9566042577300045 usec\nrounds: 144011"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 509512.75199090154,
            "unit": "iter/sec",
            "range": "stddev: 2.570222780630163e-7",
            "extra": "mean: 1.9626594154759394 usec\nrounds: 156648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 495773.861234985,
            "unit": "iter/sec",
            "range": "stddev: 0.000026626436205848937",
            "extra": "mean: 2.017048655023835 usec\nrounds: 162973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 512624.57744263794,
            "unit": "iter/sec",
            "range": "stddev: 2.7268830891050726e-7",
            "extra": "mean: 1.9507453290452093 usec\nrounds: 149069"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 509219.7244435217,
            "unit": "iter/sec",
            "range": "stddev: 2.250546338977722e-7",
            "extra": "mean: 1.9637888164933237 usec\nrounds: 27313"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 504617.5060936073,
            "unit": "iter/sec",
            "range": "stddev: 2.389338251413215e-7",
            "extra": "mean: 1.9816989857155265 usec\nrounds: 156797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 507094.3790360912,
            "unit": "iter/sec",
            "range": "stddev: 3.07597478347443e-7",
            "extra": "mean: 1.9720194925071877 usec\nrounds: 160392"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 505512.82913281035,
            "unit": "iter/sec",
            "range": "stddev: 3.159770989205553e-7",
            "extra": "mean: 1.978189162311598 usec\nrounds: 154207"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 504023.36856682,
            "unit": "iter/sec",
            "range": "stddev: 4.930839255093432e-7",
            "extra": "mean: 1.984034991955788 usec\nrounds: 143597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 495372.449522512,
            "unit": "iter/sec",
            "range": "stddev: 1.967844935100157e-7",
            "extra": "mean: 2.0186831160350094 usec\nrounds: 24297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 497360.9574881824,
            "unit": "iter/sec",
            "range": "stddev: 2.9709896927237504e-7",
            "extra": "mean: 2.0106121820463976 usec\nrounds: 155121"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 494904.148200422,
            "unit": "iter/sec",
            "range": "stddev: 2.6159348446820385e-7",
            "extra": "mean: 2.0205932878845636 usec\nrounds: 139140"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 483165.337251773,
            "unit": "iter/sec",
            "range": "stddev: 4.995939621490312e-7",
            "extra": "mean: 2.0696848943841126 usec\nrounds: 138852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 491318.5280987623,
            "unit": "iter/sec",
            "range": "stddev: 2.387802058196353e-7",
            "extra": "mean: 2.0353394850987283 usec\nrounds: 137176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 53855.23753855084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020629369946549703",
            "extra": "mean: 18.568296152889058 usec\nrounds: 89"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40213.542069497744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017297046524224772",
            "extra": "mean: 24.867244926392775 usec\nrounds: 18376"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449378588,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 617105.4840139596,
            "unit": "iter/sec",
            "range": "stddev: 3.2136286277164883e-7",
            "extra": "mean: 1.620468503205489 usec\nrounds: 29153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 591512.632578471,
            "unit": "iter/sec",
            "range": "stddev: 2.070308944208826e-7",
            "extra": "mean: 1.690580969743429 usec\nrounds: 92780"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 543246.4001529322,
            "unit": "iter/sec",
            "range": "stddev: 2.41333397496426e-7",
            "extra": "mean: 1.8407853226795146 usec\nrounds: 107219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 496025.93665006955,
            "unit": "iter/sec",
            "range": "stddev: 2.581399303021278e-7",
            "extra": "mean: 2.016023611090861 usec\nrounds: 100911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 428428.2684553546,
            "unit": "iter/sec",
            "range": "stddev: 2.8369402441398265e-7",
            "extra": "mean: 2.334113021079064 usec\nrounds: 96734"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 616620.8234932622,
            "unit": "iter/sec",
            "range": "stddev: 1.9640802600823018e-7",
            "extra": "mean: 1.6217421823914886 usec\nrounds: 57157"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 588075.0355338077,
            "unit": "iter/sec",
            "range": "stddev: 3.4484092823257374e-7",
            "extra": "mean: 1.7004632735213452 usec\nrounds: 105342"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 539143.7847531892,
            "unit": "iter/sec",
            "range": "stddev: 2.3023175802152971e-7",
            "extra": "mean: 1.8547927812202878 usec\nrounds: 103909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 492806.6439168839,
            "unit": "iter/sec",
            "range": "stddev: 2.4285706212125714e-7",
            "extra": "mean: 2.0291934216874288 usec\nrounds: 90562"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 429683.86297791795,
            "unit": "iter/sec",
            "range": "stddev: 2.900917254067894e-7",
            "extra": "mean: 2.327292426272456 usec\nrounds: 100439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 608934.0455802813,
            "unit": "iter/sec",
            "range": "stddev: 1.7611491169906117e-7",
            "extra": "mean: 1.6422139758125265 usec\nrounds: 282"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 597778.2705547188,
            "unit": "iter/sec",
            "range": "stddev: 2.1169262975877735e-7",
            "extra": "mean: 1.672861074511846 usec\nrounds: 86439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 548588.5022918558,
            "unit": "iter/sec",
            "range": "stddev: 2.1964759579446497e-7",
            "extra": "mean: 1.822859932029687 usec\nrounds: 92501"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 493365.37912711065,
            "unit": "iter/sec",
            "range": "stddev: 3.1938476633982477e-7",
            "extra": "mean: 2.026895364586091 usec\nrounds: 94375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 430374.95132306905,
            "unit": "iter/sec",
            "range": "stddev: 2.6412350052001386e-7",
            "extra": "mean: 2.3235553020122937 usec\nrounds: 89352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 504607.2081445972,
            "unit": "iter/sec",
            "range": "stddev: 3.1252105930192095e-7",
            "extra": "mean: 1.9817394279343032 usec\nrounds: 2984"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 515215.3316395849,
            "unit": "iter/sec",
            "range": "stddev: 2.680047688054582e-7",
            "extra": "mean: 1.9409360292475586 usec\nrounds: 167707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 512434.0040902553,
            "unit": "iter/sec",
            "range": "stddev: 2.6632816381584237e-7",
            "extra": "mean: 1.9514708079830498 usec\nrounds: 157302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 512646.60886709567,
            "unit": "iter/sec",
            "range": "stddev: 2.634054736047615e-7",
            "extra": "mean: 1.9506614941039264 usec\nrounds: 177581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 514809.2819399462,
            "unit": "iter/sec",
            "range": "stddev: 2.721622115004814e-7",
            "extra": "mean: 1.942466919461356 usec\nrounds: 170058"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 519643.8777607151,
            "unit": "iter/sec",
            "range": "stddev: 2.679000005146677e-7",
            "extra": "mean: 1.9243948457725863 usec\nrounds: 19927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 519553.18484807137,
            "unit": "iter/sec",
            "range": "stddev: 2.842599453574355e-7",
            "extra": "mean: 1.9247307670578937 usec\nrounds: 55492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 519016.6370019338,
            "unit": "iter/sec",
            "range": "stddev: 2.551508742660048e-7",
            "extra": "mean: 1.9267205108807988 usec\nrounds: 181960"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 517856.6900371974,
            "unit": "iter/sec",
            "range": "stddev: 2.6407855340501803e-7",
            "extra": "mean: 1.9310361712777533 usec\nrounds: 163906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 510568.0092647547,
            "unit": "iter/sec",
            "range": "stddev: 2.562375962734945e-7",
            "extra": "mean: 1.958602932134455 usec\nrounds: 173101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 513623.27977050893,
            "unit": "iter/sec",
            "range": "stddev: 1.4120286730466895e-7",
            "extra": "mean: 1.9469522496075493 usec\nrounds: 27120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 509322.73061708355,
            "unit": "iter/sec",
            "range": "stddev: 2.807454141435642e-7",
            "extra": "mean: 1.9633916569724332 usec\nrounds: 170978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 505802.6932935251,
            "unit": "iter/sec",
            "range": "stddev: 3.212823312101142e-7",
            "extra": "mean: 1.9770555065425177 usec\nrounds: 150395"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 492156.0323436816,
            "unit": "iter/sec",
            "range": "stddev: 0.000028380005744161592",
            "extra": "mean: 2.0318759382830884 usec\nrounds: 153821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 504521.07389299944,
            "unit": "iter/sec",
            "range": "stddev: 3.088394841974578e-7",
            "extra": "mean: 1.9820777599710004 usec\nrounds: 163456"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 504956.66348090494,
            "unit": "iter/sec",
            "range": "stddev: 2.5666224989880723e-7",
            "extra": "mean: 1.9803679648596524 usec\nrounds: 27079"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 506362.63449648826,
            "unit": "iter/sec",
            "range": "stddev: 3.446201841664461e-7",
            "extra": "mean: 1.9748692574727005 usec\nrounds: 158183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 503807.4720145171,
            "unit": "iter/sec",
            "range": "stddev: 3.035299963967051e-7",
            "extra": "mean: 1.984885210220116 usec\nrounds: 171470"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 508235.50362179184,
            "unit": "iter/sec",
            "range": "stddev: 2.76533205482449e-7",
            "extra": "mean: 1.9675917815142632 usec\nrounds: 180507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 505789.55854985,
            "unit": "iter/sec",
            "range": "stddev: 2.702025101378576e-7",
            "extra": "mean: 1.9771068482850884 usec\nrounds: 172767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 496152.6933953393,
            "unit": "iter/sec",
            "range": "stddev: 2.0414224618045309e-7",
            "extra": "mean: 2.015508558779888 usec\nrounds: 23613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 492297.6235786736,
            "unit": "iter/sec",
            "range": "stddev: 2.653137936513581e-7",
            "extra": "mean: 2.0312915441896116 usec\nrounds: 156831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 494323.24787976284,
            "unit": "iter/sec",
            "range": "stddev: 2.7748058981948133e-7",
            "extra": "mean: 2.02296777319127 usec\nrounds: 160668"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 489270.26592903154,
            "unit": "iter/sec",
            "range": "stddev: 3.012083755801466e-7",
            "extra": "mean: 2.043860151814436 usec\nrounds: 162075"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 485125.05426580075,
            "unit": "iter/sec",
            "range": "stddev: 2.747258414736534e-7",
            "extra": "mean: 2.0613241703490717 usec\nrounds: 141320"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54237.101711317635,
            "unit": "iter/sec",
            "range": "stddev: 0.000002442388661001097",
            "extra": "mean: 18.43756337354823 usec\nrounds: 82"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41466.51381208783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010104550668116284",
            "extra": "mean: 24.115844522924224 usec\nrounds: 14548"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449482749,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 617562.6388590682,
            "unit": "iter/sec",
            "range": "stddev: 2.505754192733569e-7",
            "extra": "mean: 1.6192689406332537 usec\nrounds: 24162"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 594880.9631008455,
            "unit": "iter/sec",
            "range": "stddev: 2.0370856396404302e-7",
            "extra": "mean: 1.6810085748709325 usec\nrounds: 74594"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 543532.3007834274,
            "unit": "iter/sec",
            "range": "stddev: 2.433025283334331e-7",
            "extra": "mean: 1.8398170606579165 usec\nrounds: 91777"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 494990.33261205576,
            "unit": "iter/sec",
            "range": "stddev: 3.04108921379549e-7",
            "extra": "mean: 2.0202414756729015 usec\nrounds: 96167"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 434107.62242563756,
            "unit": "iter/sec",
            "range": "stddev: 2.6322041139007864e-7",
            "extra": "mean: 2.303576229351512 usec\nrounds: 99967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 620206.2250657843,
            "unit": "iter/sec",
            "range": "stddev: 2.1384430508554147e-7",
            "extra": "mean: 1.612366918590557 usec\nrounds: 33236"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 585649.88649434,
            "unit": "iter/sec",
            "range": "stddev: 1.9438623857538783e-7",
            "extra": "mean: 1.7075048131332038 usec\nrounds: 96935"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 546637.3859743655,
            "unit": "iter/sec",
            "range": "stddev: 2.2573478245918043e-7",
            "extra": "mean: 1.8293662776422228 usec\nrounds: 98149"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 492059.5006681593,
            "unit": "iter/sec",
            "range": "stddev: 3.4195976705019123e-7",
            "extra": "mean: 2.032274549403308 usec\nrounds: 99865"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 429922.38179569604,
            "unit": "iter/sec",
            "range": "stddev: 2.935338110878582e-7",
            "extra": "mean: 2.326001255908587 usec\nrounds: 75953"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 626757.335795357,
            "unit": "iter/sec",
            "range": "stddev: 1.4333348178343306e-7",
            "extra": "mean: 1.5955138342832427 usec\nrounds: 306"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 598021.2931630792,
            "unit": "iter/sec",
            "range": "stddev: 2.287359768478908e-7",
            "extra": "mean: 1.6721812608222664 usec\nrounds: 94770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 553719.1073305534,
            "unit": "iter/sec",
            "range": "stddev: 2.648637236525143e-7",
            "extra": "mean: 1.805969826146943 usec\nrounds: 95610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 501514.92798664205,
            "unit": "iter/sec",
            "range": "stddev: 3.062185934318547e-7",
            "extra": "mean: 1.9939585926475856 usec\nrounds: 92072"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 432278.83838055714,
            "unit": "iter/sec",
            "range": "stddev: 4.5814698300358927e-7",
            "extra": "mean: 2.313321660033816 usec\nrounds: 90197"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 507219.92155711766,
            "unit": "iter/sec",
            "range": "stddev: 1.1363477713038093e-7",
            "extra": "mean: 1.9715313959477254 usec\nrounds: 2984"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 509405.5914496698,
            "unit": "iter/sec",
            "range": "stddev: 2.627071363938954e-7",
            "extra": "mean: 1.9630722881431149 usec\nrounds: 160500"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 510753.5919798117,
            "unit": "iter/sec",
            "range": "stddev: 2.3385491233142493e-7",
            "extra": "mean: 1.9578912722350983 usec\nrounds: 158603"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 515506.7923035804,
            "unit": "iter/sec",
            "range": "stddev: 2.682211237043171e-7",
            "extra": "mean: 1.9398386499068727 usec\nrounds: 145268"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 514452.109177235,
            "unit": "iter/sec",
            "range": "stddev: 2.6545935401682015e-7",
            "extra": "mean: 1.9438155314384917 usec\nrounds: 171347"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 512695.8216426252,
            "unit": "iter/sec",
            "range": "stddev: 1.261821075016549e-7",
            "extra": "mean: 1.9504742535176158 usec\nrounds: 19939"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 513907.82916173607,
            "unit": "iter/sec",
            "range": "stddev: 2.5820220660019477e-7",
            "extra": "mean: 1.945874227351539 usec\nrounds: 167315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 520834.5320224249,
            "unit": "iter/sec",
            "range": "stddev: 2.5850570171322697e-7",
            "extra": "mean: 1.9199955811627025 usec\nrounds: 160909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 516383.9222580974,
            "unit": "iter/sec",
            "range": "stddev: 2.7540573587446156e-7",
            "extra": "mean: 1.9365436391340303 usec\nrounds: 173017"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 515727.129940768,
            "unit": "iter/sec",
            "range": "stddev: 2.449902878163053e-7",
            "extra": "mean: 1.9390098793423016 usec\nrounds: 52185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 515958.1140372874,
            "unit": "iter/sec",
            "range": "stddev: 2.5687933170806837e-7",
            "extra": "mean: 1.9381418235196737 usec\nrounds: 28841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 506294.0119569356,
            "unit": "iter/sec",
            "range": "stddev: 2.2615473907987903e-7",
            "extra": "mean: 1.9751369291032779 usec\nrounds: 51503"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 504031.7026626326,
            "unit": "iter/sec",
            "range": "stddev: 2.5296630116947054e-7",
            "extra": "mean: 1.984002186206405 usec\nrounds: 167003"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 491820.1425957917,
            "unit": "iter/sec",
            "range": "stddev: 0.00002398767999640759",
            "extra": "mean: 2.033263612836333 usec\nrounds: 176908"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 506944.48137364443,
            "unit": "iter/sec",
            "range": "stddev: 2.2294761757416804e-7",
            "extra": "mean: 1.972602596028554 usec\nrounds: 160728"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 511127.50176327716,
            "unit": "iter/sec",
            "range": "stddev: 2.1352206484922167e-7",
            "extra": "mean: 1.9564589980977751 usec\nrounds: 20899"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 506163.90483852325,
            "unit": "iter/sec",
            "range": "stddev: 2.8039466669512137e-7",
            "extra": "mean: 1.975644629023914 usec\nrounds: 54107"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 501304.76371588843,
            "unit": "iter/sec",
            "range": "stddev: 2.6463096737982347e-7",
            "extra": "mean: 1.9947945289559312 usec\nrounds: 155525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 509417.7961579309,
            "unit": "iter/sec",
            "range": "stddev: 2.557683034770074e-7",
            "extra": "mean: 1.9630252565616644 usec\nrounds: 168180"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 503052.04061235045,
            "unit": "iter/sec",
            "range": "stddev: 3.1242807748545063e-7",
            "extra": "mean: 1.9878659050517506 usec\nrounds: 153535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 495894.73996195896,
            "unit": "iter/sec",
            "range": "stddev: 2.457873480481138e-7",
            "extra": "mean: 2.016556981581841 usec\nrounds: 25299"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 496432.4928092571,
            "unit": "iter/sec",
            "range": "stddev: 2.614751869361053e-7",
            "extra": "mean: 2.0143725773087686 usec\nrounds: 143789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 492194.55021741416,
            "unit": "iter/sec",
            "range": "stddev: 2.8500699977139084e-7",
            "extra": "mean: 2.0317169289222647 usec\nrounds: 156740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 488461.4272721628,
            "unit": "iter/sec",
            "range": "stddev: 3.2394276789389357e-7",
            "extra": "mean: 2.0472445605061385 usec\nrounds: 134252"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 491234.7255011711,
            "unit": "iter/sec",
            "range": "stddev: 2.690772145533052e-7",
            "extra": "mean: 2.0356867055352668 usec\nrounds: 148904"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 55669.99420916237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028719653262352066",
            "extra": "mean: 17.96299809629613 usec\nrounds: 94"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41767.36382068134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011065308056994495",
            "extra": "mean: 23.942138275551027 usec\nrounds: 14610"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450551547,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 605755.4006080264,
            "unit": "iter/sec",
            "range": "stddev: 2.8826008007716067e-7",
            "extra": "mean: 1.6508313404985757 usec\nrounds: 27770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 579229.4575756047,
            "unit": "iter/sec",
            "range": "stddev: 2.5297904039972384e-7",
            "extra": "mean: 1.7264315323076842 usec\nrounds: 89767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 534125.7478627405,
            "unit": "iter/sec",
            "range": "stddev: 2.549646328235856e-7",
            "extra": "mean: 1.8722183006556343 usec\nrounds: 101287"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 488116.16246988793,
            "unit": "iter/sec",
            "range": "stddev: 2.2979185702756143e-7",
            "extra": "mean: 2.048692661476233 usec\nrounds: 91938"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 425566.38079629757,
            "unit": "iter/sec",
            "range": "stddev: 5.242024065279695e-7",
            "extra": "mean: 2.3498096774675954 usec\nrounds: 87789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 603738.0089664601,
            "unit": "iter/sec",
            "range": "stddev: 2.1018367760518534e-7",
            "extra": "mean: 1.6563475963885417 usec\nrounds: 55331"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 582948.9099208233,
            "unit": "iter/sec",
            "range": "stddev: 2.4903045337258915e-7",
            "extra": "mean: 1.7154161933947538 usec\nrounds: 108153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 539811.3808182699,
            "unit": "iter/sec",
            "range": "stddev: 2.926073617217365e-7",
            "extra": "mean: 1.8524989200564017 usec\nrounds: 95648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 489864.87681457476,
            "unit": "iter/sec",
            "range": "stddev: 2.4709959057080415e-7",
            "extra": "mean: 2.0413792605476453 usec\nrounds: 94628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 425901.71101066284,
            "unit": "iter/sec",
            "range": "stddev: 5.259823925553682e-7",
            "extra": "mean: 2.3479595741163015 usec\nrounds: 88739"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 607352.3137219172,
            "unit": "iter/sec",
            "range": "stddev: 3.7633255042414425e-7",
            "extra": "mean: 1.6464908051010745 usec\nrounds: 298"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 591853.5500132379,
            "unit": "iter/sec",
            "range": "stddev: 2.9413220353851644e-7",
            "extra": "mean: 1.6896071671406434 usec\nrounds: 91789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 548440.2553908995,
            "unit": "iter/sec",
            "range": "stddev: 1.9022410596009526e-7",
            "extra": "mean: 1.8233526627020702 usec\nrounds: 96786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 499213.9671558219,
            "unit": "iter/sec",
            "range": "stddev: 2.3482799791725095e-7",
            "extra": "mean: 2.0031490819403808 usec\nrounds: 94779"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 435633.305819804,
            "unit": "iter/sec",
            "range": "stddev: 4.0517113036616535e-7",
            "extra": "mean: 2.295508600101484 usec\nrounds: 91750"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 503441.788888501,
            "unit": "iter/sec",
            "range": "stddev: 1.301651827562992e-7",
            "extra": "mean: 1.9863269638537564 usec\nrounds: 2995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 510269.58931395464,
            "unit": "iter/sec",
            "range": "stddev: 2.7746956093705196e-7",
            "extra": "mean: 1.9597483779985325 usec\nrounds: 164988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 512490.8406030441,
            "unit": "iter/sec",
            "range": "stddev: 2.525216219646892e-7",
            "extra": "mean: 1.951254385001901 usec\nrounds: 179152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 503474.2194335761,
            "unit": "iter/sec",
            "range": "stddev: 3.4701186869274503e-7",
            "extra": "mean: 1.986199017548566 usec\nrounds: 169615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 516410.29503491527,
            "unit": "iter/sec",
            "range": "stddev: 2.4612224120736855e-7",
            "extra": "mean: 1.9364447409639434 usec\nrounds: 178008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 506399.0425640508,
            "unit": "iter/sec",
            "range": "stddev: 2.1730696873220788e-7",
            "extra": "mean: 1.9747272722647717 usec\nrounds: 20663"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 502758.37038979423,
            "unit": "iter/sec",
            "range": "stddev: 4.2751061755771705e-7",
            "extra": "mean: 1.9890270533431176 usec\nrounds: 163581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 509744.38609606767,
            "unit": "iter/sec",
            "range": "stddev: 2.8575776813111746e-7",
            "extra": "mean: 1.9617675589497077 usec\nrounds: 162258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 512391.2230812609,
            "unit": "iter/sec",
            "range": "stddev: 4.5359468135547534e-7",
            "extra": "mean: 1.9516337418633116 usec\nrounds: 170206"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 513154.13825558615,
            "unit": "iter/sec",
            "range": "stddev: 2.62779343043328e-7",
            "extra": "mean: 1.9487322140661196 usec\nrounds: 183782"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 503454.79330576706,
            "unit": "iter/sec",
            "range": "stddev: 2.5043104986296515e-7",
            "extra": "mean: 1.9862756563182873 usec\nrounds: 26781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 498874.030002388,
            "unit": "iter/sec",
            "range": "stddev: 4.309263512273677e-7",
            "extra": "mean: 2.004514045349711 usec\nrounds: 157927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 493462.64263853215,
            "unit": "iter/sec",
            "range": "stddev: 2.575616936193168e-7",
            "extra": "mean: 2.026495855193872 usec\nrounds: 167029"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 488408.5560448085,
            "unit": "iter/sec",
            "range": "stddev: 0.000028071515836106336",
            "extra": "mean: 2.0474661789263497 usec\nrounds: 178318"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 504556.63226482255,
            "unit": "iter/sec",
            "range": "stddev: 2.416506982861113e-7",
            "extra": "mean: 1.9819380740498087 usec\nrounds: 159238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 498513.78501332673,
            "unit": "iter/sec",
            "range": "stddev: 2.9714243530539685e-7",
            "extra": "mean: 2.0059625833080363 usec\nrounds: 26000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 497356.4589963034,
            "unit": "iter/sec",
            "range": "stddev: 2.534315108991954e-7",
            "extra": "mean: 2.0106303676402693 usec\nrounds: 154396"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 500075.383108017,
            "unit": "iter/sec",
            "range": "stddev: 3.515387981902175e-7",
            "extra": "mean: 1.9996985130219826 usec\nrounds: 171964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 494938.0561678241,
            "unit": "iter/sec",
            "range": "stddev: 3.1241926927351227e-7",
            "extra": "mean: 2.020454858013422 usec\nrounds: 154729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 491307.61951106036,
            "unit": "iter/sec",
            "range": "stddev: 5.338503671319935e-7",
            "extra": "mean: 2.035384676091896 usec\nrounds: 172989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 486122.129271484,
            "unit": "iter/sec",
            "range": "stddev: 2.770636511566922e-7",
            "extra": "mean: 2.057096231143864 usec\nrounds: 19393"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 483530.5896674901,
            "unit": "iter/sec",
            "range": "stddev: 2.7925801625439616e-7",
            "extra": "mean: 2.0681214826298184 usec\nrounds: 141310"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 486167.61779539427,
            "unit": "iter/sec",
            "range": "stddev: 4.1435537961135236e-7",
            "extra": "mean: 2.056903757874006 usec\nrounds: 155785"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 483470.40739948,
            "unit": "iter/sec",
            "range": "stddev: 2.5915194093017017e-7",
            "extra": "mean: 2.0683789218431397 usec\nrounds: 167707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 485270.8198958935,
            "unit": "iter/sec",
            "range": "stddev: 2.5633761225958484e-7",
            "extra": "mean: 2.060704989874587 usec\nrounds: 154362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 53718.247783714556,
            "unit": "iter/sec",
            "range": "stddev: 0.000003631318994584184",
            "extra": "mean: 18.61564815044403 usec\nrounds: 85"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40637.232944451076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013746410645660594",
            "extra": "mean: 24.607974695692164 usec\nrounds: 15067"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450652245,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 612128.643792696,
            "unit": "iter/sec",
            "range": "stddev: 2.4870204552396193e-7",
            "extra": "mean: 1.6336435325164442 usec\nrounds: 32091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 585341.9728287351,
            "unit": "iter/sec",
            "range": "stddev: 2.6933977517582173e-7",
            "extra": "mean: 1.708403030056738 usec\nrounds: 94188"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 542212.8699828935,
            "unit": "iter/sec",
            "range": "stddev: 3.472361603300284e-7",
            "extra": "mean: 1.8442941054341804 usec\nrounds: 107909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 495953.2370708652,
            "unit": "iter/sec",
            "range": "stddev: 3.4626114897713955e-7",
            "extra": "mean: 2.0163191310254787 usec\nrounds: 81129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 430542.683183006,
            "unit": "iter/sec",
            "range": "stddev: 2.848432782337303e-7",
            "extra": "mean: 2.3226500857173806 usec\nrounds: 93826"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 616022.2077971783,
            "unit": "iter/sec",
            "range": "stddev: 2.228508072025817e-7",
            "extra": "mean: 1.6233181001312929 usec\nrounds: 59602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 587241.9879177551,
            "unit": "iter/sec",
            "range": "stddev: 2.9043746448061937e-7",
            "extra": "mean: 1.7028755105638882 usec\nrounds: 100987"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 546049.4180433298,
            "unit": "iter/sec",
            "range": "stddev: 3.9366485755984366e-7",
            "extra": "mean: 1.8313360786709023 usec\nrounds: 87482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 497037.41429500544,
            "unit": "iter/sec",
            "range": "stddev: 2.5920213735966466e-7",
            "extra": "mean: 2.011920976650004 usec\nrounds: 92517"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 436301.7894640105,
            "unit": "iter/sec",
            "range": "stddev: 3.1195989423983196e-7",
            "extra": "mean: 2.2919915163045363 usec\nrounds: 97185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 599449.3671597177,
            "unit": "iter/sec",
            "range": "stddev: 1.5003216752344074e-7",
            "extra": "mean: 1.6681976073111098 usec\nrounds: 288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 599416.2044147414,
            "unit": "iter/sec",
            "range": "stddev: 1.9598087431901935e-7",
            "extra": "mean: 1.668289900464705 usec\nrounds: 87962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 556536.710331097,
            "unit": "iter/sec",
            "range": "stddev: 2.4661353658322477e-7",
            "extra": "mean: 1.7968266628899934 usec\nrounds: 103091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 505089.074251715,
            "unit": "iter/sec",
            "range": "stddev: 2.9508979718743064e-7",
            "extra": "mean: 1.9798488048498994 usec\nrounds: 98513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 436605.2144325493,
            "unit": "iter/sec",
            "range": "stddev: 3.1452258783877237e-7",
            "extra": "mean: 2.290398664385372 usec\nrounds: 93532"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 512162.36638927995,
            "unit": "iter/sec",
            "range": "stddev: 1.1919100752461282e-7",
            "extra": "mean: 1.952505817735012 usec\nrounds: 2998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 517830.06573198846,
            "unit": "iter/sec",
            "range": "stddev: 2.4078016229415275e-7",
            "extra": "mean: 1.931135455772409 usec\nrounds: 155977"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 516323.2702102961,
            "unit": "iter/sec",
            "range": "stddev: 2.489052209928498e-7",
            "extra": "mean: 1.9367711232397187 usec\nrounds: 161526"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 515562.08865083853,
            "unit": "iter/sec",
            "range": "stddev: 2.6941738874538745e-7",
            "extra": "mean: 1.939630593507903 usec\nrounds: 167812"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 515926.86225480016,
            "unit": "iter/sec",
            "range": "stddev: 2.91673120401011e-7",
            "extra": "mean: 1.9382592246304307 usec\nrounds: 155446"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 514912.2481790394,
            "unit": "iter/sec",
            "range": "stddev: 3.6834726855313854e-7",
            "extra": "mean: 1.9420784872304908 usec\nrounds: 19928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 513984.4343052469,
            "unit": "iter/sec",
            "range": "stddev: 2.716355579747624e-7",
            "extra": "mean: 1.9455842108364638 usec\nrounds: 150945"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 511823.921173181,
            "unit": "iter/sec",
            "range": "stddev: 3.0926378935193265e-7",
            "extra": "mean: 1.953796918494631 usec\nrounds: 172781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 515851.28230371117,
            "unit": "iter/sec",
            "range": "stddev: 2.898315114350408e-7",
            "extra": "mean: 1.9385432086824643 usec\nrounds: 144117"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 514853.96686573373,
            "unit": "iter/sec",
            "range": "stddev: 2.6332088735769624e-7",
            "extra": "mean: 1.942298329927766 usec\nrounds: 161271"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 506906.68258439866,
            "unit": "iter/sec",
            "range": "stddev: 2.8293011504088093e-7",
            "extra": "mean: 1.9727496881706674 usec\nrounds: 25553"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 503638.5650269485,
            "unit": "iter/sec",
            "range": "stddev: 3.471732555858686e-7",
            "extra": "mean: 1.9855508879596866 usec\nrounds: 165510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 508097.7467015562,
            "unit": "iter/sec",
            "range": "stddev: 3.269550277210505e-7",
            "extra": "mean: 1.968125240648577 usec\nrounds: 154041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 490612.63226917625,
            "unit": "iter/sec",
            "range": "stddev: 0.000029062659001334277",
            "extra": "mean: 2.038267941399737 usec\nrounds: 149183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 505634.2941703194,
            "unit": "iter/sec",
            "range": "stddev: 3.0322573222703053e-7",
            "extra": "mean: 1.9777139555790433 usec\nrounds: 160620"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 506649.4332198443,
            "unit": "iter/sec",
            "range": "stddev: 2.207167710077495e-7",
            "extra": "mean: 1.9737513444845445 usec\nrounds: 26297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 504839.3783295938,
            "unit": "iter/sec",
            "range": "stddev: 2.7040594409633623e-7",
            "extra": "mean: 1.9808280473460438 usec\nrounds: 164710"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 505995.64242331835,
            "unit": "iter/sec",
            "range": "stddev: 3.249606950582243e-7",
            "extra": "mean: 1.9763016045173671 usec\nrounds: 165868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 506907.6864257758,
            "unit": "iter/sec",
            "range": "stddev: 3.0408655595874094e-7",
            "extra": "mean: 1.9727457814874256 usec\nrounds: 154607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 504793.3964175755,
            "unit": "iter/sec",
            "range": "stddev: 2.683676732266196e-7",
            "extra": "mean: 1.9810084820776448 usec\nrounds: 153326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 493418.72066688474,
            "unit": "iter/sec",
            "range": "stddev: 2.5411654878831654e-7",
            "extra": "mean: 2.0266762449718985 usec\nrounds: 23011"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 494936.3814094237,
            "unit": "iter/sec",
            "range": "stddev: 2.549347316394008e-7",
            "extra": "mean: 2.0204616947986596 usec\nrounds: 147604"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 490073.95849094423,
            "unit": "iter/sec",
            "range": "stddev: 2.506111225254373e-7",
            "extra": "mean: 2.040508340984371 usec\nrounds: 150153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 489256.45000481437,
            "unit": "iter/sec",
            "range": "stddev: 2.489799587751879e-7",
            "extra": "mean: 2.043917867593079 usec\nrounds: 151125"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 489124.35095158115,
            "unit": "iter/sec",
            "range": "stddev: 2.6882032490076237e-7",
            "extra": "mean: 2.0444698736722495 usec\nrounds: 167668"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54497.664751455886,
            "unit": "iter/sec",
            "range": "stddev: 0.000003705575424044408",
            "extra": "mean: 18.349410099692125 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41399.068725199395,
            "unit": "iter/sec",
            "range": "stddev: 0.000001150581125305675",
            "extra": "mean: 24.155132731072893 usec\nrounds: 14480"
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433304848,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 932664.3339746328,
            "unit": "iter/sec",
            "range": "stddev: 1.4346329065063307e-7",
            "extra": "mean: 1.0721971062605238 usec\nrounds: 31336"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 883874.698745276,
            "unit": "iter/sec",
            "range": "stddev: 2.2363358470793068e-7",
            "extra": "mean: 1.1313820855145784 usec\nrounds: 98311"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 788578.9343465623,
            "unit": "iter/sec",
            "range": "stddev: 2.1505150815288587e-7",
            "extra": "mean: 1.268103871971456 usec\nrounds: 115104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 684435.0017129257,
            "unit": "iter/sec",
            "range": "stddev: 1.8722751164478262e-7",
            "extra": "mean: 1.46105911810079 usec\nrounds: 88868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 574180.3977115345,
            "unit": "iter/sec",
            "range": "stddev: 2.0118348468383603e-7",
            "extra": "mean: 1.7416129216281524 usec\nrounds: 111211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 931651.7827384458,
            "unit": "iter/sec",
            "range": "stddev: 2.0519809160460436e-7",
            "extra": "mean: 1.073362406993582 usec\nrounds: 48906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 889781.7854498463,
            "unit": "iter/sec",
            "range": "stddev: 2.0590506603052227e-7",
            "extra": "mean: 1.123871061818186 usec\nrounds: 136089"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 797682.9477471927,
            "unit": "iter/sec",
            "range": "stddev: 1.9749695173455467e-7",
            "extra": "mean: 1.2536309104064325 usec\nrounds: 120193"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681295.9783017375,
            "unit": "iter/sec",
            "range": "stddev: 2.0470456633400724e-7",
            "extra": "mean: 1.4677908454599926 usec\nrounds: 128010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568976.874359134,
            "unit": "iter/sec",
            "range": "stddev: 3.570360660278193e-7",
            "extra": "mean: 1.7575406753154037 usec\nrounds: 123611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 933805.7993133123,
            "unit": "iter/sec",
            "range": "stddev: 1.3162706999015695e-7",
            "extra": "mean: 1.0708864741848514 usec\nrounds: 25768"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 887267.1572987536,
            "unit": "iter/sec",
            "range": "stddev: 2.0206549463174973e-7",
            "extra": "mean: 1.1270562555752166 usec\nrounds: 122044"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 789783.780314189,
            "unit": "iter/sec",
            "range": "stddev: 1.9880861554134354e-7",
            "extra": "mean: 1.2661693300439565 usec\nrounds: 127342"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684944.0697963781,
            "unit": "iter/sec",
            "range": "stddev: 1.9724646407778598e-7",
            "extra": "mean: 1.4599732213132124 usec\nrounds: 122024"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 576270.0799593909,
            "unit": "iter/sec",
            "range": "stddev: 2.1768467931605402e-7",
            "extra": "mean: 1.7352974495404463 usec\nrounds: 112546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 762348.5648828848,
            "unit": "iter/sec",
            "range": "stddev: 1.123194289363073e-7",
            "extra": "mean: 1.311735925093037 usec\nrounds: 4070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 809028.1828736801,
            "unit": "iter/sec",
            "range": "stddev: 9.990372829957356e-8",
            "extra": "mean: 1.2360508832312678 usec\nrounds: 197944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 755614.2437156935,
            "unit": "iter/sec",
            "range": "stddev: 2.4884723030287465e-7",
            "extra": "mean: 1.3234266139327286 usec\nrounds: 152488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 808165.780660955,
            "unit": "iter/sec",
            "range": "stddev: 1.0441149951950489e-7",
            "extra": "mean: 1.237369886141621 usec\nrounds: 196028"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 806260.6236600517,
            "unit": "iter/sec",
            "range": "stddev: 1.1036333241131811e-7",
            "extra": "mean: 1.240293734624495 usec\nrounds: 125335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 753527.337187076,
            "unit": "iter/sec",
            "range": "stddev: 1.6557167969300585e-7",
            "extra": "mean: 1.3270918660137914 usec\nrounds: 19006"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 802727.5015628301,
            "unit": "iter/sec",
            "range": "stddev: 1.1213688780380357e-7",
            "extra": "mean: 1.2457527592527977 usec\nrounds: 192049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 808271.256101899,
            "unit": "iter/sec",
            "range": "stddev: 8.837032829923007e-8",
            "extra": "mean: 1.237208415430692 usec\nrounds: 162923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 805944.6445698149,
            "unit": "iter/sec",
            "range": "stddev: 1.2368154119068296e-7",
            "extra": "mean: 1.240780004852275 usec\nrounds: 196513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 750690.9429717523,
            "unit": "iter/sec",
            "range": "stddev: 2.490178345705993e-7",
            "extra": "mean: 1.3321061208508933 usec\nrounds: 180902"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 741258.9927607818,
            "unit": "iter/sec",
            "range": "stddev: 2.2003181171272486e-7",
            "extra": "mean: 1.349056146051666 usec\nrounds: 27666"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 751729.8326483686,
            "unit": "iter/sec",
            "range": "stddev: 2.3359779610707156e-7",
            "extra": "mean: 1.330265151879057 usec\nrounds: 59613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 787380.5337993765,
            "unit": "iter/sec",
            "range": "stddev: 1.303498799430665e-7",
            "extra": "mean: 1.2700339379418781 usec\nrounds: 187015"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 733613.3513180526,
            "unit": "iter/sec",
            "range": "stddev: 1.9815216122734323e-7",
            "extra": "mean: 1.363115867784224 usec\nrounds: 194115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 784718.0871544383,
            "unit": "iter/sec",
            "range": "stddev: 1.0458901021865923e-7",
            "extra": "mean: 1.2743429982941028 usec\nrounds: 190735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 743875.2158479394,
            "unit": "iter/sec",
            "range": "stddev: 2.9110788267033506e-7",
            "extra": "mean: 1.3443114902814786 usec\nrounds: 27411"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 785424.0402160705,
            "unit": "iter/sec",
            "range": "stddev: 1.0661469796312874e-7",
            "extra": "mean: 1.2731975961989903 usec\nrounds: 190111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 738688.8260157321,
            "unit": "iter/sec",
            "range": "stddev: 1.6734796400867618e-7",
            "extra": "mean: 1.3537500024113032 usec\nrounds: 58028"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 737311.6677111847,
            "unit": "iter/sec",
            "range": "stddev: 2.1070177532701711e-7",
            "extra": "mean: 1.356278550567728 usec\nrounds: 56767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 756590.0365760241,
            "unit": "iter/sec",
            "range": "stddev: 1.6125620840019102e-7",
            "extra": "mean: 1.3217197579359314 usec\nrounds: 60195"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 703868.325436261,
            "unit": "iter/sec",
            "range": "stddev: 4.783198482912147e-7",
            "extra": "mean: 1.4207202737531839 usec\nrounds: 25299"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 709743.6049345278,
            "unit": "iter/sec",
            "range": "stddev: 2.8103269392219187e-7",
            "extra": "mean: 1.4089595074157064 usec\nrounds: 197779"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 701667.6125518812,
            "unit": "iter/sec",
            "range": "stddev: 2.1074534059273498e-7",
            "extra": "mean: 1.42517622605256 usec\nrounds: 56964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 701266.8061706788,
            "unit": "iter/sec",
            "range": "stddev: 2.0387463602921263e-7",
            "extra": "mean: 1.4259907801148848 usec\nrounds: 56951"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 698447.7780811883,
            "unit": "iter/sec",
            "range": "stddev: 1.819915014026395e-7",
            "extra": "mean: 1.4317462684858866 usec\nrounds: 55923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 76524.29560107013,
            "unit": "iter/sec",
            "range": "stddev: 0.000003747136489892219",
            "extra": "mean: 13.067745245420015 usec\nrounds: 52"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57438.62178570028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014214236909630297",
            "extra": "mean: 17.40988848463207 usec\nrounds: 23614"
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433409190,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 918905.5199209227,
            "unit": "iter/sec",
            "range": "stddev: 1.4020901620581915e-7",
            "extra": "mean: 1.0882511621935365 usec\nrounds: 32366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 860060.4765857005,
            "unit": "iter/sec",
            "range": "stddev: 2.0119080417917465e-7",
            "extra": "mean: 1.1627089341087227 usec\nrounds: 92413"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 770610.3652302414,
            "unit": "iter/sec",
            "range": "stddev: 1.9228403391343437e-7",
            "extra": "mean: 1.2976726567922845 usec\nrounds: 120863"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 672178.8487437067,
            "unit": "iter/sec",
            "range": "stddev: 2.939562789670423e-7",
            "extra": "mean: 1.4876992959076096 usec\nrounds: 42296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 563365.2149303462,
            "unit": "iter/sec",
            "range": "stddev: 2.3744911743770917e-7",
            "extra": "mean: 1.775047470979618 usec\nrounds: 117401"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915693.3060203079,
            "unit": "iter/sec",
            "range": "stddev: 1.8670469313766798e-7",
            "extra": "mean: 1.0920687018518211 usec\nrounds: 52454"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 871217.8999459376,
            "unit": "iter/sec",
            "range": "stddev: 2.181971046128922e-7",
            "extra": "mean: 1.147818473497909 usec\nrounds: 123732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779757.8938480854,
            "unit": "iter/sec",
            "range": "stddev: 1.4377502240336048e-7",
            "extra": "mean: 1.2824493447126586 usec\nrounds: 49978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 676360.3619199687,
            "unit": "iter/sec",
            "range": "stddev: 2.8101559533302156e-7",
            "extra": "mean: 1.4785017814487573 usec\nrounds: 126012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 558508.6700945535,
            "unit": "iter/sec",
            "range": "stddev: 2.313577771905621e-7",
            "extra": "mean: 1.7904825001744442 usec\nrounds: 129064"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 910561.1813191205,
            "unit": "iter/sec",
            "range": "stddev: 2.311968879818493e-7",
            "extra": "mean: 1.0982238431813123 usec\nrounds: 34928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 871497.2590097018,
            "unit": "iter/sec",
            "range": "stddev: 1.7242803919346272e-7",
            "extra": "mean: 1.1474505394730883 usec\nrounds: 126487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 778720.8463720388,
            "unit": "iter/sec",
            "range": "stddev: 1.9525154840771582e-7",
            "extra": "mean: 1.2841572235530518 usec\nrounds: 134176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 689579.1040440432,
            "unit": "iter/sec",
            "range": "stddev: 1.9071869625612946e-7",
            "extra": "mean: 1.4501599513898995 usec\nrounds: 120673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 569682.2998429168,
            "unit": "iter/sec",
            "range": "stddev: 2.1879736425964526e-7",
            "extra": "mean: 1.755364350052193 usec\nrounds: 127183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 735041.876043819,
            "unit": "iter/sec",
            "range": "stddev: 3.435593368096825e-7",
            "extra": "mean: 1.3604667061722424 usec\nrounds: 3881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 792884.1543367683,
            "unit": "iter/sec",
            "range": "stddev: 9.686577664674095e-8",
            "extra": "mean: 1.2612182934043876 usec\nrounds: 188228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 745911.5034176615,
            "unit": "iter/sec",
            "range": "stddev: 2.1867385604508655e-7",
            "extra": "mean: 1.3406416115291704 usec\nrounds: 154919"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 794383.8871625421,
            "unit": "iter/sec",
            "range": "stddev: 1.0498562965548496e-7",
            "extra": "mean: 1.2588372148029054 usec\nrounds: 186010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 794300.3267653957,
            "unit": "iter/sec",
            "range": "stddev: 1.1012356414709216e-7",
            "extra": "mean: 1.2589696444822938 usec\nrounds: 173577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 738438.0229705,
            "unit": "iter/sec",
            "range": "stddev: 2.0444810051356806e-7",
            "extra": "mean: 1.3542097899798278 usec\nrounds: 18308"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 790561.9586908162,
            "unit": "iter/sec",
            "range": "stddev: 1.0114196700177843e-7",
            "extra": "mean: 1.2649229943419193 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 783599.0057111023,
            "unit": "iter/sec",
            "range": "stddev: 1.0790621580188362e-7",
            "extra": "mean: 1.2761629260778828 usec\nrounds: 189256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 743595.2771307051,
            "unit": "iter/sec",
            "range": "stddev: 2.063325165860811e-7",
            "extra": "mean: 1.344817578533686 usec\nrounds: 199729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 789964.508001479,
            "unit": "iter/sec",
            "range": "stddev: 1.093797870762009e-7",
            "extra": "mean: 1.2658796564542971 usec\nrounds: 187341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 729573.8552317924,
            "unit": "iter/sec",
            "range": "stddev: 2.2837714022605386e-7",
            "extra": "mean: 1.3706631519605246 usec\nrounds: 28741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 772743.2079384928,
            "unit": "iter/sec",
            "range": "stddev: 1.1826820203296668e-7",
            "extra": "mean: 1.2940909602658013 usec\nrounds: 180856"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 771429.6120168013,
            "unit": "iter/sec",
            "range": "stddev: 1.0803321930539644e-7",
            "extra": "mean: 1.2962945477107517 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 725692.3703272226,
            "unit": "iter/sec",
            "range": "stddev: 2.1161099432417211e-7",
            "extra": "mean: 1.377994369086572 usec\nrounds: 198639"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 773765.3226980509,
            "unit": "iter/sec",
            "range": "stddev: 1.0104668195372426e-7",
            "extra": "mean: 1.2923815149961604 usec\nrounds: 177244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 722399.659347924,
            "unit": "iter/sec",
            "range": "stddev: 1.1504875272678883e-7",
            "extra": "mean: 1.3842752928519548 usec\nrounds: 25480"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 772623.0369568723,
            "unit": "iter/sec",
            "range": "stddev: 1.1168270494337803e-7",
            "extra": "mean: 1.2942922384746598 usec\nrounds: 176675"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 770811.0880661532,
            "unit": "iter/sec",
            "range": "stddev: 1.0397077766719522e-7",
            "extra": "mean: 1.297334736723685 usec\nrounds: 182687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 775124.0399784803,
            "unit": "iter/sec",
            "range": "stddev: 1.079016847742286e-7",
            "extra": "mean: 1.290116095519064 usec\nrounds: 182424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 771777.5038452558,
            "unit": "iter/sec",
            "range": "stddev: 1.0195352591253576e-7",
            "extra": "mean: 1.2957102209090867 usec\nrounds: 181944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 697196.0525910023,
            "unit": "iter/sec",
            "range": "stddev: 1.4756294600845868e-7",
            "extra": "mean: 1.4343167840432858 usec\nrounds: 25291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 697108.2237450918,
            "unit": "iter/sec",
            "range": "stddev: 2.8106887727143707e-7",
            "extra": "mean: 1.4344974939869093 usec\nrounds: 185624"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689113.2780473696,
            "unit": "iter/sec",
            "range": "stddev: 2.8402604211742516e-7",
            "extra": "mean: 1.4511402288366009 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 685806.7354378375,
            "unit": "iter/sec",
            "range": "stddev: 2.758216371921293e-7",
            "extra": "mean: 1.4581367436725057 usec\nrounds: 181852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 682579.4095531374,
            "unit": "iter/sec",
            "range": "stddev: 2.5388563403636413e-7",
            "extra": "mean: 1.4650310073880892 usec\nrounds: 186641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67365.41014386715,
            "unit": "iter/sec",
            "range": "stddev: 0.000004827511862094805",
            "extra": "mean: 14.8444134439971 usec\nrounds: 37"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 56914.70633143579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011583072098319354",
            "extra": "mean: 17.570151274727188 usec\nrounds: 20772"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449436033,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 909573.072612794,
            "unit": "iter/sec",
            "range": "stddev: 1.5524982006139835e-7",
            "extra": "mean: 1.099416891407581 usec\nrounds: 29995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 859997.9378024145,
            "unit": "iter/sec",
            "range": "stddev: 1.9040605097747344e-7",
            "extra": "mean: 1.1627934859417666 usec\nrounds: 95266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 781488.5030914886,
            "unit": "iter/sec",
            "range": "stddev: 2.006389673369353e-7",
            "extra": "mean: 1.2796093557923145 usec\nrounds: 120436"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 676368.8106766928,
            "unit": "iter/sec",
            "range": "stddev: 1.8146700566872726e-7",
            "extra": "mean: 1.478483312971692 usec\nrounds: 90349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 573248.4329960201,
            "unit": "iter/sec",
            "range": "stddev: 2.2707096509212575e-7",
            "extra": "mean: 1.7444443672939667 usec\nrounds: 111165"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 922752.9796041929,
            "unit": "iter/sec",
            "range": "stddev: 1.8851854205557415e-7",
            "extra": "mean: 1.083713650460323 usec\nrounds: 52836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 882932.282868822,
            "unit": "iter/sec",
            "range": "stddev: 2.1109260567567918e-7",
            "extra": "mean: 1.1325896893822953 usec\nrounds: 133783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 782385.1671066898,
            "unit": "iter/sec",
            "range": "stddev: 1.9279123679279182e-7",
            "extra": "mean: 1.278142840690684 usec\nrounds: 126101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679855.350699651,
            "unit": "iter/sec",
            "range": "stddev: 2.2912828663109893e-7",
            "extra": "mean: 1.4709011247331987 usec\nrounds: 120294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 565634.1661949503,
            "unit": "iter/sec",
            "range": "stddev: 2.8430211297980267e-7",
            "extra": "mean: 1.7679271510896355 usec\nrounds: 125930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 925559.5011205353,
            "unit": "iter/sec",
            "range": "stddev: 1.3615887867663994e-7",
            "extra": "mean: 1.0804275670978936 usec\nrounds: 37510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 888716.1409333107,
            "unit": "iter/sec",
            "range": "stddev: 2.086380582629518e-7",
            "extra": "mean: 1.1252186766292118 usec\nrounds: 133959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 793095.032393368,
            "unit": "iter/sec",
            "range": "stddev: 2.0282362846220268e-7",
            "extra": "mean: 1.2608829448625383 usec\nrounds: 131635"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 682828.6981204821,
            "unit": "iter/sec",
            "range": "stddev: 2.0440520796448065e-7",
            "extra": "mean: 1.4644961507220575 usec\nrounds: 129876"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574478.5063549201,
            "unit": "iter/sec",
            "range": "stddev: 2.2572050008629826e-7",
            "extra": "mean: 1.7407091630721296 usec\nrounds: 111246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 746202.9591006907,
            "unit": "iter/sec",
            "range": "stddev: 1.11991605881358e-7",
            "extra": "mean: 1.340117977024884 usec\nrounds: 4133"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 811873.8746493475,
            "unit": "iter/sec",
            "range": "stddev: 9.478838410156708e-8",
            "extra": "mean: 1.2317184124589717 usec\nrounds: 161928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 743505.6256316925,
            "unit": "iter/sec",
            "range": "stddev: 2.747332288473772e-7",
            "extra": "mean: 1.344979735896936 usec\nrounds: 130088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 803855.8611095834,
            "unit": "iter/sec",
            "range": "stddev: 1.0620640061474188e-7",
            "extra": "mean: 1.2440041161355393 usec\nrounds: 199081"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 799543.2876522442,
            "unit": "iter/sec",
            "range": "stddev: 1.1214191141417745e-7",
            "extra": "mean: 1.2507140206709397 usec\nrounds: 197779"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 745681.641107011,
            "unit": "iter/sec",
            "range": "stddev: 2.02121428391558e-7",
            "extra": "mean: 1.341054874993888 usec\nrounds: 19074"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 794918.8774937985,
            "unit": "iter/sec",
            "range": "stddev: 1.0781467256614183e-7",
            "extra": "mean: 1.2579900016373702 usec\nrounds: 199377"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 808971.7464133537,
            "unit": "iter/sec",
            "range": "stddev: 9.292336393465857e-8",
            "extra": "mean: 1.236137114100185 usec\nrounds: 158685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 802301.082821554,
            "unit": "iter/sec",
            "range": "stddev: 9.285877736213938e-8",
            "extra": "mean: 1.2464148701920874 usec\nrounds: 160022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 796985.9389548653,
            "unit": "iter/sec",
            "range": "stddev: 1.2665578062506883e-7",
            "extra": "mean: 1.2547272807740613 usec\nrounds: 193015"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 727540.3747691258,
            "unit": "iter/sec",
            "range": "stddev: 1.8643090902227778e-7",
            "extra": "mean: 1.3744941651071052 usec\nrounds: 28607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 770520.6514396557,
            "unit": "iter/sec",
            "range": "stddev: 1.372796338351424e-7",
            "extra": "mean: 1.2978237483078137 usec\nrounds: 137651"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 767443.4152567458,
            "unit": "iter/sec",
            "range": "stddev: 1.0642328385918821e-7",
            "extra": "mean: 1.3030276631736468 usec\nrounds: 195511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 777332.9564811166,
            "unit": "iter/sec",
            "range": "stddev: 1.2160854831739173e-7",
            "extra": "mean: 1.2864500233296008 usec\nrounds: 194978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 779579.5683088828,
            "unit": "iter/sec",
            "range": "stddev: 1.0987637300673121e-7",
            "extra": "mean: 1.2827426995928952 usec\nrounds: 186852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 735810.9232018077,
            "unit": "iter/sec",
            "range": "stddev: 1.8811742342735654e-7",
            "extra": "mean: 1.3590447878221215 usec\nrounds: 20617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 779602.0562943496,
            "unit": "iter/sec",
            "range": "stddev: 1.0547331022968371e-7",
            "extra": "mean: 1.282705698280555 usec\nrounds: 190837"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 766037.2111077994,
            "unit": "iter/sec",
            "range": "stddev: 1.134098418787897e-7",
            "extra": "mean: 1.305419613433474 usec\nrounds: 194027"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 767559.1079337749,
            "unit": "iter/sec",
            "range": "stddev: 1.1443768206171619e-7",
            "extra": "mean: 1.3028312603728234 usec\nrounds: 187981"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 713667.6751108535,
            "unit": "iter/sec",
            "range": "stddev: 2.597774272899051e-7",
            "extra": "mean: 1.4012124058227393 usec\nrounds: 199210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 685179.4299811898,
            "unit": "iter/sec",
            "range": "stddev: 1.939371963907437e-7",
            "extra": "mean: 1.4594717182730557 usec\nrounds: 26538"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 734824.9617080091,
            "unit": "iter/sec",
            "range": "stddev: 1.1104878673856394e-7",
            "extra": "mean: 1.3608683048485786 usec\nrounds: 179361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 731338.7306507375,
            "unit": "iter/sec",
            "range": "stddev: 1.2780759659304222e-7",
            "extra": "mean: 1.3673554511603816 usec\nrounds: 174126"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 729923.7838827345,
            "unit": "iter/sec",
            "range": "stddev: 1.2124609325201347e-7",
            "extra": "mean: 1.370006050057213 usec\nrounds: 177054"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 683146.348362918,
            "unit": "iter/sec",
            "range": "stddev: 2.438341096275079e-7",
            "extra": "mean: 1.463815187472473 usec\nrounds: 191279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72562.51661601361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039237973368996905",
            "extra": "mean: 13.781219927801027 usec\nrounds: 36"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 56224.334757689394,
            "unit": "iter/sec",
            "range": "stddev: 9.026100440928424e-7",
            "extra": "mean: 17.78589296449145 usec\nrounds: 20795"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449535878,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 926989.1128849769,
            "unit": "iter/sec",
            "range": "stddev: 9.589353433629315e-8",
            "extra": "mean: 1.0787613210340719 usec\nrounds: 33574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 865718.284012787,
            "unit": "iter/sec",
            "range": "stddev: 2.3633226896935093e-7",
            "extra": "mean: 1.15511017667871 usec\nrounds: 94420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 786644.9955855631,
            "unit": "iter/sec",
            "range": "stddev: 2.1588786443678778e-7",
            "extra": "mean: 1.2712214602669907 usec\nrounds: 115968"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 690623.1994670723,
            "unit": "iter/sec",
            "range": "stddev: 2.3458441210323057e-7",
            "extra": "mean: 1.447967575910659 usec\nrounds: 87279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569235.3639686846,
            "unit": "iter/sec",
            "range": "stddev: 2.2916492554532502e-7",
            "extra": "mean: 1.7567425766172409 usec\nrounds: 115618"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 911323.0270392016,
            "unit": "iter/sec",
            "range": "stddev: 1.439070547395277e-7",
            "extra": "mean: 1.0973057525484693 usec\nrounds: 53548"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 878463.2699026217,
            "unit": "iter/sec",
            "range": "stddev: 1.7573896886320204e-7",
            "extra": "mean: 1.1383515216417082 usec\nrounds: 127018"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 786735.0213310595,
            "unit": "iter/sec",
            "range": "stddev: 1.9489783058568826e-7",
            "extra": "mean: 1.2710759949495094 usec\nrounds: 130088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 682525.9084691537,
            "unit": "iter/sec",
            "range": "stddev: 2.0328306458755041e-7",
            "extra": "mean: 1.4651458466139595 usec\nrounds: 126249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 571431.679979118,
            "unit": "iter/sec",
            "range": "stddev: 2.1828085003447989e-7",
            "extra": "mean: 1.7499904801157387 usec\nrounds: 91177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 919068.6539947119,
            "unit": "iter/sec",
            "range": "stddev: 2.453709581761002e-7",
            "extra": "mean: 1.0880579983372536 usec\nrounds: 36192"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 888028.9218565084,
            "unit": "iter/sec",
            "range": "stddev: 1.461760517902818e-7",
            "extra": "mean: 1.1260894497776102 usec\nrounds: 130277"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 795333.972462631,
            "unit": "iter/sec",
            "range": "stddev: 2.433376397870158e-7",
            "extra": "mean: 1.2573334405717032 usec\nrounds: 118287"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 691026.8492186876,
            "unit": "iter/sec",
            "range": "stddev: 2.29655669718599e-7",
            "extra": "mean: 1.4471217741114608 usec\nrounds: 123554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 577117.6512438814,
            "unit": "iter/sec",
            "range": "stddev: 2.1489588482524183e-7",
            "extra": "mean: 1.7327489426890095 usec\nrounds: 119431"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 744008.7490206957,
            "unit": "iter/sec",
            "range": "stddev: 1.1048116735829433e-7",
            "extra": "mean: 1.3440702159971287 usec\nrounds: 3918"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 804704.272297147,
            "unit": "iter/sec",
            "range": "stddev: 9.73671806879989e-8",
            "extra": "mean: 1.242692544859185 usec\nrounds: 55929"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 751080.2044026374,
            "unit": "iter/sec",
            "range": "stddev: 1.9347178758597352e-7",
            "extra": "mean: 1.3314157318196636 usec\nrounds: 157602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 803828.498291839,
            "unit": "iter/sec",
            "range": "stddev: 1.0603973207952149e-7",
            "extra": "mean: 1.244046462802739 usec\nrounds: 184097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 747066.4058223604,
            "unit": "iter/sec",
            "range": "stddev: 2.4701244263508757e-7",
            "extra": "mean: 1.3385690913235668 usec\nrounds: 191535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 754078.5157725435,
            "unit": "iter/sec",
            "range": "stddev: 1.2712415608462717e-7",
            "extra": "mean: 1.3261218547985194 usec\nrounds: 15977"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 798986.7984246907,
            "unit": "iter/sec",
            "range": "stddev: 9.903345136901441e-8",
            "extra": "mean: 1.2515851350380678 usec\nrounds: 191980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 748997.684488843,
            "unit": "iter/sec",
            "range": "stddev: 2.1836518470436694e-7",
            "extra": "mean: 1.3351176121224657 usec\nrounds: 199155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 792406.435616847,
            "unit": "iter/sec",
            "range": "stddev: 1.2202698245320199e-7",
            "extra": "mean: 1.2619786451148043 usec\nrounds: 57105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 796767.4783649588,
            "unit": "iter/sec",
            "range": "stddev: 9.704540722883796e-8",
            "extra": "mean: 1.2550713064394816 usec\nrounds: 189173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 735435.8061321581,
            "unit": "iter/sec",
            "range": "stddev: 2.2959758638286723e-7",
            "extra": "mean: 1.3597379834675871 usec\nrounds: 30096"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 734268.732577458,
            "unit": "iter/sec",
            "range": "stddev: 2.2050297750557705e-7",
            "extra": "mean: 1.361899200705118 usec\nrounds: 195618"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 775063.3125586793,
            "unit": "iter/sec",
            "range": "stddev: 1.105178733348673e-7",
            "extra": "mean: 1.2902171781280012 usec\nrounds: 189741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 781845.514635439,
            "unit": "iter/sec",
            "range": "stddev: 1.2334158926515928e-7",
            "extra": "mean: 1.2790250519839363 usec\nrounds: 189289"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 777428.5409591976,
            "unit": "iter/sec",
            "range": "stddev: 1.1007620431088507e-7",
            "extra": "mean: 1.2862918548966469 usec\nrounds: 191228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 733367.7712676299,
            "unit": "iter/sec",
            "range": "stddev: 1.3703674359586693e-7",
            "extra": "mean: 1.3635723291623452 usec\nrounds: 28462"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 778797.0609106816,
            "unit": "iter/sec",
            "range": "stddev: 1.0669754765495521e-7",
            "extra": "mean: 1.284031553522629 usec\nrounds: 196010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 770717.1821093659,
            "unit": "iter/sec",
            "range": "stddev: 1.0290711010432272e-7",
            "extra": "mean: 1.297492806976371 usec\nrounds: 194925"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 775615.5368138223,
            "unit": "iter/sec",
            "range": "stddev: 1.0145072064317883e-7",
            "extra": "mean: 1.2892985667975843 usec\nrounds: 190735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 773035.9324105197,
            "unit": "iter/sec",
            "range": "stddev: 1.0793879573401487e-7",
            "extra": "mean: 1.2936009285904078 usec\nrounds: 185978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 703813.8080851119,
            "unit": "iter/sec",
            "range": "stddev: 1.9206114841337044e-7",
            "extra": "mean: 1.4208303226115029 usec\nrounds: 25171"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 700202.1117183717,
            "unit": "iter/sec",
            "range": "stddev: 1.9914364055249976e-7",
            "extra": "mean: 1.4281590747361383 usec\nrounds: 195689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 732051.3690177638,
            "unit": "iter/sec",
            "range": "stddev: 1.0710010763539237e-7",
            "extra": "mean: 1.366024356107357 usec\nrounds: 184366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 736332.4998223413,
            "unit": "iter/sec",
            "range": "stddev: 1.087862542757108e-7",
            "extra": "mean: 1.3580821167628419 usec\nrounds: 174522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 691137.1236297451,
            "unit": "iter/sec",
            "range": "stddev: 2.409232755535379e-7",
            "extra": "mean: 1.4468908785396375 usec\nrounds: 191757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72302.6885494127,
            "unit": "iter/sec",
            "range": "stddev: 0.000004359733847346396",
            "extra": "mean: 13.830744334169337 usec\nrounds: 37"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57581.446526992026,
            "unit": "iter/sec",
            "range": "stddev: 9.913244796741329e-7",
            "extra": "mean: 17.366705081492483 usec\nrounds: 23745"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450602112,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 909129.2211597913,
            "unit": "iter/sec",
            "range": "stddev: 1.817761355559039e-7",
            "extra": "mean: 1.0999536443502314 usec\nrounds: 24716"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 872258.4520850548,
            "unit": "iter/sec",
            "range": "stddev: 2.1594770268855123e-7",
            "extra": "mean: 1.1464491947422126 usec\nrounds: 82561"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 785310.2755092548,
            "unit": "iter/sec",
            "range": "stddev: 2.672528518850775e-7",
            "extra": "mean: 1.273382039158375 usec\nrounds: 113312"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 688420.0718655832,
            "unit": "iter/sec",
            "range": "stddev: 2.6467374952660684e-7",
            "extra": "mean: 1.4526014578425221 usec\nrounds: 90000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 566023.039354817,
            "unit": "iter/sec",
            "range": "stddev: 2.774006756123127e-7",
            "extra": "mean: 1.766712537249107 usec\nrounds: 110167"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 933839.2765281508,
            "unit": "iter/sec",
            "range": "stddev: 1.437611713552874e-7",
            "extra": "mean: 1.0708480839634666 usec\nrounds: 50936"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 887606.6649391284,
            "unit": "iter/sec",
            "range": "stddev: 2.3878117466065356e-7",
            "extra": "mean: 1.1266251589814047 usec\nrounds: 126681"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 775127.336103253,
            "unit": "iter/sec",
            "range": "stddev: 3.1676935389268435e-7",
            "extra": "mean: 1.290110609473838 usec\nrounds: 124211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 679634.4496526048,
            "unit": "iter/sec",
            "range": "stddev: 2.8603268145810756e-7",
            "extra": "mean: 1.4713792105611334 usec\nrounds: 115419"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 571125.5429604788,
            "unit": "iter/sec",
            "range": "stddev: 2.52592097568299e-7",
            "extra": "mean: 1.750928517075971 usec\nrounds: 114576"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 913487.1664014392,
            "unit": "iter/sec",
            "range": "stddev: 2.9043059780495863e-7",
            "extra": "mean: 1.094706129194312 usec\nrounds: 36494"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880104.0526705384,
            "unit": "iter/sec",
            "range": "stddev: 1.6050722881047331e-7",
            "extra": "mean: 1.1362292867140609 usec\nrounds: 136661"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 782145.6510551373,
            "unit": "iter/sec",
            "range": "stddev: 1.996716424377183e-7",
            "extra": "mean: 1.2785342457008755 usec\nrounds: 126056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684093.157488695,
            "unit": "iter/sec",
            "range": "stddev: 2.2296729256398213e-7",
            "extra": "mean: 1.461789215479071 usec\nrounds: 118994"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 574511.987659437,
            "unit": "iter/sec",
            "range": "stddev: 2.5970120284512696e-7",
            "extra": "mean: 1.740607718341965 usec\nrounds: 115674"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 757378.4686472187,
            "unit": "iter/sec",
            "range": "stddev: 1.1256339220015394e-7",
            "extra": "mean: 1.3203438457738792 usec\nrounds: 3841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 802726.8835096428,
            "unit": "iter/sec",
            "range": "stddev: 1.0774095479515688e-7",
            "extra": "mean: 1.2457537184102387 usec\nrounds: 197980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 752410.617881221,
            "unit": "iter/sec",
            "range": "stddev: 2.4336106039312695e-7",
            "extra": "mean: 1.3290615207105765 usec\nrounds: 173408"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 810163.2679889523,
            "unit": "iter/sec",
            "range": "stddev: 1.0560860536956654e-7",
            "extra": "mean: 1.234319105187626 usec\nrounds: 160752"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 805142.7851363122,
            "unit": "iter/sec",
            "range": "stddev: 1.122155370750245e-7",
            "extra": "mean: 1.2420157249880814 usec\nrounds: 197743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 754153.7163529751,
            "unit": "iter/sec",
            "range": "stddev: 1.6830296044100422e-7",
            "extra": "mean: 1.3259896203070074 usec\nrounds: 18500"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 747586.0520223991,
            "unit": "iter/sec",
            "range": "stddev: 2.61470008998609e-7",
            "extra": "mean: 1.3376386534964917 usec\nrounds: 58729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 772580.7251997147,
            "unit": "iter/sec",
            "range": "stddev: 1.66810745694607e-7",
            "extra": "mean: 1.2943631226905081 usec\nrounds: 101144"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 811583.015504457,
            "unit": "iter/sec",
            "range": "stddev: 1.0873705317430103e-7",
            "extra": "mean: 1.232159841810389 usec\nrounds: 165128"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 752295.5905358918,
            "unit": "iter/sec",
            "range": "stddev: 2.3665297209900709e-7",
            "extra": "mean: 1.3292647366012846 usec\nrounds: 58800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 744283.9513945255,
            "unit": "iter/sec",
            "range": "stddev: 1.4730223630482793e-7",
            "extra": "mean: 1.3435732399259086 usec\nrounds: 23806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 785885.241825051,
            "unit": "iter/sec",
            "range": "stddev: 1.1727866211437742e-7",
            "extra": "mean: 1.2724504123244673 usec\nrounds: 190803"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 755433.8245875337,
            "unit": "iter/sec",
            "range": "stddev: 1.841709769477672e-7",
            "extra": "mean: 1.3237426859275188 usec\nrounds: 58768"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 782391.8693816633,
            "unit": "iter/sec",
            "range": "stddev: 1.255916920224527e-7",
            "extra": "mean: 1.2781318916188582 usec\nrounds: 192721"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 785851.5252866504,
            "unit": "iter/sec",
            "range": "stddev: 1.1495887143294143e-7",
            "extra": "mean: 1.2725050061272527 usec\nrounds: 194115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 736280.6805425304,
            "unit": "iter/sec",
            "range": "stddev: 1.80203770512571e-7",
            "extra": "mean: 1.358177698297268 usec\nrounds: 29535"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 782835.0203140908,
            "unit": "iter/sec",
            "range": "stddev: 1.1642941457710027e-7",
            "extra": "mean: 1.2774083607025881 usec\nrounds: 189523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 780413.7209777855,
            "unit": "iter/sec",
            "range": "stddev: 1.4132603140022144e-7",
            "extra": "mean: 1.2813716277913378 usec\nrounds: 55649"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 729551.8092705167,
            "unit": "iter/sec",
            "range": "stddev: 2.902645941352093e-7",
            "extra": "mean: 1.3707045713448454 usec\nrounds: 180174"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 783810.4728161711,
            "unit": "iter/sec",
            "range": "stddev: 1.2068953118126518e-7",
            "extra": "mean: 1.2758186253968722 usec\nrounds: 194290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 696286.7028244607,
            "unit": "iter/sec",
            "range": "stddev: 1.726095652494123e-7",
            "extra": "mean: 1.4361900003885435 usec\nrounds: 23815"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 701908.4195692013,
            "unit": "iter/sec",
            "range": "stddev: 2.2793936728652369e-7",
            "extra": "mean: 1.4246872841527578 usec\nrounds: 195546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 737825.4155001104,
            "unit": "iter/sec",
            "range": "stddev: 1.2916734466895783e-7",
            "extra": "mean: 1.355334173900994 usec\nrounds: 53479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 688634.7360448024,
            "unit": "iter/sec",
            "range": "stddev: 2.5689252172391354e-7",
            "extra": "mean: 1.4521486466737576 usec\nrounds: 198860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 731987.7014212592,
            "unit": "iter/sec",
            "range": "stddev: 1.1856786285595972e-7",
            "extra": "mean: 1.3661431716111576 usec\nrounds: 177332"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 75537.15851492288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037034733123481068",
            "extra": "mean: 13.238517567515373 usec\nrounds: 44"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57436.2904009865,
            "unit": "iter/sec",
            "range": "stddev: 9.279453184680139e-7",
            "extra": "mean: 17.410595165853962 usec\nrounds: 24288"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450698498,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 915954.252419999,
            "unit": "iter/sec",
            "range": "stddev: 2.0829229642838605e-7",
            "extra": "mean: 1.0917575821695766 usec\nrounds: 33370"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 875068.6394021985,
            "unit": "iter/sec",
            "range": "stddev: 2.2572369937370036e-7",
            "extra": "mean: 1.142767498425207 usec\nrounds: 91282"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 783151.8506116761,
            "unit": "iter/sec",
            "range": "stddev: 2.2106383480638443e-7",
            "extra": "mean: 1.2768915750105883 usec\nrounds: 112664"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 690889.9100827526,
            "unit": "iter/sec",
            "range": "stddev: 2.3603490710776894e-7",
            "extra": "mean: 1.4474086036083857 usec\nrounds: 42573"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569784.8722078813,
            "unit": "iter/sec",
            "range": "stddev: 2.2420986727117714e-7",
            "extra": "mean: 1.7550483503099363 usec\nrounds: 109354"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 928744.7225210634,
            "unit": "iter/sec",
            "range": "stddev: 1.7886026298064331e-7",
            "extra": "mean: 1.0767221344585574 usec\nrounds: 31915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 884932.550753163,
            "unit": "iter/sec",
            "range": "stddev: 2.283680027838352e-7",
            "extra": "mean: 1.1300296267200292 usec\nrounds: 135045"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 785133.9195957184,
            "unit": "iter/sec",
            "range": "stddev: 2.0655759920316796e-7",
            "extra": "mean: 1.2736680648250691 usec\nrounds: 126435"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 688793.1012993908,
            "unit": "iter/sec",
            "range": "stddev: 2.1442155217231038e-7",
            "extra": "mean: 1.451814772989923 usec\nrounds: 125901"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 576889.9442566975,
            "unit": "iter/sec",
            "range": "stddev: 2.219248625606344e-7",
            "extra": "mean: 1.7334328843059743 usec\nrounds: 123682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 928602.7738931238,
            "unit": "iter/sec",
            "range": "stddev: 2.3372388685550658e-7",
            "extra": "mean: 1.0768867249960352 usec\nrounds: 33736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 888901.7137439372,
            "unit": "iter/sec",
            "range": "stddev: 2.0884702598145448e-7",
            "extra": "mean: 1.124983768777013 usec\nrounds: 115488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 795120.7298146616,
            "unit": "iter/sec",
            "range": "stddev: 2.0388148362839082e-7",
            "extra": "mean: 1.2576706435928224 usec\nrounds: 127995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 694297.3910792347,
            "unit": "iter/sec",
            "range": "stddev: 2.4082486952432095e-7",
            "extra": "mean: 1.4403049944427604 usec\nrounds: 113163"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 580464.4264957831,
            "unit": "iter/sec",
            "range": "stddev: 2.3597110263698774e-7",
            "extra": "mean: 1.7227584574595196 usec\nrounds: 111016"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 750850.7442341823,
            "unit": "iter/sec",
            "range": "stddev: 2.755424604633506e-7",
            "extra": "mean: 1.331822612788289 usec\nrounds: 3894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 802007.7582363258,
            "unit": "iter/sec",
            "range": "stddev: 1.2060339321448733e-7",
            "extra": "mean: 1.2468707312745568 usec\nrounds: 59152"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 753418.1294853913,
            "unit": "iter/sec",
            "range": "stddev: 2.1070766747017745e-7",
            "extra": "mean: 1.32728422752852 usec\nrounds: 169347"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 750692.0161712933,
            "unit": "iter/sec",
            "range": "stddev: 2.1742047701180145e-7",
            "extra": "mean: 1.3321042164538213 usec\nrounds: 199044"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 807273.2407249997,
            "unit": "iter/sec",
            "range": "stddev: 1.0567603824002655e-7",
            "extra": "mean: 1.2387379508602505 usec\nrounds: 195351"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 750548.4233718207,
            "unit": "iter/sec",
            "range": "stddev: 1.9370387691495517e-7",
            "extra": "mean: 1.3323590708611763 usec\nrounds: 18708"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 802203.4633968924,
            "unit": "iter/sec",
            "range": "stddev: 1.313404331364288e-7",
            "extra": "mean: 1.2465665453070316 usec\nrounds: 196873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 753048.1673970454,
            "unit": "iter/sec",
            "range": "stddev: 2.126718907468608e-7",
            "extra": "mean: 1.32793630380452 usec\nrounds: 57917"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 750541.5413868909,
            "unit": "iter/sec",
            "range": "stddev: 2.2840232337640873e-7",
            "extra": "mean: 1.3323712877399783 usec\nrounds: 58529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 810219.504904519,
            "unit": "iter/sec",
            "range": "stddev: 1.0843823318942234e-7",
            "extra": "mean: 1.2342334317387802 usec\nrounds: 194854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 735309.3507340859,
            "unit": "iter/sec",
            "range": "stddev: 2.667827063984966e-7",
            "extra": "mean: 1.3599718254659263 usec\nrounds: 28829"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 729423.6543453707,
            "unit": "iter/sec",
            "range": "stddev: 2.7509004305150183e-7",
            "extra": "mean: 1.370945395097532 usec\nrounds: 57922"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 785782.7205967277,
            "unit": "iter/sec",
            "range": "stddev: 1.0481381891346228e-7",
            "extra": "mean: 1.2726164291836228 usec\nrounds: 189791"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 783972.0001333792,
            "unit": "iter/sec",
            "range": "stddev: 1.150170063495447e-7",
            "extra": "mean: 1.2755557594274636 usec\nrounds: 198291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 728911.4968164942,
            "unit": "iter/sec",
            "range": "stddev: 2.3820319907334086e-7",
            "extra": "mean: 1.3719086670569463 usec\nrounds: 189356"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 729624.8814220905,
            "unit": "iter/sec",
            "range": "stddev: 3.0829249255271616e-7",
            "extra": "mean: 1.3705672948692886 usec\nrounds: 26937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 725630.7848850961,
            "unit": "iter/sec",
            "range": "stddev: 2.2143688302776357e-7",
            "extra": "mean: 1.3781113216666385 usec\nrounds: 188890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 786531.7982298,
            "unit": "iter/sec",
            "range": "stddev: 1.0630361408636362e-7",
            "extra": "mean: 1.2714044139736502 usec\nrounds: 55290"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 732709.8250331945,
            "unit": "iter/sec",
            "range": "stddev: 2.530028625487767e-7",
            "extra": "mean: 1.3647967665162621 usec\nrounds: 199990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 724617.4331485976,
            "unit": "iter/sec",
            "range": "stddev: 1.9876221036533099e-7",
            "extra": "mean: 1.380038561389303 usec\nrounds: 58765"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 700516.8878988189,
            "unit": "iter/sec",
            "range": "stddev: 2.2551478999715537e-7",
            "extra": "mean: 1.4275173336641067 usec\nrounds: 20262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 742174.5907791692,
            "unit": "iter/sec",
            "range": "stddev: 1.1542318698973347e-7",
            "extra": "mean: 1.3473918568811893 usec\nrounds: 57657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 741093.5302683188,
            "unit": "iter/sec",
            "range": "stddev: 1.2168712063883657e-7",
            "extra": "mean: 1.349357347159598 usec\nrounds: 180613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 686894.8888670482,
            "unit": "iter/sec",
            "range": "stddev: 2.5309441941444686e-7",
            "extra": "mean: 1.4558268174762248 usec\nrounds: 198364"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 692212.3198164221,
            "unit": "iter/sec",
            "range": "stddev: 2.1559871442851579e-7",
            "extra": "mean: 1.4446434589104173 usec\nrounds: 177875"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 76334.52359967232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035981749650724644",
            "extra": "mean: 13.10023240918337 usec\nrounds: 43"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58193.54060942022,
            "unit": "iter/sec",
            "range": "stddev: 9.980602540535046e-7",
            "extra": "mean: 17.184037773397183 usec\nrounds: 24643"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - SDK": [
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433460464,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 481612.1690237196,
            "unit": "iter/sec",
            "range": "stddev: 4.159014235931493e-7",
            "extra": "mean: 2.076359494875532 usec\nrounds: 20698"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 447289.34354435623,
            "unit": "iter/sec",
            "range": "stddev: 2.827108277470969e-7",
            "extra": "mean: 2.235689301417111 usec\nrounds: 57232"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 429613.03768667317,
            "unit": "iter/sec",
            "range": "stddev: 4.7085778038287966e-7",
            "extra": "mean: 2.3276760998331794 usec\nrounds: 75747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 400666.68482004013,
            "unit": "iter/sec",
            "range": "stddev: 2.990431127230986e-7",
            "extra": "mean: 2.4958401531416348 usec\nrounds: 74218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 369205.57385813957,
            "unit": "iter/sec",
            "range": "stddev: 3.054039148642342e-7",
            "extra": "mean: 2.708518155753065 usec\nrounds: 73861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 480269.951226634,
            "unit": "iter/sec",
            "range": "stddev: 2.222414555740035e-7",
            "extra": "mean: 2.0821623285944684 usec\nrounds: 45137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 454552.27720982925,
            "unit": "iter/sec",
            "range": "stddev: 3.0344611072087645e-7",
            "extra": "mean: 2.19996697880007 usec\nrounds: 74925"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 421978.08844027657,
            "unit": "iter/sec",
            "range": "stddev: 3.524066563823324e-7",
            "extra": "mean: 2.369791293420516 usec\nrounds: 63792"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 401390.7076076702,
            "unit": "iter/sec",
            "range": "stddev: 2.24912274342936e-7",
            "extra": "mean: 2.491338192555833 usec\nrounds: 78006"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 372333.29171904386,
            "unit": "iter/sec",
            "range": "stddev: 2.9852291667133935e-7",
            "extra": "mean: 2.685765743329185 usec\nrounds: 80208"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 464135.3977598897,
            "unit": "iter/sec",
            "range": "stddev: 0.000014984903959346219",
            "extra": "mean: 2.1545437060530515 usec\nrounds: 31365"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 456964.3145145111,
            "unit": "iter/sec",
            "range": "stddev: 2.241442514904959e-7",
            "extra": "mean: 2.1883546881826472 usec\nrounds: 53741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 437751.94104111823,
            "unit": "iter/sec",
            "range": "stddev: 2.113803164931575e-7",
            "extra": "mean: 2.284398779869875 usec\nrounds: 65937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 399460.1606265879,
            "unit": "iter/sec",
            "range": "stddev: 3.9790566038064435e-7",
            "extra": "mean: 2.50337855577741 usec\nrounds: 69209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 375113.6795932151,
            "unit": "iter/sec",
            "range": "stddev: 3.2112995032794405e-7",
            "extra": "mean: 2.6658585234332985 usec\nrounds: 72883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 381324.4960673846,
            "unit": "iter/sec",
            "range": "stddev: 3.877287973391723e-7",
            "extra": "mean: 2.622438396465587 usec\nrounds: 2988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 379894.1978865604,
            "unit": "iter/sec",
            "range": "stddev: 2.693001722028842e-7",
            "extra": "mean: 2.6323118530454845 usec\nrounds: 131845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 380626.86558142764,
            "unit": "iter/sec",
            "range": "stddev: 2.9342659166735145e-7",
            "extra": "mean: 2.6272449225896004 usec\nrounds: 149495"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 381006.3928471517,
            "unit": "iter/sec",
            "range": "stddev: 3.1912386591712276e-7",
            "extra": "mean: 2.6246278770476428 usec\nrounds: 120267"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 373856.5846822164,
            "unit": "iter/sec",
            "range": "stddev: 3.3604715173422545e-7",
            "extra": "mean: 2.674822488013725 usec\nrounds: 127964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 379542.86373160366,
            "unit": "iter/sec",
            "range": "stddev: 2.7311988729644254e-7",
            "extra": "mean: 2.6347485239695008 usec\nrounds: 18848"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 379988.391763661,
            "unit": "iter/sec",
            "range": "stddev: 2.795953822028044e-7",
            "extra": "mean: 2.631659339272563 usec\nrounds: 148420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 379338.6119458505,
            "unit": "iter/sec",
            "range": "stddev: 3.1593338984553747e-7",
            "extra": "mean: 2.6361671828512603 usec\nrounds: 146968"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 379208.02829401445,
            "unit": "iter/sec",
            "range": "stddev: 3.120102326890238e-7",
            "extra": "mean: 2.6370749704293233 usec\nrounds: 144088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 378630.1249620655,
            "unit": "iter/sec",
            "range": "stddev: 2.734096586599083e-7",
            "extra": "mean: 2.6410999391561587 usec\nrounds: 147950"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 377123.1637205861,
            "unit": "iter/sec",
            "range": "stddev: 3.066120470895147e-7",
            "extra": "mean: 2.65165361399256 usec\nrounds: 21958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 372362.2408254389,
            "unit": "iter/sec",
            "range": "stddev: 3.337619365797017e-7",
            "extra": "mean: 2.6855569398853034 usec\nrounds: 146777"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 373143.80080655514,
            "unit": "iter/sec",
            "range": "stddev: 2.918492126344085e-7",
            "extra": "mean: 2.6799319668140997 usec\nrounds: 136496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 371188.55510404316,
            "unit": "iter/sec",
            "range": "stddev: 4.004183655102775e-7",
            "extra": "mean: 2.6940485805649437 usec\nrounds: 146247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 373366.86620430177,
            "unit": "iter/sec",
            "range": "stddev: 3.1474200240766084e-7",
            "extra": "mean: 2.678330860384414 usec\nrounds: 130041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 335644.5619478919,
            "unit": "iter/sec",
            "range": "stddev: 4.880938180960853e-7",
            "extra": "mean: 2.979342177321639 usec\nrounds: 79"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 372645.05243972345,
            "unit": "iter/sec",
            "range": "stddev: 3.046902040833192e-7",
            "extra": "mean: 2.683518789402828 usec\nrounds: 136202"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 371862.6735864435,
            "unit": "iter/sec",
            "range": "stddev: 3.1140922684921216e-7",
            "extra": "mean: 2.6891647670777568 usec\nrounds: 148062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 374239.8679123328,
            "unit": "iter/sec",
            "range": "stddev: 3.2546697007298336e-7",
            "extra": "mean: 2.672083029470965 usec\nrounds: 145602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 372275.39093444997,
            "unit": "iter/sec",
            "range": "stddev: 3.3898994808111e-7",
            "extra": "mean: 2.686183466196613 usec\nrounds: 125894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 363225.43516955315,
            "unit": "iter/sec",
            "range": "stddev: 3.88963526763686e-7",
            "extra": "mean: 2.753111162309438 usec\nrounds: 19215"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 366348.0991598069,
            "unit": "iter/sec",
            "range": "stddev: 3.475182147362587e-7",
            "extra": "mean: 2.7296442981236377 usec\nrounds: 131321"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 357645.65920690534,
            "unit": "iter/sec",
            "range": "stddev: 4.740595601119059e-7",
            "extra": "mean: 2.7960635736990156 usec\nrounds: 140672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 363434.7518307906,
            "unit": "iter/sec",
            "range": "stddev: 3.0668053999135014e-7",
            "extra": "mean: 2.7515255350858245 usec\nrounds: 129758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 365237.7402071039,
            "unit": "iter/sec",
            "range": "stddev: 3.1516453910287514e-7",
            "extra": "mean: 2.7379426875025605 usec\nrounds: 126457"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 45177.768956175685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031949250763537087",
            "extra": "mean: 22.13478051494844 usec\nrounds: 101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34866.752615603546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010326833699962092",
            "extra": "mean: 28.680617636655974 usec\nrounds: 15306"
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433511314,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 480317.181021839,
            "unit": "iter/sec",
            "range": "stddev: 1.4882165712599888e-7",
            "extra": "mean: 2.0819575886762465 usec\nrounds: 27023"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 458049.6921125878,
            "unit": "iter/sec",
            "range": "stddev: 2.442332022602899e-7",
            "extra": "mean: 2.183169243904222 usec\nrounds: 71400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 436638.48732403544,
            "unit": "iter/sec",
            "range": "stddev: 2.875900669572751e-7",
            "extra": "mean: 2.290224130558345 usec\nrounds: 79531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 402180.4414182809,
            "unit": "iter/sec",
            "range": "stddev: 2.628789964878153e-7",
            "extra": "mean: 2.4864461247133773 usec\nrounds: 77763"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 367307.3641035526,
            "unit": "iter/sec",
            "range": "stddev: 2.5176332094031526e-7",
            "extra": "mean: 2.7225155216819354 usec\nrounds: 69974"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 485367.0959256387,
            "unit": "iter/sec",
            "range": "stddev: 2.139110160156145e-7",
            "extra": "mean: 2.0602962343232396 usec\nrounds: 47468"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 462975.312682752,
            "unit": "iter/sec",
            "range": "stddev: 2.3883060763863056e-7",
            "extra": "mean: 2.159942382684317 usec\nrounds: 83214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 425956.60000626335,
            "unit": "iter/sec",
            "range": "stddev: 3.6957481887632197e-7",
            "extra": "mean: 2.3476570147881164 usec\nrounds: 78519"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 404684.436446632,
            "unit": "iter/sec",
            "range": "stddev: 2.8498113231722583e-7",
            "extra": "mean: 2.471061177396862 usec\nrounds: 78602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 370082.8937950533,
            "unit": "iter/sec",
            "range": "stddev: 2.4849987692144776e-7",
            "extra": "mean: 2.702097332155498 usec\nrounds: 76636"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 470758.3814773897,
            "unit": "iter/sec",
            "range": "stddev: 0.00001627142928159696",
            "extra": "mean: 2.1242319613337135 usec\nrounds: 31383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 463642.2193574866,
            "unit": "iter/sec",
            "range": "stddev: 2.3349938475820795e-7",
            "extra": "mean: 2.1568355042942287 usec\nrounds: 52419"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 439987.6944111632,
            "unit": "iter/sec",
            "range": "stddev: 3.232557612448702e-7",
            "extra": "mean: 2.2727908364307843 usec\nrounds: 68894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 399942.6693149416,
            "unit": "iter/sec",
            "range": "stddev: 3.886363905292593e-7",
            "extra": "mean: 2.5003583681453434 usec\nrounds: 70807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 374903.77106275875,
            "unit": "iter/sec",
            "range": "stddev: 2.577019799897778e-7",
            "extra": "mean: 2.667351136973761 usec\nrounds: 70597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 383101.47029879154,
            "unit": "iter/sec",
            "range": "stddev: 1.058477747896776e-7",
            "extra": "mean: 2.610274503045034 usec\nrounds: 2980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 379164.87871053384,
            "unit": "iter/sec",
            "range": "stddev: 3.382653937593754e-7",
            "extra": "mean: 2.6373750738750013 usec\nrounds: 117260"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 379233.4658823655,
            "unit": "iter/sec",
            "range": "stddev: 3.3014071571541686e-7",
            "extra": "mean: 2.6368980851236117 usec\nrounds: 138682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 379591.21845352434,
            "unit": "iter/sec",
            "range": "stddev: 2.9684234938323513e-7",
            "extra": "mean: 2.63441289309604 usec\nrounds: 143281"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 380617.11369553383,
            "unit": "iter/sec",
            "range": "stddev: 4.602605056254756e-7",
            "extra": "mean: 2.627312235886292 usec\nrounds: 145160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 379763.21142688947,
            "unit": "iter/sec",
            "range": "stddev: 3.225873839117784e-7",
            "extra": "mean: 2.633219779879906 usec\nrounds: 18430"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 380985.4523015751,
            "unit": "iter/sec",
            "range": "stddev: 2.796929829112431e-7",
            "extra": "mean: 2.6247721375157234 usec\nrounds: 127244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 381045.46511967893,
            "unit": "iter/sec",
            "range": "stddev: 3.8109223349320413e-7",
            "extra": "mean: 2.624358748596889 usec\nrounds: 121892"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 373119.52679768903,
            "unit": "iter/sec",
            "range": "stddev: 2.798162788862515e-7",
            "extra": "mean: 2.680106314945599 usec\nrounds: 144807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 377766.8375514811,
            "unit": "iter/sec",
            "range": "stddev: 4.612901900917235e-7",
            "extra": "mean: 2.647135483044412 usec\nrounds: 131805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 373716.42636316776,
            "unit": "iter/sec",
            "range": "stddev: 3.014319540868157e-7",
            "extra": "mean: 2.675825651367613 usec\nrounds: 22537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 359786.17433063727,
            "unit": "iter/sec",
            "range": "stddev: 7.228094981361198e-7",
            "extra": "mean: 2.7794286477529213 usec\nrounds: 145130"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 374260.43964128493,
            "unit": "iter/sec",
            "range": "stddev: 3.6800336220921537e-7",
            "extra": "mean: 2.671936154829679 usec\nrounds: 123604"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 372599.7289616273,
            "unit": "iter/sec",
            "range": "stddev: 3.201529334213489e-7",
            "extra": "mean: 2.683845215848202 usec\nrounds: 141927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 372869.9842216308,
            "unit": "iter/sec",
            "range": "stddev: 3.919226416405483e-7",
            "extra": "mean: 2.6818999713466036 usec\nrounds: 133302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 339203.3187625778,
            "unit": "iter/sec",
            "range": "stddev: 4.7346115935108867e-7",
            "extra": "mean: 2.948084363230952 usec\nrounds: 81"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 374768.6253464679,
            "unit": "iter/sec",
            "range": "stddev: 3.1495456671432373e-7",
            "extra": "mean: 2.6683130133305992 usec\nrounds: 49160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 374841.56463757943,
            "unit": "iter/sec",
            "range": "stddev: 2.8542966542961234e-7",
            "extra": "mean: 2.6677937943377845 usec\nrounds: 120713"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 375153.72605540935,
            "unit": "iter/sec",
            "range": "stddev: 5.16327464179032e-7",
            "extra": "mean: 2.665573951549404 usec\nrounds: 101460"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 376063.2172479917,
            "unit": "iter/sec",
            "range": "stddev: 3.219601137868495e-7",
            "extra": "mean: 2.65912738639514 usec\nrounds: 139158"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 366187.4779456178,
            "unit": "iter/sec",
            "range": "stddev: 2.559993919155745e-7",
            "extra": "mean: 2.730841604989314 usec\nrounds: 19532"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 362590.6780969356,
            "unit": "iter/sec",
            "range": "stddev: 4.815339109074695e-7",
            "extra": "mean: 2.757930802988427 usec\nrounds: 136687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 359152.39873362216,
            "unit": "iter/sec",
            "range": "stddev: 4.816261550581603e-7",
            "extra": "mean: 2.784333345749654 usec\nrounds: 118580"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 361210.52080262,
            "unit": "iter/sec",
            "range": "stddev: 3.098192036502417e-7",
            "extra": "mean: 2.7684686419929627 usec\nrounds: 111919"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 358643.9020906096,
            "unit": "iter/sec",
            "range": "stddev: 4.6861406185986245e-7",
            "extra": "mean: 2.788281061439475 usec\nrounds: 115893"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 46330.52333794571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023477590920251065",
            "extra": "mean: 21.584042828650244 usec\nrounds: 124"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34215.55512680711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011309920544450923",
            "extra": "mean: 29.226473055716195 usec\nrounds: 13092"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449588545,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 486390.93928319396,
            "unit": "iter/sec",
            "range": "stddev: 2.90104048497763e-7",
            "extra": "mean: 2.055959351285869 usec\nrounds: 26947"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 457040.9637096236,
            "unit": "iter/sec",
            "range": "stddev: 2.481641601755383e-7",
            "extra": "mean: 2.1879876846998334 usec\nrounds: 71885"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 435085.42344925227,
            "unit": "iter/sec",
            "range": "stddev: 2.615689637005824e-7",
            "extra": "mean: 2.29839922485162 usec\nrounds: 79317"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 403663.6840914995,
            "unit": "iter/sec",
            "range": "stddev: 3.25843434091265e-7",
            "extra": "mean: 2.477309798751496 usec\nrounds: 71686"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 368377.20769419946,
            "unit": "iter/sec",
            "range": "stddev: 2.795620474085967e-7",
            "extra": "mean: 2.714608773597439 usec\nrounds: 78946"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 488535.45329225383,
            "unit": "iter/sec",
            "range": "stddev: 2.9333232718430396e-7",
            "extra": "mean: 2.0469343489013387 usec\nrounds: 46781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 458606.62021357217,
            "unit": "iter/sec",
            "range": "stddev: 2.6419410930821355e-7",
            "extra": "mean: 2.180518021162237 usec\nrounds: 80449"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 432908.8374887427,
            "unit": "iter/sec",
            "range": "stddev: 3.3958318954800173e-7",
            "extra": "mean: 2.3099551531470035 usec\nrounds: 78009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 403962.8550244461,
            "unit": "iter/sec",
            "range": "stddev: 2.5725486852463043e-7",
            "extra": "mean: 2.475475127383888 usec\nrounds: 78877"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 373668.409742057,
            "unit": "iter/sec",
            "range": "stddev: 3.0395715374726885e-7",
            "extra": "mean: 2.676169496614122 usec\nrounds: 73396"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 465032.292331625,
            "unit": "iter/sec",
            "range": "stddev: 0.000015927372594209384",
            "extra": "mean: 2.150388298812757 usec\nrounds: 31786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 468335.9959112503,
            "unit": "iter/sec",
            "range": "stddev: 3.6248507565670066e-7",
            "extra": "mean: 2.135219177535737 usec\nrounds: 55015"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 446231.82856400515,
            "unit": "iter/sec",
            "range": "stddev: 2.8218225350246145e-7",
            "extra": "mean: 2.2409876122419297 usec\nrounds: 79696"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 401892.2931285574,
            "unit": "iter/sec",
            "range": "stddev: 3.6537950479681957e-7",
            "extra": "mean: 2.488228854092805 usec\nrounds: 78839"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 375459.66156468884,
            "unit": "iter/sec",
            "range": "stddev: 2.807328123898942e-7",
            "extra": "mean: 2.663401963962266 usec\nrounds: 76494"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 378689.3558886533,
            "unit": "iter/sec",
            "range": "stddev: 2.5215324694014216e-7",
            "extra": "mean: 2.6406868438468383 usec\nrounds: 2967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 380594.3578899249,
            "unit": "iter/sec",
            "range": "stddev: 2.8999353601490633e-7",
            "extra": "mean: 2.627469323360855 usec\nrounds: 123782"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 381020.07648150646,
            "unit": "iter/sec",
            "range": "stddev: 3.01613886010432e-7",
            "extra": "mean: 2.6245336183709913 usec\nrounds: 129617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 379213.2167608454,
            "unit": "iter/sec",
            "range": "stddev: 3.0449437287381033e-7",
            "extra": "mean: 2.637038889471672 usec\nrounds: 129172"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 377709.2975115905,
            "unit": "iter/sec",
            "range": "stddev: 4.1776702693249193e-7",
            "extra": "mean: 2.6475387463008206 usec\nrounds: 126145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 375277.3839539034,
            "unit": "iter/sec",
            "range": "stddev: 2.7007306201549623e-7",
            "extra": "mean: 2.6646956165171773 usec\nrounds: 17542"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 378821.30261394754,
            "unit": "iter/sec",
            "range": "stddev: 3.4689447649575254e-7",
            "extra": "mean: 2.6397670698553313 usec\nrounds: 133942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 378544.49836082355,
            "unit": "iter/sec",
            "range": "stddev: 4.1166206846238063e-7",
            "extra": "mean: 2.641697354816166 usec\nrounds: 157015"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 379398.3478326734,
            "unit": "iter/sec",
            "range": "stddev: 3.020572797275624e-7",
            "extra": "mean: 2.635752120989814 usec\nrounds: 115240"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 380077.5439798381,
            "unit": "iter/sec",
            "range": "stddev: 3.156056469943638e-7",
            "extra": "mean: 2.6310420487589945 usec\nrounds: 145771"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 375910.5601149432,
            "unit": "iter/sec",
            "range": "stddev: 2.570058157140064e-7",
            "extra": "mean: 2.6602072569981203 usec\nrounds: 21613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 366766.7624560873,
            "unit": "iter/sec",
            "range": "stddev: 3.0636368386186483e-7",
            "extra": "mean: 2.7265284163248826 usec\nrounds: 120612"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 370515.3123329179,
            "unit": "iter/sec",
            "range": "stddev: 2.744680314720096e-7",
            "extra": "mean: 2.6989437864351298 usec\nrounds: 143348"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 373724.7458690815,
            "unit": "iter/sec",
            "range": "stddev: 3.3577391033186104e-7",
            "extra": "mean: 2.6757660846742732 usec\nrounds: 146456"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 374484.0262267835,
            "unit": "iter/sec",
            "range": "stddev: 2.9013910573386083e-7",
            "extra": "mean: 2.670340868943795 usec\nrounds: 145199"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 332584.14367547986,
            "unit": "iter/sec",
            "range": "stddev: 4.228035085468275e-7",
            "extra": "mean: 3.006757895757512 usec\nrounds: 82"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 373378.49577522144,
            "unit": "iter/sec",
            "range": "stddev: 3.365174396959815e-7",
            "extra": "mean: 2.678247438765227 usec\nrounds: 141106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 371830.09280569653,
            "unit": "iter/sec",
            "range": "stddev: 4.1472611631107317e-7",
            "extra": "mean: 2.689400399129502 usec\nrounds: 121927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 370004.20055155363,
            "unit": "iter/sec",
            "range": "stddev: 3.3043988838629e-7",
            "extra": "mean: 2.7026720196941856 usec\nrounds: 133335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 368392.74885282415,
            "unit": "iter/sec",
            "range": "stddev: 4.561102519088397e-7",
            "extra": "mean: 2.7144942540644523 usec\nrounds: 128485"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 361633.1075844931,
            "unit": "iter/sec",
            "range": "stddev: 3.3465573010098187e-7",
            "extra": "mean: 2.76523354479196 usec\nrounds: 19192"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 364065.0509593484,
            "unit": "iter/sec",
            "range": "stddev: 2.984051635768635e-7",
            "extra": "mean: 2.746761869520017 usec\nrounds: 146177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 356531.2954788542,
            "unit": "iter/sec",
            "range": "stddev: 3.139327246274195e-7",
            "extra": "mean: 2.8048028677451957 usec\nrounds: 131967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 361464.09537355683,
            "unit": "iter/sec",
            "range": "stddev: 3.054458566394079e-7",
            "extra": "mean: 2.7665265037362703 usec\nrounds: 138566"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 360958.6999872122,
            "unit": "iter/sec",
            "range": "stddev: 3.2678244147373e-7",
            "extra": "mean: 2.770400048635557 usec\nrounds: 107849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 45717.65932556227,
            "unit": "iter/sec",
            "range": "stddev: 0.000002914940671446391",
            "extra": "mean: 21.8733857934163 usec\nrounds: 107"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34791.87042598823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011553610637866178",
            "extra": "mean: 28.742346638915894 usec\nrounds: 12930"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449639834,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 482180.45770133444,
            "unit": "iter/sec",
            "range": "stddev: 2.2072190984618395e-7",
            "extra": "mean: 2.073912337234136 usec\nrounds: 26282"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 452105.73014628777,
            "unit": "iter/sec",
            "range": "stddev: 2.4443973444770607e-7",
            "extra": "mean: 2.2118719877238235 usec\nrounds: 71114"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 432382.7524433225,
            "unit": "iter/sec",
            "range": "stddev: 2.5137115120828773e-7",
            "extra": "mean: 2.3127657020294348 usec\nrounds: 79007"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 398474.47543248907,
            "unit": "iter/sec",
            "range": "stddev: 3.0174936294255235e-7",
            "extra": "mean: 2.509571030652937 usec\nrounds: 72323"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 363834.97382116184,
            "unit": "iter/sec",
            "range": "stddev: 3.337168036167161e-7",
            "extra": "mean: 2.7484988303832947 usec\nrounds: 73529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 476571.76665937004,
            "unit": "iter/sec",
            "range": "stddev: 2.7556773376491015e-7",
            "extra": "mean: 2.098319854341583 usec\nrounds: 47799"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 455767.9382916508,
            "unit": "iter/sec",
            "range": "stddev: 2.4521175912294713e-7",
            "extra": "mean: 2.194099049064942 usec\nrounds: 80122"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 428812.4848750285,
            "unit": "iter/sec",
            "range": "stddev: 2.743119824227852e-7",
            "extra": "mean: 2.332021653454041 usec\nrounds: 73547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 401877.5152922857,
            "unit": "iter/sec",
            "range": "stddev: 2.422328950063642e-7",
            "extra": "mean: 2.4883203512211916 usec\nrounds: 71571"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 369706.85588560725,
            "unit": "iter/sec",
            "range": "stddev: 3.2019172803267465e-7",
            "extra": "mean: 2.7048457016155925 usec\nrounds: 76612"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 461614.21023212833,
            "unit": "iter/sec",
            "range": "stddev: 0.00001571163219209397",
            "extra": "mean: 2.166311126984453 usec\nrounds: 31532"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 456111.8714783104,
            "unit": "iter/sec",
            "range": "stddev: 2.674070789349297e-7",
            "extra": "mean: 2.1924445789119376 usec\nrounds: 52754"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 434818.14844104444,
            "unit": "iter/sec",
            "range": "stddev: 2.8166495939103306e-7",
            "extra": "mean: 2.299812010113434 usec\nrounds: 64846"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 398912.6633184312,
            "unit": "iter/sec",
            "range": "stddev: 4.288069455327425e-7",
            "extra": "mean: 2.5068143780678933 usec\nrounds: 71607"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 371981.3134415258,
            "unit": "iter/sec",
            "range": "stddev: 2.9114843239948047e-7",
            "extra": "mean: 2.688307083891182 usec\nrounds: 72856"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 374593.3524444647,
            "unit": "iter/sec",
            "range": "stddev: 4.457126253909534e-7",
            "extra": "mean: 2.6695615217791535 usec\nrounds: 2951"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 383399.44198590756,
            "unit": "iter/sec",
            "range": "stddev: 2.832093577764573e-7",
            "extra": "mean: 2.6082458409961813 usec\nrounds: 120646"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 382288.6831860605,
            "unit": "iter/sec",
            "range": "stddev: 2.842621607233656e-7",
            "extra": "mean: 2.6158242291292164 usec\nrounds: 128316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 382246.13812978746,
            "unit": "iter/sec",
            "range": "stddev: 3.1261057782968076e-7",
            "extra": "mean: 2.6161153776273367 usec\nrounds: 132980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 382434.99383903376,
            "unit": "iter/sec",
            "range": "stddev: 3.2860922994695333e-7",
            "extra": "mean: 2.614823476172001 usec\nrounds: 149007"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 381034.8628270965,
            "unit": "iter/sec",
            "range": "stddev: 2.449260078275779e-7",
            "extra": "mean: 2.6244317713620173 usec\nrounds: 19396"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 381485.38694504707,
            "unit": "iter/sec",
            "range": "stddev: 3.313444638052646e-7",
            "extra": "mean: 2.6213323870883944 usec\nrounds: 123839"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 381930.917633219,
            "unit": "iter/sec",
            "range": "stddev: 3.086435393077736e-7",
            "extra": "mean: 2.61827454607991 usec\nrounds: 121837"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 380776.88443158945,
            "unit": "iter/sec",
            "range": "stddev: 3.055932307217775e-7",
            "extra": "mean: 2.626209838059801 usec\nrounds: 139820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 376055.1802372537,
            "unit": "iter/sec",
            "range": "stddev: 2.742163272913521e-7",
            "extra": "mean: 2.6591842169787387 usec\nrounds: 140948"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 378002.61471738736,
            "unit": "iter/sec",
            "range": "stddev: 4.109912228019918e-7",
            "extra": "mean: 2.645484346047837 usec\nrounds: 22802"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 376408.8698028077,
            "unit": "iter/sec",
            "range": "stddev: 3.2402972104950274e-7",
            "extra": "mean: 2.656685535927668 usec\nrounds: 141571"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 375088.30002104293,
            "unit": "iter/sec",
            "range": "stddev: 2.9378165522708985e-7",
            "extra": "mean: 2.666038903223318 usec\nrounds: 140884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 375244.7772255618,
            "unit": "iter/sec",
            "range": "stddev: 2.9384061205012967e-7",
            "extra": "mean: 2.664927164059886 usec\nrounds: 119804"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 374645.9179274872,
            "unit": "iter/sec",
            "range": "stddev: 3.2981745006800466e-7",
            "extra": "mean: 2.6691869633384084 usec\nrounds: 123228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 319529.2251848834,
            "unit": "iter/sec",
            "range": "stddev: 0.000001384400503192992",
            "extra": "mean: 3.129604183846996 usec\nrounds: 84"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 373495.64316241874,
            "unit": "iter/sec",
            "range": "stddev: 3.0571488615938687e-7",
            "extra": "mean: 2.6774074030232766 usec\nrounds: 139041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 372222.923664656,
            "unit": "iter/sec",
            "range": "stddev: 3.3847412357110907e-7",
            "extra": "mean: 2.6865621014274836 usec\nrounds: 136150"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 369615.1359212218,
            "unit": "iter/sec",
            "range": "stddev: 5.407229215046553e-7",
            "extra": "mean: 2.705516908845247 usec\nrounds: 140976"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 373611.46653442323,
            "unit": "iter/sec",
            "range": "stddev: 3.132775434190473e-7",
            "extra": "mean: 2.676577379371903 usec\nrounds: 100783"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 368152.61906350777,
            "unit": "iter/sec",
            "range": "stddev: 2.1178585615037333e-7",
            "extra": "mean: 2.7162647994838687 usec\nrounds: 19033"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 368311.7901941072,
            "unit": "iter/sec",
            "range": "stddev: 3.188834629413819e-7",
            "extra": "mean: 2.7150909273715658 usec\nrounds: 131001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 365371.2345619637,
            "unit": "iter/sec",
            "range": "stddev: 3.144011330968743e-7",
            "extra": "mean: 2.7369423353726248 usec\nrounds: 137854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 365759.49462999665,
            "unit": "iter/sec",
            "range": "stddev: 3.064232341720167e-7",
            "extra": "mean: 2.734037023458825 usec\nrounds: 129586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 366952.12992877234,
            "unit": "iter/sec",
            "range": "stddev: 2.7731254972357506e-7",
            "extra": "mean: 2.7251510985754632 usec\nrounds: 116998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 46798.775080868225,
            "unit": "iter/sec",
            "range": "stddev: 0.000002484503546446287",
            "extra": "mean: 21.368080644675018 usec\nrounds: 106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34792.072418875236,
            "unit": "iter/sec",
            "range": "stddev: 0.000001042332309310978",
            "extra": "mean: 28.742179769017856 usec\nrounds: 16914"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450750781,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 491246.76802397706,
            "unit": "iter/sec",
            "range": "stddev: 2.519960850369433e-7",
            "extra": "mean: 2.035636802298904 usec\nrounds: 27660"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 465058.4491676955,
            "unit": "iter/sec",
            "range": "stddev: 2.4578964881107775e-7",
            "extra": "mean: 2.1502673519633437 usec\nrounds: 77090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 442394.1668027144,
            "unit": "iter/sec",
            "range": "stddev: 3.081778202366961e-7",
            "extra": "mean: 2.260427634539652 usec\nrounds: 83766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 410040.6596657655,
            "unit": "iter/sec",
            "range": "stddev: 3.2881766438862523e-7",
            "extra": "mean: 2.438782536383405 usec\nrounds: 81468"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 370515.10754225537,
            "unit": "iter/sec",
            "range": "stddev: 3.099503456488848e-7",
            "extra": "mean: 2.6989452781920775 usec\nrounds: 80797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 481081.6014585915,
            "unit": "iter/sec",
            "range": "stddev: 2.617466756404017e-7",
            "extra": "mean: 2.0786494369522748 usec\nrounds: 46894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 466100.74279806286,
            "unit": "iter/sec",
            "range": "stddev: 2.155079673968314e-7",
            "extra": "mean: 2.1454589280353233 usec\nrounds: 75632"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 430489.28049572895,
            "unit": "iter/sec",
            "range": "stddev: 3.572529206265589e-7",
            "extra": "mean: 2.322938213115208 usec\nrounds: 77293"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 408211.60060287156,
            "unit": "iter/sec",
            "range": "stddev: 3.916585836810318e-7",
            "extra": "mean: 2.4497099017351283 usec\nrounds: 80769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 373855.2624821535,
            "unit": "iter/sec",
            "range": "stddev: 3.315262427118168e-7",
            "extra": "mean: 2.6748319479593694 usec\nrounds: 68525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 467131.2750427196,
            "unit": "iter/sec",
            "range": "stddev: 0.000016665250635430332",
            "extra": "mean: 2.140725858932372 usec\nrounds: 30660"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 469820.50708437886,
            "unit": "iter/sec",
            "range": "stddev: 2.908798421091852e-7",
            "extra": "mean: 2.1284724377099233 usec\nrounds: 61193"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 440514.16539315175,
            "unit": "iter/sec",
            "range": "stddev: 2.736051542491784e-7",
            "extra": "mean: 2.270074559594505 usec\nrounds: 78187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 407178.9171490306,
            "unit": "iter/sec",
            "range": "stddev: 3.71894672044158e-7",
            "extra": "mean: 2.455922833632352 usec\nrounds: 77412"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 375599.99454777804,
            "unit": "iter/sec",
            "range": "stddev: 4.295722657609007e-7",
            "extra": "mean: 2.6624068544090336 usec\nrounds: 72353"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 378673.64191854605,
            "unit": "iter/sec",
            "range": "stddev: 6.039737672478224e-7",
            "extra": "mean: 2.640796425474745 usec\nrounds: 2949"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 382059.2466535967,
            "unit": "iter/sec",
            "range": "stddev: 4.093669878349718e-7",
            "extra": "mean: 2.6173950997361266 usec\nrounds: 125916"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 384417.125216068,
            "unit": "iter/sec",
            "range": "stddev: 2.963584743104628e-7",
            "extra": "mean: 2.6013409247518133 usec\nrounds: 145711"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 384473.6409177594,
            "unit": "iter/sec",
            "range": "stddev: 3.232347710705859e-7",
            "extra": "mean: 2.6009585406503963 usec\nrounds: 150924"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 383581.0445886052,
            "unit": "iter/sec",
            "range": "stddev: 3.382290218170382e-7",
            "extra": "mean: 2.6070109931331746 usec\nrounds: 151062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 384870.45754123206,
            "unit": "iter/sec",
            "range": "stddev: 2.647783240386872e-7",
            "extra": "mean: 2.5982768497965782 usec\nrounds: 18658"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 384540.2113443863,
            "unit": "iter/sec",
            "range": "stddev: 2.74041356772824e-7",
            "extra": "mean: 2.6005082706537044 usec\nrounds: 130349"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 383877.0248055513,
            "unit": "iter/sec",
            "range": "stddev: 3.108219685953096e-7",
            "extra": "mean: 2.605000912744229 usec\nrounds: 145751"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 383531.65148155205,
            "unit": "iter/sec",
            "range": "stddev: 3.7060543350698147e-7",
            "extra": "mean: 2.6073467369305248 usec\nrounds: 129110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 383927.87903862254,
            "unit": "iter/sec",
            "range": "stddev: 2.9177810227427285e-7",
            "extra": "mean: 2.604655860116378 usec\nrounds: 125284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 382226.51446615596,
            "unit": "iter/sec",
            "range": "stddev: 3.6353300874948305e-7",
            "extra": "mean: 2.6162496900474563 usec\nrounds: 20884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 362941.43177745695,
            "unit": "iter/sec",
            "range": "stddev: 7.829128595689426e-7",
            "extra": "mean: 2.755265484854221 usec\nrounds: 143722"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 379752.4907811217,
            "unit": "iter/sec",
            "range": "stddev: 3.360002784962834e-7",
            "extra": "mean: 2.6332941172895974 usec\nrounds: 134698"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 377866.9973568182,
            "unit": "iter/sec",
            "range": "stddev: 3.310800796312693e-7",
            "extra": "mean: 2.6464338166471424 usec\nrounds: 141964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 379073.2775109184,
            "unit": "iter/sec",
            "range": "stddev: 3.2262658396612214e-7",
            "extra": "mean: 2.6380123826354316 usec\nrounds: 142615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 349234.5668732838,
            "unit": "iter/sec",
            "range": "stddev: 3.3864622815839517e-7",
            "extra": "mean: 2.8634049858038244 usec\nrounds: 78"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 375403.23768432497,
            "unit": "iter/sec",
            "range": "stddev: 3.75187244898759e-7",
            "extra": "mean: 2.6638022787669615 usec\nrounds: 135062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 377573.72929896996,
            "unit": "iter/sec",
            "range": "stddev: 3.5409698604941977e-7",
            "extra": "mean: 2.648489347647864 usec\nrounds: 127698"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 374695.1735770278,
            "unit": "iter/sec",
            "range": "stddev: 3.456675730500314e-7",
            "extra": "mean: 2.668836084685851 usec\nrounds: 128316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 375332.4013923257,
            "unit": "iter/sec",
            "range": "stddev: 4.173487410625834e-7",
            "extra": "mean: 2.664305016807554 usec\nrounds: 136765"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 366977.3827334224,
            "unit": "iter/sec",
            "range": "stddev: 3.279374494275517e-7",
            "extra": "mean: 2.7249635728270873 usec\nrounds: 18744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 370242.9138227223,
            "unit": "iter/sec",
            "range": "stddev: 3.0051701093261806e-7",
            "extra": "mean: 2.7009294780961413 usec\nrounds: 127501"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 366361.12965780025,
            "unit": "iter/sec",
            "range": "stddev: 3.479427258456961e-7",
            "extra": "mean: 2.729547211883669 usec\nrounds: 144797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 367595.14619850705,
            "unit": "iter/sec",
            "range": "stddev: 2.87570360346325e-7",
            "extra": "mean: 2.720384124604258 usec\nrounds: 147169"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 367600.75775590533,
            "unit": "iter/sec",
            "range": "stddev: 3.003471884277741e-7",
            "extra": "mean: 2.720342596964996 usec\nrounds: 116959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 45242.456236392114,
            "unit": "iter/sec",
            "range": "stddev: 0.000003313168118317257",
            "extra": "mean: 22.103132393497685 usec\nrounds: 104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34593.64449294361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012708610996402902",
            "extra": "mean: 28.90704389946481 usec\nrounds: 15467"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450803312,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 472554.41045052046,
            "unit": "iter/sec",
            "range": "stddev: 4.2570136813229246e-7",
            "extra": "mean: 2.11615843146322 usec\nrounds: 25838"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 453251.5770320255,
            "unit": "iter/sec",
            "range": "stddev: 2.7798800024766927e-7",
            "extra": "mean: 2.2062802440714795 usec\nrounds: 72686"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 431610.34438607906,
            "unit": "iter/sec",
            "range": "stddev: 3.010179986774386e-7",
            "extra": "mean: 2.3169046178038113 usec\nrounds: 80578"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 401078.15123382467,
            "unit": "iter/sec",
            "range": "stddev: 2.780319557514023e-7",
            "extra": "mean: 2.4932796686225114 usec\nrounds: 79068"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 365806.8033644121,
            "unit": "iter/sec",
            "range": "stddev: 2.638748491527319e-7",
            "extra": "mean: 2.733683438369003 usec\nrounds: 77107"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 488644.9463245333,
            "unit": "iter/sec",
            "range": "stddev: 2.6908456305529977e-7",
            "extra": "mean: 2.0464756824392705 usec\nrounds: 49666"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 462055.7428006636,
            "unit": "iter/sec",
            "range": "stddev: 2.8640213520580093e-7",
            "extra": "mean: 2.164241037106668 usec\nrounds: 82453"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 441553.15465250413,
            "unit": "iter/sec",
            "range": "stddev: 2.0896686801309727e-7",
            "extra": "mean: 2.2647329986510583 usec\nrounds: 79827"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 409410.9155590901,
            "unit": "iter/sec",
            "range": "stddev: 2.789440416279878e-7",
            "extra": "mean: 2.44253380160713 usec\nrounds: 75216"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 375175.77132824814,
            "unit": "iter/sec",
            "range": "stddev: 2.7372480496583424e-7",
            "extra": "mean: 2.6654173228182207 usec\nrounds: 79587"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 470979.70722272055,
            "unit": "iter/sec",
            "range": "stddev: 0.000016341321535652648",
            "extra": "mean: 2.1232337288942094 usec\nrounds: 32202"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 469424.43401366967,
            "unit": "iter/sec",
            "range": "stddev: 2.2276732535690775e-7",
            "extra": "mean: 2.1302683191196645 usec\nrounds: 57267"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 443515.96383775,
            "unit": "iter/sec",
            "range": "stddev: 2.244826929359723e-7",
            "extra": "mean: 2.254710273215389 usec\nrounds: 77410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 407115.4972007602,
            "unit": "iter/sec",
            "range": "stddev: 3.778574055062505e-7",
            "extra": "mean: 2.4563054142517 usec\nrounds: 77642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 379796.4596519818,
            "unit": "iter/sec",
            "range": "stddev: 2.917446187969455e-7",
            "extra": "mean: 2.6329892619755544 usec\nrounds: 75571"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 382325.7282350536,
            "unit": "iter/sec",
            "range": "stddev: 1.153750484079457e-7",
            "extra": "mean: 2.6155707715940077 usec\nrounds: 2975"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 381038.24966294644,
            "unit": "iter/sec",
            "range": "stddev: 2.8371892857094746e-7",
            "extra": "mean: 2.624408444256098 usec\nrounds: 127357"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 381814.5019587676,
            "unit": "iter/sec",
            "range": "stddev: 3.116312305229732e-7",
            "extra": "mean: 2.6190728609569436 usec\nrounds: 156079"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 381363.3236920744,
            "unit": "iter/sec",
            "range": "stddev: 3.2592848689557563e-7",
            "extra": "mean: 2.622171398966078 usec\nrounds: 149256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 382447.7205253251,
            "unit": "iter/sec",
            "range": "stddev: 3.291554299138028e-7",
            "extra": "mean: 2.614736462872398 usec\nrounds: 126756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 383997.59268928604,
            "unit": "iter/sec",
            "range": "stddev: 2.905506184340898e-7",
            "extra": "mean: 2.6041829923896325 usec\nrounds: 18647"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 381611.2723490973,
            "unit": "iter/sec",
            "range": "stddev: 2.7935815314902444e-7",
            "extra": "mean: 2.620467665549465 usec\nrounds: 123348"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 383114.3869129268,
            "unit": "iter/sec",
            "range": "stddev: 2.669075842973298e-7",
            "extra": "mean: 2.6101864982357794 usec\nrounds: 147018"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 382211.7578988202,
            "unit": "iter/sec",
            "range": "stddev: 2.905730399466292e-7",
            "extra": "mean: 2.6163506991449537 usec\nrounds: 150532"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 379214.25874779787,
            "unit": "iter/sec",
            "range": "stddev: 2.951866990909251e-7",
            "extra": "mean: 2.6370316435412966 usec\nrounds: 147230"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 377244.19041864335,
            "unit": "iter/sec",
            "range": "stddev: 3.126179033612952e-7",
            "extra": "mean: 2.6508029159846282 usec\nrounds: 22802"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 374157.7609112812,
            "unit": "iter/sec",
            "range": "stddev: 3.849567929982429e-7",
            "extra": "mean: 2.672669404382918 usec\nrounds: 143472"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 374142.5894909931,
            "unit": "iter/sec",
            "range": "stddev: 3.4261506391942305e-7",
            "extra": "mean: 2.6727777806864017 usec\nrounds: 126197"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 375895.67086284363,
            "unit": "iter/sec",
            "range": "stddev: 4.170944445302345e-7",
            "extra": "mean: 2.660312627981499 usec\nrounds: 134009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 374139.0793302385,
            "unit": "iter/sec",
            "range": "stddev: 3.1907523904391565e-7",
            "extra": "mean: 2.6728028566011877 usec\nrounds: 147361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 339241.86606016295,
            "unit": "iter/sec",
            "range": "stddev: 4.620796904350064e-7",
            "extra": "mean: 2.9477493789715643 usec\nrounds: 78"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 375433.619687325,
            "unit": "iter/sec",
            "range": "stddev: 4.794389817995335e-7",
            "extra": "mean: 2.6635867103027087 usec\nrounds: 119478"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 377769.7935293029,
            "unit": "iter/sec",
            "range": "stddev: 2.8479192142252436e-7",
            "extra": "mean: 2.6471147697054604 usec\nrounds: 138102"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 378284.23472743615,
            "unit": "iter/sec",
            "range": "stddev: 3.088485229360724e-7",
            "extra": "mean: 2.6435148710876804 usec\nrounds: 145032"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 377472.6741919737,
            "unit": "iter/sec",
            "range": "stddev: 2.7678114192086026e-7",
            "extra": "mean: 2.6491983880439083 usec\nrounds: 132963"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 368262.8987996558,
            "unit": "iter/sec",
            "range": "stddev: 3.4534992587600343e-7",
            "extra": "mean: 2.715451388829764 usec\nrounds: 19210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 368089.42508242856,
            "unit": "iter/sec",
            "range": "stddev: 2.8509197985954966e-7",
            "extra": "mean: 2.716731130692124 usec\nrounds: 141385"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 367037.38612639887,
            "unit": "iter/sec",
            "range": "stddev: 2.924814746595735e-7",
            "extra": "mean: 2.7245180948831846 usec\nrounds: 146827"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 363373.821590817,
            "unit": "iter/sec",
            "range": "stddev: 3.213703291231506e-7",
            "extra": "mean: 2.7519869087489366 usec\nrounds: 121341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 365447.1464214017,
            "unit": "iter/sec",
            "range": "stddev: 3.2709852490819424e-7",
            "extra": "mean: 2.7363738088869556 usec\nrounds: 138933"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 46997.339343803214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022556691606535683",
            "extra": "mean: 21.277800274705424 usec\nrounds: 103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34394.1997326102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010865936498940876",
            "extra": "mean: 29.074669792414713 usec\nrounds: 15465"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - SDK": [
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433561926,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 582625.7045037241,
            "unit": "iter/sec",
            "range": "stddev: 2.4541215806534316e-7",
            "extra": "mean: 1.7163678022956297 usec\nrounds: 28032"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 559223.8014094206,
            "unit": "iter/sec",
            "range": "stddev: 2.402313768385381e-7",
            "extra": "mean: 1.7881928442238766 usec\nrounds: 79631"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 526015.4413781929,
            "unit": "iter/sec",
            "range": "stddev: 2.513727923439319e-7",
            "extra": "mean: 1.9010848757214018 usec\nrounds: 85377"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 470544.4847775495,
            "unit": "iter/sec",
            "range": "stddev: 3.637235144909582e-7",
            "extra": "mean: 2.125197579295295 usec\nrounds: 80110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 428042.6876963615,
            "unit": "iter/sec",
            "range": "stddev: 3.1575450619687687e-7",
            "extra": "mean: 2.336215589575414 usec\nrounds: 78433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 593601.3088277611,
            "unit": "iter/sec",
            "range": "stddev: 2.1013700840220327e-7",
            "extra": "mean: 1.684632404154889 usec\nrounds: 51478"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 555340.2188242676,
            "unit": "iter/sec",
            "range": "stddev: 2.591967229940405e-7",
            "extra": "mean: 1.8006979615435363 usec\nrounds: 86221"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 525519.1342508197,
            "unit": "iter/sec",
            "range": "stddev: 2.631271800759053e-7",
            "extra": "mean: 1.9028802850834354 usec\nrounds: 87703"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 481920.4713683962,
            "unit": "iter/sec",
            "range": "stddev: 2.1407634411853116e-7",
            "extra": "mean: 2.075031170932696 usec\nrounds: 79197"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 439766.13933825435,
            "unit": "iter/sec",
            "range": "stddev: 2.7144059479957855e-7",
            "extra": "mean: 2.2739358730637313 usec\nrounds: 77304"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 602652.7521060209,
            "unit": "iter/sec",
            "range": "stddev: 2.3809564020005445e-7",
            "extra": "mean: 1.6593303465476852 usec\nrounds: 34297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 570596.1711450609,
            "unit": "iter/sec",
            "range": "stddev: 2.1367190017650816e-7",
            "extra": "mean: 1.7525529447441262 usec\nrounds: 56580"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 540266.5776045413,
            "unit": "iter/sec",
            "range": "stddev: 2.3886740272989943e-7",
            "extra": "mean: 1.8509381136139234 usec\nrounds: 81881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 478179.3711041514,
            "unit": "iter/sec",
            "range": "stddev: 3.702016937542643e-7",
            "extra": "mean: 2.0912654548248835 usec\nrounds: 86880"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 443495.499290584,
            "unit": "iter/sec",
            "range": "stddev: 2.1591410913046995e-7",
            "extra": "mean: 2.2548143140113064 usec\nrounds: 76554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 482951.08712422324,
            "unit": "iter/sec",
            "range": "stddev: 1.0790036777433554e-7",
            "extra": "mean: 2.070603062423137 usec\nrounds: 3091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 489013.3999771224,
            "unit": "iter/sec",
            "range": "stddev: 2.424906368139697e-7",
            "extra": "mean: 2.0449337381077557 usec\nrounds: 144379"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 485811.202195498,
            "unit": "iter/sec",
            "range": "stddev: 2.542138516470928e-7",
            "extra": "mean: 2.0584128062110523 usec\nrounds: 158451"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 485722.9127257179,
            "unit": "iter/sec",
            "range": "stddev: 2.8019009399604144e-7",
            "extra": "mean: 2.0587869622792296 usec\nrounds: 154796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 489527.7061155579,
            "unit": "iter/sec",
            "range": "stddev: 2.504164887721849e-7",
            "extra": "mean: 2.0427852959234545 usec\nrounds: 154875"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 491026.1386312923,
            "unit": "iter/sec",
            "range": "stddev: 2.246312471616577e-7",
            "extra": "mean: 2.036551460961821 usec\nrounds: 19173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 486038.2047580326,
            "unit": "iter/sec",
            "range": "stddev: 2.7047331479602565e-7",
            "extra": "mean: 2.0574514312055703 usec\nrounds: 158381"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 489992.8524385446,
            "unit": "iter/sec",
            "range": "stddev: 2.7383855263467206e-7",
            "extra": "mean: 2.0408460960671277 usec\nrounds: 163022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 489921.571812173,
            "unit": "iter/sec",
            "range": "stddev: 2.2895440706610927e-7",
            "extra": "mean: 2.0411430268340616 usec\nrounds: 161526"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 482825.4600799817,
            "unit": "iter/sec",
            "range": "stddev: 3.2970599124295337e-7",
            "extra": "mean: 2.0711418155835166 usec\nrounds: 166756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 480460.69998227496,
            "unit": "iter/sec",
            "range": "stddev: 2.9847813531251235e-7",
            "extra": "mean: 2.081335684764418 usec\nrounds: 26714"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 477429.0435154133,
            "unit": "iter/sec",
            "range": "stddev: 2.3401354098565936e-7",
            "extra": "mean: 2.094552088069012 usec\nrounds: 139984"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 476669.11594350415,
            "unit": "iter/sec",
            "range": "stddev: 2.5084289239810485e-7",
            "extra": "mean: 2.0978913182168952 usec\nrounds: 145840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 484037.4672063622,
            "unit": "iter/sec",
            "range": "stddev: 3.3337189850316545e-7",
            "extra": "mean: 2.0659557735716865 usec\nrounds: 161891"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 482238.9122572275,
            "unit": "iter/sec",
            "range": "stddev: 2.6647202003978884e-7",
            "extra": "mean: 2.07366094809578 usec\nrounds: 163743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 481100.8056039469,
            "unit": "iter/sec",
            "range": "stddev: 1.618546633749848e-7",
            "extra": "mean: 2.0785664633104415 usec\nrounds: 28540"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 480002.51484713354,
            "unit": "iter/sec",
            "range": "stddev: 2.597517336133239e-7",
            "extra": "mean: 2.083322418255392 usec\nrounds: 122896"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 482118.4054829961,
            "unit": "iter/sec",
            "range": "stddev: 2.620667729325601e-7",
            "extra": "mean: 2.0741792651499784 usec\nrounds: 158674"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 478316.4211768036,
            "unit": "iter/sec",
            "range": "stddev: 2.983793955727133e-7",
            "extra": "mean: 2.0906662529789304 usec\nrounds: 158510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 481259.9177005219,
            "unit": "iter/sec",
            "range": "stddev: 3.399745848662089e-7",
            "extra": "mean: 2.0778792565523383 usec\nrounds: 155177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 467379.6403517042,
            "unit": "iter/sec",
            "range": "stddev: 2.3935040237536245e-7",
            "extra": "mean: 2.1395882782730924 usec\nrounds: 24101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 465163.9835833129,
            "unit": "iter/sec",
            "range": "stddev: 2.4066568315683234e-7",
            "extra": "mean: 2.1497795085007816 usec\nrounds: 145533"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 465065.5138214223,
            "unit": "iter/sec",
            "range": "stddev: 2.696614303036123e-7",
            "extra": "mean: 2.150234687975561 usec\nrounds: 144807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 461761.1210686127,
            "unit": "iter/sec",
            "range": "stddev: 2.8411774086387777e-7",
            "extra": "mean: 2.165621907894257 usec\nrounds: 142086"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 461425.574955899,
            "unit": "iter/sec",
            "range": "stddev: 2.8522115288552965e-7",
            "extra": "mean: 2.1671967361054394 usec\nrounds: 126427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 56214.48875892537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002362034308216632",
            "extra": "mean: 17.789008173470695 usec\nrounds: 96"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41614.14436081473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010083439893799107",
            "extra": "mean: 24.0302910310859 usec\nrounds: 17393"
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433612964,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 599194.7222278044,
            "unit": "iter/sec",
            "range": "stddev: 1.7633277520546473e-7",
            "extra": "mean: 1.6689065555884783 usec\nrounds: 25009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 564429.8464097246,
            "unit": "iter/sec",
            "range": "stddev: 2.3103468662032313e-7",
            "extra": "mean: 1.771699364165252 usec\nrounds: 71474"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 534444.906997246,
            "unit": "iter/sec",
            "range": "stddev: 2.3912769626491146e-7",
            "extra": "mean: 1.87110025169564 usec\nrounds: 88890"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 474535.1893179959,
            "unit": "iter/sec",
            "range": "stddev: 3.3526995123526885e-7",
            "extra": "mean: 2.1073252785261394 usec\nrounds: 83690"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 437758.794461778,
            "unit": "iter/sec",
            "range": "stddev: 2.3113684570673404e-7",
            "extra": "mean: 2.2843630160063246 usec\nrounds: 84747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 596078.0941749945,
            "unit": "iter/sec",
            "range": "stddev: 2.387245774364058e-7",
            "extra": "mean: 1.677632527972792 usec\nrounds: 51836"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 560080.22742285,
            "unit": "iter/sec",
            "range": "stddev: 2.8960050525686044e-7",
            "extra": "mean: 1.7854584951184482 usec\nrounds: 85093"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 521893.6995304746,
            "unit": "iter/sec",
            "range": "stddev: 2.845306766466078e-7",
            "extra": "mean: 1.91609900809237 usec\nrounds: 81059"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 486485.98480893794,
            "unit": "iter/sec",
            "range": "stddev: 2.3933269618053586e-7",
            "extra": "mean: 2.055557675300223 usec\nrounds: 84034"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 439077.19132709404,
            "unit": "iter/sec",
            "range": "stddev: 2.8200409250105237e-7",
            "extra": "mean: 2.277503864360474 usec\nrounds: 79975"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 598770.8160332607,
            "unit": "iter/sec",
            "range": "stddev: 2.6443632441635715e-7",
            "extra": "mean: 1.6700880758097132 usec\nrounds: 33722"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 565823.617239507,
            "unit": "iter/sec",
            "range": "stddev: 1.9965851306161176e-7",
            "extra": "mean: 1.767335207531132 usec\nrounds: 54078"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 532278.1537046129,
            "unit": "iter/sec",
            "range": "stddev: 2.56523606201721e-7",
            "extra": "mean: 1.8787169697649266 usec\nrounds: 78909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 474378.1747566153,
            "unit": "iter/sec",
            "range": "stddev: 3.651971453284017e-7",
            "extra": "mean: 2.1080227826945466 usec\nrounds: 80782"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 438113.02282922546,
            "unit": "iter/sec",
            "range": "stddev: 2.995891894613237e-7",
            "extra": "mean: 2.282516035570565 usec\nrounds: 72141"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 481255.4085387068,
            "unit": "iter/sec",
            "range": "stddev: 1.0765307935654448e-7",
            "extra": "mean: 2.0778987254115635 usec\nrounds: 3041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 486697.9798608361,
            "unit": "iter/sec",
            "range": "stddev: 2.6825548544284103e-7",
            "extra": "mean: 2.054662319095581 usec\nrounds: 148389"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 488299.15101306495,
            "unit": "iter/sec",
            "range": "stddev: 2.581740580267035e-7",
            "extra": "mean: 2.047924920461809 usec\nrounds: 142049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 489456.20675616805,
            "unit": "iter/sec",
            "range": "stddev: 2.65472555624006e-7",
            "extra": "mean: 2.043083704316307 usec\nrounds: 159950"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 478466.1274410378,
            "unit": "iter/sec",
            "range": "stddev: 2.649614220979566e-7",
            "extra": "mean: 2.090012108794957 usec\nrounds: 163881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 486235.72750034597,
            "unit": "iter/sec",
            "range": "stddev: 1.9250328702997612e-7",
            "extra": "mean: 2.056615636084225 usec\nrounds: 19371"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 487334.8327089523,
            "unit": "iter/sec",
            "range": "stddev: 2.277814631004869e-7",
            "extra": "mean: 2.0519772708248487 usec\nrounds: 147321"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 487573.6678515093,
            "unit": "iter/sec",
            "range": "stddev: 2.781022517398798e-7",
            "extra": "mean: 2.0509721216211174 usec\nrounds: 161114"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 489010.7325493015,
            "unit": "iter/sec",
            "range": "stddev: 3.1854531870652565e-7",
            "extra": "mean: 2.044944892695543 usec\nrounds: 141403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 488599.83783472446,
            "unit": "iter/sec",
            "range": "stddev: 2.779225982292292e-7",
            "extra": "mean: 2.046664617064944 usec\nrounds: 145751"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 481596.49282466376,
            "unit": "iter/sec",
            "range": "stddev: 2.3365606006776273e-7",
            "extra": "mean: 2.0764270813825734 usec\nrounds: 27735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 477133.36011126096,
            "unit": "iter/sec",
            "range": "stddev: 2.743945097470863e-7",
            "extra": "mean: 2.0958500989467885 usec\nrounds: 155864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 475070.0746718484,
            "unit": "iter/sec",
            "range": "stddev: 2.5684538507241524e-7",
            "extra": "mean: 2.1049526234434857 usec\nrounds: 159712"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 477170.36862036545,
            "unit": "iter/sec",
            "range": "stddev: 2.838013820300741e-7",
            "extra": "mean: 2.0956875484353374 usec\nrounds: 148790"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 474783.0410948139,
            "unit": "iter/sec",
            "range": "stddev: 2.6719022747463266e-7",
            "extra": "mean: 2.1062251880228815 usec\nrounds: 155864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 477245.2051803048,
            "unit": "iter/sec",
            "range": "stddev: 3.2487256396124523e-7",
            "extra": "mean: 2.0953589248155917 usec\nrounds: 27513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 478205.51873796113,
            "unit": "iter/sec",
            "range": "stddev: 2.8425713770405206e-7",
            "extra": "mean: 2.0911511072459263 usec\nrounds: 116807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 477244.76145146176,
            "unit": "iter/sec",
            "range": "stddev: 2.4581268179123575e-7",
            "extra": "mean: 2.095360873021767 usec\nrounds: 160129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 478991.9629351532,
            "unit": "iter/sec",
            "range": "stddev: 2.4917580182293187e-7",
            "extra": "mean: 2.0877177017172244 usec\nrounds: 142757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 476790.17169697577,
            "unit": "iter/sec",
            "range": "stddev: 3.571517468809341e-7",
            "extra": "mean: 2.097358669204177 usec\nrounds: 139276"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 461752.92368485493,
            "unit": "iter/sec",
            "range": "stddev: 2.8420171817071367e-7",
            "extra": "mean: 2.1656603536364334 usec\nrounds: 24217"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 465954.88338447316,
            "unit": "iter/sec",
            "range": "stddev: 2.7617985798804656e-7",
            "extra": "mean: 2.1461305282101106 usec\nrounds: 143741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 460975.8965678833,
            "unit": "iter/sec",
            "range": "stddev: 3.145160763488527e-7",
            "extra": "mean: 2.1693108196010416 usec\nrounds: 151884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 460545.32729255984,
            "unit": "iter/sec",
            "range": "stddev: 4.0046639572484583e-7",
            "extra": "mean: 2.171338933951996 usec\nrounds: 150132"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 462005.9290830104,
            "unit": "iter/sec",
            "range": "stddev: 4.3422095883424313e-7",
            "extra": "mean: 2.164474386691964 usec\nrounds: 114680"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 55456.67917195252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031479760808372533",
            "extra": "mean: 18.032093066722155 usec\nrounds: 96"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 42457.814086845436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012218868674197677",
            "extra": "mean: 23.552790493513108 usec\nrounds: 16068"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449690328,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 595970.0308376162,
            "unit": "iter/sec",
            "range": "stddev: 1.896025765188123e-7",
            "extra": "mean: 1.6779367220773385 usec\nrounds: 27459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 563513.7455327791,
            "unit": "iter/sec",
            "range": "stddev: 2.534329427699187e-7",
            "extra": "mean: 1.7745796050716403 usec\nrounds: 76729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 523539.47181067173,
            "unit": "iter/sec",
            "range": "stddev: 2.29117144290438e-7",
            "extra": "mean: 1.9100756558841305 usec\nrounds: 88674"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 473925.16190841416,
            "unit": "iter/sec",
            "range": "stddev: 4.0534082849399797e-7",
            "extra": "mean: 2.1100377873442593 usec\nrounds: 86013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 429376.8048686569,
            "unit": "iter/sec",
            "range": "stddev: 2.8649018099405276e-7",
            "extra": "mean: 2.328956731386299 usec\nrounds: 84341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 583662.1183664207,
            "unit": "iter/sec",
            "range": "stddev: 2.113281456914807e-7",
            "extra": "mean: 1.7133200331706366 usec\nrounds: 54928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 566282.755186456,
            "unit": "iter/sec",
            "range": "stddev: 2.584426160094968e-7",
            "extra": "mean: 1.7659022649749185 usec\nrounds: 90311"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 526790.4294478663,
            "unit": "iter/sec",
            "range": "stddev: 4.2398152532705953e-7",
            "extra": "mean: 1.8982880935177748 usec\nrounds: 85272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 480071.59367842646,
            "unit": "iter/sec",
            "range": "stddev: 3.260247644678885e-7",
            "extra": "mean: 2.083022643222346 usec\nrounds: 77533"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 438828.53305118193,
            "unit": "iter/sec",
            "range": "stddev: 3.834733231576956e-7",
            "extra": "mean: 2.2787943916203073 usec\nrounds: 81169"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 599469.3577526147,
            "unit": "iter/sec",
            "range": "stddev: 2.3515925236700263e-7",
            "extra": "mean: 1.6681419776799902 usec\nrounds: 33860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 562257.0839941679,
            "unit": "iter/sec",
            "range": "stddev: 2.554717035512257e-7",
            "extra": "mean: 1.7785458440046489 usec\nrounds: 59274"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 537674.0876103225,
            "unit": "iter/sec",
            "range": "stddev: 3.07616428331385e-7",
            "extra": "mean: 1.8598627366337703 usec\nrounds: 81243"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 477881.8960128778,
            "unit": "iter/sec",
            "range": "stddev: 5.147416627043657e-7",
            "extra": "mean: 2.092567239611547 usec\nrounds: 77429"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 441147.0657831568,
            "unit": "iter/sec",
            "range": "stddev: 3.085725735360755e-7",
            "extra": "mean: 2.2668177520907373 usec\nrounds: 71173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 488316.7513058753,
            "unit": "iter/sec",
            "range": "stddev: 1.0329975487766098e-7",
            "extra": "mean: 2.0478511075562364 usec\nrounds: 3056"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 489896.96924893826,
            "unit": "iter/sec",
            "range": "stddev: 2.489442037455424e-7",
            "extra": "mean: 2.0412455327762107 usec\nrounds: 162886"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 490529.50249682035,
            "unit": "iter/sec",
            "range": "stddev: 2.829401170414171e-7",
            "extra": "mean: 2.038613365577297 usec\nrounds: 158603"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 493950.39232861303,
            "unit": "iter/sec",
            "range": "stddev: 2.9554393077156467e-7",
            "extra": "mean: 2.024494798527712 usec\nrounds: 168801"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 490975.70987719094,
            "unit": "iter/sec",
            "range": "stddev: 2.723536042204266e-7",
            "extra": "mean: 2.0367606378126784 usec\nrounds: 164345"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 491728.8779654334,
            "unit": "iter/sec",
            "range": "stddev: 2.7366572693587373e-7",
            "extra": "mean: 2.0336409855316573 usec\nrounds: 19401"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 491753.05193232145,
            "unit": "iter/sec",
            "range": "stddev: 3.0572810025680913e-7",
            "extra": "mean: 2.033541014276465 usec\nrounds: 153403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 493413.5498781601,
            "unit": "iter/sec",
            "range": "stddev: 3.1315332882204206e-7",
            "extra": "mean: 2.0266974837779235 usec\nrounds: 177464"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 495873.4200389694,
            "unit": "iter/sec",
            "range": "stddev: 2.9403879821984066e-7",
            "extra": "mean: 2.016643682820129 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 495338.1458832515,
            "unit": "iter/sec",
            "range": "stddev: 2.773930370761049e-7",
            "extra": "mean: 2.0188229158424122 usec\nrounds: 154296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 484991.2738420154,
            "unit": "iter/sec",
            "range": "stddev: 2.325081913896964e-7",
            "extra": "mean: 2.0618927678392565 usec\nrounds: 26883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 483388.8294873956,
            "unit": "iter/sec",
            "range": "stddev: 2.999564642349005e-7",
            "extra": "mean: 2.068727986661254 usec\nrounds: 161684"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 483891.4804765987,
            "unit": "iter/sec",
            "range": "stddev: 2.5493963889546146e-7",
            "extra": "mean: 2.066579058211711 usec\nrounds: 176024"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 488329.8941206282,
            "unit": "iter/sec",
            "range": "stddev: 2.8769500447350857e-7",
            "extra": "mean: 2.047795992094185 usec\nrounds: 156147"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 488099.12184852554,
            "unit": "iter/sec",
            "range": "stddev: 2.7320970522521525e-7",
            "extra": "mean: 2.0487641858743917 usec\nrounds: 173031"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 485728.75246219593,
            "unit": "iter/sec",
            "range": "stddev: 3.1198109386804155e-7",
            "extra": "mean: 2.0587622102478473 usec\nrounds: 28619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 486154.10494818527,
            "unit": "iter/sec",
            "range": "stddev: 2.7429183721508977e-7",
            "extra": "mean: 2.0569609303341805 usec\nrounds: 114301"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 483432.5024227073,
            "unit": "iter/sec",
            "range": "stddev: 2.7978892196113167e-7",
            "extra": "mean: 2.0685410993024473 usec\nrounds: 165179"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 486053.84941122896,
            "unit": "iter/sec",
            "range": "stddev: 3.253859812854586e-7",
            "extra": "mean: 2.057385207855732 usec\nrounds: 168391"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 483511.40929917217,
            "unit": "iter/sec",
            "range": "stddev: 2.864319132967294e-7",
            "extra": "mean: 2.0682035227451085 usec\nrounds: 172948"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 473156.88586498983,
            "unit": "iter/sec",
            "range": "stddev: 2.651491738427465e-7",
            "extra": "mean: 2.1134639056808298 usec\nrounds: 24443"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 471304.39188776707,
            "unit": "iter/sec",
            "range": "stddev: 2.6251329987997606e-7",
            "extra": "mean: 2.1217710193503407 usec\nrounds: 155435"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 470767.7851905224,
            "unit": "iter/sec",
            "range": "stddev: 3.094339631914026e-7",
            "extra": "mean: 2.1241895292289263 usec\nrounds: 147240"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 467951.49658346083,
            "unit": "iter/sec",
            "range": "stddev: 2.582133039115683e-7",
            "extra": "mean: 2.136973612224887 usec\nrounds: 150153"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 468078.52901663055,
            "unit": "iter/sec",
            "range": "stddev: 3.1150983350338167e-7",
            "extra": "mean: 2.136393656211628 usec\nrounds: 161187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 55319.62620258928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023467940779261155",
            "extra": "mean: 18.07676711946391 usec\nrounds: 89"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41728.601665895796,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011491413257110863",
            "extra": "mean: 23.964378389829584 usec\nrounds: 14450"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449740912,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 603408.8398740762,
            "unit": "iter/sec",
            "range": "stddev: 2.623129164615043e-7",
            "extra": "mean: 1.6572511602725069 usec\nrounds: 27333"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 565662.538761013,
            "unit": "iter/sec",
            "range": "stddev: 3.9985072929744665e-7",
            "extra": "mean: 1.7678384751981793 usec\nrounds: 79378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 531125.380320303,
            "unit": "iter/sec",
            "range": "stddev: 2.80114879187546e-7",
            "extra": "mean: 1.882794603784393 usec\nrounds: 73009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 474219.16769188066,
            "unit": "iter/sec",
            "range": "stddev: 3.712167195582705e-7",
            "extra": "mean: 2.1087296088582828 usec\nrounds: 78187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 439482.70782844734,
            "unit": "iter/sec",
            "range": "stddev: 2.739026796783943e-7",
            "extra": "mean: 2.2754023814524036 usec\nrounds: 87962"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 598861.4418898025,
            "unit": "iter/sec",
            "range": "stddev: 2.582162308661597e-7",
            "extra": "mean: 1.6698353409502222 usec\nrounds: 55571"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 573162.2703985232,
            "unit": "iter/sec",
            "range": "stddev: 2.190472364606879e-7",
            "extra": "mean: 1.7447066069172592 usec\nrounds: 86565"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 533640.3761048644,
            "unit": "iter/sec",
            "range": "stddev: 3.060337980976117e-7",
            "extra": "mean: 1.8739211738421615 usec\nrounds: 87489"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 489430.2143922106,
            "unit": "iter/sec",
            "range": "stddev: 3.603638471390207e-7",
            "extra": "mean: 2.0431922071705984 usec\nrounds: 84028"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 440856.72217376455,
            "unit": "iter/sec",
            "range": "stddev: 2.8526396207052695e-7",
            "extra": "mean: 2.2683106544666636 usec\nrounds: 83992"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 605378.0554307838,
            "unit": "iter/sec",
            "range": "stddev: 2.687071159962929e-7",
            "extra": "mean: 1.6518603392196063 usec\nrounds: 23389"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 571582.4939139124,
            "unit": "iter/sec",
            "range": "stddev: 2.1164516081221236e-7",
            "extra": "mean: 1.749528739329467 usec\nrounds: 55145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 539140.825998294,
            "unit": "iter/sec",
            "range": "stddev: 2.8632097212782724e-7",
            "extra": "mean: 1.8548029601512022 usec\nrounds: 79892"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 476618.9006101614,
            "unit": "iter/sec",
            "range": "stddev: 3.7016095054017756e-7",
            "extra": "mean: 2.098112346614481 usec\nrounds: 89089"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 442161.2613431663,
            "unit": "iter/sec",
            "range": "stddev: 2.7415942405226044e-7",
            "extra": "mean: 2.261618299536849 usec\nrounds: 79033"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 470614.5335524178,
            "unit": "iter/sec",
            "range": "stddev: 1.0924272169296455e-7",
            "extra": "mean: 2.124881253563365 usec\nrounds: 3039"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 485555.2615634503,
            "unit": "iter/sec",
            "range": "stddev: 2.4677096692045894e-7",
            "extra": "mean: 2.0594978144816674 usec\nrounds: 144262"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 487059.6145190757,
            "unit": "iter/sec",
            "range": "stddev: 3.147279598818876e-7",
            "extra": "mean: 2.0531367622983963 usec\nrounds: 163158"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 486599.523595785,
            "unit": "iter/sec",
            "range": "stddev: 3.954052805796877e-7",
            "extra": "mean: 2.0550780498311654 usec\nrounds: 166279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 486940.18293986475,
            "unit": "iter/sec",
            "range": "stddev: 3.0542185764250356e-7",
            "extra": "mean: 2.0536403341424303 usec\nrounds: 144797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 489997.4076819512,
            "unit": "iter/sec",
            "range": "stddev: 2.9660771027719387e-7",
            "extra": "mean: 2.040827123414258 usec\nrounds: 19013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 492931.63173015515,
            "unit": "iter/sec",
            "range": "stddev: 2.5209431424173755e-7",
            "extra": "mean: 2.0286788991204943 usec\nrounds: 147746"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 493042.6163757103,
            "unit": "iter/sec",
            "range": "stddev: 2.881346121513625e-7",
            "extra": "mean: 2.0282222404036085 usec\nrounds: 161271"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 491855.5219679883,
            "unit": "iter/sec",
            "range": "stddev: 3.1133587913631006e-7",
            "extra": "mean: 2.033117359339281 usec\nrounds: 168259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 492119.46109214524,
            "unit": "iter/sec",
            "range": "stddev: 2.7534946200864905e-7",
            "extra": "mean: 2.0320269346404864 usec\nrounds: 155694"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 480814.43442332046,
            "unit": "iter/sec",
            "range": "stddev: 3.232842566587441e-7",
            "extra": "mean: 2.0798044492973276 usec\nrounds: 26011"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 482858.23381373246,
            "unit": "iter/sec",
            "range": "stddev: 2.7324115132102313e-7",
            "extra": "mean: 2.071001237986055 usec\nrounds: 163270"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 481768.7446990537,
            "unit": "iter/sec",
            "range": "stddev: 2.861179836016794e-7",
            "extra": "mean: 2.0756846744482553 usec\nrounds: 148656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 483733.7592817369,
            "unit": "iter/sec",
            "range": "stddev: 2.769678974615526e-7",
            "extra": "mean: 2.067252865470526 usec\nrounds: 163768"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 480009.0515892589,
            "unit": "iter/sec",
            "range": "stddev: 2.6186540170650065e-7",
            "extra": "mean: 2.083294047662448 usec\nrounds: 150807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 479187.0734522957,
            "unit": "iter/sec",
            "range": "stddev: 2.696274638983443e-7",
            "extra": "mean: 2.0868676460646483 usec\nrounds: 26687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 482622.35471046256,
            "unit": "iter/sec",
            "range": "stddev: 2.9640352239543124e-7",
            "extra": "mean: 2.0720134288017498 usec\nrounds: 120106"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 484323.59420600027,
            "unit": "iter/sec",
            "range": "stddev: 2.722410760954913e-7",
            "extra": "mean: 2.0647352554430047 usec\nrounds: 159511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 484622.44696203544,
            "unit": "iter/sec",
            "range": "stddev: 2.525716747426547e-7",
            "extra": "mean: 2.063461992461811 usec\nrounds: 160921"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 484390.667490994,
            "unit": "iter/sec",
            "range": "stddev: 2.7751948696365223e-7",
            "extra": "mean: 2.0644493527914483 usec\nrounds: 158803"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 460675.0841718638,
            "unit": "iter/sec",
            "range": "stddev: 3.948949177887219e-7",
            "extra": "mean: 2.170727339850945 usec\nrounds: 24683"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 460950.71414251294,
            "unit": "iter/sec",
            "range": "stddev: 3.0671973169391847e-7",
            "extra": "mean: 2.169429332288285 usec\nrounds: 158498"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 461836.66382647824,
            "unit": "iter/sec",
            "range": "stddev: 3.1719214072114265e-7",
            "extra": "mean: 2.165267676486857 usec\nrounds: 142511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 453427.7073229507,
            "unit": "iter/sec",
            "range": "stddev: 2.688219835941989e-7",
            "extra": "mean: 2.2054232325237177 usec\nrounds: 130945"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 459951.7998514176,
            "unit": "iter/sec",
            "range": "stddev: 2.812647615786046e-7",
            "extra": "mean: 2.174140856331118 usec\nrounds: 105976"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 55042.62825261504,
            "unit": "iter/sec",
            "range": "stddev: 0.000003166012655336556",
            "extra": "mean: 18.167737111145136 usec\nrounds: 98"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40935.32399458322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011442405608056896",
            "extra": "mean: 24.428779411452208 usec\nrounds: 14607"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450854019,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 598261.1950872061,
            "unit": "iter/sec",
            "range": "stddev: 2.4397695414650065e-7",
            "extra": "mean: 1.671510718414946 usec\nrounds: 27924"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 570788.2150500503,
            "unit": "iter/sec",
            "range": "stddev: 2.3097678157781683e-7",
            "extra": "mean: 1.7519632915201546 usec\nrounds: 76459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 537635.603747219,
            "unit": "iter/sec",
            "range": "stddev: 1.902071590913666e-7",
            "extra": "mean: 1.8599958652853128 usec\nrounds: 88875"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 471736.6399826337,
            "unit": "iter/sec",
            "range": "stddev: 3.814435353079444e-7",
            "extra": "mean: 2.1198268594036147 usec\nrounds: 85225"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 436956.6420105092,
            "unit": "iter/sec",
            "range": "stddev: 3.1536249594405293e-7",
            "extra": "mean: 2.2885565840098825 usec\nrounds: 84325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 598362.8246656094,
            "unit": "iter/sec",
            "range": "stddev: 2.548283230579632e-7",
            "extra": "mean: 1.6712268188767283 usec\nrounds: 52824"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 567222.7455507584,
            "unit": "iter/sec",
            "range": "stddev: 2.2733578424124489e-7",
            "extra": "mean: 1.762975846515157 usec\nrounds: 88225"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 527794.2764507002,
            "unit": "iter/sec",
            "range": "stddev: 2.3927803652387027e-7",
            "extra": "mean: 1.8946776132639762 usec\nrounds: 84295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 481284.62308302446,
            "unit": "iter/sec",
            "range": "stddev: 2.592109242296804e-7",
            "extra": "mean: 2.0777725945079575 usec\nrounds: 81828"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 440787.19826956163,
            "unit": "iter/sec",
            "range": "stddev: 2.525007286224738e-7",
            "extra": "mean: 2.268668427589982 usec\nrounds: 82625"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 604976.3717299795,
            "unit": "iter/sec",
            "range": "stddev: 1.9702719686359554e-7",
            "extra": "mean: 1.652957118210118 usec\nrounds: 35913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 571906.2372058263,
            "unit": "iter/sec",
            "range": "stddev: 2.48023131673919e-7",
            "extra": "mean: 1.7485383703554624 usec\nrounds: 64347"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 535867.6095668592,
            "unit": "iter/sec",
            "range": "stddev: 2.6060304626611856e-7",
            "extra": "mean: 1.8661325710809393 usec\nrounds: 79770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 476777.680271084,
            "unit": "iter/sec",
            "range": "stddev: 3.4181764618926407e-7",
            "extra": "mean: 2.0974136193443966 usec\nrounds: 78476"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 442862.27767556027,
            "unit": "iter/sec",
            "range": "stddev: 2.7414237053997515e-7",
            "extra": "mean: 2.258038334736194 usec\nrounds: 73426"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 462875.0394321198,
            "unit": "iter/sec",
            "range": "stddev: 1.13698805156697e-7",
            "extra": "mean: 2.1604102939464056 usec\nrounds: 3080"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 471780.093485116,
            "unit": "iter/sec",
            "range": "stddev: 2.7398907624878916e-7",
            "extra": "mean: 2.119631611865685 usec\nrounds: 149276"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 476086.38792329957,
            "unit": "iter/sec",
            "range": "stddev: 2.88522593980017e-7",
            "extra": "mean: 2.100459129617262 usec\nrounds: 152618"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 474755.0411928652,
            "unit": "iter/sec",
            "range": "stddev: 2.7612101493083874e-7",
            "extra": "mean: 2.106349408080869 usec\nrounds: 160129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 474460.048135276,
            "unit": "iter/sec",
            "range": "stddev: 2.364284502255164e-7",
            "extra": "mean: 2.1076590198272798 usec\nrounds: 161054"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 474980.20421852125,
            "unit": "iter/sec",
            "range": "stddev: 2.344596681248972e-7",
            "extra": "mean: 2.10535089908702 usec\nrounds: 19339"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 474019.21976997016,
            "unit": "iter/sec",
            "range": "stddev: 2.573957293386708e-7",
            "extra": "mean: 2.109619100434947 usec\nrounds: 149245"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 471916.8411016742,
            "unit": "iter/sec",
            "range": "stddev: 2.969233512064466e-7",
            "extra": "mean: 2.119017404985025 usec\nrounds: 151520"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 475800.93890214094,
            "unit": "iter/sec",
            "range": "stddev: 2.8102746077853585e-7",
            "extra": "mean: 2.1017192658496886 usec\nrounds: 161344"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 473725.0546671369,
            "unit": "iter/sec",
            "range": "stddev: 2.726673460170697e-7",
            "extra": "mean: 2.110929093042483 usec\nrounds: 149007"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 460014.88111468044,
            "unit": "iter/sec",
            "range": "stddev: 1.9471412223587718e-7",
            "extra": "mean: 2.173842719124347 usec\nrounds: 25664"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 463966.2504955895,
            "unit": "iter/sec",
            "range": "stddev: 2.5999218558933474e-7",
            "extra": "mean: 2.1553291838185245 usec\nrounds: 159926"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 460569.8238440889,
            "unit": "iter/sec",
            "range": "stddev: 2.77795512392976e-7",
            "extra": "mean: 2.1712234458906234 usec\nrounds: 161526"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 462810.66828153614,
            "unit": "iter/sec",
            "range": "stddev: 2.6624888105846487e-7",
            "extra": "mean: 2.1607107798813354 usec\nrounds: 148307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 460942.6135452104,
            "unit": "iter/sec",
            "range": "stddev: 2.909719338991518e-7",
            "extra": "mean: 2.169467457800834 usec\nrounds: 162185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 462658.9533451195,
            "unit": "iter/sec",
            "range": "stddev: 3.406311791005564e-7",
            "extra": "mean: 2.1614193192843114 usec\nrounds: 26446"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 464422.713576955,
            "unit": "iter/sec",
            "range": "stddev: 2.979825805720695e-7",
            "extra": "mean: 2.153210794317233 usec\nrounds: 119972"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 469457.3834364996,
            "unit": "iter/sec",
            "range": "stddev: 2.5312641367687705e-7",
            "extra": "mean: 2.130118803713018 usec\nrounds: 152955"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 462814.3993963418,
            "unit": "iter/sec",
            "range": "stddev: 3.5917488924599103e-7",
            "extra": "mean: 2.1606933606739984 usec\nrounds: 160584"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 466227.63578002236,
            "unit": "iter/sec",
            "range": "stddev: 2.491096958058968e-7",
            "extra": "mean: 2.144874999370103 usec\nrounds: 161368"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 455603.91262314504,
            "unit": "iter/sec",
            "range": "stddev: 2.437825036715026e-7",
            "extra": "mean: 2.194888964500959 usec\nrounds: 24283"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 454216.283281453,
            "unit": "iter/sec",
            "range": "stddev: 2.824880783485453e-7",
            "extra": "mean: 2.201594343504314 usec\nrounds: 145228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 452343.7656254905,
            "unit": "iter/sec",
            "range": "stddev: 3.433494952772852e-7",
            "extra": "mean: 2.210708041078499 usec\nrounds: 140286"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 450079.3400672549,
            "unit": "iter/sec",
            "range": "stddev: 2.876578531937768e-7",
            "extra": "mean: 2.221830488488032 usec\nrounds: 150849"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 447724.3784050003,
            "unit": "iter/sec",
            "range": "stddev: 4.315916331927814e-7",
            "extra": "mean: 2.2335169765882723 usec\nrounds: 145583"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 58002.01560256412,
            "unit": "iter/sec",
            "range": "stddev: 0.000002241116486354047",
            "extra": "mean: 17.240780162746493 usec\nrounds: 92"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 42419.24605455891,
            "unit": "iter/sec",
            "range": "stddev: 0.000001042686661763648",
            "extra": "mean: 23.574204942582362 usec\nrounds: 17780"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450901844,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 601436.3621631471,
            "unit": "iter/sec",
            "range": "stddev: 3.359073840347757e-7",
            "extra": "mean: 1.6626863005145964 usec\nrounds: 24432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 574817.055391943,
            "unit": "iter/sec",
            "range": "stddev: 2.781149730350146e-7",
            "extra": "mean: 1.739683940515897 usec\nrounds: 67710"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 541152.548691193,
            "unit": "iter/sec",
            "range": "stddev: 2.355406308431853e-7",
            "extra": "mean: 1.8479077709576617 usec\nrounds: 80615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 480544.7334501992,
            "unit": "iter/sec",
            "range": "stddev: 3.302796271238684e-7",
            "extra": "mean: 2.0809717189495203 usec\nrounds: 77162"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 448109.40291447705,
            "unit": "iter/sec",
            "range": "stddev: 2.3271151433215e-7",
            "extra": "mean: 2.231597894389315 usec\nrounds: 80697"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 605680.7942171488,
            "unit": "iter/sec",
            "range": "stddev: 2.0927571312233895e-7",
            "extra": "mean: 1.6510346861708145 usec\nrounds: 50178"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 570906.9053255401,
            "unit": "iter/sec",
            "range": "stddev: 2.559472905201868e-7",
            "extra": "mean: 1.7515990622495348 usec\nrounds: 74644"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 540952.3094911791,
            "unit": "iter/sec",
            "range": "stddev: 2.1284817519236314e-7",
            "extra": "mean: 1.8485917934995089 usec\nrounds: 75667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 487831.4992410194,
            "unit": "iter/sec",
            "range": "stddev: 2.2591214542282208e-7",
            "extra": "mean: 2.049888130544717 usec\nrounds: 82220"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 450054.02488806174,
            "unit": "iter/sec",
            "range": "stddev: 2.632583744608756e-7",
            "extra": "mean: 2.221955464677206 usec\nrounds: 72465"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 599447.3478337679,
            "unit": "iter/sec",
            "range": "stddev: 1.792134346841299e-7",
            "extra": "mean: 1.6682032268784162 usec\nrounds: 34027"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 569256.7803785561,
            "unit": "iter/sec",
            "range": "stddev: 3.8537584015048024e-7",
            "extra": "mean: 1.756676484968698 usec\nrounds: 51566"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 538998.7809008267,
            "unit": "iter/sec",
            "range": "stddev: 3.0849593091990816e-7",
            "extra": "mean: 1.855291765834245 usec\nrounds: 63647"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 477511.9365209433,
            "unit": "iter/sec",
            "range": "stddev: 3.946638729325738e-7",
            "extra": "mean: 2.0941884872780365 usec\nrounds: 70398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 444736.21784652385,
            "unit": "iter/sec",
            "range": "stddev: 3.284396684619067e-7",
            "extra": "mean: 2.248523866219267 usec\nrounds: 73121"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 467073.0671740656,
            "unit": "iter/sec",
            "range": "stddev: 9.099752079135396e-7",
            "extra": "mean: 2.140992641794366 usec\nrounds: 3020"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 488113.19154152443,
            "unit": "iter/sec",
            "range": "stddev: 3.5050862455253004e-7",
            "extra": "mean: 2.048705130959217 usec\nrounds: 148482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 488440.2618078807,
            "unit": "iter/sec",
            "range": "stddev: 2.7522433507290143e-7",
            "extra": "mean: 2.047333273261843 usec\nrounds: 155300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 490029.29537922837,
            "unit": "iter/sec",
            "range": "stddev: 2.96815766811371e-7",
            "extra": "mean: 2.040694320583652 usec\nrounds: 160105"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 490009.11511011835,
            "unit": "iter/sec",
            "range": "stddev: 3.1202504824704135e-7",
            "extra": "mean: 2.0407783634295718 usec\nrounds: 154685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 490413.2331697406,
            "unit": "iter/sec",
            "range": "stddev: 3.3067535234626397e-7",
            "extra": "mean: 2.039096689003664 usec\nrounds: 18510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 491383.78504211514,
            "unit": "iter/sec",
            "range": "stddev: 2.7850993958792786e-7",
            "extra": "mean: 2.0350691871411524 usec\nrounds: 151788"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 493380.1976314998,
            "unit": "iter/sec",
            "range": "stddev: 2.6175136410267823e-7",
            "extra": "mean: 2.026834487481577 usec\nrounds: 161916"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 490778.11856742314,
            "unit": "iter/sec",
            "range": "stddev: 2.720514232277126e-7",
            "extra": "mean: 2.037580654408536 usec\nrounds: 158160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 486181.73116497934,
            "unit": "iter/sec",
            "range": "stddev: 3.062090725029133e-7",
            "extra": "mean: 2.056844048014349 usec\nrounds: 144098"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 479758.52274962666,
            "unit": "iter/sec",
            "range": "stddev: 3.6062094404748154e-7",
            "extra": "mean: 2.0843819392070992 usec\nrounds: 25782"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 477643.7166490615,
            "unit": "iter/sec",
            "range": "stddev: 3.3835592022611655e-7",
            "extra": "mean: 2.0936107084493036 usec\nrounds: 151766"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 479728.07598177635,
            "unit": "iter/sec",
            "range": "stddev: 2.7805708514303703e-7",
            "extra": "mean: 2.084514228093641 usec\nrounds: 150511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 478976.2513404947,
            "unit": "iter/sec",
            "range": "stddev: 2.6129347625925237e-7",
            "extra": "mean: 2.0877861839732836 usec\nrounds: 145386"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 477167.77909505775,
            "unit": "iter/sec",
            "range": "stddev: 4.495419500175162e-7",
            "extra": "mean: 2.095698921449572 usec\nrounds: 145140"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 479580.1330573551,
            "unit": "iter/sec",
            "range": "stddev: 2.804961599824653e-7",
            "extra": "mean: 2.0851572679312915 usec\nrounds: 25097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 476411.5534356673,
            "unit": "iter/sec",
            "range": "stddev: 3.6527448596862257e-7",
            "extra": "mean: 2.099025501771413 usec\nrounds: 116181"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 477819.94058945624,
            "unit": "iter/sec",
            "range": "stddev: 3.7168767708632944e-7",
            "extra": "mean: 2.092838567528938 usec\nrounds: 134319"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 479588.9881586419,
            "unit": "iter/sec",
            "range": "stddev: 2.4009831709077734e-7",
            "extra": "mean: 2.0851187677170198 usec\nrounds: 146078"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 480086.4563609889,
            "unit": "iter/sec",
            "range": "stddev: 3.876094797993749e-7",
            "extra": "mean: 2.0829581562869066 usec\nrounds: 155785"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 467448.01703009504,
            "unit": "iter/sec",
            "range": "stddev: 2.8340778147764693e-7",
            "extra": "mean: 2.1392753067035013 usec\nrounds: 21757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 465007.61280089297,
            "unit": "iter/sec",
            "range": "stddev: 2.90016827956777e-7",
            "extra": "mean: 2.150502427211187 usec\nrounds: 158160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 460009.68992101686,
            "unit": "iter/sec",
            "range": "stddev: 3.5545899063927834e-7",
            "extra": "mean: 2.1738672508653 usec\nrounds: 140690"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 461998.5484817888,
            "unit": "iter/sec",
            "range": "stddev: 3.1491609840214017e-7",
            "extra": "mean: 2.1645089649874047 usec\nrounds: 122714"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 462743.1748321564,
            "unit": "iter/sec",
            "range": "stddev: 2.835231612871433e-7",
            "extra": "mean: 2.161025930555787 usec\nrounds: 142937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 56667.77267448451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023200538938318846",
            "extra": "mean: 17.646714398751453 usec\nrounds: 98"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 42409.60781651669,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010747616092407128",
            "extra": "mean: 23.57956254456434 usec\nrounds: 17534"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - SDK": [
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433665029,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 604523.2327330594,
            "unit": "iter/sec",
            "range": "stddev: 2.6991100322467273e-7",
            "extra": "mean: 1.6541961430977326 usec\nrounds: 26631"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 565098.237261131,
            "unit": "iter/sec",
            "range": "stddev: 2.2445661833982626e-7",
            "extra": "mean: 1.7696038211810978 usec\nrounds: 80709"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 528972.6952346128,
            "unit": "iter/sec",
            "range": "stddev: 2.4979342337476527e-7",
            "extra": "mean: 1.8904567457049455 usec\nrounds: 105653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 480000.3969874931,
            "unit": "iter/sec",
            "range": "stddev: 2.465082004394292e-7",
            "extra": "mean: 2.0833316102987642 usec\nrounds: 101116"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 430914.26378718973,
            "unit": "iter/sec",
            "range": "stddev: 2.854481539879803e-7",
            "extra": "mean: 2.320647247114237 usec\nrounds: 96778"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 599428.733336972,
            "unit": "iter/sec",
            "range": "stddev: 2.604590288422658e-7",
            "extra": "mean: 1.6682550308075486 usec\nrounds: 59346"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 561482.0938663647,
            "unit": "iter/sec",
            "range": "stddev: 1.9565133603075557e-7",
            "extra": "mean: 1.781000696057824 usec\nrounds: 97238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 530553.6597753199,
            "unit": "iter/sec",
            "range": "stddev: 1.806026038694945e-7",
            "extra": "mean: 1.8848234887748816 usec\nrounds: 94745"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 476281.37497023045,
            "unit": "iter/sec",
            "range": "stddev: 3.1262579474243137e-7",
            "extra": "mean: 2.099599212886509 usec\nrounds: 92937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 435107.5202235511,
            "unit": "iter/sec",
            "range": "stddev: 2.712229463602177e-7",
            "extra": "mean: 2.2982825014980586 usec\nrounds: 93398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 608528.7865304962,
            "unit": "iter/sec",
            "range": "stddev: 1.7297528486544514e-7",
            "extra": "mean: 1.6433076333191434 usec\nrounds: 295"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 574790.2993327719,
            "unit": "iter/sec",
            "range": "stddev: 2.65195940620938e-7",
            "extra": "mean: 1.7397649215041033 usec\nrounds: 96033"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 537584.0231904641,
            "unit": "iter/sec",
            "range": "stddev: 2.2329651883291933e-7",
            "extra": "mean: 1.8601743297079039 usec\nrounds: 94019"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 488746.6107295579,
            "unit": "iter/sec",
            "range": "stddev: 2.42025320651884e-7",
            "extra": "mean: 2.0460499941008043 usec\nrounds: 93781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 441686.9505259421,
            "unit": "iter/sec",
            "range": "stddev: 2.2639892895458894e-7",
            "extra": "mean: 2.264046965411232 usec\nrounds: 86276"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 502272.0654507882,
            "unit": "iter/sec",
            "range": "stddev: 2.9954292658813586e-7",
            "extra": "mean: 1.9909528496324038 usec\nrounds: 3050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 505989.251468509,
            "unit": "iter/sec",
            "range": "stddev: 2.482383686732001e-7",
            "extra": "mean: 1.9763265664196359 usec\nrounds: 157360"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 504126.1197001533,
            "unit": "iter/sec",
            "range": "stddev: 2.608155947391551e-7",
            "extra": "mean: 1.9836306053627715 usec\nrounds: 172892"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 503959.33517323877,
            "unit": "iter/sec",
            "range": "stddev: 2.85875677759375e-7",
            "extra": "mean: 1.9842870847034604 usec\nrounds: 157533"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 502781.48084497027,
            "unit": "iter/sec",
            "range": "stddev: 2.760863678354004e-7",
            "extra": "mean: 1.9889356273015635 usec\nrounds: 167029"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 506052.63906882505,
            "unit": "iter/sec",
            "range": "stddev: 3.015662974815187e-7",
            "extra": "mean: 1.9760790139145905 usec\nrounds: 21213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 504687.06399183226,
            "unit": "iter/sec",
            "range": "stddev: 3.0234460930107054e-7",
            "extra": "mean: 1.9814258603945192 usec\nrounds: 171470"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 506924.4107138477,
            "unit": "iter/sec",
            "range": "stddev: 2.8121155484252037e-7",
            "extra": "mean: 1.9726806972893778 usec\nrounds: 163968"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 504448.70211400837,
            "unit": "iter/sec",
            "range": "stddev: 2.6485604207053105e-7",
            "extra": "mean: 1.9823621228665467 usec\nrounds: 173675"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 502965.7196592048,
            "unit": "iter/sec",
            "range": "stddev: 2.654938054089578e-7",
            "extra": "mean: 1.9882070704094337 usec\nrounds: 174763"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 500449.69159742707,
            "unit": "iter/sec",
            "range": "stddev: 2.23363546293353e-7",
            "extra": "mean: 1.9982028499368572 usec\nrounds: 29941"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 497755.47892047407,
            "unit": "iter/sec",
            "range": "stddev: 2.825588304381583e-7",
            "extra": "mean: 2.0090185690548052 usec\nrounds: 156568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 495030.90193819214,
            "unit": "iter/sec",
            "range": "stddev: 2.429627292758939e-7",
            "extra": "mean: 2.0200759105839756 usec\nrounds: 159416"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 496633.19718940975,
            "unit": "iter/sec",
            "range": "stddev: 3.0162144578100395e-7",
            "extra": "mean: 2.013558508894065 usec\nrounds: 154063"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 418705.7806209586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014947647587014616",
            "extra": "mean: 2.3883119036879723 usec\nrounds: 79"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 500443.05078081903,
            "unit": "iter/sec",
            "range": "stddev: 2.355045457354219e-7",
            "extra": "mean: 1.9982293658384194 usec\nrounds: 21178"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 494882.6939083017,
            "unit": "iter/sec",
            "range": "stddev: 2.3932922638926644e-7",
            "extra": "mean: 2.020680885206491 usec\nrounds: 147909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 500523.88761467155,
            "unit": "iter/sec",
            "range": "stddev: 2.7902691310074393e-7",
            "extra": "mean: 1.9979066429090198 usec\nrounds: 162676"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 493251.2797332242,
            "unit": "iter/sec",
            "range": "stddev: 2.7608276820701914e-7",
            "extra": "mean: 2.027364228108748 usec\nrounds: 171087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 499031.7566810652,
            "unit": "iter/sec",
            "range": "stddev: 2.865468535437035e-7",
            "extra": "mean: 2.0038804877884897 usec\nrounds: 167393"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 475888.0434363023,
            "unit": "iter/sec",
            "range": "stddev: 2.1552267689182088e-7",
            "extra": "mean: 2.1013345760468765 usec\nrounds: 25557"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 468870.6068056719,
            "unit": "iter/sec",
            "range": "stddev: 3.119645658680319e-7",
            "extra": "mean: 2.1327845795513047 usec\nrounds: 146347"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 468067.3564217005,
            "unit": "iter/sec",
            "range": "stddev: 4.2186182164529975e-7",
            "extra": "mean: 2.136444651139184 usec\nrounds: 138825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 471724.238263213,
            "unit": "iter/sec",
            "range": "stddev: 2.833703452764623e-7",
            "extra": "mean: 2.1198825900525793 usec\nrounds: 160572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 470535.86333155696,
            "unit": "iter/sec",
            "range": "stddev: 2.613034775799243e-7",
            "extra": "mean: 2.1252365184656776 usec\nrounds: 144534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 58665.60917802964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013368356757107282",
            "extra": "mean: 17.045761801694567 usec\nrounds: 95"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41492.07066777316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011127891535167872",
            "extra": "mean: 24.10099047615618 usec\nrounds: 15101"
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433716004,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 588206.3195527053,
            "unit": "iter/sec",
            "range": "stddev: 2.066356885156814e-7",
            "extra": "mean: 1.7000837406174734 usec\nrounds: 28428"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 547485.374421555,
            "unit": "iter/sec",
            "range": "stddev: 2.0346218062514233e-7",
            "extra": "mean: 1.826532811139565 usec\nrounds: 83900"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 510068.02838116675,
            "unit": "iter/sec",
            "range": "stddev: 2.3675769759371482e-7",
            "extra": "mean: 1.9605228015834666 usec\nrounds: 99828"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 473365.02846593905,
            "unit": "iter/sec",
            "range": "stddev: 2.3241855962172772e-7",
            "extra": "mean: 2.1125345977516696 usec\nrounds: 98536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 421837.8279748356,
            "unit": "iter/sec",
            "range": "stddev: 2.8183143694859897e-7",
            "extra": "mean: 2.370579245585472 usec\nrounds: 90623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 585974.0895026419,
            "unit": "iter/sec",
            "range": "stddev: 2.2158394628499291e-7",
            "extra": "mean: 1.7065600986705254 usec\nrounds: 59397"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 555522.5297166898,
            "unit": "iter/sec",
            "range": "stddev: 2.451412725322534e-7",
            "extra": "mean: 1.8001070100793009 usec\nrounds: 99242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 519515.87539013155,
            "unit": "iter/sec",
            "range": "stddev: 2.4055023651856964e-7",
            "extra": "mean: 1.924868993173785 usec\nrounds: 98763"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 478349.2772679775,
            "unit": "iter/sec",
            "range": "stddev: 3.1377383458844826e-7",
            "extra": "mean: 2.0905226526343994 usec\nrounds: 92183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 428451.8103428693,
            "unit": "iter/sec",
            "range": "stddev: 2.272008008735546e-7",
            "extra": "mean: 2.3339847699552214 usec\nrounds: 88967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 573837.8983683691,
            "unit": "iter/sec",
            "range": "stddev: 1.5907639946467802e-7",
            "extra": "mean: 1.742652416027881 usec\nrounds: 296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 555603.8159010904,
            "unit": "iter/sec",
            "range": "stddev: 2.531099935333707e-7",
            "extra": "mean: 1.7998436500623707 usec\nrounds: 89906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 523235.2610158129,
            "unit": "iter/sec",
            "range": "stddev: 2.629107484863363e-7",
            "extra": "mean: 1.9111861804928676 usec\nrounds: 99842"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 473804.791496115,
            "unit": "iter/sec",
            "range": "stddev: 2.4900589332426227e-7",
            "extra": "mean: 2.1105738438025052 usec\nrounds: 95909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 430937.0898827886,
            "unit": "iter/sec",
            "range": "stddev: 2.475207380558489e-7",
            "extra": "mean: 2.3205243258870847 usec\nrounds: 80307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 496436.93728886655,
            "unit": "iter/sec",
            "range": "stddev: 2.5954622146702815e-7",
            "extra": "mean: 2.0143545431191807 usec\nrounds: 3050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 506623.0744474225,
            "unit": "iter/sec",
            "range": "stddev: 2.271105742917699e-7",
            "extra": "mean: 1.9738540355484344 usec\nrounds: 153689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 510591.0602575915,
            "unit": "iter/sec",
            "range": "stddev: 2.7035239910900345e-7",
            "extra": "mean: 1.95851450962636 usec\nrounds: 160249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 511181.6558443653,
            "unit": "iter/sec",
            "range": "stddev: 2.7432948930800844e-7",
            "extra": "mean: 1.9562517327586981 usec\nrounds: 150101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 509860.33056746505,
            "unit": "iter/sec",
            "range": "stddev: 2.6776854958836375e-7",
            "extra": "mean: 1.9613214444179616 usec\nrounds: 176865"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 508171.51933184604,
            "unit": "iter/sec",
            "range": "stddev: 2.490759950188942e-7",
            "extra": "mean: 1.9678395225982357 usec\nrounds: 19927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 507638.77716337296,
            "unit": "iter/sec",
            "range": "stddev: 2.2969878417707582e-7",
            "extra": "mean: 1.9699046743195723 usec\nrounds: 159748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 503032.01252197684,
            "unit": "iter/sec",
            "range": "stddev: 2.8716331500036353e-7",
            "extra": "mean: 1.9879450514221724 usec\nrounds: 155615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 505287.7341464287,
            "unit": "iter/sec",
            "range": "stddev: 3.0551288426817145e-7",
            "extra": "mean: 1.9790704036963764 usec\nrounds: 163993"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 505053.54917485156,
            "unit": "iter/sec",
            "range": "stddev: 2.426855494591265e-7",
            "extra": "mean: 1.9799880658868434 usec\nrounds: 156272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 499186.4570853338,
            "unit": "iter/sec",
            "range": "stddev: 3.2998316433363694e-7",
            "extra": "mean: 2.003259475104418 usec\nrounds: 30453"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 502333.8642027842,
            "unit": "iter/sec",
            "range": "stddev: 2.8914475569794837e-7",
            "extra": "mean: 1.9907079161127703 usec\nrounds: 51505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 503259.3845482768,
            "unit": "iter/sec",
            "range": "stddev: 3.335527857608778e-7",
            "extra": "mean: 1.9870469000743924 usec\nrounds: 152814"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 501146.9024057736,
            "unit": "iter/sec",
            "range": "stddev: 3.9291197841850566e-7",
            "extra": "mean: 1.9954228893752795 usec\nrounds: 163781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 483462.3738305035,
            "unit": "iter/sec",
            "range": "stddev: 3.4427169344014934e-7",
            "extra": "mean: 2.068413291559663 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 507383.3171858143,
            "unit": "iter/sec",
            "range": "stddev: 2.5406894786538835e-7",
            "extra": "mean: 1.970896492116589 usec\nrounds: 21633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 497565.588208929,
            "unit": "iter/sec",
            "range": "stddev: 3.0144251334556693e-7",
            "extra": "mean: 2.0097852900150674 usec\nrounds: 148256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 502364.40137288877,
            "unit": "iter/sec",
            "range": "stddev: 2.7874877773749506e-7",
            "extra": "mean: 1.9905869071676767 usec\nrounds: 145602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 500703.26621723856,
            "unit": "iter/sec",
            "range": "stddev: 3.6057874670774687e-7",
            "extra": "mean: 1.9971908862406607 usec\nrounds: 160356"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 499953.78493828955,
            "unit": "iter/sec",
            "range": "stddev: 2.891953019669035e-7",
            "extra": "mean: 2.000184877335077 usec\nrounds: 159998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 488949.28431668796,
            "unit": "iter/sec",
            "range": "stddev: 4.188515836326945e-7",
            "extra": "mean: 2.0452018891847055 usec\nrounds: 23050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 489494.45441732224,
            "unit": "iter/sec",
            "range": "stddev: 3.5134866392242555e-7",
            "extra": "mean: 2.042924063747293 usec\nrounds: 145979"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 487987.58304100356,
            "unit": "iter/sec",
            "range": "stddev: 4.0489054165439926e-7",
            "extra": "mean: 2.0492324697449815 usec\nrounds: 152575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 486860.9285256111,
            "unit": "iter/sec",
            "range": "stddev: 2.748849237332166e-7",
            "extra": "mean: 2.0539746391815776 usec\nrounds: 149599"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 486636.1566947219,
            "unit": "iter/sec",
            "range": "stddev: 2.9470791802589537e-7",
            "extra": "mean: 2.054923347233574 usec\nrounds: 157314"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 57576.86870220779,
            "unit": "iter/sec",
            "range": "stddev: 0.000002506363246620583",
            "extra": "mean: 17.368085874417392 usec\nrounds: 97"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 42753.43976352217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010198309127791357",
            "extra": "mean: 23.389930857755544 usec\nrounds: 19563"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449793507,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 600140.4481158372,
            "unit": "iter/sec",
            "range": "stddev: 1.7605161600861266e-7",
            "extra": "mean: 1.666276624312753 usec\nrounds: 32266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 560849.7384739608,
            "unit": "iter/sec",
            "range": "stddev: 2.8228691517566e-7",
            "extra": "mean: 1.7830087658076499 usec\nrounds: 87375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 528661.9366552888,
            "unit": "iter/sec",
            "range": "stddev: 2.4757397688129825e-7",
            "extra": "mean: 1.891567995847684 usec\nrounds: 95563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 483673.2788362689,
            "unit": "iter/sec",
            "range": "stddev: 2.7117516751751115e-7",
            "extra": "mean: 2.0675113630548854 usec\nrounds: 101306"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 436491.6816483936,
            "unit": "iter/sec",
            "range": "stddev: 2.813701895051291e-7",
            "extra": "mean: 2.2909944038876966 usec\nrounds: 95960"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 598493.5469596554,
            "unit": "iter/sec",
            "range": "stddev: 2.5978938651013255e-7",
            "extra": "mean: 1.6708617913760235 usec\nrounds: 57294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 564753.1637877347,
            "unit": "iter/sec",
            "range": "stddev: 2.3658831796768335e-7",
            "extra": "mean: 1.7706850782262373 usec\nrounds: 101326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 526660.2612739893,
            "unit": "iter/sec",
            "range": "stddev: 2.4252681402927777e-7",
            "extra": "mean: 1.8987572701631283 usec\nrounds: 100689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 483592.58117897745,
            "unit": "iter/sec",
            "range": "stddev: 2.769612418173167e-7",
            "extra": "mean: 2.067856371084196 usec\nrounds: 100949"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 435143.2950481818,
            "unit": "iter/sec",
            "range": "stddev: 3.6073295002152833e-7",
            "extra": "mean: 2.2980935507446434 usec\nrounds: 93195"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 589178.6017193081,
            "unit": "iter/sec",
            "range": "stddev: 1.9787838462537396e-7",
            "extra": "mean: 1.6972782057628297 usec\nrounds: 285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 568084.5544167896,
            "unit": "iter/sec",
            "range": "stddev: 2.8904469600196733e-7",
            "extra": "mean: 1.7603013358224924 usec\nrounds: 96508"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 534480.189882769,
            "unit": "iter/sec",
            "range": "stddev: 2.337730663192738e-7",
            "extra": "mean: 1.8709767338979137 usec\nrounds: 95245"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 486232.37476916204,
            "unit": "iter/sec",
            "range": "stddev: 3.043313295036653e-7",
            "extra": "mean: 2.0566298171213884 usec\nrounds: 93337"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 434761.2419298544,
            "unit": "iter/sec",
            "range": "stddev: 2.9158790632275953e-7",
            "extra": "mean: 2.3001130357460493 usec\nrounds: 76459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 481116.5916024833,
            "unit": "iter/sec",
            "range": "stddev: 1.181942301623731e-7",
            "extra": "mean: 2.078498263111736 usec\nrounds: 3022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 495123.3662151318,
            "unit": "iter/sec",
            "range": "stddev: 3.025162351407605e-7",
            "extra": "mean: 2.019698661455413 usec\nrounds: 154942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 495325.74490889563,
            "unit": "iter/sec",
            "range": "stddev: 3.7881863585398034e-7",
            "extra": "mean: 2.018873459088883 usec\nrounds: 163109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 494491.79063220747,
            "unit": "iter/sec",
            "range": "stddev: 3.213679679214311e-7",
            "extra": "mean: 2.0222782641578347 usec\nrounds: 168140"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 495188.3328719676,
            "unit": "iter/sec",
            "range": "stddev: 2.559668832213794e-7",
            "extra": "mean: 2.0194336853621975 usec\nrounds: 157302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 495630.19255512446,
            "unit": "iter/sec",
            "range": "stddev: 3.380438858897277e-7",
            "extra": "mean: 2.017633338366042 usec\nrounds: 20103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 496955.72697070875,
            "unit": "iter/sec",
            "range": "stddev: 2.948090957387707e-7",
            "extra": "mean: 2.012251687078236 usec\nrounds: 146646"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 498748.90296265035,
            "unit": "iter/sec",
            "range": "stddev: 2.600316204122699e-7",
            "extra": "mean: 2.0050169415107195 usec\nrounds: 165204"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 492573.4723557611,
            "unit": "iter/sec",
            "range": "stddev: 2.7712167363924196e-7",
            "extra": "mean: 2.030153989449416 usec\nrounds: 158909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 497511.00818409876,
            "unit": "iter/sec",
            "range": "stddev: 2.650484959735509e-7",
            "extra": "mean: 2.01000577585202 usec\nrounds: 163943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 483282.7774767148,
            "unit": "iter/sec",
            "range": "stddev: 2.284104732996718e-7",
            "extra": "mean: 2.0691819502055013 usec\nrounds: 29111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 487549.5220026906,
            "unit": "iter/sec",
            "range": "stddev: 2.7245942670617087e-7",
            "extra": "mean: 2.051073695841879 usec\nrounds: 163718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 485391.13202303636,
            "unit": "iter/sec",
            "range": "stddev: 2.99690609004828e-7",
            "extra": "mean: 2.0601942104548807 usec\nrounds: 158125"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 484880.91535854223,
            "unit": "iter/sec",
            "range": "stddev: 2.491854483739129e-7",
            "extra": "mean: 2.0623620528775732 usec\nrounds: 146257"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 450249.9581592526,
            "unit": "iter/sec",
            "range": "stddev: 3.74043326622899e-7",
            "extra": "mean: 2.2209885462028227 usec\nrounds: 82"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 482830.8569226051,
            "unit": "iter/sec",
            "range": "stddev: 3.145665853683424e-7",
            "extra": "mean: 2.0711186653927838 usec\nrounds: 29726"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 485504.43226440664,
            "unit": "iter/sec",
            "range": "stddev: 2.787414635779724e-7",
            "extra": "mean: 2.0597134311132264 usec\nrounds: 152046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 480015.5115116047,
            "unit": "iter/sec",
            "range": "stddev: 2.573201200018169e-7",
            "extra": "mean: 2.0832660112397727 usec\nrounds: 157753"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 485176.8324552204,
            "unit": "iter/sec",
            "range": "stddev: 3.361345033674113e-7",
            "extra": "mean: 2.061104185332871 usec\nrounds: 143568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 484451.44485394424,
            "unit": "iter/sec",
            "range": "stddev: 3.3934972497624394e-7",
            "extra": "mean: 2.0641903551376277 usec\nrounds: 144632"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 473766.8086120004,
            "unit": "iter/sec",
            "range": "stddev: 2.340992271756519e-7",
            "extra": "mean: 2.110743052958291 usec\nrounds: 24854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 476113.3534139122,
            "unit": "iter/sec",
            "range": "stddev: 2.9849254909207857e-7",
            "extra": "mean: 2.100340166537282 usec\nrounds: 146516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 474399.6112150234,
            "unit": "iter/sec",
            "range": "stddev: 2.7923244075402984e-7",
            "extra": "mean: 2.107927528521406 usec\nrounds: 149411"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 474000.39122211176,
            "unit": "iter/sec",
            "range": "stddev: 2.700722093405029e-7",
            "extra": "mean: 2.109702900079275 usec\nrounds: 142416"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 472319.00046809204,
            "unit": "iter/sec",
            "range": "stddev: 2.9723858308550795e-7",
            "extra": "mean: 2.1172131525705074 usec\nrounds: 140662"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 56964.04773291974,
            "unit": "iter/sec",
            "range": "stddev: 0.00000133969179357789",
            "extra": "mean: 17.55493227392435 usec\nrounds: 100"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41207.58006412523,
            "unit": "iter/sec",
            "range": "stddev: 0.000001134519838464996",
            "extra": "mean: 24.26737989573396 usec\nrounds: 18328"
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
          "id": "cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/cdc711ec2f4c439e2f2c0b2fc984cf72a1aa9232"
        },
        "date": 1696449842367,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 607059.8754840092,
            "unit": "iter/sec",
            "range": "stddev: 3.0413766922959986e-7",
            "extra": "mean: 1.6472839671749009 usec\nrounds: 30878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 565470.2879024888,
            "unit": "iter/sec",
            "range": "stddev: 2.4625020401980117e-7",
            "extra": "mean: 1.7684395120198473 usec\nrounds: 72945"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 536107.8613377187,
            "unit": "iter/sec",
            "range": "stddev: 2.2605706820096948e-7",
            "extra": "mean: 1.8652962810594838 usec\nrounds: 88160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 491282.44499712397,
            "unit": "iter/sec",
            "range": "stddev: 3.788842894187682e-7",
            "extra": "mean: 2.0354889741803293 usec\nrounds: 100665"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 441166.3462845382,
            "unit": "iter/sec",
            "range": "stddev: 2.7513846530690243e-7",
            "extra": "mean: 2.2667186842829388 usec\nrounds: 89404"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 609400.5127239791,
            "unit": "iter/sec",
            "range": "stddev: 2.3331133726471434e-7",
            "extra": "mean: 1.6409569390253178 usec\nrounds: 58421"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 569851.0473150543,
            "unit": "iter/sec",
            "range": "stddev: 2.8250457944705905e-7",
            "extra": "mean: 1.7548445417651897 usec\nrounds: 95746"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 538341.1843206383,
            "unit": "iter/sec",
            "range": "stddev: 3.6568817742520836e-7",
            "extra": "mean: 1.8575580489201358 usec\nrounds: 96167"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 489061.7649708145,
            "unit": "iter/sec",
            "range": "stddev: 2.755811294226658e-7",
            "extra": "mean: 2.0447315076034953 usec\nrounds: 94333"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 439496.3972378289,
            "unit": "iter/sec",
            "range": "stddev: 2.946483914203237e-7",
            "extra": "mean: 2.27533150734535 usec\nrounds: 93050"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 586455.4228022475,
            "unit": "iter/sec",
            "range": "stddev: 3.536360836561899e-7",
            "extra": "mean: 1.7051594394365412 usec\nrounds: 298"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 565517.8207345556,
            "unit": "iter/sec",
            "range": "stddev: 2.6032495612069735e-7",
            "extra": "mean: 1.768290871366515 usec\nrounds: 84454"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 534082.7762804967,
            "unit": "iter/sec",
            "range": "stddev: 3.7713436787242334e-7",
            "extra": "mean: 1.8723689368233936 usec\nrounds: 96725"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 486773.6086658296,
            "unit": "iter/sec",
            "range": "stddev: 3.217420173351492e-7",
            "extra": "mean: 2.0543430913209195 usec\nrounds: 94595"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 440501.02103575465,
            "unit": "iter/sec",
            "range": "stddev: 2.483307053667391e-7",
            "extra": "mean: 2.270142297624395 usec\nrounds: 79208"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 504650.85706383,
            "unit": "iter/sec",
            "range": "stddev: 1.201366121842131e-7",
            "extra": "mean: 1.9815680207465027 usec\nrounds: 3011"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 507731.3172850168,
            "unit": "iter/sec",
            "range": "stddev: 2.7577807625334163e-7",
            "extra": "mean: 1.9695456355682042 usec\nrounds: 146078"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 509720.9847764591,
            "unit": "iter/sec",
            "range": "stddev: 3.4913398151871545e-7",
            "extra": "mean: 1.9618576238107117 usec\nrounds: 150122"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 502428.1813233737,
            "unit": "iter/sec",
            "range": "stddev: 2.6666978559209536e-7",
            "extra": "mean: 1.9903342152624561 usec\nrounds: 146307"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 501432.0348036766,
            "unit": "iter/sec",
            "range": "stddev: 4.2489765418944857e-7",
            "extra": "mean: 1.9942882197215928 usec\nrounds: 156272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 511460.38797502016,
            "unit": "iter/sec",
            "range": "stddev: 3.7522175816391434e-7",
            "extra": "mean: 1.9551856282736022 usec\nrounds: 18203"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 509951.9926370359,
            "unit": "iter/sec",
            "range": "stddev: 2.8995604393588446e-7",
            "extra": "mean: 1.9609689038155427 usec\nrounds: 134479"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 509197.1187244571,
            "unit": "iter/sec",
            "range": "stddev: 3.2938374285427934e-7",
            "extra": "mean: 1.9638759985622232 usec\nrounds: 159926"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 506463.227668337,
            "unit": "iter/sec",
            "range": "stddev: 5.144610648285361e-7",
            "extra": "mean: 1.9744770111026912 usec\nrounds: 134664"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511589.8867156665,
            "unit": "iter/sec",
            "range": "stddev: 2.668699338507414e-7",
            "extra": "mean: 1.954690712163714 usec\nrounds: 150585"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 499967.1630894459,
            "unit": "iter/sec",
            "range": "stddev: 2.9243350999486736e-7",
            "extra": "mean: 2.0001313562688847 usec\nrounds: 27079"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 498300.1024959904,
            "unit": "iter/sec",
            "range": "stddev: 3.426232657950989e-7",
            "extra": "mean: 2.006822786090128 usec\nrounds: 138888"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 496765.4220481835,
            "unit": "iter/sec",
            "range": "stddev: 4.945471542606757e-7",
            "extra": "mean: 2.013022556757192 usec\nrounds: 138870"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 500494.9722177058,
            "unit": "iter/sec",
            "range": "stddev: 3.007698704272924e-7",
            "extra": "mean: 1.9980220691707946 usec\nrounds: 146847"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 424997.6168969871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014253101377504534",
            "extra": "mean: 2.3529543701944684 usec\nrounds: 87"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 501239.2710931095,
            "unit": "iter/sec",
            "range": "stddev: 2.541777662534138e-7",
            "extra": "mean: 1.9950551715933715 usec\nrounds: 27799"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 494165.6655774057,
            "unit": "iter/sec",
            "range": "stddev: 4.783473907917843e-7",
            "extra": "mean: 2.0236128684326022 usec\nrounds: 153898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 499133.63641577726,
            "unit": "iter/sec",
            "range": "stddev: 2.882995157320475e-7",
            "extra": "mean: 2.003471469446315 usec\nrounds: 151189"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 499874.21177894337,
            "unit": "iter/sec",
            "range": "stddev: 3.132531763878351e-7",
            "extra": "mean: 2.000503279497492 usec\nrounds: 142823"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 497321.627976867,
            "unit": "iter/sec",
            "range": "stddev: 4.208701624310916e-7",
            "extra": "mean: 2.010771186582127 usec\nrounds: 157660"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 484493.71640097897,
            "unit": "iter/sec",
            "range": "stddev: 3.822014871840487e-7",
            "extra": "mean: 2.0640102567860246 usec\nrounds: 25124"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 488806.99617375433,
            "unit": "iter/sec",
            "range": "stddev: 3.080342835783957e-7",
            "extra": "mean: 2.0457972325022404 usec\nrounds: 139258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 487566.71330411016,
            "unit": "iter/sec",
            "range": "stddev: 3.479660654002671e-7",
            "extra": "mean: 2.05100137624914 usec\nrounds: 157130"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 485544.5439985956,
            "unit": "iter/sec",
            "range": "stddev: 2.7625217243660784e-7",
            "extra": "mean: 2.0595432743713262 usec\nrounds: 134210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 483747.2500638652,
            "unit": "iter/sec",
            "range": "stddev: 2.7770919966140104e-7",
            "extra": "mean: 2.0671952137567255 usec\nrounds: 146048"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 55928.187334975046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024911014066248477",
            "extra": "mean: 17.880071707145134 usec\nrounds: 99"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41696.091401640784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016386878022794488",
            "extra": "mean: 23.983063313235373 usec\nrounds: 14647"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696450952561,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 609507.1050172924,
            "unit": "iter/sec",
            "range": "stddev: 1.5430707179346664e-7",
            "extra": "mean: 1.6406699639237656 usec\nrounds: 32611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 559023.9045210619,
            "unit": "iter/sec",
            "range": "stddev: 3.1396012045031723e-7",
            "extra": "mean: 1.7888322698055996 usec\nrounds: 84424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 523964.3788157555,
            "unit": "iter/sec",
            "range": "stddev: 2.450350931352016e-7",
            "extra": "mean: 1.9085266869861692 usec\nrounds: 95521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 489385.2273132311,
            "unit": "iter/sec",
            "range": "stddev: 2.777227755398192e-7",
            "extra": "mean: 2.0433800290419266 usec\nrounds: 94841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 440297.0124343745,
            "unit": "iter/sec",
            "range": "stddev: 2.9324105843801574e-7",
            "extra": "mean: 2.2711941524905264 usec\nrounds: 91844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 603139.4379578241,
            "unit": "iter/sec",
            "range": "stddev: 1.82331209899855e-7",
            "extra": "mean: 1.6579913981183358 usec\nrounds: 57721"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 566730.8665223942,
            "unit": "iter/sec",
            "range": "stddev: 2.67863534619458e-7",
            "extra": "mean: 1.7645059746547 usec\nrounds: 94164"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 526257.559476523,
            "unit": "iter/sec",
            "range": "stddev: 3.1105106664705887e-7",
            "extra": "mean: 1.9002102335493603 usec\nrounds: 102471"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 489303.8281638983,
            "unit": "iter/sec",
            "range": "stddev: 3.240562418737462e-7",
            "extra": "mean: 2.0437199597486857 usec\nrounds: 101412"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 438403.4684161512,
            "unit": "iter/sec",
            "range": "stddev: 2.7811970174182053e-7",
            "extra": "mean: 2.281003851572537 usec\nrounds: 96274"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 595658.5698895868,
            "unit": "iter/sec",
            "range": "stddev: 1.656259447400606e-7",
            "extra": "mean: 1.6788140900673403 usec\nrounds: 279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 561243.8973093736,
            "unit": "iter/sec",
            "range": "stddev: 2.3718694025249042e-7",
            "extra": "mean: 1.7817565674995155 usec\nrounds: 87699"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 530382.2678188339,
            "unit": "iter/sec",
            "range": "stddev: 3.0329455561325965e-7",
            "extra": "mean: 1.8854325656708726 usec\nrounds: 94913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 482423.5236734648,
            "unit": "iter/sec",
            "range": "stddev: 3.15114169156474e-7",
            "extra": "mean: 2.0728674099169018 usec\nrounds: 100112"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 438969.1057158812,
            "unit": "iter/sec",
            "range": "stddev: 2.98649364500048e-7",
            "extra": "mean: 2.278064645048713 usec\nrounds: 84617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 489057.14797723107,
            "unit": "iter/sec",
            "range": "stddev: 1.270492480019835e-7",
            "extra": "mean: 2.0447508110985773 usec\nrounds: 3003"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 494150.87186408223,
            "unit": "iter/sec",
            "range": "stddev: 2.5950109139912526e-7",
            "extra": "mean: 2.0236734506360503 usec\nrounds: 163072"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 503702.8738119114,
            "unit": "iter/sec",
            "range": "stddev: 2.702766731904047e-7",
            "extra": "mean: 1.9852973885819278 usec\nrounds: 170558"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 504503.84182523616,
            "unit": "iter/sec",
            "range": "stddev: 2.571382989702027e-7",
            "extra": "mean: 1.9821454607404307 usec\nrounds: 163806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 495902.4208018373,
            "unit": "iter/sec",
            "range": "stddev: 2.7201205750784894e-7",
            "extra": "mean: 2.0165257479144274 usec\nrounds: 174366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 500622.66795477265,
            "unit": "iter/sec",
            "range": "stddev: 3.308913103212123e-7",
            "extra": "mean: 1.997512426046082 usec\nrounds: 21170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 500584.7068002697,
            "unit": "iter/sec",
            "range": "stddev: 3.277520805033342e-7",
            "extra": "mean: 1.997663904660583 usec\nrounds: 51628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 497825.3281360201,
            "unit": "iter/sec",
            "range": "stddev: 3.5188983054181985e-7",
            "extra": "mean: 2.0087366863077154 usec\nrounds: 155864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 503590.7321689906,
            "unit": "iter/sec",
            "range": "stddev: 2.958737134418261e-7",
            "extra": "mean: 1.985739482720323 usec\nrounds: 155042"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 498810.1715833285,
            "unit": "iter/sec",
            "range": "stddev: 2.67642157599266e-7",
            "extra": "mean: 2.0047706662151445 usec\nrounds: 169147"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 498067.9085890318,
            "unit": "iter/sec",
            "range": "stddev: 2.762612607206519e-7",
            "extra": "mean: 2.007758345308541 usec\nrounds: 30359"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 494398.7569351597,
            "unit": "iter/sec",
            "range": "stddev: 2.522928744105512e-7",
            "extra": "mean: 2.0226588072331055 usec\nrounds: 176559"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 495318.45262603473,
            "unit": "iter/sec",
            "range": "stddev: 2.815467464564483e-7",
            "extra": "mean: 2.0189031817778846 usec\nrounds: 163668"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 494964.0940070873,
            "unit": "iter/sec",
            "range": "stddev: 2.685578835394523e-7",
            "extra": "mean: 2.0203485709524642 usec\nrounds: 167642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 451935.6191247456,
            "unit": "iter/sec",
            "range": "stddev: 3.365799347593192e-7",
            "extra": "mean: 2.2127045483528813 usec\nrounds: 79"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 497765.79704300413,
            "unit": "iter/sec",
            "range": "stddev: 2.4063795378382666e-7",
            "extra": "mean: 2.0089769243699274 usec\nrounds: 28793"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 494545.74187354586,
            "unit": "iter/sec",
            "range": "stddev: 2.7994863450209777e-7",
            "extra": "mean: 2.022057648725439 usec\nrounds: 153305"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 496151.627087323,
            "unit": "iter/sec",
            "range": "stddev: 2.832131665472522e-7",
            "extra": "mean: 2.0155128904253283 usec\nrounds: 148832"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 493027.87414707715,
            "unit": "iter/sec",
            "range": "stddev: 2.6967031683840294e-7",
            "extra": "mean: 2.0282828871085004 usec\nrounds: 162406"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 493712.0174223456,
            "unit": "iter/sec",
            "range": "stddev: 2.8208996220496644e-7",
            "extra": "mean: 2.0254722686738873 usec\nrounds: 163718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 486529.08965109254,
            "unit": "iter/sec",
            "range": "stddev: 3.6472301865345377e-7",
            "extra": "mean: 2.0553755597987693 usec\nrounds: 27174"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 483479.006001642,
            "unit": "iter/sec",
            "range": "stddev: 2.99822857246901e-7",
            "extra": "mean: 2.0683421360318666 usec\nrounds: 163183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 483745.79312062537,
            "unit": "iter/sec",
            "range": "stddev: 2.9715144357707156e-7",
            "extra": "mean: 2.067201439725271 usec\nrounds: 160536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 477186.56863436085,
            "unit": "iter/sec",
            "range": "stddev: 2.9270202442332235e-7",
            "extra": "mean: 2.095616401907237 usec\nrounds: 153612"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 483624.39345357247,
            "unit": "iter/sec",
            "range": "stddev: 2.7547799197556373e-7",
            "extra": "mean: 2.067720349792486 usec\nrounds: 131233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 56602.666885167935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014867055519700374",
            "extra": "mean: 17.66701208670502 usec\nrounds: 92"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40808.90161227833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010320082157714218",
            "extra": "mean: 24.50445761811747 usec\nrounds: 13994"
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
          "id": "7d9839eef8b877fbb11b581f1382abf293c593e2",
          "message": "Disable pypy from benchmark workflow",
          "timestamp": "2023-10-04T19:54:37Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/7d9839eef8b877fbb11b581f1382abf293c593e2"
        },
        "date": 1696451000788,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 611289.2142097397,
            "unit": "iter/sec",
            "range": "stddev: 2.5098862963794594e-7",
            "extra": "mean: 1.6358868711478518 usec\nrounds: 23024"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 569559.5253189465,
            "unit": "iter/sec",
            "range": "stddev: 2.96562034651199e-7",
            "extra": "mean: 1.75574273723192 usec\nrounds: 68283"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 531973.8752142227,
            "unit": "iter/sec",
            "range": "stddev: 2.646918936065805e-7",
            "extra": "mean: 1.8797915585559648 usec\nrounds: 80458"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 487537.5391180821,
            "unit": "iter/sec",
            "range": "stddev: 3.041719912575212e-7",
            "extra": "mean: 2.051124107917768 usec\nrounds: 89752"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 438333.4173017813,
            "unit": "iter/sec",
            "range": "stddev: 3.2639085592804384e-7",
            "extra": "mean: 2.281368384267006 usec\nrounds: 94749"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 603569.0161857795,
            "unit": "iter/sec",
            "range": "stddev: 4.016254341432988e-7",
            "extra": "mean: 1.6568113557575301 usec\nrounds: 61160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 565479.3687869697,
            "unit": "iter/sec",
            "range": "stddev: 4.6184211808702964e-7",
            "extra": "mean: 1.7684111131147655 usec\nrounds: 92517"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 533272.9191006465,
            "unit": "iter/sec",
            "range": "stddev: 2.768549075961683e-7",
            "extra": "mean: 1.8752124178487797 usec\nrounds: 79859"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 487167.31744578143,
            "unit": "iter/sec",
            "range": "stddev: 2.729528084008616e-7",
            "extra": "mean: 2.052682854923439 usec\nrounds: 82953"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 439713.25465486123,
            "unit": "iter/sec",
            "range": "stddev: 3.025425768379707e-7",
            "extra": "mean: 2.2742093612459278 usec\nrounds: 55115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 563354.5699199607,
            "unit": "iter/sec",
            "range": "stddev: 9.907202764473486e-7",
            "extra": "mean: 1.7750810118431741 usec\nrounds: 329"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 570170.2528537196,
            "unit": "iter/sec",
            "range": "stddev: 2.879186436092195e-7",
            "extra": "mean: 1.7538621052132575 usec\nrounds: 80973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 537791.1683746221,
            "unit": "iter/sec",
            "range": "stddev: 2.341932962201054e-7",
            "extra": "mean: 1.8594578319728112 usec\nrounds: 90303"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 489114.65799674526,
            "unit": "iter/sec",
            "range": "stddev: 3.0790145724439006e-7",
            "extra": "mean: 2.0445103896408976 usec\nrounds: 95174"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 445925.51978743006,
            "unit": "iter/sec",
            "range": "stddev: 2.727022824264245e-7",
            "extra": "mean: 2.2425269593825754 usec\nrounds: 79505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 502909.107765967,
            "unit": "iter/sec",
            "range": "stddev: 2.5987411617136923e-7",
            "extra": "mean: 1.9884308805665105 usec\nrounds: 3013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 505067.87444592174,
            "unit": "iter/sec",
            "range": "stddev: 2.8535204235689145e-7",
            "extra": "mean: 1.9799319073640096 usec\nrounds: 140057"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 499604.15719961294,
            "unit": "iter/sec",
            "range": "stddev: 2.737157678064779e-7",
            "extra": "mean: 2.001584625726919 usec\nrounds: 150648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 492454.48067705374,
            "unit": "iter/sec",
            "range": "stddev: 3.507119350742594e-7",
            "extra": "mean: 2.0306445351561115 usec\nrounds: 138736"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 504126.23551735166,
            "unit": "iter/sec",
            "range": "stddev: 3.420572593621085e-7",
            "extra": "mean: 1.9836301496464783 usec\nrounds: 144282"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 508853.773634122,
            "unit": "iter/sec",
            "range": "stddev: 2.0159842430688727e-7",
            "extra": "mean: 1.9652011084799852 usec\nrounds: 21463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 505696.1184222694,
            "unit": "iter/sec",
            "range": "stddev: 2.641293318839928e-7",
            "extra": "mean: 1.9774721687006782 usec\nrounds: 135995"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 505897.7308935171,
            "unit": "iter/sec",
            "range": "stddev: 2.6232669408783564e-7",
            "extra": "mean: 1.9766840982540068 usec\nrounds: 144301"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 503452.4184943524,
            "unit": "iter/sec",
            "range": "stddev: 3.024842203442355e-7",
            "extra": "mean: 1.986285025684543 usec\nrounds: 134470"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 505000.3637698702,
            "unit": "iter/sec",
            "range": "stddev: 3.283876611622383e-7",
            "extra": "mean: 1.9801965933943413 usec\nrounds: 147452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 493703.711534065,
            "unit": "iter/sec",
            "range": "stddev: 2.621684300744234e-7",
            "extra": "mean: 2.025506344468713 usec\nrounds: 31226"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 495859.6444627981,
            "unit": "iter/sec",
            "range": "stddev: 2.898831218804672e-7",
            "extra": "mean: 2.0166997076024913 usec\nrounds: 137325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 494990.2126770313,
            "unit": "iter/sec",
            "range": "stddev: 2.825683485447464e-7",
            "extra": "mean: 2.020241965172905 usec\nrounds: 142861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 493454.2238553568,
            "unit": "iter/sec",
            "range": "stddev: 3.0790336893328873e-7",
            "extra": "mean: 2.026530429078106 usec\nrounds: 140139"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 450230.8851113912,
            "unit": "iter/sec",
            "range": "stddev: 4.760303784858731e-7",
            "extra": "mean: 2.2210826335305516 usec\nrounds: 88"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 494006.9377882559,
            "unit": "iter/sec",
            "range": "stddev: 2.5186530526772944e-7",
            "extra": "mean: 2.0242630690110386 usec\nrounds: 29691"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 491141.8563971867,
            "unit": "iter/sec",
            "range": "stddev: 3.0620150391905073e-7",
            "extra": "mean: 2.0360716297641295 usec\nrounds: 143539"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 493386.7838100809,
            "unit": "iter/sec",
            "range": "stddev: 3.6719279001707963e-7",
            "extra": "mean: 2.0268074314388795 usec\nrounds: 139893"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 489957.11606304016,
            "unit": "iter/sec",
            "range": "stddev: 3.601717518717314e-7",
            "extra": "mean: 2.04099495081389 usec\nrounds: 132520"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 488111.60591596685,
            "unit": "iter/sec",
            "range": "stddev: 3.181884870432465e-7",
            "extra": "mean: 2.048711786156873 usec\nrounds: 143185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 469695.13422752277,
            "unit": "iter/sec",
            "range": "stddev: 4.049095516897205e-7",
            "extra": "mean: 2.12904057787321 usec\nrounds: 24265"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 481263.6123110694,
            "unit": "iter/sec",
            "range": "stddev: 4.394994616593807e-7",
            "extra": "mean: 2.0778633048900446 usec\nrounds: 148318"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 483232.1644940201,
            "unit": "iter/sec",
            "range": "stddev: 2.9876434773819864e-7",
            "extra": "mean: 2.0693986730934477 usec\nrounds: 138049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 478792.64938589826,
            "unit": "iter/sec",
            "range": "stddev: 2.966022835702714e-7",
            "extra": "mean: 2.0885867844516928 usec\nrounds: 125724"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 479342.5847718139,
            "unit": "iter/sec",
            "range": "stddev: 3.3708477525299567e-7",
            "extra": "mean: 2.0861906114100828 usec\nrounds: 141487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 56240.64637498902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013866849758901414",
            "extra": "mean: 17.78073447684829 usec\nrounds: 104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41314.899844951295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011123523006952835",
            "extra": "mean: 24.2043428340103 usec\nrounds: 18360"
          }
        ]
      }
    ]
  }
}