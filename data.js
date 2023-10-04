window.BENCHMARK_DATA = {
  "lastUpdate": 1696433355946,
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
      }
    ]
  }
}